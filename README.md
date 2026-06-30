# Aesha Dave — Portfolio Website

A responsive personal portfolio built with React, showcasing my projects, skills, education, and resume.

🔗 **Live Demo:** [https://tiny-macaron-cda701.netlify.app/](https://tiny-macaron-cda701.netlify.app/)
🔗 **GitHub Repo:** [https://github.com/AeshaDave/react-portfolio](https://github.com/AeshaDave/react-portfolio)

---

## Overview

This portfolio was built to showcase my frontend development skills and projects to potential employers and recruiters. It includes five main sections — About Me, Skills, Projects, Resume, and Contact — built as modular React components with a focus on performance and responsive design.

## Tech Stack

- **React** (built with Vite)
- **CSS Modules** for component-scoped styling (no CSS frameworks like Tailwind/Bootstrap used)
- **Native browser APIs** for lazy loading (`loading="lazy"` on images)
- **React.lazy + Suspense** for component-level code splitting
- Hand-written inline SVG icons (no icon library dependency)

## Sections

| Section | Description |
|---|---|
| Hero | Intro, availability badge, CTA buttons |
| About Me | Bio, location, email, phone |
| Skills | Technical and soft skills grouped by category |
| Projects | Project cards with descriptions, tech stack, and links |
| Resume | Downloadable resume + inline PDF preview |
| Contact | Contact form + direct contact details |

## Project Structure

```
my-portfolio/
├── public/
│   ├── resume.pdf
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── icons/Icons.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── AboutMe.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   └── Contact.jsx
│   ├── Styles/
│   │   └── *.module.css        # one CSS Module per component
│   ├── data.jsx                # all editable content (profile, skills, projects)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## Getting Started

```bash
git clone <https://github.com/AeshaDave/react-portfolio>
cd my-portfolio
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

This generates an optimized `dist/` folder — Vite automatically minifies JS/CSS and splits lazy-loaded components into separate chunks.

**Verify locally before deploying:**
```bash
npm install -g serve
serve -s dist
```

## Deployment

Deployed to **Netlify**.

```bash
npm install -g netlify-cli
netlify deploy --prod
```

Or simply by connecting the GitHub repo directly to Netlify (Netlify dashboard → "Add new site" → "Import an existing project" → select repo → it auto-detects the Vite build settings).

## Testing

- **Cross-browser:** Verified on Chrome, Firefox, Edge, and Safari
- **Responsive design:** Tested at mobile (375px), tablet (768px), and desktop (1024px+) breakpoints using browser DevTools and a physical device
- **Functionality:** Confirmed all nav links, the contact form, project links, and resume download/preview work correctly on the deployed (production) site, not just locally

## Challenges Faced & Solutions

**1. CSS Modules failing to resolve (`Failed to resolve import`)**
Vite couldn't find component stylesheets because the relative import paths didn't match the actual folder depth — components imported `./Styles/...` when the `Styles` folder was actually one level up at `src/Styles/`, not inside `src/components/`.
*Solution:* Corrected every import to `../Styles/ComponentName.module.css`, matching the real folder structure.

**2. Windows hidden file extensions causing double-extension files**
Renaming `navbar.css` to `navbar.module.css` through File Explorer silently produced `navbar.module.css.css`, since Windows hides known extensions by default and re-appended `.css` automatically.
*Solution:* Renamed files using the integrated terminal (`ren` command) instead of Explorer's GUI rename, which avoided the hidden-extension trap entirely.

**3. `Suspense` fallback throwing a React error**
`<Suspense fallback={SectionFallback}>` passed the function reference itself instead of a rendered element, triggering "Functions are not valid as a React child."
*Solution:* Changed to `<Suspense fallback={<SectionFallback />}>` so React receives an actual JSX element.

**4. Resume PDF iframe showing the whole site instead of the PDF**
The iframe's `src="/resume.pdf"` pointed to a file that didn't exist yet in `public/`. Since Vite's dev server falls back to serving `index.html` for any unmatched route (standard SPA behavior), the iframe ended up loading the homepage recursively inside itself.
*Solution:* Added the actual `resume.pdf` file to the `public/` folder, which resolved the route correctly.

## Screenshots

```markdown
![Homepage](./screenshots/home.png)
![About Section](./screenshots/about.png)
![Projects Section](./screenshots/projects.png)
![Mobile View](./screenshots/mobile.png)
```

## Author

**Aesha Dave**
📧 aeshadave2007@gmail.com
🔗 [github.com/AeshaDave](https://github.com/AeshaDave)
📍 Mumbai, Maharashtra
Replace default README with project documentation
