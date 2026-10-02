# Spec Architect Landing Page

Static landing page for the Spec Architect community edition, designed for deployment on GitHub Pages.

## Overview

This directory contains the public-facing website for Spec Architect, showcasing the application and providing download links for Community Edition binaries.

## Files

- `index.html` — Main landing page with all sections (hero, features, downloads, about)
- `style.css` — Complete styling with light/dark mode support and responsive design
- `app.js` — JavaScript for navigation, downloads, and theme handling
- `README.md` — This file

## Features

### Content Sections

1. **Header & Navigation** — Quick navigation to main sections
2. **Hero Section** — Eye-catching introduction with Community Edition badges
3. **Features Section** — Grid of 6 key features with icons
4. **Technology Stack** — Overview of the tech used
5. **Download Section** — Links for Linux (.deb, .AppImage) and Windows (.msi, .exe)
6. **Community Section** — Highlights of Community Edition benefits
7. **About Section** — Information about the project and its creator
8. **Footer** — Copyright and attribution

### Design

- **Light/Dark Mode** — Automatic detection of system theme preference with local storage fallback
- **Responsive Design** — Mobile-friendly layout with CSS Grid and Flexbox
- **Smooth Scrolling** — Enhanced UX with smooth navigation between sections
- **Accessible** — Semantic HTML, proper heading hierarchy, and ARIA labels

## Deployment

### GitHub Pages

1. Create a public repository named `spec-architect-app` (or another public name)
2. Push this directory to the `gh-pages` branch or configure GitHub Pages to deploy from the `main` branch
3. Enable GitHub Pages in repository settings
4. Access the site at `https://[username].github.io/spec-architect-app/`

### Custom Domain

To use a custom domain:
1. Create a `CNAME` file in this directory with your domain name
2. Configure DNS records to point to GitHub Pages
3. Enable "Enforce HTTPS" in repository settings

## Customization

### Update Download Links

Edit `app.js` and update the `releases` object in the `getAssetForPlatform()` function to point to actual release downloads:

```javascript
const releases = {
    'linux-deb': {
        url: 'https://github.com/.../releases/download/v0.1.0/spec-architect_0.1.0_amd64.deb',
        name: 'spec-architect_0.1.0_amd64.deb'
    },
    // ...
};
```

### Update Branding

- Edit color scheme in `style.css` (CSS variables at the top)
- Update hero content and features in `index.html`
- Modify footer attribution as needed

### Add Analytics (Optional)

To track downloads and user engagement, implement a privacy-respecting analytics solution like:
- [Plausible Analytics](https://plausible.io/)
- [Fathom Analytics](https://usefathom.com/)
- [Pirsch Analytics](https://pirsch.io/)

## Governance

This landing page must comply with the rules in `AI_DEVELOPMENT_RULES.md`:

- **No Commercial Terms** — Must use "Community Edition" and "Free Forever", no "Premium", "Pro", "Enterprise"
- **Authorship** — Must attribute to "Marcelo Guimarães"
- **No Upsell** — No pricing tables, subscription offers, or checkout flows
- **Source Code Privacy** — This page contains ONLY public assets and binaries, never source code

## Performance

The landing page is optimized for performance:
- **Minimal Requests** — All styles and scripts are inlined or locally served
- **No Tracking** — No third-party tracking scripts by default
- **Fast Load** — Static HTML with minimal JavaScript
- **High Lighthouse Scores** — Best practices for performance, accessibility, and SEO

## Maintenance

- Update download links whenever new releases are published
- Test across browsers and screen sizes before deploying
- Verify all external links periodically
- Keep the content up-to-date with project features
- Monitor GitHub Issues for broken links or typos

## License

This landing page is part of Spec Architect and follows the same licensing model as the application.
