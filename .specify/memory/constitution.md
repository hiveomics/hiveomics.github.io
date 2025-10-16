<!--
Sync Impact Report:
Version: 1.2.0 (Added legal page requirements)
Modified principles:
  - Updated "Deployment Requirements" section to specify GitHub Pages as primary target (v1.1.0)
  - Added GitHub Actions workflow requirements (v1.1.0)
  - Specified Next.js output directory structure (v1.1.0)
  - Added Jekyll prevention requirements (v1.1.0)
  - Added "Legal Compliance" section with Privacy Policy and Terms of Service requirements (v1.2.0)
Added sections:
  - Automated Deployment subsection under Deployment Requirements (v1.1.0)
  - Legal Compliance section under Development Workflow (v1.2.0)
Removed sections: N/A
Templates requiring updates:
  ✅ Updated - plan-template.md (Constitution Check section will reference these principles)
  ✅ Updated - spec-template.md (Requirements align with static site needs, legal pages added)
  ✅ Updated - tasks-template.md (Task structure supports static site workflows)
Follow-up TODOs: None
-->

# Hivesite Landing Page Constitution

## Core Principles

### I. Static-First Architecture

All features MUST be deliverable as static HTML, CSS, and JavaScript files. No server-side rendering or backend dependencies required for core functionality. Static assets must be optimized for fast loading and CDN delivery.

**Rationale**: Static sites provide maximum performance, security, reliability, and cost-effectiveness for landing pages while ensuring universal browser compatibility.

### II. Mobile-First Responsive Design

All layouts MUST be designed for mobile devices first, then progressively enhanced for tablets and desktops. Breakpoints must support common device sizes (320px, 768px, 1024px, 1440px). Touch targets must be minimum 44x44px.

**Rationale**: Majority of landing page traffic comes from mobile devices; mobile-first approach ensures optimal user experience across all screen sizes.

### III. Performance Budget

- Initial page load MUST be under 3 seconds on 3G connection
- Total page weight MUST NOT exceed 2MB (uncompressed)
- Images MUST be optimized and use modern formats (WebP with fallbacks)
- JavaScript MUST NOT block initial render
- Core Web Vitals MUST meet "Good" thresholds (LCP <2.5s, FID <100ms, CLS <0.1)

**Rationale**: Performance directly impacts conversion rates; every 100ms delay can decrease conversions by 7%.

### IV. Accessibility Standards

All pages MUST meet WCAG 2.1 Level AA compliance:

- Semantic HTML required for all content structure
- Color contrast ratio minimum 4.5:1 for normal text, 3:1 for large text
- All interactive elements keyboard navigable
- All images have descriptive alt text
- Forms have proper labels and error messages
- Screen reader compatible

**Rationale**: Accessibility ensures maximum reach, legal compliance, and better SEO while improving user experience for everyone.

### V. Browser Compatibility

MUST support:

- Last 2 versions of Chrome, Firefox, Safari, Edge
- Safari iOS 13+
- Chrome Android (last 2 versions)

MAY gracefully degrade for older browsers but MUST remain functional.

**Rationale**: Covers 95%+ of actual users while avoiding legacy browser technical debt.

## Deployment Requirements

### Primary Deployment Target: GitHub Pages

- **Primary Platform**: GitHub Pages with automated deployment via GitHub Actions
- Build output MUST be in `/out` directory (Next.js static export)
- Files MUST be deployable to any static hosting provider (GitHub Pages, Netlify, Vercel, S3+CloudFront)
- No server configuration required beyond standard static file serving
- HTTPS enforced for all pages (handled by GitHub Pages)
- Jekyll processing MUST be disabled (`.nojekyll` file in `public/` directory)

**Rationale**: GitHub Pages provides free hosting with automatic HTTPS, integrated CI/CD via GitHub Actions, and seamless integration with version control workflow.

### Automated Deployment

- Deployment MUST be automated via GitHub Actions workflow
- Workflow MUST trigger on push to `main` branch
- Build, test, and deploy steps MUST be documented in `.github/workflows/deploy.yml`
- Manual deployment option MUST be available via workflow dispatch
- Deployment status MUST be visible in GitHub Actions tab
- Failed deployments MUST prevent production updates

**Rationale**: Automated deployment reduces human error, ensures consistent builds, and enables rapid iteration.

### Version Control

- All source code MUST be in Git
- Commit messages MUST follow conventional commits format: `type(scope): description`
- No build artifacts in version control (use `.gitignore`)

### Build Process

- Build process MUST be documented in README and DEPLOYMENT.md
- Single command to build production assets (`npm run build`)
- Single command to run local development server (`npm run dev`)
- Build MUST be reproducible across environments (Node.js 20+)
- Build output MUST include `.nojekyll` file (copied from `public/` directory)
- Build MUST complete successfully before deployment (enforced by CI/CD)
- Static export MUST generate standalone HTML files (no server runtime required)

## Development Workflow

### Code Quality

- HTML MUST validate against W3C standards (no critical errors)
- CSS MUST be linted (no syntax errors)
- JavaScript MUST pass linter (ESLint or equivalent)
- All assets referenced MUST exist (no 404s)

### Content Strategy

- All text content MUST be externalized (no hardcoded copy in HTML when avoidable)
- All images MUST have responsive sizes/srcset where appropriate
- All external links MUST have `rel="noopener"` for security

### Legal Compliance

- Website MUST include Privacy Policy page accessible at `/privacy/` route
- Website MUST include Terms of Service page accessible at `/terms/` route
- Legal pages MUST display last updated date and effective date prominently
- Privacy Policy MUST be appropriate for healthcare SaaS handling PHI (HIPAA considerations)
- Terms of Service MUST include healthcare-specific provisions and regulatory compliance references
- Legal pages MUST be linked from website footer on all pages
- Legal page content MUST be maintained and reviewed regularly for regulatory compliance

**Rationale**: Legal pages are required for regulatory compliance (GDPR, CCPA, HIPAA), build trust with healthcare customers, and provide necessary legal protections for the business.

### Testing Gates

Before deployment:

- Visual regression testing on key breakpoints (mobile, tablet, desktop)
- Cross-browser testing on supported browsers
- Accessibility audit (automated + manual keyboard navigation)
- Performance audit (Lighthouse score 90+ on all metrics)

## Governance

This constitution establishes the non-negotiable standards for all work on the Hivesite landing page. Any feature, change, or content update MUST comply with these principles.

### Amendment Process

- Amendments require documented rationale and impact analysis
- Version incremented per semantic versioning (MAJOR.MINOR.PATCH)
- All stakeholders notified of constitutional changes

### Compliance Verification

- All pull requests MUST pass automated checks (linting, build, basic accessibility)
- Code reviews MUST verify alignment with principles
- Performance budgets MUST be monitored in CI/CD pipeline

### Complexity Justification

Any deviation from these principles (e.g., adding dynamic features, exceeding performance budget, breaking browser support) MUST be explicitly justified with:

- Business rationale
- User benefit analysis
- Why simpler alternative was rejected
- Mitigation plan for tradeoffs

**Version**: 1.2.0 | **Ratified**: 2025-10-16 | **Last Amended**: 2025-10-16
