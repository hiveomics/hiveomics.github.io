# Nexus Landing Website

A modern, production-ready landing website for Nexus - an AI-powered radiology governance system. Built with Next.js 15 and configured for static deployment to GitHub Pages.

## Overview

Nexus is an AI-powered quality assurance and compliance management platform for radiology departments. This landing site showcases the product features, team, blog content, FAQs, and career opportunities.

## Features

- **Modern Stack**: Next.js 15, React 19, TypeScript 5.x
- **Static Site**: Pre-rendered HTML for optimal performance
- **Responsive Design**: Mobile-first approach (320px → 1440px)
- **Blog System**: 10 comprehensive articles with markdown rendering
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **SEO Optimized**: Meta tags, Open Graph, structured data
- **GitHub Pages Ready**: Automated deployment via GitHub Actions

## Pages

- **Home** (`/`) - Hero, features, outcomes, user types, CTA
- **About** (`/about`) - Team profiles, mission, values, compliance badges
- **Blog** (`/blog`) - Featured post and article grid with 10 posts
- **Blog Posts** (`/blog/[slug]`) - Individual article pages with markdown content
- **FAQ** (`/faq`) - 15 questions with interactive accordion
- **Careers** (`/careers`) - 5 job openings with expandable details

## Tech Stack

- **Framework**: Next.js 15 (App Router, Static Export)
- **UI Library**: React 19
- **Language**: TypeScript 5.x (strict mode)
- **Styling**: Tailwind CSS 4.x + Custom CSS
- **Markdown**: react-markdown + remark-gfm
- **Testing**: Vitest (unit), Playwright (E2E)
- **Code Quality**: ESLint, Prettier

## Build Statistics

- **Total Pages**: 18 static HTML pages
- **First Load JS**: 102-111 KB per page
- **Build Time**: ~2 seconds
- **Bundle Size**: Optimized with code splitting

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
npm run test:e2e

# Lint and format
npm run lint
npm run format
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in development mode.

### Production Build

```bash
npm run build
```

Static HTML files are generated in the `./out/` directory.

## Deployment

### GitHub Pages

The site is configured for automatic deployment to GitHub Pages via GitHub Actions.

**Quick Start**:

1. Push code to GitHub
2. Enable GitHub Pages in repository Settings
3. Set source to "GitHub Actions"
4. Deployment happens automatically on push to `main`

**Detailed Instructions**: See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete setup guide.

### Other Platforms

The static export in `./out/` can be deployed to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Any static hosting service

## Project Structure

```
hivesite/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── app/                        # Next.js app directory
│   ├── page.tsx               # Home page
│   ├── about/                 # About page
│   ├── blog/                  # Blog listing & posts
│   ├── faq/                   # FAQ page
│   └── careers/               # Careers page
├── components/                 # React components
│   ├── layout/                # Header, Footer, Navigation
│   ├── landing/               # Landing page sections
│   ├── blog/                  # Blog components
│   ├── faq/                   # FAQ accordion
│   └── shared/                # Reusable components
├── data/                      # Mock data files
│   ├── blog-posts.ts         # 10 blog articles
│   ├── team-members.ts       # Team profiles
│   ├── faq-items.ts          # FAQ questions
│   └── job-openings.ts       # Career positions
├── lib/                       # Utilities
│   ├── types.ts              # TypeScript interfaces
│   └── helpers.ts            # Helper functions
├── public/                    # Static assets
│   ├── images/               # Images and icons
│   └── .nojekyll             # GitHub Pages config
├── styles/                    # Global styles
│   └── globals.css           # CSS (1830+ lines)
└── out/                       # Build output (generated)
```

## Configuration Files

- `next.config.js` - Next.js configuration (static export, GitHub Pages)
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `.eslintrc.json` - ESLint rules
- `.prettierrc` - Prettier formatting rules
- `vitest.config.ts` - Vitest test configuration
- `playwright.config.ts` - Playwright E2E test configuration

## Content Management

### Blog Posts

Blog posts are stored in `data/blog-posts.ts` with full markdown support:

```typescript
{
  slug: 'post-slug',
  title: 'Post Title',
  excerpt: 'Short description',
  content: `# Markdown content here...`,
  author: 'Author Name',
  publishedDate: '2025-09-15',
  category: 'Category',
  tags: ['tag1', 'tag2'],
  // ...
}
```

### Other Content

- **Team Members**: `data/team-members.ts`
- **FAQ Items**: `data/faq-items.ts`
- **Job Openings**: `data/job-openings.ts`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized
- **Bundle Size**: Minimized with code splitting
- **Image Optimization**: Unoptimized for static export (use external CDN if needed)

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible indicators
- Color contrast compliance (WCAG AA)

## SEO

- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card support
- Structured data ready
- Sitemap generation ready
- robots.txt ready

## Documentation

- [DEPLOYMENT.md](./DEPLOYMENT.md) - Complete GitHub Pages deployment guide
- [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) - Setup verification
- [MARKDOWN_RENDERING.md](./MARKDOWN_RENDERING.md) - Markdown implementation
- [PROJECT_COMPLETE.md](./PROJECT_COMPLETE.md) - Implementation summary

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run test         # Run Vitest unit tests
npm run test:e2e     # Run Playwright E2E tests
```

## License

All rights reserved.

## Support

For issues or questions, please contact the development team.

---

**Status**: ✅ Production Ready

Built with Next.js 15 | Deployed to GitHub Pages
