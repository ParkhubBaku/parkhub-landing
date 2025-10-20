// netlify/functions/send-email.js
const sgMail = require('@sendgrid/mail');

const { SENDGRID_API_KEY, FROM_EMAIL, REPLY_TO, TO_EMAIL } = process.env;
if (!SENDGRID_API_KEY || !FROM_EMAIL) {
  // Let the client know env is missing
  // (Netlify logs will also show this)
  exports.handler = async () => ({
    statusCode: 500,
    body: JSON.stringify({ ok: false, error: 'Missing SENDGRID_API_KEY or FROM_EMAIL env var' }),
  });
} else {
  sgMail.setApiKey(SENDGRID_API_KEY);

  exports.handler = async (event) => {
    try {
      if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
      }

      const { name, email, message } = JSON.parse(event.body || '{}');

      if (!name || !email || !message) {
        return {
          statusCode: 400,
          body: JSON.stringify({ ok: false, error: 'Missing required fields: name, email, message' }),
        };
      }

      // Where should we send the contact message?
      // Prefer NETLIFY env TO_EMAIL; fall back to FROM_EMAIL if unset.
      const toAddress = TO_EMAIL || FROM_EMAIL;

      const msg = {
        to: toAddress,                     // where you receive the lead
        from: FROM_EMAIL,                  // MUST be your authenticated domain (e.g. no-reply@parkhub.az)
        replyTo: REPLY_TO || email,        // so you can reply directly to the sender
        subject: `New contact form: ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
        html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message}</p>`,
        // Optional: be explicit that sandbox is off
        mailSettings: { sandboxMode: { enable: false } },
      };

      const [res] = await sgMail.send(msg);

      // If SendGrid accepted it, surface IDs for debugging
      return {
        statusCode: 200,
        body: JSON.stringify({
          ok: true,
          status: res.statusCode,
          messageId: res.headers['x-message-id'] || res.headers['x-message-id'.toLowerCase()],
        }),
      };
    } catch (err) {
      // Make the error visible to the client and Netlify logs
      const sgErr = err?.response?.body || err?.message || String(err);
      return {
        statusCode: 502,
        body: JSON.stringify({ ok: false, error: sgErr }),
      };
    }
  };
}
