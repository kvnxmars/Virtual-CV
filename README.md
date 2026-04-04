# Virtual CV & Portfolio

🌟 **Unathi Kevin Mbolongwe's Interactive Portfolio**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Now-00eaff?style=for-the-badge&logo=vercel)](https://virtual-cv-hxav.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-View_Code-181717?style=for-the-badge&logo=github)](https://github.com/kvnxmars/Virtual-CV)

A modern, neon-themed personal portfolio website built with React, featuring 3D animations and a contact backend system. This project showcases full-stack development skills with a focus on interactive web experiences.

## 🚀 Live Demo

**Visit the live portfolio:** [neon-cv.vercel.app/](neon-cv.vercel.app/)

## ✨ What This Project Is

This repository contains a complete portfolio solution demonstrating modern web development practices:

- **Frontend**: React application with Vite, featuring neon aesthetics, 3D Three.js animations, and responsive design
- **Backend**: Node.js/Express API for handling contact form submissions with MongoDB storage
- **Deployment**: Frontend on Vercel, Backend on Render

### Key Features
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Neon Theme**: Cyberpunk-inspired design with glowing effects
- **3D Animations**: Interactive Three.js scenes with floating geometric shapes
- **Smooth Animations**: Framer Motion for page transitions and scroll effects
- **Interactive Sections**: Hero, About, Education, Experience, Skills, Projects, Contact
- **Contact System**: Full-stack contact form with database storage
- **Modern Tech Stack**: React 19, Vite, Three.js, Node.js, MongoDB

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

## 🔧 For Developers

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud instance like MongoDB Atlas)
- Git

### Quick Local Setup

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
   

4. **Start development**
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`

### Backend Setup (Optional)
For full local development, also set up the backend:
```bash
cd message-backend
npm install
npm run dev
```

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

- **Portfolio**: [neon-cv.vercel.app/](neon-cv.vercel.app/)
- **Email**: unathilubombzmbolongwe@gmail.com
- **LinkedIn**: [linkedin.com/in/unathi-mbolongwe](https://www.linkedin.com/in/unathi-mbolongwe/)
- **GitHub**: [github.com/kvnxmars](https://github.com/kvnxmars)

---

*Built with ❤️ using React, Three.js, and modern web technologies*
