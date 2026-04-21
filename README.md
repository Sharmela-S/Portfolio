# Sharmela S — Portfolio (React)

## Setup

```bash
npm install
npm start
```

## Build for production
```bash
npm run build
```

## File Structure
```
src/
├── App.jsx                  # Root component, theme toggle
├── index.js                 # Entry point
├── index.css                # Global styles + CSS variables
├── data/
│   └── projects.js          # All project data + skills data
└── components/
    ├── Navbar.jsx / .css
    ├── Hero.jsx / .css
    ├── Projects.jsx / .css  # Filter tabs + project cards
    ├── ProjectThumbs.jsx    # SVG illustrations per project
    ├── Skills.jsx / .css
    ├── Resume.jsx / .css
    ├── Contact.jsx / .css   # Hire Me form → mailto
    └── Footer.jsx / .css
```

## Add GitHub repo links
In `src/data/projects.js`, update each project's `github` field and set `githubPlaceholder: false`:
```js
github: 'https://github.com/sharmela-s/your-repo-name',
githubPlaceholder: false,
```

## Resume PDF
Place `Sharmela_Backend_Resume__1_.pdf` in the `public/` folder.
The download button links to `/Sharmela_Backend_Resume__1_.pdf`.

## Deploy
- **Netlify / Vercel**: `npm run build` → upload `build/` folder
- **GitHub Pages**: use `gh-pages` package

## Theme
Dark mode by default. Toggle button in navbar switches light ↔ dark.
