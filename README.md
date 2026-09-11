# Shikai Shen — Personal Website

A clean, static academic personal website inspired by the profile-first structure common to academic homepages and the scannable profile/project treatment used by LinkedIn.

## What changed in this revision
- Added a left profile column with a circular portrait slot, role, location, email, LinkedIn, and project links.
- Added a concise **News** section, following the academic-homepage pattern.
- Expanded research and project descriptions with material from the supplied résumé.
- Made projects look more like professional profile entries: title, institution/date, scope, measurable outcomes, implementation details, and external links.
- Kept dedicated project pages, now with fuller technical content.
- Simplified typography and spacing for a more academic, readable presentation.

## Important: profile photo
The supplied files do not contain a headshot, and LinkedIn did not expose the profile image to automated retrieval. The site therefore uses `assets/profile-placeholder.svg`.

To use your actual photo:
1. Save your headshot as `assets/profile.jpg`.
2. In `index.html`, change:
   `src="assets/profile-placeholder.svg"`
   to:
   `src="assets/profile.jpg"`
3. Change the `alt` text to `Portrait of Shikai Shen`.

## Important: project GitHub URLs
Your LinkedIn project entries contain outbound GitHub links, but LinkedIn did not expose those target URLs to automated retrieval. For now, every project includes a clearly labeled link to your LinkedIn Projects section, where the GitHub link is available.

When the four exact repository URLs are available, replace the LinkedIn-project link in each project card/page with the direct GitHub URL. Do not guess repository URLs.

## Files
- `index.html` — homepage
- `style.css` — responsive styling
- `script.js` — footer year
- `projects/` — four dedicated project pages
- `assets/profile-placeholder.svg` — temporary portrait placeholder

## Preview
Open `index.html` in a browser.

## Deploy
The folder can be deployed directly to GitHub Pages, Netlify, Cloudflare Pages, or any other static host.
