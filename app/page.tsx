/**
 * Home Page - Landing page for Nexus
 *
 * Showcases Nexus AI-powered radiology governance system with four main functions,
 * measurable outcomes, target users, and CTAs.
 */

import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Outcomes from '@/components/landing/Outcomes';
import UserTypes from '@/components/landing/UserTypes';
import CTA from '@/components/landing/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Outcomes />
      <UserTypes />
      <CTA />
    </>
  );
}
