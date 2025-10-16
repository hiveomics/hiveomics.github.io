/**
 * About Page
 *
 * Company mission, team profiles, values, and regulatory compliance information.
 */

import Image from 'next/image';
import Section from '@/components/shared/Section';
import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { teamMembers } from '@/data/team-members';
import { companyInfo } from '@/data/company-info';

export const metadata = {
  title: 'About Nexus - AI-Powered Radiology Governance',
  description:
    'Learn about Nexus mission to improve patient outcomes through AI-powered quality assurance in radiology. Meet our team of radiologists, AI researchers, and healthcare IT experts.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="about-hero-section">
        <div className="about-hero-content">
          <h1>About Nexus</h1>
          <p className="about-hero-subtitle">
            Improving patient outcomes through AI-powered quality assurance and governance in
            radiology
          </p>
        </div>
      </Section>

      {/* Mission Section */}
      <Section className="about-mission-section">
        <div className="section-header">
          <h2>Our Mission</h2>
        </div>
        <div className="mission-content">
          <p className="mission-statement">{companyInfo.mission}</p>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="about-values-section">
        <div className="section-header">
          <h2>Our Values</h2>
          <p>The principles that guide everything we do</p>
        </div>
        <div className="values-grid">
          {companyInfo.values.map((value, index) => {
            const [title, ...descriptionParts] = value.split(' - ');
            const description = descriptionParts.join(' - ');
            return (
              <Card key={index} className="value-card">
                <div className="value-number">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="value-title">{title}</h3>
                <p className="value-description">{description}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Team Section */}
      <Section className="about-team-section">
        <div className="section-header">
          <h2>Meet Our Team</h2>
          <p>
            Expert radiologists, AI researchers, and healthcare IT professionals united by a
            passion for improving radiology quality
          </p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <Card key={member.name} className="team-card">
              <div className="team-photo-wrapper">
                <Image
                  src={member.photo}
                  alt={`${member.name} - ${member.role}`}
                  width={300}
                  height={300}
                  className="team-photo"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-linkedin"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <svg className="linkedin-icon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    Connect on LinkedIn
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Founding Story Section */}
      <Section className="about-story-section">
        <div className="section-header">
          <h2>Our Story</h2>
        </div>
        <div className="story-content">
          <div className="story-year">Founded {companyInfo.founding.year}</div>
          <p className="story-text">{companyInfo.founding.story}</p>
        </div>
      </Section>

      {/* Compliance Section */}
      <Section className="about-compliance-section">
        <div className="section-header">
          <h2>Regulatory Compliance & Quality</h2>
          <p>Committed to the highest standards of regulatory compliance and quality assurance</p>
        </div>
        <div className="compliance-badges">
          {companyInfo.compliance.map((badge) => (
            <div key={badge} className="compliance-badge" title={badge}>
              <div className="badge-icon">✓</div>
              <div className="badge-text">{badge}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="about-cta-section">
        <div className="about-cta">
          <h2>Join Us in Transforming Radiology Quality</h2>
          <p>
            Whether you&apos;re a healthcare organization seeking to improve quality assurance or a
            talented professional passionate about medical AI, we&apos;d love to hear from you.
          </p>
          <div className="cta-buttons">
            <Button href="mailto:info@hiveomics.com?subject=Demo Request" variant="primary">
              Request Demo
            </Button>
            <Button href="/careers" variant="secondary">
              View Careers
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
