# Quickstart Guide: Modern Startup Landing Website

**Feature**: Modern Startup Landing Website
**Branch**: `001-modern-landing-website`
**Date**: 2025-10-16

## Overview

This guide provides step-by-step instructions to set up, develop, test, and deploy the Hivesite landing website built with Next.js 15, React 19, and Tailwind CSS 4.x.

## Prerequisites

- **Node.js**: 20.x or later (LTS recommended)
- **npm**: 10.x or later (comes with Node.js)
- **Git**: For version control
- **Code Editor**: VS Code recommended (with TypeScript and Tailwind CSS IntelliSense extensions)

## Initial Setup

### 1. Clone Repository (if not already done)

```bash
cd /Users/artem/Projects/hv/repo/hivesite
git checkout 001-modern-landing-website
```

### 2. Install Dependencies

```bash
npm install
```

This installs:
- Next.js 15
- React 19
- Tailwind CSS 4.x
- TypeScript 5.x
- Vitest + React Testing Library
- Playwright
- ESLint + Prettier
- sharp (for image optimization)
- axe-core (for accessibility testing)

### 3. Verify Installation

```bash
npm run --help
```

You should see available scripts including `dev`, `build`, `test`, etc.

## Development Workflow

### Start Development Server

```bash
npm run dev
```

- Opens http://localhost:3000
- Hot module reloading enabled
- Changes auto-refresh in browser

### Project Structure Reference

```
/
├── app/                  # Next.js 15 App Router
│   ├── layout.tsx       # Root layout (Header + Footer)
│   ├── page.tsx         # Landing page (/)
│   ├── about/page.tsx   # About page
│   ├── blog/            # Blog pages
│   ├── careers/page.tsx # Careers page
│   └── faq/page.tsx     # FAQ page
│
├── components/          # React components
│   ├── layout/         # Header, Footer, Navigation
│   ├── landing/        # Hero, Features, Outcomes, CTA
│   ├── blog/           # BlogCard, FeaturedPost, BlogGrid
│   ├── shared/         # Button, Card, Section
│   └── faq/            # Accordion
│
├── data/               # Mock content (TypeScript files)
│   ├── blog-posts.ts
│   ├── job-openings.ts
│   ├── faq-items.ts
│   ├── team-members.ts
│   ├── navigation.ts
│   └── company-info.ts
│
├── lib/                # Utilities
│   ├── types.ts        # Shared TypeScript types
│   ├── constants.ts    # Site-wide constants
│   └── helpers.ts      # Helper functions
│
├── public/             # Static assets
│   └── images/         # Images (WebP format)
│
└── styles/
    └── globals.css     # Tailwind imports + custom styles
```

### Create New Pages

#### Example: Add a new page

```bash
# Create new route
mkdir app/new-page
touch app/new-page/page.tsx
```

```tsx
// app/new-page/page.tsx
export default function NewPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold">New Page</h1>
      <p className="mt-4 text-lg">Content goes here.</p>
    </main>
  );
}
```

### Add Mock Content

#### Example: Add a new blog post

```ts
// data/blog-posts.ts
import { BlogPost } from '@/lib/types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'new-post',
    title: 'New Blog Post Title',
    excerpt: 'Short summary of the blog post...',
    content: `Full blog post content here...`,
    author: 'Author Name',
    publishedDate: '2025-10-16',
    readTime: '5 min',
    category: 'Technology',
    featuredImage: '/images/blog/new-post.webp',
    featured: false,
    tags: ['Technology', 'Innovation']
  },
  // ... existing posts
];
```

### Create Components

#### Example: Create a new reusable component

```tsx
// components/shared/Badge.tsx
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success';
}

export function Badge({ children, variant = 'primary' }: BadgeProps) {
  const variantClasses = {
    primary: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}
```

### Styling with Tailwind CSS

```tsx
// Use Tailwind utility classes
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
    Responsive Heading
  </h1>
  <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none">
    CTA Button
  </button>
</div>
```

**Breakpoints**:
- `sm:` - 768px (tablet)
- `md:` - 1024px (desktop)
- `lg:` - 1440px (large desktop)

## Testing

### Unit Tests (Vitest)

```bash
# Run all unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

#### Example: Component test

```tsx
// tests/components/Button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/shared/Button';

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    screen.getByRole('button').click();
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
```

### E2E Tests (Playwright)

```bash
# Run E2E tests
npm run test:e2e

# Run E2E tests in UI mode
npm run test:e2e:ui

# Run E2E tests in specific browser
npm run test:e2e -- --project=chromium
```

#### Example: E2E test

```ts
// tests/e2e/landing.spec.ts
import { test, expect } from '@playwright/test';

test('landing page displays hero section', async ({ page }) => {
  await page.goto('/');

  // Check hero headline
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Nexus');

  // Check CTA button
  await expect(page.getByRole('link', { name: /request demo/i })).toBeVisible();
});

test('navigation links work', async ({ page }) => {
  await page.goto('/');

  // Click on About link
  await page.click('text=About');
  await expect(page).toHaveURL('/about');
});
```

### Accessibility Tests

```bash
# Run accessibility tests
npm run test:a11y
```

#### Example: Accessibility test

```ts
// tests/e2e/accessibility.spec.ts
import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

test('landing page passes accessibility audit', async ({ page }) => {
  await page.goto('/');
  await injectAxe(page);

  await checkA11y(page, null, {
    detailedReport: true,
    detailedReportOptions: { html: true }
  });
});
```

### Performance Tests (Lighthouse CI)

```bash
# Run Lighthouse audit
npm run lighthouse

# or use Lighthouse CI
npm run lighthouse:ci
```

## Building for Production

### Create Static Export

```bash
npm run build
```

This:
1. Runs TypeScript type checking
2. Compiles Next.js app with static export
3. Optimizes images (WebP conversion)
4. Generates static HTML/CSS/JS to `/out` directory
5. Tree-shakes unused code
6. Minifies output

### Test Production Build Locally

```bash
npm run start
```

Serves production build at http://localhost:3000 for testing.

### Verify Build Output

```bash
ls -lah out/
```

You should see:
- `index.html` - Landing page
- `about.html` - About page
- `blog.html` - Blog listing page
- `blog/[slug].html` - Individual blog post pages
- `careers.html` - Careers page
- `faq.html` - FAQ page
- `_next/` - Next.js assets (JS, CSS, images)

## Code Quality

### Linting

```bash
# Run ESLint
npm run lint

# Fix auto-fixable issues
npm run lint:fix
```

### Formatting

```bash
# Format code with Prettier
npm run format

# Check formatting without changes
npm run format:check
```

### Type Checking

```bash
# TypeScript type check
npm run type-check
```

## Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow prompts**:
   - Link to existing project or create new
   - Vercel auto-detects Next.js configuration
   - Static export (`output: 'export'`) automatically applied

4. **Access deployment**:
   - Get preview URL (e.g., `https://hivesite-xyz.vercel.app`)
   - Production URL after merging to main branch

### Deploy to Netlify

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Build**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   ```bash
   netlify deploy --dir=out --prod
   ```

4. **Or connect Git repo**:
   - Go to Netlify dashboard
   - Click "Add new site" → "Import an existing project"
   - Connect Git repository
   - Build command: `npm run build`
   - Publish directory: `out`

### Deploy to GitHub Pages

1. **Update `next.config.js`**:
   ```js
   module.exports = {
     output: 'export',
     basePath: '/hivesite', // If not using custom domain
     images: {
       unoptimized: true // Required for GitHub Pages
     }
   };
   ```

2. **Build**:
   ```bash
   npm run build
   ```

3. **Deploy with GitHub Actions** (`.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 20
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

### Deploy to AWS S3 + CloudFront

1. **Build**:
   ```bash
   npm run build
   ```

2. **Create S3 bucket** (AWS Console or CLI):
   ```bash
   aws s3 mb s3://hivesite-landing
   ```

3. **Enable static website hosting**:
   ```bash
   aws s3 website s3://hivesite-landing --index-document index.html
   ```

4. **Upload files**:
   ```bash
   aws s3 sync out/ s3://hivesite-landing --delete
   ```

5. **Create CloudFront distribution** (for CDN and HTTPS):
   - Origin: S3 bucket
   - Origin Path: `/`
   - Viewer Protocol Policy: Redirect HTTP to HTTPS
   - Allowed HTTP Methods: GET, HEAD
   - Compress Objects Automatically: Yes

6. **Update DNS** to point to CloudFront distribution

## CI/CD Pipeline

### GitHub Actions Workflow

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main, 001-modern-landing-website]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Type check
        run: npm run type-check

      - name: Lint
        run: npm run lint

      - name: Format check
        run: npm run format:check

      - name: Unit tests
        run: npm run test

      - name: Build
        run: npm run build

      - name: E2E tests
        run: npm run test:e2e

      - name: Lighthouse CI
        run: npm run lighthouse:ci
        env:
          LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}
```

**Required gates**:
- ✅ Type checking passes
- ✅ Linting passes
- ✅ Formatting passes
- ✅ Unit tests pass
- ✅ Build succeeds
- ✅ E2E tests pass
- ✅ Lighthouse score >= 90 on all metrics

## Troubleshooting

### Build Errors

**Error**: `Module not found: Can't resolve '@/components/...'`

**Solution**: Check `tsconfig.json` paths configuration:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

**Error**: `Image optimization error`

**Solution**: Ensure sharp is installed:
```bash
npm install sharp
```

### Performance Issues

**Issue**: Lighthouse score < 90

**Solution**:
1. Check image sizes (should be < 500KB each)
2. Verify WebP format usage
3. Ensure code splitting (automatic with Next.js)
4. Check for render-blocking resources
5. Use `priority` prop on above-the-fold images

### Accessibility Issues

**Issue**: axe-core reports violations

**Common fixes**:
1. Add `alt` text to all images
2. Ensure color contrast ratios (4.5:1 min)
3. Add ARIA labels to icon-only buttons
4. Fix heading hierarchy (don't skip levels)
5. Ensure keyboard navigation works

## Next Steps

1. **Implement Features**: See `tasks.md` (created by `/speckit.tasks` command)
2. **Add Content**: Fill in mock blog posts, job listings, FAQ items
3. **Design System**: Establish consistent colors, typography, spacing
4. **Responsive Testing**: Test on real devices (iOS, Android)
5. **Performance Monitoring**: Set up monitoring for production

## Resources

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React 19 Documentation](https://react.dev)
- [Playwright Documentation](https://playwright.dev)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Lighthouse Documentation](https://developer.chrome.com/docs/lighthouse/)

## Support

For questions or issues:
- Check `specs/001-modern-landing-website/plan.md` for implementation details
- Check `specs/001-modern-landing-website/research.md` for technical decisions
- Check `specs/001-modern-landing-website/data-model.md` for data structures
