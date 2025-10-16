'use client';

import { useState } from 'react';
import Section from '@/components/shared/Section';
import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { jobOpenings } from '@/data/job-openings';

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  return (
    <>
      <Section className="careers-hero-section">
        <div className="careers-hero-content">
          <h1>Join Our Team</h1>
          <p className="careers-hero-subtitle">
            Help us transform radiology quality assurance through AI innovation
          </p>
        </div>
      </Section>

      <Section className="careers-culture-section">
        <div className="section-header">
          <h2>Why Nexus?</h2>
        </div>
        <div className="culture-grid">
          <Card className="culture-card">
            <h3>Mission-Driven</h3>
            <p>Work on technology that directly improves patient outcomes and healthcare quality</p>
          </Card>
          <Card className="culture-card">
            <h3>Clinical Impact</h3>
            <p>Collaborate with radiologists and see your work deployed in leading hospitals</p>
          </Card>
          <Card className="culture-card">
            <h3>Innovation</h3>
            <p>Push the boundaries of medical AI with cutting-edge research and development</p>
          </Card>
          <Card className="culture-card">
            <h3>Growth</h3>
            <p>Continuous learning opportunities, conference attendance, and career development</p>
          </Card>
          <Card className="culture-card">
            <h3>Flexibility</h3>
            <p>Hybrid and remote options with work-life balance as a core value</p>
          </Card>
          <Card className="culture-card">
            <h3>Team</h3>
            <p>Work with world-class radiologists, ML researchers, and healthcare IT experts</p>
          </Card>
        </div>
      </Section>

      <Section className="careers-jobs-section">
        <h2 className="jobs-title">Open Positions</h2>
        <div className="jobs-list">
          {jobOpenings.map((job) => {
            const isExpanded = expandedJob === job.id;
            return (
              <Card key={job.id} className="job-card">
                <div className="job-header">
                  <div className="job-info">
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-meta">
                      <span className="job-department">{job.department}</span>
                      <span className="job-badge">{job.location}</span>
                      <span className="job-badge">{job.type}</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => setExpandedJob(isExpanded ? null : job.id)}
                    variant="outline"
                    aria-expanded={isExpanded}
                    aria-controls={`job-details-${job.id}`}
                  >
                    {isExpanded ? 'Hide Details' : 'View Details'}
                  </Button>
                </div>
                <p className="job-description">{job.description}</p>
                {isExpanded && (
                  <div id={`job-details-${job.id}`} className="job-details">
                    <div className="job-section">
                      <h4>Requirements</h4>
                      <ul>
                        {job.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="job-section">
                      <h4>Responsibilities</h4>
                      <ul>
                        {job.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="job-apply">
                      <Button href={job.applyLink} variant="primary">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </Section>
    </>
  );
}
