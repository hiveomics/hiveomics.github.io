/**
 * FAQ Page
 *
 * Frequently asked questions organized by category with accordion UI.
 */

import Section from '@/components/shared/Section';
import Accordion from '@/components/faq/Accordion';
import Button from '@/components/shared/Button';
import { faqItems } from '@/data/faq-items';
import type { FAQCategory } from '@/lib/types';

export const metadata = {
  title: 'FAQ - Frequently Asked Questions about Nexus',
  description:
    'Find answers to common questions about Nexus AI-powered radiology governance system, including integration, pricing, compliance, and implementation details.',
};

export default function FAQPage() {
  // Group FAQs by category
  const categories: FAQCategory[] = [
    'Product Features',
    'Implementation',
    'Security & Compliance',
    'Pricing',
    'Support',
  ];

  const faqsByCategory = categories.reduce(
    (acc, category) => {
      acc[category] = faqItems
        .filter((item) => item.category === category)
        .sort((a, b) => a.order - b.order);
      return acc;
    },
    {} as Record<FAQCategory, typeof faqItems>
  );

  return (
    <>
      {/* Hero Section */}
      <Section className="faq-hero-section">
        <div className="faq-hero-content">
          <h1>Frequently Asked Questions</h1>
          <p className="faq-hero-subtitle">
            Find answers to common questions about Nexus. Can&apos;t find what you&apos;re looking
            for? Contact our team.
          </p>
        </div>
      </Section>

      {/* FAQ Categories */}
      {categories.map((category) => {
        const items = faqsByCategory[category];
        if (!items || items.length === 0) return null;

        return (
          <Section key={category} className="faq-category-section">
            <h2 className="faq-category-title">{category}</h2>
            <Accordion items={items} />
          </Section>
        );
      })}

      {/* CTA Section */}
      <Section className="faq-cta-section">
        <div className="faq-cta">
          <h2>Still Have Questions?</h2>
          <p>
            Our team is here to help. Contact us for personalized answers to your specific
            questions about implementing Nexus in your radiology department.
          </p>
          <div className="cta-buttons">
            <Button href="mailto:info@hiveomics.com?subject=FAQ Question" variant="primary">
              Contact Support
            </Button>
            <Button href="/about" variant="secondary">
              Learn More About Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
