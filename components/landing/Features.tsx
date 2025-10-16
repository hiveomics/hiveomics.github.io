import Card from '@/components/shared/Card';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: 'Document & Procedure Governance',
    description:
      'Validate referrals and supporting documents at intake, ensure admission readiness, and assist with protocol selection based on patient medical history—all with structured data written back to your EHR/RIS.',
    icon: '📋',
  },
  {
    title: 'Autonomous Triage',
    description:
      'Silently process 100% of eligible chest CT studies using AI-powered nodule detection. Assign risk groups (1-5) based on clinical significance and deliver a daily patient overview for governance and quality assurance.',
    icon: '🎯',
  },
  {
    title: 'Diagnostic Tactics',
    description:
      'Convert AI findings into guideline-based follow-up intervals and next visit dates. Record selected tactics and flag conflicts with clinical recommendations (OK / Grey zone / Conflict) for immediate visibility.',
    icon: '🔍',
  },
  {
    title: 'In-Exam QA & Safety Watcher',
    description:
      'Real-time verification of order compliance, image quality, artifacts, and missed zones. Detect urgent conditions and alert on-duty physicians within 5 minutes for immediate intervention.',
    icon: '⚡',
  },
];

export default function Features() {
  return (
    <section id="features" className="features-section section">
      <div className="container">
        <div className="section-header">
          <h2>Four Main Functions</h2>
          <p>
            Nexus provides comprehensive oversight across the entire radiology workflow—from intake
            to report sign-off.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature) => (
            <Card key={feature.title} hoverable className="feature-card">
              <div className="feature-icon" role="img" aria-label={`${feature.title} icon`}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
