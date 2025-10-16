/**
 * Global Constants
 *
 * This file contains static configuration and metadata used across the site.
 */

export const SITE_CONFIG = {
  name: 'Hiveomics',
  title: 'Hiveomics Nexus - AI-Powered Radiology Governance',
  description:
    'Transform your radiology workflow with AI-powered quality assurance and compliance management. Hiveomics Nexus helps healthcare organizations ensure accuracy, safety, and regulatory compliance.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hiveomics.com',
  email: 'info@hiveomics.com',
  phone: '+972-53-373-8073',
  address: {
    street: 'David Ben-Gurion st. 2',
    city: 'Ramat Gan',
    zip: '5257334',
    country: 'Israel',
  },
} as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/hiveomics',
  twitter: 'https://twitter.com/hiveomics',
  github: 'https://github.com/hiveomics',
} as const;

export const NAVIGATION = {
  main: [
    { label: 'Home', href: '/', order: 0 },
    { label: 'About', href: '/about', order: 1 },
    { label: 'Blog', href: '/blog', order: 2 },
    { label: 'FAQ', href: '/faq', order: 3 },
    { label: 'Careers', href: '/careers', order: 4 },
  ],
  footer: [
    { label: 'Privacy Policy', href: '/privacy', order: 0 },
    { label: 'Terms of Service', href: '/terms', order: 1 },
    { label: 'Contact', href: '/contact', order: 2 },
  ],
} as const;

export const BREAKPOINTS = {
  sm: 768,
  md: 1024,
  lg: 1440,
} as const;

export const PERFORMANCE = {
  maxPageWeight: 2 * 1024 * 1024, // 2MB
  targetLoadTime: 3000, // 3s on 3G
  lighthouseThreshold: 90,
} as const;
