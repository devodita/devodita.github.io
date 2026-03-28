# Academic Portfolio - Animated Single-Page Template

A lightweight, animated academic portfolio built with pure HTML, CSS, and JavaScript. No frameworks, no build tools, no dependencies that break. Deploy on GitHub Pages in under 2 minutes.

Originally built for [Devodita Chakravarty](https://devodita.github.io) - feel free to fork it and make it yours.

## Features

- **Particle constellation background** that responds to mouse movement
- **Typing effect** cycling through your research areas
- **Scroll-triggered animations** on every section (IntersectionObserver-based)
- **Sticky navbar** with active section highlighting
- **Card hover effects** with gradient accents
- **Animated timeline** for research experience
- **Publication cards** with status badges (Accepted / Under Review / Tech Report)
- **Fully responsive** - works on mobile, tablet, and desktop
- **Zero build step** - edit a single JS file, push, done

## Quick Start

### 1. Fork this repo

Click the **Fork** button at the top right of this page.

### 2. Rename your fork

Go to Settings and rename the repo to `<your-github-username>.github.io`.

### 3. Enable GitHub Pages

Settings → Pages → Source: **Deploy from a branch** → Branch: `main` / `/ (root)` → Save.

### 4. Edit your content

Open `js/data.js` - this is the only file you need to touch. All your information lives here: name, bio, publications, research experience, education, skills, awards, and social links.

### 5. Replace the photo

Drop your headshot into `assets/profile.jpg` (square crop, ~400×400px works best).

### 6. Push and visit

Your site will be live at `https://<your-username>.github.io` within a minute or two.

## File Structure

```
index.html           ← Main page (rarely needs editing)
css/style.css        ← Styling and animations (edit :root variables for colors)
js/data.js           ← YOUR CONTENT - this is the file you edit
js/main.js           ← Rendering, scroll logic, typing effect
js/particles.js      ← Hero background particle animation
assets/profile.jpg   ← Your headshot
.nojekyll            ← Tells GitHub Pages to skip Jekyll processing
```

## How to Edit Content

Everything is in `js/data.js` inside the `SITE` object.

### Add a publication

Add an entry to the `publications` array:

```js
{
  title: "Your Paper Title",
  authors: "<u>Your Name</u>, Coauthor Name",
  venue: "Conference Name (CONF 2027)",
  year: 2027,
  status: "accepted",       // "accepted" | "review" | "report"
  note: "First Author",     // optional
  links: { paper: "https://arxiv.org/...", code: "https://github.com/..." },
}
```

### Add a research experience

Add an entry to the `research` array:

```js
{
  role: "Research Intern",
  org: "University Name",
  lab: "Lab Name - Prof. Advisor",
  location: "City, Country",
  dates: "May 2025 - Aug 2025",
  bullets: [
    "Built something impactful.",
    "Achieved measurable results.",
  ],
}
```

### Change colors

Edit the CSS variables at the top of `css/style.css`:

```css
--primary:       #5b3a9e;   /* Main violet */
--accent:        #c9477b;   /* Rose accent */
--blue:          #3a6fd8;   /* Blue accent */
--bg:            #faf7f2;   /* Page background */
```

### Update social links

Edit the `socials` array in `data.js`. Supported icons (Font Awesome 6): `github`, `linkedin`, `graduation-cap`, `envelope`, `phone`, `twitter`.

## Why Pure HTML/CSS/JS?

No React. No Next.js. No Jekyll. No npm install that breaks in 6 months.

This site is static files served as-is. It worked in 2010 and it will work in 2060. You can host it on GitHub Pages, Netlify, Vercel, a university server, an S3 bucket, or a Raspberry Pi in your closet. Nothing to compile, nothing to update, nothing to maintain.

## License

MIT - use it, fork it, modify it, ship it. Attribution appreciated but not required.

If this helped you, consider giving the repo a star.