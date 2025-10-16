/**
 * Navigation Data
 *
 * Defines the main navigation menu items and footer navigation.
 */

import type { NavigationItem } from '@/lib/types';

export const mainNavigation: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    order: 0,
    external: false,
  },
  {
    label: 'About',
    href: '/about',
    order: 1,
    external: false,
  },
  {
    label: 'Blog',
    href: '/blog',
    order: 2,
    external: false,
  },
  {
    label: 'FAQ',
    href: '/faq',
    order: 3,
    external: false,
  },
  {
    label: 'Careers',
    href: '/careers',
    order: 4,
    external: false,
  },
];

export const footerNavigation: NavigationItem[] = [
  {
    label: 'Privacy Policy',
    href: '/privacy',
    order: 0,
    external: false,
  },
  {
    label: 'Terms of Service',
    href: '/terms',
    order: 1,
    external: false,
  },
  {
    label: 'Contact',
    href: 'mailto:info@hiveomics.com',
    order: 2,
    external: true,
  },
];
