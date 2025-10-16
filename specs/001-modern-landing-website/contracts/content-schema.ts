/**
 * Content Schema - Type Definitions for Hivesite Landing Website
 *
 * This file defines TypeScript interfaces for all content entities used across
 * the static landing website. These types ensure type safety for blog posts,
 * job listings, FAQ items, team profiles, and navigation structure.
 *
 * All content is stored as TypeScript files in the /data directory and validated
 * at build time.
 *
 * @version 1.0.0
 * @date 2025-10-16
 */

import type { ComponentType } from 'react';

// ============================================================================
// Type Enumerations
// ============================================================================

/**
 * Blog post categories for content organization and filtering
 */
export type CategoryType =
  | 'AI in Radiology'
  | 'Clinical Workflows'
  | 'Quality Assurance'
  | 'Regulatory Compliance'
  | 'Technology';

/**
 * Work location types for job openings
 */
export type LocationType = 'Remote' | 'On-site' | 'Hybrid';

/**
 * Employment types for job listings
 */
export type EmploymentType = 'Full-time' | 'Part-time' | 'Contract';

/**
 * FAQ categories for organized display
 */
export type FAQCategory =
  | 'Product Features'
  | 'Implementation'
  | 'Security & Compliance'
  | 'Pricing'
  | 'Support';

// ============================================================================
// Core Content Interfaces
// ============================================================================

/**
 * BlogPost - Represents an individual blog article
 *
 * Blog posts are displayed on the /blog listing page and have individual pages
 * at /blog/[slug]. One post can be featured for prominent display.
 *
 * @example
 * {
 *   slug: 'ai-powered-radiology-workflows',
 *   title: 'How AI is Transforming Radiology Workflows in 2025',
 *   excerpt: 'Explore the latest advances in AI-powered medical imaging...',
 *   content: 'Full blog post content here...',
 *   author: 'Dr. Sarah Chen',
 *   publishedDate: '2025-09-15',
 *   readTime: '8 min',
 *   category: 'AI in Radiology',
 *   featuredImage: '/images/blog/ai-radiology.webp',
 *   featured: true,
 *   tags: ['AI', 'Workflow', 'Automation']
 * }
 */
export interface BlogPost {
  /** URL-safe slug for routing (lowercase, hyphens only) */
  slug: string;

  /** Display title (max 100 characters) */
  title: string;

  /** Short summary for blog cards (max 200 characters) */
  excerpt: string;

  /** Full blog post content (markdown or plain text, min 500 characters) */
  content: string;

  /** Author name */
  author: string;

  /** Publication date in ISO format (YYYY-MM-DD) */
  publishedDate: string;

  /** Estimated reading time (format: "{number} min") */
  readTime: string;

  /** Blog post category for filtering */
  category: CategoryType;

  /** Path to featured image (WebP format preferred) - optional */
  featuredImage?: string;

  /** Whether this is the featured blog post (only one should be true) */
  featured: boolean;

  /** Topic tags for filtering (1-5 tags, each max 20 characters) */
  tags: string[];
}

/**
 * JobOpening - Represents a career opportunity listing
 *
 * Job openings are displayed on the /careers page with expandable details.
 *
 * @example
 * {
 *   id: 'senior-ml-engineer-001',
 *   title: 'Senior ML Engineer - Medical Imaging',
 *   department: 'Engineering',
 *   location: 'Hybrid',
 *   type: 'Full-time',
 *   description: 'Join our team building AI-powered radiology tools...',
 *   requirements: ['MS or PhD in CS/ML', '5+ years ML experience'],
 *   responsibilities: ['Design ML models', 'Collaborate with radiologists'],
 *   applyLink: 'mailto:careers@example.com'
 * }
 */
export interface JobOpening {
  /** Unique identifier (UUID or slug format) */
  id: string;

  /** Job title (max 80 characters) */
  title: string;

  /** Department/team (e.g., "Engineering", "Product", "Clinical") */
  department: string;

  /** Work location type */
  location: LocationType;

  /** Employment type */
  type: EmploymentType;

  /** Job overview/summary (100-500 characters) */
  description: string;

  /** Required qualifications (3-10 items, each max 200 characters) */
  requirements: string[];

  /** Key responsibilities (3-10 items, each max 200 characters) */
  responsibilities: string[];

  /** Application link or email (URL or mailto:) */
  applyLink: string;
}

/**
 * FAQItem - Represents a single FAQ question and answer
 *
 * FAQ items are displayed on the /faq page in an accordion pattern,
 * organized by category.
 *
 * @example
 * {
 *   id: 'faq-001',
 *   question: 'Does Nexus integrate with our existing PACS system?',
 *   answer: 'Yes, Nexus integrates seamlessly with all major PACS systems...',
 *   category: 'Implementation',
 *   order: 1
 * }
 */
export interface FAQItem {
  /** Unique identifier (UUID or slug format) */
  id: string;

  /** The FAQ question (max 150 characters, should end with "?") */
  question: string;

  /** Detailed answer (50-1000 characters) */
  answer: string;

  /** Question category for organization */
  category: FAQCategory;

  /** Display order within category (positive integer, unique within category) */
  order: number;
}

/**
 * TeamMember - Represents a team member profile
 *
 * Team member profiles are displayed on the /about page in a grid layout.
 *
 * @example
 * {
 *   name: 'Dr. Artem Asinov',
 *   role: 'Founder & CEO',
 *   bio: 'Board-certified radiologist with 15+ years experience...',
 *   photo: '/images/team/artem-asinov.webp',
 *   linkedin: 'https://www.linkedin.com/in/example'
 * }
 */
export interface TeamMember {
  /** Full name (max 100 characters) */
  name: string;

  /** Job title/role (max 80 characters) */
  role: string;

  /** Short biography (100-500 characters) */
  bio: string;

  /** Profile photo path (WebP format preferred) */
  photo: string;

  /** Optional LinkedIn profile URL */
  linkedin?: string;
}

/**
 * NavigationItem - Represents a navigation menu item
 *
 * Navigation items are used in both the header and footer navigation menus.
 *
 * @example
 * {
 *   label: 'Blog',
 *   href: '/blog',
 *   order: 2,
 *   external: false
 * }
 */
export interface NavigationItem {
  /** Display text (max 30 characters) */
  label: string;

  /** Destination URL (internal path or external URL) */
  href: string;

  /** Display order in menu (positive integer, unique) */
  order: number;

  /** Whether link is external (defaults to false, auto-detected from href) */
  external?: boolean;
}

/**
 * CompanyInfo - Represents static company information
 *
 * Company information is displayed on the /about page. This is a singleton
 * (only one instance exists).
 *
 * @example
 * {
 *   mission: 'To improve patient outcomes through AI-powered quality assurance...',
 *   values: ['Clinical Safety First', 'Transparency', 'Quality Excellence'],
 *   founding: {
 *     year: 2023,
 *     story: 'Founded by radiologists and AI researchers...'
 *   },
 *   compliance: ['HIPAA Compliant', 'FDA 510(k) Pending', 'ISO 13485']
 * }
 */
export interface CompanyInfo {
  /** Company mission statement (100-500 characters) */
  mission: string;

  /** Core company values (3-5 items, each 50-150 characters) */
  values: string[];

  /** Founding story */
  founding: {
    /** Year founded */
    year: number;

    /** Founding story (100-500 characters) */
    story: string;
  };

  /** Regulatory compliance badges (e.g., HIPAA, FDA 510(k), ISO 13485) */
  compliance: string[];
}

// ============================================================================
// Component Props Interfaces
// ============================================================================

/**
 * BlogCardProps - Props for the BlogCard component
 *
 * Used to render blog post cards on the /blog listing page.
 */
export interface BlogCardProps {
  /** Blog post data */
  post: BlogPost;

  /** Whether to show full content or excerpt */
  variant?: 'card' | 'featured';
}

/**
 * CTAProps - Props for Call-to-Action component
 *
 * Used for prominent action buttons throughout the site.
 */
export interface CTAProps {
  /** Button text */
  text: string;

  /** Destination URL */
  href: string;

  /** Visual style */
  variant: 'primary' | 'secondary' | 'outline';

  /** Icon to display (optional) */
  icon?: ComponentType<{ className?: string }>;
}

/**
 * AccordionProps - Props for the Accordion component
 *
 * Used for FAQ items on the /faq page.
 */
export interface AccordionProps {
  /** FAQ items to display */
  items: FAQItem[];

  /** Whether to allow multiple items open simultaneously */
  allowMultiple?: boolean;

  /** Default open item ID */
  defaultOpen?: string;
}

// ============================================================================
// Utility Types
// ============================================================================

/**
 * PaginatedResponse - Generic paginated data response
 *
 * Used for paginating large lists (if needed in future).
 */
export interface PaginatedResponse<T> {
  /** Array of items for current page */
  items: T[];

  /** Total number of items across all pages */
  total: number;

  /** Current page number (1-indexed) */
  page: number;

  /** Number of items per page */
  pageSize: number;

  /** Whether there is a next page */
  hasNext: boolean;

  /** Whether there is a previous page */
  hasPrevious: boolean;
}

/**
 * FilterOptions - Generic filter options for content lists
 *
 * Used for filtering blog posts or job listings.
 */
export interface FilterOptions {
  /** Filter by category/type */
  category?: string;

  /** Filter by tag */
  tags?: string[];

  /** Search query */
  search?: string;

  /** Sort field */
  sortBy?: 'date' | 'title' | 'relevance';

  /** Sort direction */
  sortOrder?: 'asc' | 'desc';
}

// ============================================================================
// Type Guards
// ============================================================================

/**
 * Type guard to check if a value is a valid BlogPost
 */
export function isBlogPost(value: unknown): value is BlogPost {
  const post = value as BlogPost;
  return (
    typeof post === 'object' &&
    post !== null &&
    typeof post.slug === 'string' &&
    typeof post.title === 'string' &&
    typeof post.excerpt === 'string' &&
    typeof post.content === 'string' &&
    typeof post.author === 'string' &&
    typeof post.publishedDate === 'string' &&
    typeof post.readTime === 'string' &&
    typeof post.category === 'string' &&
    (post.featuredImage === undefined || typeof post.featuredImage === 'string') &&
    typeof post.featured === 'boolean' &&
    Array.isArray(post.tags)
  );
}

/**
 * Type guard to check if a value is a valid JobOpening
 */
export function isJobOpening(value: unknown): value is JobOpening {
  const job = value as JobOpening;
  return (
    typeof job === 'object' &&
    job !== null &&
    typeof job.id === 'string' &&
    typeof job.title === 'string' &&
    typeof job.department === 'string' &&
    typeof job.location === 'string' &&
    typeof job.type === 'string' &&
    typeof job.description === 'string' &&
    Array.isArray(job.requirements) &&
    Array.isArray(job.responsibilities) &&
    typeof job.applyLink === 'string'
  );
}

// ============================================================================
// Default/Mock Data Types
// ============================================================================

/**
 * Type for the complete blog posts data export
 */
export type BlogPostsData = BlogPost[];

/**
 * Type for the complete job openings data export
 */
export type JobOpeningsData = JobOpening[];

/**
 * Type for the complete FAQ items data export
 */
export type FAQItemsData = FAQItem[];

/**
 * Type for the complete team members data export
 */
export type TeamMembersData = TeamMember[];

/**
 * Type for the complete navigation items data export
 */
export type NavigationItemsData = NavigationItem[];

// ============================================================================
// Legal Pages
// ============================================================================

/**
 * LegalSection - Represents a section within a legal document
 *
 * Legal sections are used to organize content in Privacy Policy and Terms of Service pages.
 *
 * @example
 * {
 *   id: 'section-01',
 *   title: 'Information We Collect',
 *   content: 'We collect the following types of information...',
 *   order: 1,
 *   subsections: [...]
 * }
 */
export interface LegalSection {
  /** Unique identifier (UUID or slug format) */
  id: string;

  /** Section heading (max 150 characters) */
  title: string;

  /** Section content in Markdown format (100-5000 characters) */
  content: string;

  /** Display order (positive integer, unique) */
  order: number;

  /** Optional subsections for hierarchical organization */
  subsections?: LegalSection[];
}

/**
 * LegalPage - Represents a complete legal document page
 *
 * Legal pages include Privacy Policy, Terms of Service, and similar legal documents.
 *
 * @example
 * {
 *   type: 'privacy-policy',
 *   title: 'Privacy Policy',
 *   lastUpdated: '2025-10-16',
 *   effectiveDate: '2025-10-16',
 *   introduction: 'This Privacy Policy describes...',
 *   sections: [...]
 * }
 */
export interface LegalPage {
  /** Type of legal document */
  type: 'privacy-policy' | 'terms-of-service';

  /** Document title (max 100 characters) */
  title: string;

  /** Last updated date in ISO format (YYYY-MM-DD) */
  lastUpdated: string;

  /** Effective date in ISO format (YYYY-MM-DD) */
  effectiveDate: string;

  /** Introduction/preamble text in Markdown format (100-1000 characters) */
  introduction: string;

  /** Ordered sections of the legal document */
  sections: LegalSection[];

  /** Optional contact email for legal inquiries */
  contactEmail?: string;
}
