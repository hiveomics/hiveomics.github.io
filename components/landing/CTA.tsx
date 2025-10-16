import Button from '@/components/shared/Button';

interface CTAProps {
  title?: string;
  description?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export default function CTA({
  title = 'Ready to Transform Your Radiology Workflow?',
  description = 'Join healthcare organizations already using Nexus to improve quality assurance, reduce misses, and standardize patient care.',
  primaryText = 'Request Demo',
  primaryHref = 'mailto:info@hiveomics.com?subject=Demo Request',
  secondaryText = 'Learn More',
  secondaryHref = '/about',
}: CTAProps) {
  return (
    <section id="contact" className="cta-section section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">{title}</h2>
          <p className="cta-description">{description}</p>
          <div className="cta-buttons">
            <Button href={primaryHref} variant="primary">
              {primaryText}
            </Button>
            <Button href={secondaryHref} variant="secondary">
              {secondaryText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
