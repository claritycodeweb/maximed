# DANIBERT — Personal Advisory Website

Personal website for **Maxime Danibert**, founder, entrepreneur and advisor based in Lausanne, Switzerland.

## Tech Stack

- **React 18** + **Vite 5** — fast development and optimized production builds
- **Tailwind CSS v3** — utility-first styling
- **React Router v6** — client-side routing with EN/FR language paths
- **react-i18next** — full internationalization (English + French)
- **react-helmet-async** — dynamic SEO meta tags per page
- **Vercel** — deployment with SPA rewrites

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/       # Header, Footer, ContactForm, MentionsList, etc.
├── pages/            # Home, PrivacyPolicy, TermsAndConditions, NotFound
├── locales/          # en.json, fr.json — all translatable content
├── hooks/            # useSEO (meta tags), useLanguage (language switching)
├── i18n.js           # i18next configuration
├── App.jsx           # Routes and layout
├── main.jsx          # Entry point
└── index.css         # Tailwind base styles
public/
├── robots.txt        # Crawler rules
├── sitemap.xml       # All pages with hreflang alternates
└── danibert_logo.svg # Site favicon/logo
```

## Features

### Multilingual (EN/FR)
- URL-based language routing: `/` (English), `/fr` (French)
- Automatic language detection from URL, cookie, or browser
- Language preference stored in a cookie (1 year)
- All text content in JSON locale files

### SEO
- Per-page meta tags (title, description, Open Graph, Twitter Card)
- Canonical URLs and hreflang alternate links
- JSON-LD structured data (Person + WebSite schema)
- Static sitemap.xml with all pages and language alternates
- robots.txt

### Performance
- Code splitting with `React.lazy` + `Suspense`
- Tailwind CSS purging unused styles
- Vite optimized production build
- Vercel cache headers for static assets (1 year immutable)

### Pages
| EN Route | FR Route | Content |
|---|---|---|
| `/` | `/fr` | Home (hero, about, advisory, activities, mentions, contact) |
| `/privacy-policy` | `/fr/politique-de-confidentialite` | Privacy Policy |
| `/terms-and-conditions` | `/fr/conditions-generales` | Terms and Conditions |
| `*` | `*` | 404 Not Found |

## Deployment (Vercel)

1. Connect the GitHub repository to Vercel
2. Vercel auto-detects Vite — no extra configuration needed
3. `vercel.json` provides SPA rewrites and cache headers
4. The contact form requires a backend endpoint at `/api/contact`

```bash
# Deploy manually
vercel
```

## Contact Form

The contact form submits to `/api/contact` via POST. You need to:
- Set up a Vercel serverless function, or
- Replace the endpoint with a third-party form service (Formspree, etc.)

## License

All rights reserved. DANIBERT © 2026.
