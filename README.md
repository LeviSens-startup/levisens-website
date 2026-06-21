# LeviSens — Company Website

Clean, dependency-free reconstruction of the LeviSens marketing site
(migrated off Carrd). Plain HTML, CSS, and vanilla JavaScript — no build step.

## Structure

```
levisens-site/
├── index.html          # Single-page site (hero, about, technology, team, connect)
├── css/styles.css      # Styles (dark theme, responsive)
├── js/main.js          # Mobile nav + accordion + footer year
└── assets/images/      # logo.png, lab-1.jpg, lab-2.jpg
```

## Develop locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Deploy

Hosted on Cloudflare Pages, connected to this GitHub repo. Every push to
`main` triggers an automatic deploy. There is no build command — the project
root is published as-is.

## TODO before launch

- Update the `mailto:contact@levisens.tech` links in the **Connect** section
  to your real contact address.
- Swap the team avatars (initials) for real headshots if desired.
