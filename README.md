# Ample Power Electrical website

A fast, simple website for Ample Power Electrical, with an editing screen (Pages CMS) so text, logos and photos can be changed without touching code.

## How it fits together

| Piece | What it does | Cost |
|---|---|---|
| GitHub | Stores the website files and keeps a history of every change | Free |
| Pages CMS (app.pagescms.org) | The editing screen. Log in, change text or photos, click Save | Free |
| Netlify | Hosts the site, rebuilds it about a minute after each Save, handles the contact form | Free plan |
| Domain (amplepower.com.au) | Stays with your current domain provider, just pointed at Netlify | Your existing renewal |

## Where the content lives

All editable content is in `src/content/`:

| File | Edit it in Pages CMS under |
|---|---|
| `home.json` | Home page |
| `services.json` | Services page |
| `projects/*.md` | Projects (one file per project) |
| `gallery.json` | Photo gallery |
| `buildings.json` | Buildings page |
| `about.json` | About page |
| `clients.json` | Client logos |
| `testimonials.json` | Testimonials |
| `settings.json` | Business details and logo |

Images and PDFs are stored in `public/media/`.

## For a developer

```
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build into dist/
```

Built with Astro 5. Fonts are self-hosted via Fontsource. Images are resized on the fly by Netlify Image CDN in production (`PUBLIC_IMAGE_CDN=netlify` in `netlify.toml`). Redirects from the old WordPress URLs are in `netlify.toml`. The enquiry form uses Netlify Forms (form name `enquiry`).
