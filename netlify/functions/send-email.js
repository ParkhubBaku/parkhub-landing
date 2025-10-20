// netlify/functions/send-email.js
const sgMail = require('@sendgrid/mail');

const { SENDGRID_API_KEY, FROM_EMAIL, REPLY_TO, TO_EMAIL, TO_EMAILS } = process.env;

if (!SENDGRID_API_KEY || !FROM_EMAIL) {
  exports.handler = async () => ({
    statusCode: 500,
    body: JSON.stringify({ ok: false, error: 'Missing SENDGRID_API_KEY or FROM_EMAIL env var' }),
  });
} else {
  sgMail.setApiKey(SENDGRID_API_KEY);

  // Helper: turn comma/space separated list into clean array
  const parseList = (val) =>
    (val || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

  // Prefer TO_EMAILS (comma-separated); fallback to single TO_EMAIL; fallback to FROM_EMAIL
  const defaultRecipients = (() => {
    const many = parseList(TO_EMAILS);
    if (many.length) return many;
    if (TO_EMAIL) return [TO_EMAIL.trim()];
    return [FROM_EMAIL.trim()];
  })();

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

      // Build a single message to multiple recipients
      const msg = {
        to: defaultRecipients,             // array of recipients
        from: FROM_EMAIL,                  // must be on your authenticated domain (e.g. no-reply@parkhub.az)
        replyTo: REPLY_TO || email,        // so you can reply to the sender
        subject: `New contact form: ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
        html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message}</p>`,
        mailSettings: { sandboxMode: { enable: false } },
      };

      const [res] = await sgMail.send(msg);

      return {
        statusCode: 200,
        body: JSON.stringify({
          ok: true,
          status: res.statusCode,
          messageId: res.headers['x-message-id'] || res.headers['x-message-id'.toLowerCase()],
          recipients: defaultRecipients,
        }),
      };
    } catch (err) {
      const sgErr = err?.response?.body || err?.message || String(err);
      return { statusCode: 502, body: JSON.stringify({ ok: false, error: sgErr }) };
    }
  };
}
