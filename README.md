# Sravani Devaguptapu — Portfolio

Personal portfolio site. React 19 + Vite + Tailwind CSS v4, with Framer Motion for
scroll animation and AOS for reveal-on-scroll.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build
npm run lint      # eslint
```

## Where the content lives

**All text is in one file: [`src/data/content.js`](src/data/content.js).** Edit that
and the whole site updates — name, tagline, stats, skills, projects, certifications,
education, contact links. You should not need to touch the components to change wording.

## Sections

| Component | What it is |
| --- | --- |
| `Preloader.jsx` | Red shutter with a water-fill wordmark, lifts after ~2.2s |
| `Navbar.jsx` | Fixed nav, goes translucent-dark on scroll, slide-down mobile menu |
| `Hero.jsx` | Full-screen intro with animated background and a tech ticker |
| `About.jsx` | Red section — lanyard ID badge, stats, skills grid |
| `Projects.jsx` | Three project cards that light up as a dashed line draws on scroll |
| `Resume.jsx` | Education timeline, certifications, résumé download |
| `Contact.jsx` | Parallax "CONTACT" wordmark with a form |
| `Footer.jsx` | Links plus oversized wordmark |

## Images

**Profile photo** — lives at `src/assets/about/profile.jpg` (900×1200, a 3:4 crop) and
fills the lanyard ID badge in the About section. To change it, replace that file with
another 3:4 portrait. Setting `PROFILE_PHOTO = null` in
[`src/components/About.jsx`](src/components/About.jsx) falls back to an "SD" monogram.

**Hero background video** (optional) — the reference design uses a full-screen video.
Drop yours at `src/assets/hero/your-video.mp4`, then in
[`src/components/Hero.jsx`](src/components/Hero.jsx) uncomment the import and set
`HERO_VIDEO` to it. A "Play Reel" button appears automatically. Until then the hero
uses an animated grid with a red bloom.

## Contact form

There is no backend. Submitting opens the visitor's own mail client with the message
pre-filled to the address in `content.js`. The Send button stays disabled until the
consent checkbox is ticked.

To get messages into an inbox instead, sign up for [Formspree](https://formspree.io) or
[EmailJS](https://emailjs.com) and replace the `handleSubmit` body in
[`src/components/Contact.jsx`](src/components/Contact.jsx) with a `fetch` to their endpoint.

## Résumé download

Served from `public/sravani_resume.pdf`. Replace that file to update it; the path is
set as `profile.resume` in `content.js`.

## Deploying

The build output is a static `dist/` folder, so anything that serves static files works.
Easiest options:

- **Vercel** — import the repo, it detects Vite automatically.
- **Netlify** — build command `npm run build`, publish directory `dist`.
- **GitHub Pages** — add `base: '/<repo-name>/'` to `vite.config.js` first, then deploy `dist/`.
