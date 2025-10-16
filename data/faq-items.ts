/**
 * FAQ Items Mock Data
 *
 * 15 frequently asked questions organized by category.
 */

import type { FAQItem } from '@/lib/types';

export const faqItems: FAQItem[] = [
  // Product Features (3 items)
  {
    id: 'faq-001',
    question: 'Does Nexus integrate with our existing PACS and RIS systems?',
    answer:
      'Yes, Nexus integrates seamlessly with all major PACS and RIS platforms using standard DICOM and HL7 protocols. Our system acts as a DICOM node in your network, receiving studies automatically and returning AI results without disrupting your existing workflow. We support Epic, Cerner, GE, Philips, Siemens, and other leading healthcare IT systems.',
    category: 'Product Features',
    order: 1,
  },
  {
    id: 'faq-002',
    question: 'What types of findings can Nexus detect automatically?',
    answer:
      'Nexus currently focuses on pulmonary nodule detection and risk stratification in chest CT imaging. Our AI algorithm detects solid, part-solid, and ground-glass nodules ≥4mm, measures their dimensions with sub-millimeter precision, characterizes morphology, and assigns malignancy risk groups (1-5 scale). We are actively expanding to additional pathologies including interstitial lung disease, emphysema, and cardiac findings.',
    category: 'Product Features',
    order: 2,
  },
  {
    id: 'faq-003',
    question: 'Can Nexus prioritize worklists based on clinical urgency?',
    answer:
      'Absolutely. Nexus performs autonomous pre-triage on 100% of eligible chest CTs, assigning risk groups before radiologists open the study. High-risk cases are automatically flagged and promoted to the top of worklists, ensuring that patients with potentially urgent findings receive immediate attention. Radiologists can customize prioritization rules to match departmental preferences.',
    category: 'Product Features',
    order: 3,
  },

  // Implementation (3 items)
  {
    id: 'faq-004',
    question: 'How long does Nexus implementation typically take?',
    answer:
      'Pilot deployments typically go live within 3 months of contract signing. This includes technical integration, validation on local data, radiologist training, and initial optimization. Full department rollout follows the pilot within 6-12 months depending on organizational complexity and change management requirements. We provide dedicated implementation support throughout the process.',
    category: 'Implementation',
    order: 1,
  },
  {
    id: 'faq-005',
    question: 'What infrastructure is required to run Nexus?',
    answer:
      'Nexus requires GPU-accelerated compute servers (NVIDIA GPUs with 16GB+ VRAM recommended) for AI processing, network connectivity to your PACS/RIS, and integration with your existing viewing workstations. We support both on-premise deployment (air-gapped if required) and cloud-hybrid architectures. Minimum network bandwidth is 1 Gbps for typical departmental volumes. Our team conducts infrastructure assessments during the planning phase.',
    category: 'Implementation',
    order: 2,
  },
  {
    id: 'faq-006',
    question: 'Do we need dedicated staff to operate Nexus?',
    answer:
      'No. Nexus is designed to integrate seamlessly into existing workflows without requiring additional staff. AI processing occurs automatically in the background, and radiologists interact with results during their normal report signing workflow. Administrative dashboards are accessible to existing quality assurance and radiology leadership staff. Typical time investment is <30 seconds per case for radiologist confirmation.',
    category: 'Implementation',
    order: 3,
  },

  // Security & Compliance (3 items)
  {
    id: 'faq-007',
    question: 'Is Nexus HIPAA compliant?',
    answer:
      'Yes. Nexus maintains strict HIPAA compliance through de-identification architecture where all AI processing occurs on de-identified data. PHI is segregated to administrative functions (scheduling, reporting) with role-based access controls and comprehensive audit trails. We undergo regular third-party security assessments and maintain SOC 2 Type II certification. Business Associate Agreements (BAAs) are standard for all deployments.',
    category: 'Security & Compliance',
    order: 1,
  },
  {
    id: 'faq-008',
    question: 'Does Nexus have FDA clearance?',
    answer:
      'Our core nodule detection and risk stratification algorithm has received FDA 510(k) clearance for use as a Computer-Aided Detection (CAD) tool. We operate as Clinical Decision Support software requiring mandatory physician review—all AI findings must be confirmed by board-certified radiologists before clinical action. We maintain active post-market surveillance and comply with FDA quality system regulations.',
    category: 'Security & Compliance',
    order: 2,
  },
  {
    id: 'faq-009',
    question: 'How does Nexus protect patient data and privacy?',
    answer:
      'Patient data protection is foundational to our architecture. All data transmission uses TLS encryption, all stored data is encrypted at rest, and de-identification is validated before AI processing. We implement fail-closed design—if de-identification cannot be verified, processing is blocked. Access controls are role-based, audit trails are immutable and tamper-proof, and we support institutional data retention policies (typically 7+ years). No patient data is used for algorithm improvement without explicit institutional approval.',
    category: 'Security & Compliance',
    order: 3,
  },

  // Pricing (3 items)
  {
    id: 'faq-010',
    question: 'How is Nexus priced?',
    answer:
      'Nexus uses volume-based subscription pricing tied to the number of studies processed annually. Pricing includes software licenses, implementation support, ongoing technical support, algorithm updates, and concordance analytics. We offer flexible contracting terms including pilot periods to demonstrate value before full commitment. Custom pricing is available for multi-site health systems and academic medical centers. Contact our sales team for a detailed quote based on your specific volume and requirements.',
    category: 'Pricing',
    order: 1,
  },
  {
    id: 'faq-011',
    question: 'Are there additional costs for training, support, or updates?',
    answer:
      'No hidden fees. Your subscription includes initial radiologist and staff training, ongoing technical support during business hours, regular algorithm updates and performance improvements, and access to our customer success team for optimization. Premium 24/7 support and dedicated implementation resources are available as optional add-ons for mission-critical deployments.',
    category: 'Pricing',
    order: 2,
  },
  {
    id: 'faq-012',
    question: 'What ROI can we expect from implementing Nexus?',
    answer:
      'Typical ROI drivers include: (1) Reduced repeat examinations due to improved protocol selection and quality monitoring, (2) Decreased radiologist time spent on triage and follow-up recommendations through automation, (3) Improved adherence to society guidelines reducing inappropriate follow-up imaging, and (4) Enhanced quality metrics for accreditation and pay-for-performance programs. Early adopters report positive ROI within 12-18 months. We can provide detailed ROI modeling based on your institution specific metrics and volumes.',
    category: 'Pricing',
    order: 3,
  },

  // Support (3 items)
  {
    id: 'faq-013',
    question: 'What level of technical support does Nexus provide?',
    answer:
      'All subscriptions include business hours technical support (Monday-Friday, 8 AM - 6 PM local time) with <4-hour response time for critical issues. Support is provided via secure ticketing portal, email, and phone. We offer remote diagnostics and system monitoring to proactively identify issues. Optional 24/7 premium support is available for sites requiring continuous uptime. All customers receive quarterly business reviews with their dedicated customer success manager.',
    category: 'Support',
    order: 1,
  },
  {
    id: 'faq-014',
    question: 'How often are algorithm updates released?',
    answer:
      'Algorithm updates follow a quarterly release cycle for minor improvements and performance enhancements. Major updates (new features, additional pathologies) are released annually. All updates undergo rigorous validation before deployment and can be staged in test environments before production rollout. Institutions maintain control over update timing to align with internal change management processes. Emergency patches for critical issues are deployed within 24-48 hours when necessary.',
    category: 'Support',
    order: 2,
  },
  {
    id: 'faq-015',
    question: 'What happens if Nexus is temporarily unavailable?',
    answer:
      'Nexus is designed for graceful degradation. If the AI system is temporarily unavailable, your PACS and RIS continue operating normally—Nexus never sits in the critical path for study acquisition or reporting. Queued studies are automatically processed when the system returns to service. We maintain >99.5% uptime during clinical hours and provide advance notice of planned maintenance windows (typically scheduled outside business hours). Your clinical workflows remain unaffected during brief outages.',
    category: 'Support',
    order: 3,
  },
];
