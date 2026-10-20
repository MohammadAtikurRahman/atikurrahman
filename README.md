# Atikur Rahman

Personal portfolio of Md. Atikur Rahman, software engineer and founder of [BsonLite](https://bsonlite.com/).

**Website:** https://www.atikurrahman.net/

## Page structure

1. Photograph, name, role, personal introduction, and profile links.
2. Work Experience: BsonLite, NexDecade, and Metamorphosis.
3. Projects: BsonLite, BsonLite SDK, Console with CLI and GUI, Digital Lab Access, Info Scraper v2, and Portable MongoDB.
4. Toolkit, BsonLite community, background, education, writing, and contact.

The visual design is inspired by the official Laravel Livewire website: a navy canvas, pink accents, rounded buttons, fine borders, and clear typography. The centered portrait and introduction come before every work or project section. BsonLite retains its green brand accent. Roboto is served locally; Toolkit descriptions use 16px on desktop and 15px on phones.

This is a static HTML/CSS/JavaScript portfolio. The design does not require a Laravel or Livewire installation, a PHP runtime, an npm install, or a build step.

## Run and deploy

Serve the repository root with a static HTTP server, for example:

    python -m http.server 8000

Then visit http://localhost:8000.

On the existing hosting checkout:

    git pull --ff-only origin main

The web document root must contain index.html, the complete assets directory, robots.txt, and sitemap.xml. Keep the existing domain and HTTPS configuration. If the hosting workflow copies files into another public directory, copy these files after pulling. Updated CSS/JS URLs include a version to prevent older cached assets from being reused.

## Edit

- Content, links, and structured metadata: index.html
- Responsive layout and self-hosted Roboto: assets/style.css
- Mobile navigation and clipboard controls: assets/site.js
- Crawler URLs: robots.txt and sitemap.xml
- Portrait and Console preview: assets/images/

Content, links, and native experience/project details work without JavaScript. JavaScript adds the mobile navigation toggle and clipboard actions, with a selectable-text fallback when clipboard access is unavailable.

The BsonLite start month follows the requested six-month interval after NexDecade ended in January 2025. Console download links identify the v0.2.0 preview.

## Assets

The existing photograph is retained, with its optimized WebP used in the introduction. The Console preview contains demo data and appears only in Projects.

Roboto's SIL Open Font License is included in assets/fonts/OFL.txt. No external font service, analytics script, or JavaScript framework is loaded.
