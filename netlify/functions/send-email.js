// netlify/functions/send-email.js
const sgMail = require('@sendgrid/mail');

exports.handler = async (event) => {
  // CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ ok: false, error: 'Method not allowed' }),
    };
  }

  try {
    const { name = '', email = '', message = '' } = JSON.parse(event.body || '{}');

    // --- ENV ---
    const API_KEY = process.env.SENDGRID_API_KEY;
    const FROM_EMAIL = process.env.FROM_EMAIL; // e.g. no-reply@parkhub.az (recommended)
    const REPLY_TO = process.env.REPLY_TO || email || FROM_EMAIL;
    const TO_EMAILS = process.env.TO_EMAILS || ''; // comma-separated list

    // Minimal validation
    if (!API_KEY) throw new Error('Missing SENDGRID_API_KEY');
    if (!FROM_EMAIL) throw new Error('Missing FROM_EMAIL');
    if (!TO_EMAILS) throw new Error('Missing TO_EMAILS');

    // Build recipients strictly from TO_EMAILS (no hidden fallbacks)
    const recipients = TO_EMAILS.split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    if (!recipients.length) throw new Error('No valid recipients in TO_EMAILS');

    sgMail.setApiKey(API_KEY);

    const msg = {
      to: recipients,                 // <- controlled by TO_EMAILS only
      from: FROM_EMAIL,               // <- should be your authenticated domain (parkhub.az)
      replyTo: REPLY_TO,              // user email or your default
      subject: `New Contact Form Submission from ${name || 'Website Visitor'}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${String(message).replace(/\n/g, '<br/>')}</p>
      `,
      mailSettings: {
        sandboxMode: { enable: false },
      },
    };

    const [resp] = await sgMail.send(msg);

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        ok: true,
        status: resp?.statusCode || 202,
        messageId: resp?.headers?.['x-message-id'] || null,
        recipients, // echo back exactly who we tried to send to
      }),
    };
  } catch (err) {
    console.error('send-email error:', err);
    return {
      statusCode: 200, // keep 200 so the UI doesn’t break; include error in payload
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ ok: false, error: err.message }),
    };
  }
};
