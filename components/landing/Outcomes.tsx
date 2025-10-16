import Card from '@/components/shared/Card';

interface Outcome {
  metric: string;
  description: string;
  icon: string;
}

const outcomes: Outcome[] = [
  {
    metric: '100%',
    description: 'Autonomous pre-triage coverage of eligible chest CT studies',
    icon: '✓',
  },
  {
    metric: '>95%',
    description: 'Critical issue detection with <5-minute notification time',
    icon: '🚨',
  },
  {
    metric: '>90%',
    description: 'Guideline concordance level for diagnostic tactic selections',
    icon: '📊',
  },
  {
    metric: '100%',
    description: 'Daily governance visibility across all eligible studies',
    icon: '👁️',
  },
  {
    metric: '30-50%',
    description: 'Reduction in front-desk processing time for admission readiness',
    icon: '⚙️',
  },
  {
    metric: '25-40%',
    description: 'Reduction in inappropriate follow-up variations while maintaining safety',
    icon: '📅',
  },
];

export default function Outcomes() {
  return (
    <section className="outcomes-section section">
      <div className="container">
        <div className="section-header">
          <h2>Measurable Outcomes</h2>
          <p>
            Nexus delivers proven results across quality assurance, efficiency, and patient safety
            metrics.
          </p>
        </div>
        <div className="outcomes-grid">
          {outcomes.map((outcome) => (
            <Card key={outcome.description} className="outcome-card">
              <div className="outcome-icon" role="img" aria-label={`${outcome.description} icon`}>
                {outcome.icon}
              </div>
              <div className="outcome-metric">{outcome.metric}</div>
              <p className="outcome-description">{outcome.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
