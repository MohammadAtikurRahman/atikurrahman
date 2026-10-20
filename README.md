# Atikur Rahman

Personal portfolio of Md. Atikur Rahman, software engineer and founder of [BsonLite](https://bsonlite.com/).

**Website:** https://www.atikurrahman.net/

## Site contents

- Experience: BsonLite (August 2025–present), NexDecade, and Metamorphosis.
- Projects: BsonLite, BsonLite SDK, Console with CLI and GUI, Digital Lab Access, Info Scraper v2, and Portable MongoDB.
- Earlier work, education, milestones, technical toolkit, writing, and contact links.
- BsonLite website, public source repositories, npm package, downloads, and [Discord community](https://discord.gg/vSRMRPYqs).

## Run and deploy

This is a static website. No npm install or build step is needed.

To preview locally, serve the repository root with a static HTTP server, for example:

    python -m http.server 8000

Then visit http://localhost:8000.

On the existing hosting checkout:

    git pull --ff-only origin main

The web document root must contain **index.html and the complete assets directory**, plus robots.txt and sitemap.xml. Keep the existing domain and HTTPS configuration. If your hosting workflow copies files to another public directory, copy these files after pulling.

## Edit

- Content, links, and structured metadata: index.html
- Black/charcoal responsive layout and self-hosted Roboto font: assets/style.css
- Mobile navigation, accessible project tabs, and clipboard controls: assets/site.js
- Crawler URLs: robots.txt and sitemap.xml
- Portrait and Console preview: assets/images/

The page starts with Atikur’s photograph, name, role, and personal introduction, followed immediately by Work Experience and then Selected Projects. The portrait appears before the introduction on phones and beside it on desktop. The black canvas, dark project panels, tabbed BsonLite showcase, and mint BsonLite accent continue throughout. Toolkit descriptions use 16px type on desktop and 15px on mobile.

Navigation, experience details, project information, and outbound links remain available without JavaScript. The Database, SDK, and Console panels all remain visible until JavaScript enables their accessible tabs. Tabs support click, Left/Right arrows, Home, and End. JavaScript also adds a collapsible mobile menu and clipboard actions with a selectable-text fallback.

The BsonLite start month follows the requested six-month interval after NexDecade ended in January 2025. Console download links identify the current v0.2.0 preview; update them when a new release is available.

## Assets

The existing profile photograph is retained, with an optimized WebP used by the page. The Console preview shows demo data from the BsonLite project.

Roboto is served locally. Its SIL Open Font License is included in assets/fonts/OFL.txt. The site uses no external font service, analytics script, or JavaScript framework.
