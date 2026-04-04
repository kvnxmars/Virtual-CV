# Neon CV - Frontend

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Now-00eaff?style=for-the-badge&logo=vercel)](https://virtual-cv-hxav.vercel.app/)

The frontend component of the Virtual CV & Portfolio project. A modern React application featuring neon-themed design, 3D animations, and interactive portfolio sections.

## ✨ What This Is

This React application serves as the visual interface for Unathi Kevin Mbolongwe's interactive portfolio, featuring:

- **Neon Cyberpunk Theme**: Glowing effects and futuristic design
- **3D Animations**: Interactive Three.js scenes with floating geometric shapes
- **Responsive Design**: Optimized for all devices and screen sizes
- **Smooth Interactions**: Framer Motion animations throughout
- **Contact Integration**: Form that connects to the backend API
- **Modern React**: Built with React 19 and Vite for optimal performance

## 🛠️ Tech Stack

- **React 19** with modern hooks and concurrent features
- **Vite** for fast development and optimized builds
- **Three.js + React Three Fiber** for 3D graphics
- **Framer Motion** for smooth animations
- **FontAwesome** for icons
- **CSS3** with custom neon effects

## 🚀 Live Version

**View the live portfolio:** [https://virtual-cv-hxav.vercel.app/](https://virtual-cv-hxav.vercel.app/)

## 📁 Key Components

- **Hero**: Landing section with profile and call-to-action
- **About**: Personal introduction and background
- **Education**: Academic background
- **Experience**: Professional work history
- **Skills**: Technical skills showcase
- **Projects**: Portfolio of development projects
- **Contact**: Interactive contact form
- **ThreeScene**: 3D animated background elements

## 🔧 For Developers

### Quick Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```


## 📝 Notes

- The backend API is located in the `message-backend/` directory
- 3D animations are performance-optimized
- Responsive design works across all devices
- Contact form integrates with the backend API

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
