# Neon CV - Frontend

The frontend component of the Virtual CV & Portfolio project. A modern React application featuring neon-themed design, 3D animations, and interactive portfolio sections.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **React 19** with modern hooks and concurrent features
- **Vite** for fast development and optimized builds
- **Three.js** + **React Three Fiber** for 3D graphics
- **Framer Motion** for smooth animations
- **FontAwesome** for icons
- **CSS3** with custom neon effects

## 📁 Structure

```
neon-cv/
├── src/
│   ├── components/     # React components
│   ├── styles/         # CSS stylesheets
│   ├── App.jsx         # Main app component
│   └── main.jsx        # App entry point
├── public/             # Static assets
├── message-backend/    # Backend API (co-located)
├── package.json
├── vite.config.js
└── .env               # Environment variables
```

## 🔧 Environment Setup

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://your-backend-url.onrender.com
```

## 🚀 Deployment

This project is configured for Vercel deployment. Connect your GitHub repository to Vercel for automatic deployments.

## 📝 Notes

- The backend API is located in the `message-backend/` directory
- 3D animations are performance-optimized
- Responsive design works across all devices
- Contact form integrates with the backend API

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

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
