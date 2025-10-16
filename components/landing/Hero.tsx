import Button from '@/components/shared/Button';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-headline">
            AI-Powered Radiology Workflow Governance for Healthcare Excellence
          </h1>
          <p className="hero-subheadline">
            Nexus is a lightweight observability layer that reduces diagnostic misses, standardizes
            follow-up, and highlights guideline conflicts—giving your radiology department the
            oversight it needs for quality assurance and patient safety.
          </p>
          <div className="hero-cta">
            <Button href="#contact" variant="primary" aria-label="Request a demo of Nexus">
              Request Demo
            </Button>
            <Button
              href="#features"
              variant="outline"
              aria-label="Learn more about Nexus features"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
