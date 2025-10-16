# Implementation Plan: Modern Startup Landing Website

**Branch**: `001-modern-landing-website` | **Date**: 2025-10-16 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-modern-landing-website/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Build a modern, sleek landing website for Nexus (AI-powered radiology governance system) using Next.js 15 with static site generation. The website will showcase the product across 5 main pages (Landing, Blog, About, FAQ, Careers) with emphasis on performance, accessibility, and mobile-first responsive design. All blog content will be mock data embedded in the site, requiring no backend or database.

**Technical Approach**: Next.js 15 with App Router, static export (`output: 'export'`), TypeScript for type safety, Tailwind CSS for styling, and embedded mock data for blog posts and job listings. Build output targets static hosting providers (Vercel, Netlify, GitHub Pages).

## Technical Context

**Language/Version**: TypeScript 5.x with Next.js 15 (React 19)
**Primary Dependencies**: Next.js 15, React 19, Tailwind CSS 4.x, next/image for optimized images, sharp for image processing
**Storage**: N/A (static files only, no database - all content embedded in code/JSON files)
**Testing**: Vitest + React Testing Library for component tests, Playwright for E2E tests, axe-core for accessibility testing, Lighthouse CI for performance
**Target Platform**: Static web hosting (Vercel, Netlify, GitHub Pages, S3+CloudFront) - browser targets: last 2 versions of Chrome/Firefox/Safari/Edge, Safari iOS 13+, Chrome Android last 2 versions
**Project Type**: Web application (frontend-only static site)
**Performance Goals**:
  - Initial page load < 3 seconds on 3G connection
  - Lighthouse score 90+ on all metrics
  - Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
  - Total page weight < 2MB uncompressed
**Constraints**:
  - Must be purely static (no server-side rendering at runtime, no backend APIs)
  - WCAG 2.1 Level AA compliance required
  - All images must use WebP with fallbacks
  - Must support keyboard navigation
  - No external data dependencies
**Scale/Scope**:
  - 5 main pages (Landing, Blog listing, About, FAQ, Careers)
  - 10 blog posts with individual pages
  - 3-5 job listings
  - 10-15 FAQ items
  - Mobile-first responsive across 4 breakpoints (320px, 768px, 1024px, 1440px)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### I. Static-First Architecture ✅ PASS

**Requirement**: All features MUST be deliverable as static HTML, CSS, and JavaScript files. No server-side rendering or backend dependencies required for core functionality.

**Implementation**: Next.js 15 configured with `output: 'export'` generates purely static files. All content (blog posts, job listings, FAQ) embedded as JSON/TypeScript data. No server-side APIs or database required.

**Verification**: Build output will be static files deployable to any CDN/static host.

### II. Mobile-First Responsive Design ✅ PASS

**Requirement**: All layouts MUST be designed for mobile devices first (320px, 768px, 1024px, 1440px breakpoints). Touch targets minimum 44x44px.

**Implementation**: Tailwind CSS 4.x with mobile-first breakpoints. All components designed starting at 320px, progressively enhanced for larger screens. Touch targets sized per requirement.

**Verification**: Visual regression testing at all breakpoints. Manual testing on mobile devices.

### III. Performance Budget ✅ PASS

**Requirements**:
- Initial page load < 3 seconds on 3G
- Total page weight < 2MB uncompressed
- Images optimized (WebP with fallbacks)
- JavaScript must not block initial render
- Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1

**Implementation**:
- Next.js 15 automatic code splitting prevents render-blocking
- next/image with WebP conversion and responsive srcset
- Lighthouse CI enforces performance budget in pipeline
- Static generation eliminates server latency

**Verification**: Lighthouse CI scores, performance monitoring on 3G throttling.

### IV. Accessibility Standards ✅ PASS

**Requirement**: WCAG 2.1 Level AA compliance - semantic HTML, 4.5:1 contrast, keyboard navigation, alt text, screen reader compatible.

**Implementation**:
- Semantic HTML5 elements (nav, main, article, section)
- axe-core automated testing in CI
- Focus management with visible focus indicators
- All images require alt text (TypeScript enforcement)
- Proper heading hierarchy (h1-h6)

**Verification**: Automated axe-core tests, manual keyboard navigation testing, screen reader testing.

### V. Browser Compatibility ✅ PASS

**Requirement**: Last 2 versions Chrome/Firefox/Safari/Edge, Safari iOS 13+, Chrome Android last 2.

**Implementation**: Browserslist configuration targets specified browsers. Next.js 15 handles transpilation. CSS autoprefixer for vendor prefixes.

**Verification**: Cross-browser testing (Playwright), graceful degradation for older browsers.

### Deployment Requirements ✅ PASS

**Static Hosting**: Build outputs to `/out` directory (Next.js static export). Deployable to Vercel, Netlify, GitHub Pages, S3+CloudFront with zero config.

**Version Control**: Git repo with conventional commits. `.gitignore` excludes `/out`, `/node_modules`, `/.next`.

**Build Process**:
- `npm run dev` - local development server
- `npm run build` - production static export
- Single command builds, reproducible across environments
- Documented in quickstart.md

### Code Quality ✅ PASS

**Requirements**: HTML validates W3C, CSS linted, JavaScript passes ESLint, no 404s.

**Implementation**:
- ESLint + TypeScript strict mode
- Prettier for formatting
- HTML validation in E2E tests
- Dead link checking in CI

### Content Strategy ✅ PASS

**Requirements**: Externalized content, responsive images with srcset, external links with rel="noopener".

**Implementation**:
- Content in `/data` directory (JSON/TypeScript)
- next/image automatically generates srcset
- ESLint rule enforces rel="noopener" on external links

### Testing Gates ✅ PASS

**Requirements**: Visual regression, cross-browser, accessibility audit, Lighthouse 90+.

**Implementation**:
- Playwright for visual regression and cross-browser E2E
- axe-core for accessibility
- Lighthouse CI for performance
- All gates run in CI before deployment

**Status**: All constitutional requirements satisfied. No violations to justify.

## Project Structure

### Documentation (this feature)

```
specs/001-modern-landing-website/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
│   └── content-schema.ts  # TypeScript interfaces for content
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```
/ (repository root)
├── app/                      # Next.js 15 App Router
│   ├── layout.tsx           # Root layout with header/footer
│   ├── page.tsx             # Landing page (/)
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── blog/
│   │   ├── page.tsx         # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx     # Individual blog post pages
│   ├── careers/
│   │   └── page.tsx         # Careers page
│   └── faq/
│       └── page.tsx         # FAQ page
│
├── components/               # React components
│   ├── layout/
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Site footer
│   │   └── Navigation.tsx   # Nav menu component
│   ├── landing/
│   │   ├── Hero.tsx         # Landing hero section
│   │   ├── Features.tsx     # Product features section
│   │   ├── Outcomes.tsx     # Measurable outcomes section
│   │   └── CTA.tsx          # Call-to-action section
│   ├── blog/
│   │   ├── BlogCard.tsx     # Blog post card
│   │   ├── FeaturedPost.tsx # Featured blog post
│   │   └── BlogGrid.tsx     # Blog grid layout
│   ├── shared/
│   │   ├── Button.tsx       # Reusable button
│   │   ├── Card.tsx         # Reusable card
│   │   └── Section.tsx      # Page section wrapper
│   └── faq/
│       └── Accordion.tsx    # FAQ accordion component
│
├── data/                     # Mock content data
│   ├── blog-posts.ts        # 10 blog posts (mock data)
│   ├── job-openings.ts      # 3-5 job listings (mock data)
│   ├── faq-items.ts         # 10-15 FAQ items (mock data)
│   ├── team-members.ts      # Team profiles for About page
│   └── navigation.ts        # Site navigation structure
│
├── lib/                      # Utility functions
│   ├── constants.ts         # Site-wide constants
│   ├── helpers.ts           # Helper functions
│   └── types.ts             # Shared TypeScript types
│
├── public/                   # Static assets
│   ├── images/
│   │   ├── hero/            # Hero section images
│   │   ├── blog/            # Blog post images
│   │   ├── team/            # Team member photos
│   │   └── icons/           # SVG icons
│   └── fonts/               # Custom fonts (if needed)
│
├── styles/                   # Global styles
│   └── globals.css          # Tailwind imports + custom styles
│
├── tests/                    # Test files
│   ├── e2e/                 # Playwright E2E tests
│   │   ├── landing.spec.ts
│   │   ├── blog.spec.ts
│   │   ├── accessibility.spec.ts
│   │   └── performance.spec.ts
│   ├── components/          # Component unit tests
│   │   ├── Header.test.tsx
│   │   ├── BlogCard.test.tsx
│   │   └── Accordion.test.tsx
│   └── utils/               # Test utilities
│       └── test-helpers.ts
│
├── .github/                  # GitHub configuration
│   └── workflows/
│       └── ci.yml           # CI pipeline (linting, tests, Lighthouse)
│
├── next.config.js           # Next.js configuration (output: 'export')
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
├── .eslintrc.json           # ESLint configuration
├── .prettierrc              # Prettier configuration
├── playwright.config.ts     # Playwright configuration
├── vitest.config.ts         # Vitest configuration
└── README.md                # Project documentation
```

**Structure Decision**: Next.js 15 App Router structure (frontend-only static site). All pages use file-based routing in `/app` directory. Components are organized by feature area. Mock data lives in `/data` directory as TypeScript files. Build output goes to `/out` directory (gitignored). This structure optimizes for static export while maintaining clear separation of concerns.

## Complexity Tracking

*Fill ONLY if Constitution Check has violations that must be justified*

No constitutional violations. All requirements satisfied by Next.js 15 static export approach.

