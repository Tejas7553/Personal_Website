# Personal_Website

# Tejas Jadhav — Portfolio Website

A modern, SEO-optimised portfolio built with **React.js** and **Tailwind CSS**.
Design aesthetic: warm paper tones + editorial typography + performance-first.

## Quick Start

```bash
npm install
npm start       # dev server
npm run build   # production build
```

## Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── SkillMarquee.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Writing.jsx
│   └── Contact.jsx
├── data/
│   └── portfolioData.js   ← edit ALL content here
├── hooks/
│   └── useScrollAnimation.js
├── index.css
└── App.js
```

## Updating Content

All content lives in `src/data/portfolioData.js`. Edit only that file.

## Design Tokens

| Token    | Value      | Usage                  |
|----------|------------|------------------------|
| ink      | #0D0D0D    | Primary text           |
| paper    | #F5F0E8    | Page background        |
| cream    | #EDE8DC    | Card backgrounds       |
| accent   | #E8521A    | CTAs, metrics          |
| muted    | #8A8070    | Labels, secondary text |

Fonts: Syne (headings) · DM Sans (body) · JetBrains Mono (code/labels)

## What to Add Next

- Add your resume PDF to /public/resume.pdf
- Update canonical URL in public/index.html
- Replace Medium article URLs in Writing.jsx with real ones
- Deploy to Vercel (zero config, recommended)
>>>>>>> d8516f3 (Initial commit)
