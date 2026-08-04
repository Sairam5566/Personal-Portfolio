# Sairam Lakshmanan — Personal Portfolio

> **Design Direction:** Kinetic / Motion-First  
> **Palette:** Dark & Cool-Neon (`#0D0F0F` · `#00E5CC` · `#A8FF78`)  
> **Fonts:** Space Grotesk (display) + DM Mono (mono/accent)

A fully responsive, animated personal portfolio built with Astro, Tailwind CSS, GSAP, and Lenis.

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (hot-reload)
npm run dev
# Open http://localhost:4321
```

---

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Hero.astro          ← Landing / signature animations
│   ├── About.astro         ← Bio, skills, achievements
│   ├── Projects.astro      ← Project cards (visual centerpiece)
│   ├── Experience.astro    ← Work experience + education timeline
│   ├── Contact.astro       ← Formspree form + social links
│   ├── Footer.astro        ← Minimal footer
│   ├── Navigation.astro    ← Fixed nav with monogram logo
│   └── CustomCursor.astro  ← Glowing custom cursor elements
├── data/
│   └── content.js          ← ⭐ ALL SITE CONTENT LIVES HERE
├── layouts/
│   └── Layout.astro        ← Root HTML shell (Lenis + GSAP init)
├── pages/
│   └── index.astro         ← Main page — assembles all sections
└── styles/
    └── global.css          ← Base CSS, cursor, glitch, animations
```

---

## ✏️ How to Add a New Project

1. Open **`src/data/content.js`**
2. Add a new object to the `projects` array:

```js
{
  id: 4,                              // unique number
  title: "My New Project",
  shortTitle: "ShortName",           // used in compact card
  period: "Jan 2027 – Mar 2027",
  description: "What it does...",
  tags: ["Python", "React"],
  github: "https://github.com/...",  // or "#" if private
  live: "https://...",               // or "" if not deployed
  featured: true,                    // true = large card, false = compact grid
  accentColor: "#C084FC",            // hex color for this project
}
```

3. Save — the page updates automatically (dev) or rebuilds (prod).

---

## 🎨 How to Change Colors / Fonts

### Colors
Edit **`tailwind.config.mjs`** → `theme.extend.colors.brand`:

```js
brand: {
  bg:      "#0D0F0F",   // page background
  surface: "#111414",   // cards/panels
  cyan:    "#00E5CC",   // primary accent
  lime:    "#A8FF78",   // secondary accent
  text:    "#E8F5F4",   // body text
  muted:   "#5A7070",   // subdued text
}
```

Also update the matching hex values in `src/styles/global.css` (cursor, scrollbar, etc.).

### Fonts
1. Change the Google Fonts URL in **`src/styles/global.css`** (line 1)
2. Update `fontFamily` in **`tailwind.config.mjs`**
3. Done — Tailwind utility classes `font-display` and `font-mono-accent` will pick up the new fonts.

---

## 🖼️ How to Add Your Photo

1. Copy your photo file to `public/photo.jpg` (or `.webp`, `.png`)
2. Open `src/components/Hero.astro`
3. Find the comment `<!-- Replace the div below with an <img> tag... -->`
4. Replace the placeholder `<div>` with:
   ```html
   <img src="/photo.jpg" alt="Sairam Lakshmanan" class="w-full h-full object-cover object-top" />
   ```

---

## 🌐 How to Set Up the Contact Form (Formspree)

1. Sign up free at [formspree.io](https://formspree.io)
2. Create a new form → copy the endpoint URL (`https://formspree.io/f/XXXXXXXX`)
3. Open **`src/components/Contact.astro`**
4. Replace `action="https://formspree.io/f/YOUR_FORM_ID"` with your endpoint

---

## 🚢 Deployment

### Option 1 — Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect your GitHub repo at vercel.com/new
# Vercel auto-detects Astro — zero config needed.
```

Build command: `npm run build` · Output directory: `dist`

### Option 2 — Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build & deploy
npm run build
netlify deploy --prod --dir=dist
```

Or drag-and-drop the `dist/` folder at [netlify.com/drop](https://app.netlify.com/drop).

### Option 3 — GitHub Pages

1. Push your code to GitHub
2. Add this to `astro.config.mjs`:
   ```js
   base: '/your-repo-name',   // if deploying to username.github.io/repo
   ```
3. Add a GitHub Actions workflow (`.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with: { node-version: 20 }
         - run: npm ci && npm run build
         - uses: peaceiris/actions-gh-pages@v4
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

### Option 4 — Cloudflare Pages

1. Connect GitHub repo at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Build command: `npm run build` · Output directory: `dist`
3. Zero configuration needed for Astro static sites.

---

## 🏎️ Build for Production

```bash
npm run build
# Output in dist/ — ready to upload to any static host
```

---

## 📦 Tech Stack

| Tool | Purpose |
|---|---|
| [Astro](https://astro.build) | Static site framework |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling |
| [GSAP + ScrollTrigger](https://gsap.com) | Scroll-based animations |
| [Lenis](https://lenis.darkroom.engineering) | Smooth scroll |
| [Formspree](https://formspree.io) | Static contact form |
| [Google Fonts](https://fonts.google.com) | Space Grotesk + DM Mono |

---

## 🔗 Update Personal Links

All links are in **`src/data/content.js`** → `personal` object:

```js
export const personal = {
  linkedin: "https://www.linkedin.com/in/YOUR-SLUG",
  github:   "https://github.com/YOUR-USERNAME",
  leetcode: "https://leetcode.com/YOUR-USERNAME",
  resume:   "/resume.pdf",   // put resume in public/resume.pdf
};
```
