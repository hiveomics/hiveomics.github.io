/**
 * Company Information
 *
 * Static company data displayed on the About page.
 */

import type { CompanyInfo } from '@/lib/types';

export const companyInfo: CompanyInfo = {
  mission:
    'To improve patient outcomes through AI-powered quality assurance and governance in radiology. We empower healthcare organizations to deliver safer, more accurate diagnostic imaging while maintaining regulatory compliance.',

  values: [
    'Clinical Safety First - Patient safety and diagnostic accuracy are our top priorities in every decision we make',
    'Transparency - We believe in open communication with our customers and clear explanations of how our AI systems work',
    'Quality Excellence - We maintain the highest standards of quality in our products and services',
    'Innovation with Purpose - We develop cutting-edge technology that solves real clinical challenges',
    'Collaborative Partnership - We work closely with radiologists and healthcare teams to understand and meet their needs',
  ],

  founding: {
    year: 2023,
    story:
      'Nexus was founded by board-certified radiologists and AI researchers who recognized a critical gap in radiology quality assurance. After witnessing firsthand the challenges healthcare organizations face in maintaining consistent quality standards across large imaging volumes, our founders set out to build an AI-powered solution that augments human expertise rather than replacing it. Today, Nexus helps radiology departments worldwide ensure every patient receives the highest standard of care.',
  },

  compliance: [
    'HIPAA Compliant',
    'FDA 510(k) Pending',
    'ISO 13485 Certified',
    'SOC 2 Type II',
    'GDPR Compliant',
  ],
};
