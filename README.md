# LeviSens — Company Website

Clean, dependency-free reconstruction of the LeviSens marketing site
(migrated off Carrd). Plain HTML, CSS, and vanilla JavaScript — no build step.

## Structure

```
levisens-site/
├── index.html          # Home / landing (hero + nav cards)
├── about.html          # About page
├── technology.html     # Technology page (lab gallery + accordion)
├── team.html           # Team page
├── connect.html        # Contact page (email, LinkedIn, contact form)
├── css/styles.css      # Styles (dark theme, responsive)
├── js/main.js          # Mobile nav + accordion + footer year + form handler
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

## Contact form setup (Web3Forms)

The form on `connect.html` posts to [Web3Forms](https://web3forms.com) (free,
no server). To make it live:

1. Go to https://web3forms.com, enter **connect@levisens.tech**, and you'll be
   emailed a free **access key**.
2. In `connect.html`, replace `REPLACE_WITH_WEB3FORMS_ACCESS_KEY` with that key.
3. Commit & push — submissions then arrive at connect@levisens.tech.

Until the key is set, the form shows visitors a friendly "email us directly"
message instead of failing silently.

## TODO before launch

- Add the Web3Forms access key (above) to activate the contact form.
- Swap the team avatars (initials) for real headshots if desired.
