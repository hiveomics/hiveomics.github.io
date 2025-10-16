# Implementation Tasks: Modern Startup Landing Website

**Feature**: Modern Startup Landing Website
**Branch**: `001-modern-landing-website`
**Created**: 2025-10-16
**Spec**: [spec.md](./spec.md) | **Plan**: [plan.md](./plan.md)

## Overview

This document contains implementation tasks for building a modern, static landing website for Nexus using Next.js 15, React 19, and Tailwind CSS 4.x. Tasks are organized by user story to enable independent, incremental development and testing.

**Tech Stack**: Next.js 15, React 19, TypeScript 5.x, Tailwind CSS 4.x, Vitest, Playwright

**Total Tasks**: 87 tasks across 7 phases

## Task Legend

- `- [ ] T### Description` - Sequential task
- `- [ ] T### [P] Description` - Parallelizable task (can run concurrently with others)
- `- [ ] T### [US#] Description` - User story task (maps to spec.md user stories)
- `- [ ] T### [P] [US#] Description` - Parallelizable user story task

## Phase 1: Project Setup & Foundation (14 tasks)

**Goal**: Initialize Next.js 15 project with TypeScript, Tailwind CSS, testing frameworks, and core configuration files. This phase creates the foundation needed by all user stories.

**Independent Test**: Project builds successfully (`npm run build`), dev server runs (`npm run dev`), and basic tests pass.

### Setup Tasks

- [ ] T001 Initialize Next.js 15 project with TypeScript in repository root using `npx create-next-app@latest . --typescript --tailwind --app --no-src-dir`
- [ ] T002 Configure Next.js for static export in `next.config.js` (set `output: 'export'`)
- [ ] T003 [P] Install additional dependencies: `sharp` (image optimization), `@types/node`, `@types/react`, `@types/react-dom`
- [ ] T004 [P] Install testing dependencies: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `@vitest/ui`, `jsdom`
- [ ] T005 [P] Install E2E testing: `@playwright/test`, `@axe-core/playwright`
- [ ] T006 [P] Install Lighthouse CI: `@lhci/cli`
- [ ] T007 Configure Tailwind CSS breakpoints in `tailwind.config.js` (sm:768px, md:1024px, lg:1440px)
- [ ] T008 Create TypeScript path aliases in `tsconfig.json` for `@/components/*`, `@/data/*`, `@/lib/*`
- [ ] T009 [P] Configure Vitest in `vitest.config.ts` with jsdom environment and test setup
- [ ] T010 [P] Configure Playwright in `playwright.config.ts` with cross-browser targets (Chrome, Firefox, Safari, Mobile Chrome, Mobile Safari)
- [ ] T011 [P] Configure ESLint rules in `.eslintrc.json` including TypeScript strict mode and accessibility rules (`eslint-plugin-jsx-a11y`)
- [ ] T012 [P] Configure Prettier in `.prettierrc` with consistent formatting rules
- [ ] T013 [P] Create `.gitignore` to exclude `/out`, `/node_modules`, `/.next`, `/coverage`
- [ ] T014 Update `package.json` scripts: `dev`, `build`, `start`, `test`, `test:e2e`, `lint`, `format`, `type-check`

## Phase 2: Shared Foundation (10 tasks)

**Goal**: Create TypeScript types, mock data structure, and shared components used across all pages. These are blocking dependencies for user story implementation.

**Independent Test**: Types compile without errors (`npm run type-check`), shared components render in isolation, and mock data files export correctly.

### Type Definitions & Data Models

- [ ] T015 Copy TypeScript interfaces from `specs/001-modern-landing-website/contracts/content-schema.ts` to `lib/types.ts`
- [ ] T016 Create constants file at `lib/constants.ts` with site metadata (name, description, URL)
- [ ] T017 [P] Create helpers file at `lib/helpers.ts` with utility functions (date formatting, slug generation)

### Mock Data Files

- [ ] T018 [P] Create navigation data at `data/navigation.ts` with NavigationItem array (Home, About, Blog, FAQ, Careers)
- [ ] T019 [P] Create company info data at `data/company-info.ts` with mission, values, founding story, compliance badges

### Layout Components (Used by ALL pages)

- [ ] T020 Create Header component at `components/layout/Header.tsx` with navigation, logo, mobile menu toggle
- [ ] T021 Create Navigation component at `components/layout/Navigation.tsx` with responsive menu (desktop/mobile)
- [ ] T022 Create Footer component at `components/layout/Footer.tsx` with secondary navigation, contact placeholder, legal links
- [ ] T023 Create root layout at `app/layout.tsx` integrating Header and Footer with semantic HTML
- [ ] T024 Create global styles at `styles/globals.css` with Tailwind imports and custom CSS variables for brand colors

## Phase 3: User Story 1 - Product Discovery Landing Page (Priority: P1) (15 tasks)

**User Story**: A potential customer visits the website to understand what Nexus does and evaluate whether it solves their radiology workflow challenges.

**Goal**: Implement a compelling landing page showcasing Nexus product with value proposition, four main functions, measurable outcomes, target users, and clear CTAs.

**Independent Test**: Navigate to `/` and verify hero headline mentions "Nexus" and "radiology workflow governance", four product functions are displayed (Document Governance, Autonomous Triage, Diagnostic Tactics, In-Exam QA), measurable outcomes are shown (">95% critical issue detection"), and "Request Demo" CTA is visible.

**Acceptance Criteria**:
- ✅ Clear headline describing Nexus as radiology workflow governance system
- ✅ Four main functions displayed with descriptions
- ✅ Measurable outcomes visible ("100% autonomous pre-triage coverage", ">95% critical issue detection")
- ✅ Prominent "Request Demo" and "Learn More" CTAs
- ✅ User types clearly explained (radiologists, CMOs, technologists, administrators)

### Shared Components for Landing

- [ ] T025 [P] [US1] Create Button component at `components/shared/Button.tsx` with variants (primary, secondary, outline) and WCAG focus indicators
- [ ] T026 [P] [US1] Create Section component at `components/shared/Section.tsx` for consistent page section wrapper
- [ ] T027 [P] [US1] Create Card component at `components/shared/Card.tsx` for feature cards with hover effects

### Landing Page Components

- [ ] T028 [US1] Create Hero component at `components/landing/Hero.tsx` with headline, subheadline, primary/secondary CTAs, background image
- [ ] T029 [US1] Create Features component at `components/landing/Features.tsx` displaying four main product functions in grid layout
- [ ] T030 [US1] Create Outcomes component at `components/landing/Outcomes.tsx` showing measurable outcomes with statistics and icons
- [ ] T031 [US1] Create UserTypes section component at `components/landing/UserTypes.tsx` describing target user personas
- [ ] T032 [US1] Create CTA component at `components/landing/CTA.tsx` for call-to-action sections with configurable text/links

### Landing Page Implementation

- [ ] T033 [US1] Create landing page at `app/page.tsx` composing Hero, Features, Outcomes, UserTypes, and CTA components
- [ ] T034 [US1] Add placeholder images to `public/images/hero/` for hero section (WebP format, <500KB each)
- [ ] T035 [US1] Add SVG icons to `public/images/icons/` for product features and outcomes

### Landing Page Optimization

- [ ] T036 [US1] Implement responsive layout for landing page (mobile 320px, tablet 768px, desktop 1024px, large 1440px)
- [ ] T037 [US1] Add semantic HTML and ARIA labels to landing page components
- [ ] T038 [US1] Optimize landing page images using next/image with priority prop for above-the-fold images
- [ ] T039 [US1] Verify landing page meets 4.5:1 color contrast ratio for all text elements

## Phase 4: User Story 2 - Blog Content Discovery (Priority: P2) (18 tasks)

**User Story**: A visitor interested in medical imaging AI wants to explore thought leadership and educational content through blog posts.

**Goal**: Implement blog section with one featured post prominently displayed and a grid of 9 additional blog posts, all with mock content related to radiology AI.

**Independent Test**: Navigate to `/blog` and verify one featured blog post is displayed with large image, title, excerpt, author, date, and read time, plus a grid of 9 additional blog post cards with thumbnails, titles, excerpts, and metadata. Click on a blog post card to navigate to full post page at `/blog/[slug]`.

**Acceptance Criteria**:
- ✅ Featured blog post prominently displayed with large image
- ✅ Grid of 9 additional blog posts with thumbnails
- ✅ Each blog card displays title, excerpt, author, date, read time, category tags
- ✅ Category filtering/display ("AI in Radiology", "Clinical Workflows", etc.)
- ✅ Full blog post pages accessible via `/blog/[slug]`

### Mock Blog Data

- [ ] T040 [P] [US2] Create blog posts mock data at `data/blog-posts.ts` with 10 BlogPost objects (1 featured, 9 regular)
- [ ] T041 [P] [US2] Write realistic blog post content covering 5 categories: AI in Radiology, Clinical Workflows, Quality Assurance, Regulatory Compliance, Technology (2 posts per category, 500+ characters each)

### Blog Components

- [ ] T042 [P] [US2] Create BlogCard component at `components/blog/BlogCard.tsx` displaying title, excerpt, author, date, read time, featured image, category tags
- [ ] T043 [P] [US2] Create FeaturedPost component at `components/blog/FeaturedPost.tsx` with larger layout and prominent styling
- [ ] T044 [P] [US2] Create BlogGrid component at `components/blog/BlogGrid.tsx` for responsive grid layout of blog cards

### Blog Listing Page

- [ ] T045 [US2] Create blog listing page at `app/blog/page.tsx` displaying FeaturedPost component and BlogGrid with 9 non-featured posts
- [ ] T046 [US2] Add blog post images to `public/images/blog/` (10 WebP images, <300KB each) with descriptive alt text
- [ ] T047 [US2] Implement category badge/tag display for blog posts with color coding

### Individual Blog Post Pages

- [ ] T048 [US2] Create blog post template page at `app/blog/[slug]/page.tsx` with dynamic routing using Next.js generateStaticParams
- [ ] T049 [US2] Implement blog post layout with article semantic HTML, author info, publish date, read time, and full content
- [ ] T050 [US2] Add "Related Posts" section at bottom of blog post page showing 3 posts from same category
- [ ] T051 [US2] Add CTA at end of blog post ("Explore more posts", "Request Demo")

### Blog Optimization

- [ ] T052 [US2] Implement responsive layout for blog listing page (mobile-first grid: 1 column mobile, 2 columns tablet, 3 columns desktop)
- [ ] T053 [US2] Implement responsive typography for blog post content (readable line length, appropriate font sizes)
- [ ] T054 [US2] Optimize blog images with next/image (responsive srcset, lazy loading for below-fold images)
- [ ] T055 [US2] Add proper heading hierarchy (h1 for post title, h2 for sections) and semantic article structure
- [ ] T056 [US2] Implement meta tags for blog posts (Open Graph, Twitter Cards) for social sharing
- [ ] T057 [US2] Verify blog post pages meet WCAG 2.1 AA standards (contrast, keyboard navigation, screen reader compatibility)

## Phase 5: User Story 3 - Company Information & Trust Building (Priority: P3) (10 tasks)

**User Story**: A prospect evaluating Nexus wants to understand the company behind the product, including mission, team expertise, and company values.

**Goal**: Implement About page with company mission, team member profiles, company values, and regulatory compliance information.

**Independent Test**: Navigate to `/about` and verify mission statement is displayed, team member profiles show names/roles/bios/photos, company values are listed, and regulatory compliance badges (HIPAA, FDA 510(k), ISO 13485) are visible.

**Acceptance Criteria**:
- ✅ Compelling mission statement about improving radiology quality through AI
- ✅ Team member profiles with photos, names, roles, bios highlighting medical AI expertise
- ✅ Company values related to clinical safety, transparency, quality
- ✅ Regulatory compliance information (HIPAA, FDA 510(k), ISO 13485)
- ✅ CTA to contact team or request demo

### Mock Team Data

- [ ] T058 [P] [US3] Create team members mock data at `data/team-members.ts` with 3-5 TeamMember objects (founder/CEO, clinical lead, technical lead)

### About Page Implementation

- [ ] T059 [US3] Create About page at `app/about/page.tsx` with mission section, team grid, values section, compliance section, CTA
- [ ] T060 [US3] Add team member photos to `public/images/team/` (3-5 WebP images, <200KB each) with professional headshots
- [ ] T061 [US3] Create team member card layout with photo, name, role, bio, LinkedIn link (if provided)
- [ ] T062 [US3] Style company values as grid or list with icons/emphasis
- [ ] T063 [US3] Add regulatory compliance badges (HIPAA, FDA 510(k), ISO 13485) with tooltips explaining each

### About Page Optimization

- [ ] T064 [US3] Implement responsive layout for About page (mobile 1-column, tablet 2-column, desktop 3-column team grid)
- [ ] T065 [US3] Add semantic HTML and proper heading hierarchy (h1 for "About", h2 for sections)
- [ ] T066 [US3] Optimize team photos with next/image (consistent aspect ratio, lazy loading)
- [ ] T067 [US3] Verify About page meets accessibility standards (alt text for team photos, keyboard navigation for links)

## Phase 6: User Story 4 - Frequently Asked Questions (Priority: P4) (9 tasks)

**User Story**: A prospect has specific questions about Nexus (pricing, implementation, integration, compliance) and needs quick answers without scheduling a call.

**Goal**: Implement FAQ page with 10-15 questions organized by category using an accordion pattern (expandable/collapsible).

**Independent Test**: Navigate to `/faq` and verify questions are organized into categories (Product Features, Implementation, Security & Compliance, Pricing, Support), clicking a question expands its answer while collapsing others, and FAQ content includes answers about PACS/RIS integration and HIPAA compliance.

**Acceptance Criteria**:
- ✅ Questions organized into 5 categories
- ✅ Accordion pattern with only one question expanded at a time
- ✅ Hospital IT team finds PACS/RIS integration answers
- ✅ CMO finds HIPAA compliance and FDA clearance answers
- ✅ CTA to contact support if answer not found

### Mock FAQ Data

- [ ] T068 [P] [US4] Create FAQ items mock data at `data/faq-items.ts` with 10-15 FAQItem objects covering all 5 categories (Product Features, Implementation, Security & Compliance, Pricing, Support)

### FAQ Components

- [ ] T069 [P] [US4] Create Accordion component at `components/faq/Accordion.tsx` with expandable/collapsible functionality (only one open at a time)
- [ ] T070 [P] [US4] Style Accordion with smooth transitions, clear visual indicators (expand/collapse icons), and WCAG keyboard navigation (Enter/Space to toggle)

### FAQ Page Implementation

- [ ] T071 [US4] Create FAQ page at `app/faq/page.tsx` grouping questions by category and rendering Accordion components
- [ ] T072 [US4] Add category headers (h2) for each FAQ category with visual separation
- [ ] T073 [US4] Add CTA at bottom of FAQ page ("Still have questions? Contact us")

### FAQ Optimization

- [ ] T074 [US4] Implement responsive layout for FAQ page (full-width on mobile, max-width container on desktop)
- [ ] T075 [US4] Add semantic HTML with proper heading hierarchy and article/section structure
- [ ] T076 [US4] Verify FAQ accordion meets accessibility standards (ARIA attributes, keyboard navigation, screen reader compatibility)

## Phase 7: User Story 5 - Career Opportunities & Talent Acquisition (Priority: P5) (9 tasks)

**User Story**: A prospective candidate wants to explore career opportunities, understand company culture, and apply to open roles.

**Goal**: Implement Careers page with company culture description, benefits overview, and 3-5 mock job listings with application mechanism.

**Independent Test**: Navigate to `/careers` and verify company culture description is displayed, benefits information is shown, 3-5 open positions are listed with titles like "Senior ML Engineer", "Clinical Product Specialist", clicking a job listing shows detailed description/requirements/responsibilities, and "Apply Now" button is visible.

**Acceptance Criteria**:
- ✅ Compelling company culture and mission description
- ✅ Benefits information (remote/hybrid options, growth opportunities)
- ✅ 3-5 open positions with engineering/product/clinical mix
- ✅ Detailed job descriptions with requirements and responsibilities
- ✅ "Apply Now" button/link for each position

### Mock Jobs Data

- [ ] T077 [P] [US5] Create job openings mock data at `data/job-openings.ts` with 3-5 JobOpening objects (Senior ML Engineer, Clinical Product Specialist, Full-Stack Developer)

### Careers Page Implementation

- [ ] T078 [US5] Create Careers page at `app/careers/page.tsx` with culture section, benefits section, job listings section
- [ ] T079 [US5] Create job listing card layout with title, department, location, employment type, and "View Details" button
- [ ] T080 [US5] Implement expandable job details (click to expand/collapse) showing full description, requirements, responsibilities, and "Apply Now" link
- [ ] T081 [US5] Add "Apply Now" buttons linking to mailto: or external application system

### Careers Page Optimization

- [ ] T082 [US5] Implement responsive layout for Careers page (stacked layout on mobile, side-by-side on tablet/desktop)
- [ ] T083 [US5] Add semantic HTML and proper heading hierarchy (h1 for "Careers", h2 for sections, h3 for job titles)
- [ ] T084 [US5] Add location and employment type badges with visual distinction (Remote/Hybrid/On-site, Full-time)
- [ ] T085 [US5] Verify Careers page meets accessibility standards (keyboard navigation, ARIA labels for expand/collapse)

## Phase 8: Polish & Cross-Cutting Concerns (2 tasks)

**Goal**: Final polish, performance optimization, and quality gates to ensure production readiness across all pages.

**Independent Test**: Run full test suite (`npm run test`, `npm run test:e2e`), Lighthouse audit achieves 90+ on all metrics, and build succeeds producing static files to `/out` directory.

### Cross-Cutting Tasks

- [ ] T086 Run Lighthouse CI audit on all pages and verify scores >= 90 on Performance, Accessibility, Best Practices, SEO
- [ ] T087 Create README.md at repository root with setup instructions, build commands, deployment guide, and link to quickstart.md

---

## Dependency Graph

```
Phase 1 (Setup) → Phase 2 (Foundation) → Phase 3-7 (User Stories in parallel) → Phase 8 (Polish)

Phase 1: Project Setup & Foundation
  ↓ (Blocking: All user stories need project setup)
Phase 2: Shared Foundation
  ↓ (Blocking: All user stories need types, shared components, layout)
Phase 3: User Story 1 (P1) - Landing Page ✓ MVP
  ↓ (Optional: Can proceed independently)
Phase 4: User Story 2 (P2) - Blog ✓ Post-MVP
  ↓ (Optional: Can proceed independently)
Phase 5: User Story 3 (P3) - About ✓ Post-MVP
  ↓ (Optional: Can proceed independently)
Phase 6: User Story 4 (P4) - FAQ ✓ Post-MVP
  ↓ (Optional: Can proceed independently)
Phase 7: User Story 5 (P5) - Careers ✓ Post-MVP
  ↓
Phase 8: Polish & Cross-Cutting
```

**Key Dependencies**:
- **Phase 1 blocks all others**: Project must be initialized before any code can be written
- **Phase 2 blocks Phases 3-7**: Shared components (Header, Footer, layout) and types needed by all user stories
- **Phases 3-7 are INDEPENDENT**: User stories can be implemented in parallel or in any order after Phase 2 completes
- **Phase 8 runs last**: Quality gates and polish applied after all features complete

## Parallel Execution Opportunities

Tasks marked with `[P]` can be executed in parallel with other `[P]` tasks in the same phase, significantly reducing implementation time.

### Phase 1 Parallel Opportunities (6 tasks in parallel)
- T003, T004, T005, T006 (dependency installations) can run simultaneously
- T009, T010, T011, T012, T013 (configuration files) can run simultaneously after installations

### Phase 2 Parallel Opportunities (7 tasks in parallel)
- T016, T017 (utility files) can run simultaneously
- T018, T019 (mock data files) can run simultaneously
- T020, T021, T022 (layout components) can run simultaneously after types are defined

### Phase 3 Parallel Opportunities (5 tasks in parallel)
- T025, T026, T027 (shared components) can run simultaneously
- T034, T035 (image assets) can be added in parallel with component development

### Phase 4 Parallel Opportunities (8 tasks in parallel)
- T040, T041 (mock blog data) can run simultaneously
- T042, T043, T044 (blog components) can run simultaneously
- T046, T047 (blog assets and styling) can run in parallel with page implementation

### Phase 5 Parallel Opportunities (2 tasks in parallel)
- T058 (team data) can run in parallel with About page implementation

### Phase 6 Parallel Opportunities (3 tasks in parallel)
- T068 (FAQ data) can run in parallel with FAQ page implementation
- T069, T070 (Accordion component) can run simultaneously

### Phase 7 Parallel Opportunities (2 tasks in parallel)
- T077 (jobs data) can run in parallel with Careers page implementation

**Estimated Time Savings**: With proper parallel execution, implementation time can be reduced by approximately 30-40%.

## Implementation Strategy

### MVP Scope (Minimum Viable Product)

**MVP = Phase 1 + Phase 2 + Phase 3 (User Story 1 only)**

The MVP consists of just the landing page, which is the primary entry point and most critical for validation:
- **Phase 1**: Project setup (T001-T014)
- **Phase 2**: Shared foundation (T015-T024)
- **Phase 3**: Landing page (T025-T039)

**MVP Deliverable**: A fully functional, performant, accessible landing page showcasing Nexus product that can be deployed and tested with real users.

**Post-MVP**: Incrementally add User Stories 2-5 in priority order based on user feedback.

### Incremental Delivery

After MVP, deliver each user story as an independent increment:

1. **Increment 1 (MVP)**: Landing Page (User Story 1)
   - Deploy and validate with stakeholders
   - Gather feedback on messaging, design, CTAs

2. **Increment 2**: Add Blog (User Story 2)
   - Provides content marketing and SEO value
   - Can be deployed independently

3. **Increment 3**: Add About Page (User Story 3)
   - Builds trust and credibility
   - Can be deployed independently

4. **Increment 4**: Add FAQ (User Story 4)
   - Reduces support burden
   - Can be deployed independently

5. **Increment 5**: Add Careers (User Story 5)
   - Enables talent acquisition
   - Can be deployed independently

6. **Increment 6**: Polish & Optimization (Phase 8)
   - Final performance tuning
   - Quality gates validation

### Testing Strategy

**Unit Tests** (Vitest + React Testing Library):
- Test shared components in isolation (Button, Card, Accordion)
- Test layout components (Header, Footer, Navigation)
- Test utility functions (helpers, date formatting)
- Run: `npm run test`

**E2E Tests** (Playwright):
- Test user flows for each user story acceptance scenario
- Test responsive layouts at all breakpoints (320px, 768px, 1024px, 1440px)
- Test keyboard navigation and focus management
- Test cross-browser compatibility (Chrome, Firefox, Safari, Mobile)
- Run: `npm run test:e2e`

**Accessibility Tests** (axe-core via Playwright):
- Automated WCAG 2.1 AA compliance checks
- Manual keyboard navigation testing
- Screen reader compatibility validation
- Color contrast verification
- Run: `npm run test:e2e -- accessibility.spec.ts`

**Performance Tests** (Lighthouse CI):
- Verify Performance, Accessibility, Best Practices, SEO scores >= 90
- Verify Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- Verify page weight < 2MB uncompressed
- Verify 3G load time < 3 seconds
- Run: `npm run lighthouse`

### Quality Gates

Before merging any user story branch to main, all quality gates must pass:

1. ✅ Type checking passes (`npm run type-check`)
2. ✅ Linting passes (`npm run lint`)
3. ✅ Formatting passes (`npm run format:check`)
4. ✅ Unit tests pass (`npm run test`)
5. ✅ E2E tests pass (`npm run test:e2e`)
6. ✅ Accessibility tests pass (zero critical violations)
7. ✅ Lighthouse CI passes (all scores >= 90)
8. ✅ Build succeeds (`npm run build`)
9. ✅ Visual regression tests pass (if implemented)
10. ✅ Manual cross-browser testing completed

### Deployment Strategy

**Deployment Target**: Vercel (recommended), Netlify, or GitHub Pages

**Build Command**: `npm run build`
**Output Directory**: `/out`

**Deployment Steps**:
1. Merge feature branch to `main`
2. CI/CD pipeline runs all quality gates
3. If gates pass, automatic deployment to production
4. Smoke test production deployment
5. Monitor performance and error rates

**Rollback Plan**: If production issues detected, revert commit and redeploy previous version.

---

## Summary

**Total Tasks**: 87 tasks
- Phase 1 (Setup): 14 tasks
- Phase 2 (Foundation): 10 tasks
- Phase 3 (User Story 1 - Landing): 15 tasks
- Phase 4 (User Story 2 - Blog): 18 tasks
- Phase 5 (User Story 3 - About): 10 tasks
- Phase 6 (User Story 4 - FAQ): 9 tasks
- Phase 7 (User Story 5 - Careers): 9 tasks
- Phase 8 (Polish): 2 tasks

**Parallel Opportunities**: 33 tasks marked with `[P]` can run in parallel

**MVP Scope**: 39 tasks (Phases 1-3 only)

**Independent User Stories**: After Phase 2, all user stories (Phases 3-7) can be implemented in any order or in parallel, enabling flexible prioritization based on business needs and team capacity.

**Estimated Timeline**:
- Sequential implementation: ~15-20 days
- With parallel execution: ~10-14 days
- MVP only: ~5-7 days
