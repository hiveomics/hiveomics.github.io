import Card from '@/components/shared/Card';

interface UserType {
  role: string;
  description: string;
  keyNeeds: string[];
}

const userTypes: UserType[] = [
  {
    role: 'Radiologists',
    description:
      'Thoracic and oncologic radiologists who need immediate post-report confirmation of AI risk stratification and diagnostic tactic selection.',
    keyNeeds: [
      'Confirm AI risk groups in <30 seconds',
      'Select diagnostic tactics with guideline conflict checking',
      'Access explainability for AI decisions',
    ],
  },
  {
    role: 'Chief Medical Officers & Department Heads',
    description:
      'Leadership requiring daily oversight and quality metrics to monitor department performance and resolve guideline conflicts.',
    keyNeeds: [
      'Daily administrative reports grouped by risk',
      'Concordance registries (AI vs. physician decisions)',
      'Exception tracking and conflict resolution',
    ],
  },
  {
    role: 'Technologists & On-Duty Physicians',
    description:
      'Front-line staff who need protocol assistance and real-time quality alerts during image acquisition.',
    keyNeeds: [
      'AI-suggested protocols based on patient history',
      'Real-time in-exam QA alerts (<5 min)',
      'Urgent condition notifications',
    ],
  },
  {
    role: 'Administrative Staff & Schedulers',
    description:
      'Secretariat and patient care teams who execute follow-up scheduling, manage intervals, and ensure admission readiness.',
    keyNeeds: [
      'Automated scheduling queues with exact dates',
      'Admission readiness flags and validation',
      'Standardized follow-up interval management',
    ],
  },
];

export default function UserTypes() {
  return (
    <section className="user-types-section section">
      <div className="container">
        <div className="section-header">
          <h2>Built for Your Entire Radiology Team</h2>
          <p>
            Nexus serves every role in the radiology workflow—from front desk to department
            leadership.
          </p>
        </div>
        <div className="user-types-grid">
          {userTypes.map((userType) => (
            <Card key={userType.role} hoverable className="user-type-card">
              <h3 className="user-type-role">{userType.role}</h3>
              <p className="user-type-description">{userType.description}</p>
              <div className="user-type-needs">
                <h4 className="needs-heading">Key Capabilities:</h4>
                <ul className="needs-list">
                  {userType.keyNeeds.map((need) => (
                    <li key={need}>{need}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
