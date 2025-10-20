// netlify/functions/send-email.js
const sgMail = require('@sendgrid/mail');

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  const FROM_EMAIL = process.env.FROM_EMAIL;
  const REPLY_TO = process.env.REPLY_TO;

  if (!apiKey || !FROM_EMAIL || !REPLY_TO) {
    return {
      statusCode: 500,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        error:
          'Missing SENDGRID_API_KEY, FROM_EMAIL, or REPLY_TO environment variable',
      }),
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch {
    return {
      statusCode: 400,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ error: 'Invalid JSON' }),
    };
  }

  const { name, email, message } = payload;

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ error: 'Missing required fields' }),
    };
  }

  try {
    sgMail.setApiKey(apiKey);

    // We send the email TO your REPLY_TO inbox, FROM your authenticated domain address.
    // Replies will go to the user (their email) via replyTo.
    const msg = {
      to: REPLY_TO,
      from: FROM_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${String(message).replace(/\n/g, '<br/>')}</p>
      `,
      replyTo: { email, name },
      headers: { 'X-Parkhub-Form': 'contact' },
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error('SendGrid error:', err?.response?.body || err);
    return {
      statusCode: 500,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
