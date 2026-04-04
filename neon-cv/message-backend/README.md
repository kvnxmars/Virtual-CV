# Message Backend API

The backend API for the Virtual CV & Portfolio project. A Node.js/Express server that handles contact form submissions with MongoDB storage.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server with auto-reload
npm run dev

# Start production server
npm start
```

## 🛠️ Tech Stack

- **Node.js** + **Express** - REST API server
- **MongoDB** + **Mongoose** - NoSQL database and ODM
- **Joi** - Input validation
- **Nodemailer** - Email service (SMTP/SendGrid ready)
- **Helmet** - Security middleware
- **Express Rate Limit** - API rate limiting
- **CORS** - Cross-origin resource sharing

## 📁 Structure

```
message-backend/
├── db.js              # MongoDB connection
├── index.js           # Express server setup
├── mailer.js          # Email service configuration
├── model/Message.js   # Message schema
├── package.json       # Dependencies
└── .env              # Environment variables
```

## 🔧 Environment Setup

Create a `.env` file in the root directory:

```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/virtual-cv
# Or for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/virtual-cv

# Email configuration (optional)
EMAIL_PROVIDER=smtp
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 🔧 API Endpoints

### POST /api/messages
Submit a contact message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to connect!"
}
```

**Response:**
```json
{
  "ok": true
}
```

### GET /health
Health check endpoint.

**Response:**
```json
{
  "ok": true
}
```

## 🚀 Deployment

This project is configured for Render deployment. Create a Web Service on Render and connect your GitHub repository.

## 📝 Features

- **Input Validation**: Joi schema validation for all inputs
- **Rate Limiting**: 100 requests per minute per IP
- **Security**: Helmet for security headers, CORS configured
- **Database**: MongoDB with Mongoose ODM
- **Email Ready**: Nodemailer configured for SMTP/SendGrid
- **Error Handling**: Comprehensive error handling and logging

## 🔒 Security

- Rate limiting prevents spam
- Input validation prevents malicious data
- CORS configured for frontend origin
- Helmet adds security headers
- Environment variables for sensitive data