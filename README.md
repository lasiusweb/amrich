# Amrich Pharma — Aquaculture Health Solutions

[![Netlify Status](https://api.netlify.com/api/v1/badges/PLACEHOLDER/deploy-status)](https://app.netlify.com/sites/amrich-pharma/deploys)
[![Playwright E2E](https://github.com/lasiusweb/amrich/actions/workflows/playwright.yml/badge.svg)](https://github.com/lasiusweb/amrich/actions/workflows/playwright.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue)](https://www.typescriptlang.org/)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?logo=astro)](https://astro.build)

ISO-certified aquaculture health solutions for shrimp & fish ponds. 16 products across 4 categories — probiotics, water quality, disease control, and feed support.

## Quick Start

```bash
npm install
npm run dev        # Dev server at localhost:4321
npm run build      # Production build → dist/
npm run preview    # Preview built site
npm run astro check  # TypeScript type checking
```

## Site Architecture

```
/                                 → Home
/products/                        → All 4 product categories
/products/{category}              → Category page (4 total)
/products/{category}/{product}    → Product detail page (16 total)
/resources/                       → Resource hub
/resources/problem-solution/      → Guides & protocols
/resources/seasonal-guides/       → Seasonal management
/about                            → Company info
/contact                          → Contact & quote form
/sustainability                   → Sustainability practices
/testimonials                     → Farmer testimonials
/downloads                        → Brochure & resources
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Astro dev server on port 4321 |
| `npm run build` | Production build (static + SSR) |
| `npm run preview` | Preview production build |
| `npm run astro check` | TypeScript type checking |
| `npm run lint` | TypeScript type checking |
| `npm run typecheck` | TypeScript type checking |
| `npm run test:e2e` | Run Playwright E2E tests |
| `npm run test:e2e:headed` | Run tests with browser UI |
| `npm run test:e2e:report` | Show Playwright report |

## Tech Stack

- **Framework**: [Astro 6](https://astro.build) (static site + SSR)
- **Language**: TypeScript (strict mode)
- **Testing**: Playwright (51 E2E tests, Chromium + Firefox)
- **Deployment**: Netlify (static + SSR adapter)
- **PWA**: Service worker with cache-first strategy
- **Analytics**: Google Analytics 4 (consent-based)

## Features

- **16 product pages** with JSON-LD schema (Product, Offer, HowTo, FAQPage)
- **Quote form** with offline queue, WhatsApp fallback, GA4 tracking
- **Accessibility**: Focus traps, skip links, aria-expanded, reduced motion, high contrast
- **Responsive**: Mobile-first, tablet, desktop with touch targets ≥44px
- **SEO**: OG tags, Twitter cards, canonical URLs, meta descriptions
- **PWA**: Offline fallback, manifest.json, SVG icons

## Design Tokens

See [`DESIGN.md`](./DESIGN.md) for the complete token system (Coinbase-inspired colors, typography, spacing, and components).

## Environment Variables

| Variable | Description |
|----------|-------------|
| `PUBLIC_QUOTE_WEBHOOK_URL` | Webhook endpoint for quote form submissions |

## CI/CD

- **GitHub Actions**: Playwright E2E tests on push/PR to main
- **Netlify Deploy Previews**: Automatic preview deployments for PRs
- **Netlify Production**: Auto-deploy from main branch

## Company

**Amrich Pharma**  
Plot No. 2, Sainath Nagar, Shivaji Mandpeshwar Road  
Dahisar, Mumbai-400068  
Email: amrichpharma@gmail.com | Phone: +91 97123 35338

## License

Proprietary — All rights reserved.
