<div align="center">
  <h1>🎨 Modern Portfolio Website</h1>
  <p><strong>Nimasha Gamage</strong></p>
  
  <p>A cutting-edge portfolio website showcasing modern web development practices with immersive 3D animations and seamless user experience.</p>

[![Next.js](https://img.shields.io/badge/Next.js-14.1.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.160.0-black?style=flat-square&logo=three.js)](https://threejs.org/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

[View Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
- [Build & Deployment](#-build--deployment)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Overview

This portfolio website demonstrates advanced front-end development capabilities, combining modern frameworks and libraries to deliver a visually stunning and performant web application. Built with Next.js 14 and TypeScript, it features interactive 3D graphics, smooth animations, and a responsive design that adapts seamlessly across all devices.

### Key Highlights

- 🎨 **Modern UI/UX Design** - Clean, professional interface with glassmorphism effects
- 🚀 **3D Interactive Elements** - Powered by Three.js and React Three Fiber
- 💫 **Fluid Animations** - Smooth transitions using Framer Motion
- 📱 **Responsive Architecture** - Mobile-first design approach
- ⚡ **Optimized Performance** - Server-side rendering and static generation
- 📝 **Type-Safe Codebase** - Full TypeScript implementation
- ♿ **Accessibility Focused** - WCAG compliant components

---

## ✨ Features

### Core Functionality

- **Interactive Hero Section** with animated 3D background elements
- **Dynamic Skill Showcase** with categorized filtering and animations
- **Project Portfolio** with detailed case studies and live demos
- **Blog Integration** for technical articles and insights
- **Contact Form** with form validation and email integration
- **Dark Mode Support** with smooth theme transitions
- **SEO Optimized** with meta tags and Open Graph support

### Technical Features

- Static Site Generation (SSG) for optimal performance
- Component-based architecture for maintainability
- Intersection Observer for scroll-triggered animations
- Lazy loading for improved initial load times
- Custom hooks for reusable logic
- Responsive images with Next.js Image optimization

---

## 🛠️ Tech Stack

### Frontend Framework & Language

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript 5.3](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI

- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### 3D Graphics

- **[Three.js](https://threejs.org/)** - JavaScript 3D library
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)** - React renderer for Three.js
- **[React Three Drei](https://github.com/pmndrs/drei)** - Useful helpers for R3F

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS transformations
- **Autoprefixer** - CSS vendor prefixing

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/nimashag/nimashag-portfolio.git
cd nimashag-portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Configure environment variables** (if applicable)

```bash
# Create a .env.local file in the root directory
# Add your environment variables here
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

To clean up any running instances on port 3000:

```bash
npm run dev:clean
```

---

## 📦 Build & Deployment

### Production Build

Generate an optimized production build:

```bash
npm run build
npm start
# or
yarn build
yarn start
```

### Static Export

For static hosting platforms:

```bash
npm run build
```

---

## 📁 Project Structure

```
nimashag-portfolio/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page component
├── components/              # React components
│   ├── 3D/                  # Three.js 3D components
│   │   └── FloatingCube.tsx # Animated 3D cube component
│   ├── Navbar.tsx           # Navigation bar
│   ├── Hero.tsx             # Hero section with 3D background
│   ├── About.tsx            # About section
│   ├── Education.tsx        # Education timeline
│   ├── Skills.tsx           # Skills showcase with filtering
│   ├── Experience.tsx       # Work experience section
│   ├── Projects.tsx         # Project portfolio
│   ├── Articles.tsx         # Blog articles section
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer component
├── public/                  # Static assets
│   └── assets/
│       ├── img/            # Images and graphics
│       └── cv/             # Resume/CV files
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Three.js Journey](https://threejs-journey.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)

---

<div align="center">
  <p>⭐ If you find this project useful, please consider giving it a star!</p>
  <p>Made with ❤️ by <a href="https://github.com/nimashag">Nimasha Gamage</a></p>
  <p>© 2026 All rights reserved.</p>
</div>

## 📝 License

© 2025 Nimasha Gamage. All rights reserved.

## 🤝 Connect

- GitHub: [@nimashag](https://github.com/nimashag)
- LinkedIn: [Nimasha Gamage](https://www.linkedin.com/in/nimashagamage)
- Medium: [@NimashaGamage](https://medium.com/@NimashaGamage)
- Email: nimasha.piyumini@gmail.com

---

Made with ❤️ by Nimasha Gamage
