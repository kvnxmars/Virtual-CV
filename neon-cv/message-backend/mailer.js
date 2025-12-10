const nodemailer = require('nodemailer');

const provider = process.env.EMAIL_PROVIDER || 'smtp';

async function sendEmail({ to, from, subject, text, html }) {
  if (provider === 'sendgrid') {
    // SendGrid via nodemailer transport (or use @sendgrid/mail)
    const transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY
      }
    });
    return transporter.sendMail({ to, from, subject, text, html });
  }

  // default: SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: String(process.env.SMTP_SECURE || 'true') === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  // Verify connection on startup (optional)
  // await transporter.verify();

  return transporter.sendMail({ to, from, subject, text, html });
}

module.exports = { sendEmail };
