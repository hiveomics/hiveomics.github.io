import type { JobOpening } from '@/lib/types';

export const jobOpenings: JobOpening[] = [
  {
    id: 'senior-ml-engineer-001',
    title: 'Senior ML Engineer - Medical Imaging',
    department: 'Engineering',
    location: 'Hybrid',
    type: 'Full-time',
    description:
      'Join our AI team building cutting-edge deep learning models for radiology. Work on nodule detection, risk stratification, and multi-organ segmentation.',
    requirements: [
      'MS or PhD in Computer Science, Machine Learning, or related field',
      '5+ years experience with deep learning for computer vision',
      'Strong Python skills and experience with PyTorch or TensorFlow',
      'Publication record in medical imaging AI (preferred)',
      'Experience with 3D convolutional networks and medical image processing',
    ],
    responsibilities: [
      'Design and train deep learning models for medical image analysis',
      'Optimize model performance for production deployment',
      'Collaborate with radiologists to validate clinical utility',
      'Publish research findings in peer-reviewed journals',
      'Mentor junior ML engineers and contribute to team growth',
    ],
    applyLink: 'mailto:careers@hiveomics.com?subject=Senior ML Engineer Application',
  },
  {
    id: 'clinical-product-specialist-002',
    title: 'Clinical Product Specialist',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Bridge clinical radiology and product development. Define requirements, validate features, and ensure Nexus meets real-world clinical needs.',
    requirements: [
      'Radiologist (board-certified or board-eligible) or radiology-trained physician',
      '3+ years clinical radiology experience, thoracic imaging preferred',
      'Strong understanding of PACS/RIS workflows',
      'Excellent communication skills for cross-functional collaboration',
      'Interest in healthcare IT and AI applications',
    ],
    responsibilities: [
      'Define product requirements based on clinical workflows',
      'Validate AI algorithm outputs for clinical accuracy',
      'Conduct user research with radiologist customers',
      'Support customer implementations and training',
      'Represent clinical perspective in product roadmap discussions',
    ],
    applyLink: 'mailto:careers@hiveomics.com?subject=Clinical Product Specialist Application',
  },
  {
    id: 'full-stack-developer-003',
    title: 'Full-Stack Developer',
    department: 'Engineering',
    location: 'Hybrid',
    type: 'Full-time',
    description:
      'Build web applications and integration services for Nexus platform. Focus on PACS integration, user interfaces, and data visualization.',
    requirements: [
      'BS in Computer Science or equivalent experience',
      '3+ years full-stack development experience',
      'Strong TypeScript/JavaScript and modern web frameworks (React, Next.js)',
      'Experience with Python backends and REST APIs',
      'Familiarity with healthcare IT standards (DICOM, HL7) is a plus',
    ],
    responsibilities: [
      'Develop and maintain web-based user interfaces for radiologists',
      'Build integration services for PACS, RIS, and EHR systems',
      'Implement data visualization dashboards for quality metrics',
      'Write comprehensive tests and documentation',
      'Participate in code reviews and technical design discussions',
    ],
    applyLink: 'mailto:careers@hiveomics.com?subject=Full-Stack Developer Application',
  },
  {
    id: 'healthcare-it-integration-engineer-004',
    title: 'Healthcare IT Integration Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Lead technical implementations at customer sites. Configure DICOM routing, HL7 interfaces, and ensure seamless integration with hospital IT systems.',
    requirements: [
      'BS in Computer Science, IT, or related field',
      '5+ years experience with healthcare IT integration',
      'Deep expertise in DICOM, HL7, and PACS/RIS systems',
      'Strong troubleshooting and problem-solving skills',
      'Willingness to travel to customer sites (25-30%)',
    ],
    responsibilities: [
      'Design and implement DICOM routing and HL7 interfaces',
      'Configure Nexus for customer-specific PACS/RIS environments',
      'Troubleshoot integration issues and performance bottlenecks',
      'Document integration patterns and best practices',
      'Provide technical training to customer IT staff',
    ],
    applyLink:
      'mailto:careers@hiveomics.com?subject=Healthcare IT Integration Engineer Application',
  },
  {
    id: 'customer-success-manager-005',
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Own customer relationships post-sale. Drive adoption, ensure customer satisfaction, identify expansion opportunities, and serve as voice of customer to product team.',
    requirements: [
      'BA/BS degree or equivalent experience',
      '3+ years customer success or account management experience',
      'Healthcare or SaaS industry experience strongly preferred',
      'Excellent communication and relationship-building skills',
      'Data-driven approach to measuring customer health and ROI',
    ],
    responsibilities: [
      'Manage portfolio of radiology department customers',
      'Conduct quarterly business reviews and ROI analysis',
      'Drive product adoption and feature utilization',
      'Identify and mitigate churn risk proactively',
      'Coordinate with support, product, and engineering teams',
    ],
    applyLink:
      'mailto:careers@hiveomics.com?subject=Customer Success Manager Application',
  },
];
