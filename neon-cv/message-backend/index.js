require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const Joi = require('joi');

const { sendEmail } = require('./mailer');
//const { connectDb, Message } = require('./storage'); // optional

const app = express();
const PORT = process.env.PORT || 4000;

// Security middlewares
app.use(helmet());
app.use(express.json({ limit: '10kb' }));
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*' // tighten in production
}));

// Rate limiting (basic anti-abuse)
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // change as needed
  standardHeaders: true,
  legacyHeaders: false
});
app.use(limiter);

/*
// Connect to DB optionally
if (process.env.MONGO_URI) {
  connectDb(process.env.MONGO_URI).catch(err => {
    console.error('Mongo connection error:', err.message);
  });
}
*/

// Validation schema
const messageSchema = Joi.object({
  name: Joi.string().min(1).max(100).required(),
  email: Joi.string().email().required(),
  subject: Joi.string().max(150).allow('').optional(),
  message: Joi.string().min(1).max(5000).required()
});

// Health
app.get('/health', (req, res) => res.json({ ok: true }));

// POST /api/messages - receive a message
app.post('/api/messages', async (req, res) => {
  const { error, value } = messageSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const { name, email, subject = 'Website Message', message } = value;

  /*
  // Persist (optional)
  let saved = null;
  if (process.env.MONGO_URI) {
    try {
      saved = await Message.create({ name, email, subject, message, createdAt: new Date() });
    } catch (err) {
      console.warn('DB save failed:', err.message);
      // don't fail the request because DB failed — proceed with email
    }
  }
    */

  // Send email notification
  try {
    await sendEmail({
      to: process.env.NOTIFY_TO,
      from: process.env.NOTIFY_FROM || process.env.SMTP_USER || 'no-reply@example.com',
      subject: `[Website] ${subject} — ${name}`,
      text: `New message from ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <pre style="white-space:pre-wrap">${message}</pre>`
    });
  } catch (err) {
    console.error('Email send failed:', err);
    return res.status(500).json({ error: 'Failed to send notification email' });
  }

  res.json({ ok: true });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
