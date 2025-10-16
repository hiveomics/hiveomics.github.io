# Data Model: Modern Startup Landing Website

**Feature**: Modern Startup Landing Website
**Date**: 2025-10-16
**Phase**: Phase 1 - Data Model Design

## Overview

This document defines the data structures for the static landing website. Since this is a static site with no database, all data is embedded in TypeScript files in the `/data` directory. The data model focuses on content entities that power the five main pages.

## Core Entities

### 1. BlogPost

Represents an individual blog article with full metadata for display on blog listing page and individual blog post pages.

**Fields**:

| Field | Type | Required | Description | Validation Rules |
|-------|------|----------|-------------|------------------|
| slug | string | Yes | URL-safe identifier for the blog post | Lowercase, hyphens only, unique across all posts |
| title | string | Yes | Display title of the blog post | Max 100 characters, non-empty |
| excerpt | string | Yes | Short summary for blog cards | Max 200 characters, non-empty |
| content | string | Yes | Full blog post content (markdown or plain text) | Min 500 characters |
| author | string | Yes | Author name | Non-empty |
| publishedDate | string | Yes | Publication date in ISO format | Valid ISO 8601 date (YYYY-MM-DD) |
| readTime | string | Yes | Estimated reading time | Format: "{number} min" (e.g., "8 min") |
| category | CategoryType | Yes | Blog post category | One of: 'AI in Radiology', 'Clinical Workflows', 'Quality Assurance', 'Regulatory Compliance', 'Technology' |
| featuredImage | string | Yes | Path to featured image | Valid file path, WebP format preferred |
| featured | boolean | Yes | Whether this is the featured blog post | Only one post should have featured=true |
| tags | string[] | Yes | Topic tags for filtering/categorization | Array of 1-5 tags, each max 20 characters |

**Relationships**:
- One blog post can be featured (featured=true)
- Blog posts grouped by category for filtering
- Tags enable cross-category discovery

**State/Lifecycle**:
- Static: No state changes (content immutable after build)
- All posts "published" at build time
- No draft/archived states needed for MVP

**Example**:
```ts
{
  slug: 'ai-powered-radiology-workflows',
  title: 'How AI is Transforming Radiology Workflows in 2025',
  excerpt: 'Explore the latest advances in AI-powered medical imaging and their impact on hospital radiology departments.',
  content: 'Full markdown content here...',
  author: 'Dr. Sarah Chen',
  publishedDate: '2025-09-15',
  readTime: '8 min',
  category: 'AI in Radiology',
  featuredImage: '/images/blog/ai-radiology.webp',
  featured: true,
  tags: ['AI', 'Workflow', 'Automation', 'Machine Learning']
}
```

---

### 2. JobOpening

Represents a career opportunity listing on the Careers page.

**Fields**:

| Field | Type | Required | Description | Validation Rules |
|-------|------|----------|-------------|------------------|
| id | string | Yes | Unique identifier | UUID or slug format, unique |
| title | string | Yes | Job title | Max 80 characters, non-empty |
| department | string | Yes | Department/team | E.g., "Engineering", "Product", "Clinical" |
| location | LocationType | Yes | Work location type | One of: 'Remote', 'On-site', 'Hybrid' |
| type | EmploymentType | Yes | Employment type | One of: 'Full-time', 'Part-time', 'Contract' |
| description | string | Yes | Job overview/summary | Min 100 characters, max 500 characters |
| requirements | string[] | Yes | Required qualifications | Array of 3-10 items, each max 200 characters |
| responsibilities | string[] | Yes | Key responsibilities | Array of 3-10 items, each max 200 characters |
| applyLink | string | Yes | Application link or email | Valid URL or mailto: link |

**Relationships**:
- Grouped by department for display
- Filterable by location and type

**State/Lifecycle**:
- Static: No state changes
- All jobs considered "open" at build time
- To close a job, remove from data file

**Example**:
```ts
{
  id: 'senior-ml-engineer-001',
  title: 'Senior ML Engineer - Medical Imaging',
  department: 'Engineering',
  location: 'Hybrid',
  type: 'Full-time',
  description: 'Join our team building AI-powered radiology tools that improve patient outcomes...',
  requirements: [
    'MS or PhD in Computer Science, ML, or related field',
    '5+ years experience in machine learning',
    'Experience with medical imaging (DICOM) preferred',
    'Proficiency in Python, PyTorch/TensorFlow'
  ],
  responsibilities: [
    'Design and implement ML models for medical image analysis',
    'Collaborate with radiologists to validate model performance',
    'Optimize models for production deployment',
    'Contribute to research publications'
  ],
  applyLink: 'mailto:careers@example.com?subject=Application: Senior ML Engineer'
}
```

---

### 3. FAQItem

Represents a single FAQ question and answer pair.

**Fields**:

| Field | Type | Required | Description | Validation Rules |
|-------|------|----------|-------------|------------------|
| id | string | Yes | Unique identifier | UUID or slug format, unique |
| question | string | Yes | The FAQ question | Max 150 characters, ends with "?" |
| answer | string | Yes | Detailed answer | Min 50 characters, max 1000 characters |
| category | FAQCategory | Yes | Question category | One of: 'Product Features', 'Implementation', 'Security & Compliance', 'Pricing', 'Support' |
| order | number | Yes | Display order within category | Positive integer, unique within category |

**Relationships**:
- Grouped by category for organized display
- Ordered within category for logical flow

**State/Lifecycle**:
- Static: No state changes
- Order determines display sequence in accordion

**Example**:
```ts
{
  id: 'faq-001',
  question: 'Does Nexus integrate with our existing PACS system?',
  answer: 'Yes, Nexus integrates seamlessly with all major PACS systems via standard DICOM protocols. No modifications to your existing infrastructure are required...',
  category: 'Implementation',
  order: 1
}
```

---

### 4. TeamMember

Represents a team member profile for the About page.

**Fields**:

| Field | Type | Required | Description | Validation Rules |
|-------|------|----------|-------------|------------------|
| name | string | Yes | Full name | Non-empty, max 100 characters |
| role | string | Yes | Job title/role | Non-empty, max 80 characters |
| bio | string | Yes | Short biography | Min 100 characters, max 500 characters |
| photo | string | Yes | Profile photo path | Valid file path, WebP format preferred |
| linkedin | string | No | LinkedIn profile URL | Valid LinkedIn URL if provided |

**Relationships**:
- Displayed as grid on About page
- No hierarchical relationships (flat structure)

**State/Lifecycle**:
- Static: No state changes
- Order in array determines display order

**Example**:
```ts
{
  name: 'Dr. Artem Asinov',
  role: 'Founder & CEO',
  bio: 'Board-certified radiologist with 15+ years experience in medical imaging AI. Previously led AI initiatives at major healthcare institutions...',
  photo: '/images/team/artem-asinov.webp',
  linkedin: 'https://www.linkedin.com/in/example'
}
```

---

### 5. NavigationItem

Represents a navigation menu item for header and footer.

**Fields**:

| Field | Type | Required | Description | Validation Rules |
|-------|------|----------|-------------|------------------|
| label | string | Yes | Display text | Non-empty, max 30 characters |
| href | string | Yes | Destination URL | Valid internal path (starts with /) or external URL |
| order | number | Yes | Display order in menu | Positive integer, unique |
| external | boolean | No | Whether link is external | Defaults to false, auto-detected from href |

**Relationships**:
- Ordered by `order` field for display sequence
- Same data used for header and footer (footer may be subset)

**State/Lifecycle**:
- Static: No state changes
- Active state determined by current route

**Example**:
```ts
{
  label: 'Home',
  href: '/',
  order: 1,
  external: false
},
{
  label: 'Blog',
  href: '/blog',
  order: 2,
  external: false
}
```

---

### 6. CompanyInfo

Represents static company information for the About page.

**Fields**:

| Field | Type | Required | Description | Validation Rules |
|-------|------|----------|-------------|------------------|
| mission | string | Yes | Company mission statement | Min 100 characters, max 500 characters |
| values | string[] | Yes | Core company values | Array of 3-5 items, each 50-150 characters |
| founding | object | Yes | Founding story | Contains: year (number), story (string) |
| compliance | string[] | Yes | Regulatory compliance badges | E.g., ['HIPAA', 'FDA 510(k)', 'ISO 13485'] |

**Relationships**:
- Singleton (only one instance)
- Displayed on About page

**State/Lifecycle**:
- Static: No state changes

**Example**:
```ts
{
  mission: 'To improve patient outcomes and radiology efficiency through AI-powered quality assurance and workflow governance.',
  values: [
    'Clinical Safety First: Every decision prioritizes patient safety and diagnostic accuracy',
    'Transparency: AI recommendations are explainable and auditable',
    'Quality Excellence: Relentless pursuit of clinical and technical excellence'
  ],
  founding: {
    year: 2023,
    story: 'Founded by radiologists and AI researchers who saw the need for better quality assurance in medical imaging...'
  },
  compliance: ['HIPAA Compliant', 'FDA 510(k) Pending', 'ISO 13485 Certified']
}
```

---

## Data Directory Structure

```
data/
├── blog-posts.ts        # BlogPost[] - 10 blog posts
├── job-openings.ts      # JobOpening[] - 3-5 job listings
├── faq-items.ts         # FAQItem[] - 10-15 FAQ items
├── team-members.ts      # TeamMember[] - Team profiles
├── navigation.ts        # NavigationItem[] - Menu structure
└── company-info.ts      # CompanyInfo - Singleton
```

## Type Enumerations

### CategoryType
```ts
type CategoryType =
  | 'AI in Radiology'
  | 'Clinical Workflows'
  | 'Quality Assurance'
  | 'Regulatory Compliance'
  | 'Technology';
```

### LocationType
```ts
type LocationType = 'Remote' | 'On-site' | 'Hybrid';
```

### EmploymentType
```ts
type EmploymentType = 'Full-time' | 'Part-time' | 'Contract';
```

### FAQCategory
```ts
type FAQCategory =
  | 'Product Features'
  | 'Implementation'
  | 'Security & Compliance'
  | 'Pricing'
  | 'Support';
```

## Validation Strategy

**Build-Time Validation**: TypeScript compiler enforces type safety at build time. Invalid data causes build failure.

**Runtime Validation** (if needed): Zod schemas can validate data structure at build time for additional safety:

```ts
import { z } from 'zod';

const BlogPostSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1).max(100),
  excerpt: z.string().min(1).max(200),
  content: z.string().min(500),
  author: z.string().min(1),
  publishedDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  readTime: z.string().regex(/^\d+ min$/),
  category: z.enum(['AI in Radiology', 'Clinical Workflows', 'Quality Assurance', 'Regulatory Compliance', 'Technology']),
  featuredImage: z.string().min(1),
  featured: z.boolean(),
  tags: z.array(z.string().max(20)).min(1).max(5)
});
```

## Content Guidelines

### Blog Posts (10 total)
- 1 featured post (featured=true)
- 9 additional posts (featured=false)
- Distribute across all 5 categories (2 posts per category)
- Topics related to: radiology AI, medical imaging workflows, healthcare tech, quality assurance, regulatory compliance
- Mock realistic content (not Lorem ipsum)

### Job Openings (3-5 total)
- Mix of Engineering, Product, Clinical roles
- Variety of locations (Remote, Hybrid, On-site)
- All Full-time for MVP

### FAQ Items (10-15 total)
- Cover all 5 categories
- Start with most common questions (Product Features)
- Technical questions (Implementation) come second
- Compliance questions important for medical AI
- Pricing and Support questions toward end

### Team Members (3-5 profiles)
- Include founder/CEO
- Mix of clinical and technical leadership
- Emphasize medical AI expertise
- Regulatory compliance experience

## Data Export Strategy

All data exported from `/data` directory and imported where needed:

```ts
// In a page component
import { blogPosts } from '@/data/blog-posts';
import { faqItems } from '@/data/faq-items';

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    // Render blog posts...
  );
}
```

## Performance Considerations

- All data loaded at build time (zero runtime data fetching)
- Tree shaking removes unused data from bundles
- Data files are code-split by page (blog data only loaded on blog pages)
- Total data size: ~50-100KB uncompressed (well within 2MB budget)

## Accessibility Considerations

- All images require alt text (enforced by TypeScript)
- Team member photos include descriptive alt text (name + role)
- Blog images include descriptive alt text (not just title)
- Navigation items have semantic labels

## SEO Considerations

- Blog post slugs are SEO-friendly (lowercase, hyphens)
- Titles optimized for search (clear, descriptive)
- Excerpts serve as meta descriptions
- Published dates help with content freshness
- Categories and tags improve discoverability
