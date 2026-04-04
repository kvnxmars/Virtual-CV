# Virtual CV & Portfolio

🌟 **Unathi Kevin Mbolongwe's Interactive Portfolio**

A modern, neon-themed personal portfolio website built with React, featuring 3D animations and a contact backend system. This project showcases full-stack development skills with a focus on interactive web experiences.

## 🚀 Project Overview

This repository contains a complete portfolio solution with:

- **Frontend**: React application with Vite, featuring neon aesthetics, 3D Three.js animations, and responsive design
- **Backend**: Node.js/Express API for handling contact form submissions with MongoDB storage
- **Deployment**: Frontend on Vercel, Backend on Render

## ✨ Features

### Frontend Features
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Neon Theme**: Cyberpunk-inspired design with glowing effects
- **3D Animations**: Interactive Three.js scenes with floating geometric shapes
- **Smooth Animations**: Framer Motion for page transitions and scroll effects
- **Interactive Sections**:
  - Hero with profile image and call-to-action buttons
  - About section with personal introduction
  - Education background
  - Professional experience
  - Technical skills showcase
  - Project portfolio with links
  - Contact form with real-time feedback

### Backend Features
- **Contact API**: RESTful endpoint for message submissions
- **Data Validation**: Joi schema validation for form inputs
- **Security**: Helmet for security headers, rate limiting, CORS
- **Database**: MongoDB with Mongoose ODM
- **Email Ready**: Nodemailer setup for future email notifications

## 🛠️ Technology Stack

### Frontend
- **React 19** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool and development server
- **Three.js + React Three Fiber** - 3D graphics and animations
- **Framer Motion** - Animation library for smooth transitions
- **FontAwesome** - Icon library for UI elements
- **CSS3** - Custom styling with neon effects and responsive design

### Backend
- **Node.js + Express** - REST API server
- **MongoDB + Mongoose** - NoSQL database and ODM
- **Joi** - Input validation
- **Nodemailer** - Email service (configured for SMTP/SendGrid)
- **Helmet** - Security middleware
- **Express Rate Limit** - API rate limiting
- **CORS** - Cross-origin resource sharing

### DevOps & Tools
- **Vercel** - Frontend deployment and hosting
- **Render** - Backend deployment and hosting
- **ESLint** - Code linting and formatting
- **Git** - Version control

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud instance like MongoDB Atlas)
- Git

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/kvnxmars/Virtual-CV.git
   cd Virtual-CV/neon-cv
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the `neon-cv` directory:
   ```env
   VITE_API_URL=https://virtual-cv-hxav.onrender.com
   ```

4. **Development Server**
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`

5. **Build for Production**
   ```bash
   npm run build
   npm run preview
   ```

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd message-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the `message-backend` directory:
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

4. **Development Server**
   ```bash
   npm run dev
   ```
   The backend will be available at `http://localhost:4000`

5. **Production Start**
   ```bash
   npm start
   ```

## 🚀 Deployment

### Frontend (Vercel)
The frontend is configured for Vercel deployment. Simply connect your GitHub repository to Vercel and it will automatically deploy on pushes to the main branch.

### Backend (Render)
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the build command: `npm install`
4. Set the start command: `npm start`
5. Add environment variables in Render dashboard
6. Deploy

## 📁 Project Structure

```
Virtual-CV/
├── README.md                    # Main project README
├── neon-cv/                     # Frontend React application
│   ├── public/                  # Static assets
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── Hero.jsx        # Landing section
│   │   │   ├── About.jsx       # About section
│   │   │   ├── Education.jsx   # Education background
│   │   │   ├── Experience.jsx  # Work experience
│   │   │   ├── Skills.jsx      # Technical skills
│   │   │   ├── Projects.jsx    # Project showcase
│   │   │   ├── Contact.jsx     # Contact form
│   │   │   ├── ThreeScene.jsx  # 3D background
│   │   │   └── Navbar.jsx      # Navigation component
│   │   ├── App.jsx             # Main app component
│   │   └── styles/             # CSS stylesheets
│   ├── message-backend/         # Backend API
│   │   ├── db.js               # Database connection
│   │   ├── index.js            # Express server
│   │   ├── mailer.js           # Email service
│   │   ├── model/Message.js    # Message schema
│   │   └── package.json        # Backend dependencies
│   ├── package.json            # Frontend dependencies
│   ├── vite.config.js          # Vite configuration
│   └── .env                    # Environment variables
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

## 🤝 Usage

1. **Navigation**: Use the navbar or scroll to explore different sections
2. **Projects**: Click on project cards to view live demos or GitHub repositories
3. **Contact**: Fill out the contact form to send messages (stored in database)
4. **Responsive**: The site adapts to different screen sizes automatically

## 📝 Development Notes

- The frontend uses Vite for fast development and building
- 3D animations are optimized for performance
- Contact form includes client-side validation and server-side validation
- Rate limiting prevents spam submissions
- CORS is configured for cross-origin requests

## 🤝 Contributing

This is a personal portfolio project, but feedback and suggestions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📜 License

This project is open-sourced under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Unathi Kevin Mbolongwe**

- **Email**: unathilubombzmbolongwe@gmail.com
- **LinkedIn**: [linkedin.com/in/unathi-mbolongwe](https://www.linkedin.com/in/unathi-mbolongwe/)
- **GitHub**: [github.com/kvnxmars](https://github.com/kvnxmars)
- **Portfolio**: [Live Site](https://virtual-cv-hxav.vercel.app/)

---

*Built with ❤️ using React, Three.js, and modern web technologies*
