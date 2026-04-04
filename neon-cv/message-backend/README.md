# Message Backend API

[![API Status](https://img.shields.io/badge/API-Live-00eaff?style=for-the-badge)](https://virtual-cv-hxav.onrender.com/health)

The backend API for the Virtual CV & Portfolio project. A Node.js/Express server that handles contact form submissions with MongoDB storage.

## ✨ What This API Does

This backend service provides the data layer for the portfolio's contact system:

- **Contact Form Processing**: Receives and validates contact form submissions
- **Data Storage**: Saves messages to MongoDB database
- **Security Features**: Rate limiting, input validation, CORS protection
- **Email Ready**: Configured for SMTP/SendGrid email notifications
- **RESTful API**: Clean endpoints for frontend integration

## 🛠️ Tech Stack

- **Node.js** + **Express** - REST API server
- **MongoDB** + **Mongoose** - NoSQL database and ODM
- **Joi** - Input validation
- **Nodemailer** - Email service (SMTP/SendGrid ready)
- **Helmet** - Security middleware
- **Express Rate Limit** - API rate limiting
- **CORS** - Cross-origin resource sharing

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

## 🚀 Live API

**API Base URL:** `https://virtual-cv-hxav.onrender.com`

**Health Check:** [https://virtual-cv-hxav.onrender.com/health](https://virtual-cv-hxav.onrender.com/health)

## 📁 Key Files

- **db.js**: MongoDB connection setup
- **index.js**: Express server configuration and routes
- **mailer.js**: Email service configuration
- **model/Message.js**: MongoDB schema for contact messages

## 🔒 Security Features

- Rate limiting (100 requests/minute per IP)
- Input validation with Joi schemas
- Helmet security headers
- CORS configuration
- Environment variable protection

## 🔧 For Developers

### Local Development Setup

```bash
# Install dependencies
npm install

# Start development server with auto-reload
npm run dev

# Start production server
npm start
```

### Environment Configuration

Create a `.env` file:
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

## 📝 Notes

- Deployed on Render with automatic scaling
- MongoDB database for persistent message storage
- Email notifications can be enabled with SMTP/SendGrid
- Rate limiting prevents spam submissions
- CORS configured for frontend domain