/**
 * Type Definitions - Re-exported from content schema
 *
 * This file provides a central import location for all content types
 * used throughout the application.
 */

export type {
  // Core content types
  BlogPost,
  JobOpening,
  FAQItem,
  TeamMember,
  NavigationItem,
  CompanyInfo,

  // Type enumerations
  CategoryType,
  LocationType,
  EmploymentType,
  FAQCategory,

  // Component props
  BlogCardProps,
  CTAProps,
  AccordionProps,

  // Utility types
  PaginatedResponse,
  FilterOptions,

  // Data collection types
  BlogPostsData,
  JobOpeningsData,
  FAQItemsData,
  TeamMembersData,
  NavigationItemsData,
} from '@/specs/001-modern-landing-website/contracts/content-schema';

export { isBlogPost, isJobOpening } from '@/specs/001-modern-landing-website/contracts/content-schema';
