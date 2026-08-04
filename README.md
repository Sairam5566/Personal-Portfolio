# Sairam Lakshmanan — Personal Portfolio

A modern, motion-driven personal portfolio website showcasing full-stack software applications, AI integrations, and cloud engineering projects. Built with **Astro**, **Tailwind CSS v4**, **GSAP**, and **Lenis Smooth Scroll**.

---

## ✨ Features & Highlights

- **Kinetic Motion & Interactive UI**: GSAP ScrollTrigger timeline reveals, smooth momentum scrolling powered by Lenis, custom magnetic cursor effects, and 3D interactive tilt photo framing.
- **Dynamic Projects Showcase**: Highlighting full-stack & AI projects (including security file-sharing platforms, crop recommendation systems, and real-time APIs) with interactive project cards and direct code links.
- **Inline Contact Form**: Asynchronous, in-page contact form with background API delivery powered by Web3Forms / Formspree.
- **High-Performance Architecture**: Zero client-side framework overhead built on Astro static site generation for instant page loads, top Lighthouse scores, and semantic SEO structure.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **[Astro](https://astro.build)** | High-performance static web framework |
| **[Tailwind CSS v4](https://tailwindcss.com)** | Utility-first styling engine |
| **[GSAP](https://gsap.com)** | Professional scroll & element animation library |
| **[Lenis](https://lenis.darkroom.engineering)** | Smooth momentum scrolling |
| **Google Fonts** | Space Grotesk (Display) & DM Mono (Code/Accent) |

---

## 📂 Project Structure

```text
├── public/                # Static assets (favicons, photos)
├── src/
│   ├── components/        # Modular components (Hero, About, Projects, Experience, Contact, Navigation)
│   ├── data/              # Centralized portfolio content & project definitions (content.js)
│   ├── layouts/           # Layout shell & global motion initializers (Layout.astro)
│   ├── pages/             # Page entry points (index.astro)
│   └── styles/            # Global styles, design tokens, and utility animations
├── .env.example           # Environment variable template
└── package.json           # Project dependencies & build scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v22.12.0` or higher
- **Package Manager**: `npm`

### Installation & Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sairam5566/Personal-Portfolio.git
   cd Personal-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:4321` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready output files will be generated in the `dist/` directory.

---

## 👤 Author

**Sairam Lakshmanan**
- **GitHub**: [@sairam5566](https://github.com/sairam5566)
- **LinkedIn**: [Sairam Lakshmanan](https://www.linkedin.com/in/sairam-lakshmanan-29b883285)
- **LeetCode**: [@sm_sairam](https://leetcode.com/u/sm_sairam)
- **Email**: `sairamlakshmanan2005@gmail.com`
