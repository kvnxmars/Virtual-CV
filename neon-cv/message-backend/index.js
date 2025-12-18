require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const Joi = require('joi');

const connectDb = require('./db');
const Message = require('./model/Message');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(helmet());
app.use(express.json({ limit: '10kb' }));
app.use(cors({ origin: '*' }));

app.use(rateLimit({
  windowMs: 60 * 1000,
  max: 100
}));

// 🔥 CONNECT TO MONGO
connectDb(process.env.MONGO_URI).catch(err => {
  console.error('MongoDB connection failed:', err.message);
});

// Validation
const messageSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  message: Joi.string().required()
});

// Health check
app.get('/health', (req, res) => res.json({ ok: true }));

// Save message
app.post('/api/messages', async (req, res) => {
  try {
    const { error, value } = messageSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    await Message.create(value);
    res.json({ ok: true });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
