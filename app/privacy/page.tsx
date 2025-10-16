/**
 * Privacy Policy Page
 *
 * Displays the company's privacy policy, including data collection,
 * usage, sharing practices, and user rights. Tailored for healthcare
 * SaaS company handling PHI.
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Nexus',
  description: 'Learn how Nexus protects your privacy and handles your data in compliance with HIPAA, GDPR, and other privacy regulations.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = '2025-10-16';
  const effectiveDate = '2025-10-16';

  return (
    <article className="legal-page">
      <div className="legal-page-hero">
        <div className="container">
          <div className="legal-page-header">
            <h1 className="legal-page-title">Privacy Policy</h1>
            <div className="legal-page-meta">
              <p>
                <strong>Last Updated:</strong> {lastUpdated}
              </p>
              <p>
                <strong>Effective Date:</strong> {effectiveDate}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="legal-page-content-wrapper">
        <div className="container">
          <div className="legal-page-content">
            <section className="legal-section">
              <p className="legal-intro">
                At Nexus, we are committed to protecting your privacy and maintaining the security
                of your information. This Privacy Policy describes how we collect, use, disclose,
                and safeguard information when you visit our website or use our services. This
                policy is designed to comply with HIPAA, GDPR, CCPA, and other applicable privacy
                regulations.
              </p>
            </section>

            <section className="legal-section">
              <h2>1. Information We Collect</h2>

              <h3>1.1 Information You Provide</h3>
              <p>
                We collect information that you voluntarily provide to us, including:
              </p>
              <ul>
                <li><strong>Contact Information:</strong> Name, email address, phone number, job title, and organization name when you request a demo, contact us, or sign up for our services.</li>
                <li><strong>Account Information:</strong> Username, password, and organization details when you create an account.</li>
                <li><strong>Communication Data:</strong> Information in emails, messages, or other communications you send to us.</li>
              </ul>

              <h3>1.2 Health Information (PHI)</h3>
              <p>
                As a healthcare technology provider, we may process Protected Health Information (PHI)
                as defined under HIPAA when you use our radiology quality assurance platform. This may include:
              </p>
              <ul>
                <li>De-identified medical imaging data and metadata</li>
                <li>Diagnostic reports and clinical findings</li>
                <li>Healthcare provider information</li>
                <li>Patient identifiers (only as necessary for service delivery and in compliance with HIPAA)</li>
              </ul>
              <p>
                <strong>HIPAA Compliance:</strong> When we process PHI on behalf of a covered entity or
                business associate, we do so only as permitted by a signed Business Associate Agreement (BAA).
                We implement appropriate administrative, physical, and technical safeguards to protect PHI
                as required by HIPAA.
              </p>

              <h3>1.3 Automatically Collected Information</h3>
              <p>
                When you visit our website, we automatically collect certain information:
              </p>
              <ul>
                <li><strong>Usage Data:</strong> Pages visited, time spent, links clicked, and navigation patterns.</li>
                <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> See Section 3 for details.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>2. How We Use Your Information</h2>

              <p>We use the information we collect for the following purposes:</p>

              <h3>2.1 Service Delivery</h3>
              <ul>
                <li>Provide, maintain, and improve our radiology quality assurance platform</li>
                <li>Process and analyze medical imaging data to provide AI-powered triage and quality assurance</li>
                <li>Generate diagnostic insights and compliance reports</li>
                <li>Provide customer support and respond to inquiries</li>
              </ul>

              <h3>2.2 Business Operations</h3>
              <ul>
                <li>Communicate with you about our services, updates, and security alerts</li>
                <li>Process transactions and send related information</li>
                <li>Monitor and analyze usage patterns to improve our services</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
              </ul>

              <h3>2.3 Legal and Compliance</h3>
              <ul>
                <li>Comply with legal obligations, including HIPAA, FDA regulations, and other healthcare laws</li>
                <li>Respond to legal requests and prevent harm</li>
                <li>Enforce our terms and policies</li>
                <li>Maintain audit logs for regulatory compliance</li>
              </ul>

              <h3>2.4 Research and Development</h3>
              <ul>
                <li>Improve our AI algorithms and machine learning models using de-identified data</li>
                <li>Conduct internal research and product development</li>
                <li>Publish aggregated, anonymized research findings</li>
              </ul>
              <p>
                <strong>Note:</strong> Any use of PHI for research purposes requires appropriate authorization
                or de-identification in accordance with HIPAA standards.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Cookies and Tracking Technologies</h2>

              <p>
                We use cookies, web beacons, and similar tracking technologies to collect and store
                information about your interaction with our website and services.
              </p>

              <h3>3.1 Types of Cookies We Use</h3>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for website functionality, including authentication and security.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website (e.g., Google Analytics).</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings.</li>
              </ul>

              <h3>3.2 Your Cookie Choices</h3>
              <p>
                You can control cookies through your browser settings. Note that disabling certain
                cookies may affect website functionality. We do not use cookies to track PHI or
                clinical data.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. How We Share Your Information</h2>

              <p>
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>

              <h3>4.1 Service Providers</h3>
              <p>
                We share information with third-party service providers who perform services on our behalf,
                including:
              </p>
              <ul>
                <li>Cloud infrastructure providers (with signed BAAs for PHI)</li>
                <li>Analytics and performance monitoring services</li>
                <li>Customer support platforms</li>
                <li>Payment processors</li>
              </ul>
              <p>
                All service providers are contractually obligated to maintain the confidentiality and
                security of your information and may only use it for the purposes we specify.
              </p>

              <h3>4.2 Business Transfers</h3>
              <p>
                If we are involved in a merger, acquisition, or sale of assets, your information may be
                transferred. We will provide notice before your information is transferred and becomes
                subject to a different privacy policy.
              </p>

              <h3>4.3 Legal Requirements</h3>
              <p>
                We may disclose information when required by law, regulation, legal process, or
                governmental request, including:
              </p>
              <ul>
                <li>Compliance with subpoenas or court orders</li>
                <li>Protection of our rights, property, or safety</li>
                <li>Investigation of fraud or security issues</li>
                <li>Enforcement of our terms and policies</li>
              </ul>

              <h3>4.4 With Your Consent</h3>
              <p>
                We may share information for any other purpose disclosed to you and with your consent.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Data Security</h2>

              <p>
                We implement comprehensive security measures to protect your information:
              </p>

              <h3>5.1 Technical Safeguards</h3>
              <ul>
                <li><strong>Encryption:</strong> Data encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
                <li><strong>Access Controls:</strong> Role-based access control (RBAC) and multi-factor authentication</li>
                <li><strong>Network Security:</strong> Firewalls, intrusion detection/prevention systems</li>
                <li><strong>Vulnerability Management:</strong> Regular security assessments and penetration testing</li>
              </ul>

              <h3>5.2 Administrative Safeguards</h3>
              <ul>
                <li>Security awareness training for all employees</li>
                <li>Background checks for personnel with access to PHI</li>
                <li>Incident response and breach notification procedures</li>
                <li>Regular security audits and risk assessments</li>
              </ul>

              <h3>5.3 Physical Safeguards</h3>
              <ul>
                <li>SOC 2 Type II certified data centers</li>
                <li>Physical access controls and monitoring</li>
                <li>Secure disposal of hardware and media</li>
              </ul>

              <p>
                Despite our efforts, no security measures are perfect. We cannot guarantee absolute
                security of your information.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Your Privacy Rights</h2>

              <p>
                Depending on your location and applicable law, you may have the following rights:
              </p>

              <h3>6.1 HIPAA Rights (for PHI)</h3>
              <p>
                If we process your PHI under a BAA, you have rights under HIPAA including:
              </p>
              <ul>
                <li><strong>Right to Access:</strong> Request a copy of your PHI</li>
                <li><strong>Right to Amendment:</strong> Request corrections to your PHI</li>
                <li><strong>Right to Accounting:</strong> Request a list of certain PHI disclosures</li>
                <li><strong>Right to Restriction:</strong> Request restrictions on certain uses and disclosures</li>
              </ul>
              <p>
                To exercise these rights, contact the covered entity (your healthcare provider or organization)
                that we serve. We will cooperate with your provider to fulfill these requests.
              </p>

              <h3>6.2 GDPR Rights (for EU/EEA Users)</h3>
              <ul>
                <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to Rectification:</strong> Correct inaccurate information</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your data (subject to legal obligations)</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Right to Object:</strong> Object to processing of your data</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation of processing</li>
              </ul>

              <h3>6.3 CCPA Rights (for California Residents)</h3>
              <ul>
                <li><strong>Right to Know:</strong> What personal information we collect, use, and disclose</li>
                <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
                <li><strong>Right to Opt-Out:</strong> Opt-out of sale of personal information (we do not sell data)</li>
                <li><strong>Right to Non-Discrimination:</strong> Equal service regardless of privacy rights exercise</li>
              </ul>

              <h3>6.4 How to Exercise Your Rights</h3>
              <p>
                To exercise any of these rights, contact us at:{' '}
                <a href="mailto:info@hiveomics.com">info@hiveomics.com</a>
              </p>
              <p>
                We will respond to your request within the timeframe required by applicable law (typically
                30 days). We may need to verify your identity before processing your request.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Data Retention</h2>

              <p>
                We retain your information for as long as necessary to fulfill the purposes outlined in
                this policy, unless a longer retention period is required or permitted by law.
              </p>

              <h3>7.1 Retention Periods</h3>
              <ul>
                <li><strong>Account Information:</strong> Retained while your account is active, plus 7 years after closure for regulatory compliance</li>
                <li><strong>PHI:</strong> Retained in accordance with HIPAA requirements (typically 6 years from creation or last use) and any applicable state laws</li>
                <li><strong>Audit Logs:</strong> Retained for 7 years to meet regulatory requirements</li>
                <li><strong>Marketing Data:</strong> Retained until you opt-out or as required by law</li>
              </ul>

              <h3>7.2 Secure Deletion</h3>
              <p>
                When we no longer need your information, we securely delete or anonymize it in accordance
                with industry standards and regulatory requirements.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. International Data Transfers</h2>

              <p>
                Your information may be transferred to and processed in countries other than your country
                of residence. These countries may have data protection laws different from your country.
              </p>
              <p>
                When we transfer personal data from the EU/EEA to other countries, we use appropriate
                safeguards such as:
              </p>
              <ul>
                <li>Standard Contractual Clauses approved by the European Commission</li>
                <li>Adequacy decisions by the European Commission</li>
                <li>Other legally approved transfer mechanisms</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>9. Children's Privacy</h2>

              <p>
                Our services are not directed to individuals under 18 years of age. We do not knowingly
                collect personal information from children. If you become aware that a child has provided
                us with personal information, please contact us, and we will take steps to delete such information.
              </p>
            </section>

            <section className="legal-section">
              <h2>10. Changes to This Privacy Policy</h2>

              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices,
                technology, legal requirements, or other factors. We will notify you of material changes by:
              </p>
              <ul>
                <li>Posting the updated policy on our website with a new "Last Updated" date</li>
                <li>Sending email notification to registered users</li>
                <li>Displaying a prominent notice on our website</li>
              </ul>
              <p>
                Your continued use of our services after changes become effective constitutes acceptance
                of the updated policy.
              </p>
            </section>

            <section className="legal-section">
              <h2>11. Contact Us</h2>

              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or our privacy
                practices, please contact us:
              </p>

              <div className="legal-contact">
                <p>
                  <strong>Nexus Privacy Team</strong><br />
                  Email: <a href="mailto:info@hiveomics.com">info@hiveomics.com</a><br />
                  Phone: +1 (555) 123-4567<br />
                </p>
              </div>

              <p>
                <strong>Supervisory Authority:</strong> If you are located in the EU/EEA and believe we
                have not adequately addressed your concerns, you have the right to lodge a complaint with
                your local data protection authority.
              </p>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
