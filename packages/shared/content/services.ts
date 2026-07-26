/**
 * Consulting Services for main site
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  included: string[];
  typicalDuration: string;
  outcomes: string[];
}

export const services: Service[] = [
  {
    id: "aws-cloud",
    title: "AWS Cloud Architecture & Deployment",
    description:
      "Design and deploy secure, scalable cloud infrastructure on Amazon Web Services. We build solutions using EC2, S3, RDS, IAM, and VPC that align with your business requirements and growth trajectory.",
    included: [
      "Architecture design and review",
      "EC2, S3, RDS, Lambda configuration",
      "VPC design and network security",
      "IAM policy design and least-privilege implementation",
      "Cost optimization and right-sizing",
    ],
    typicalDuration: "4-8 weeks",
    outcomes: [
      "Production-ready AWS infrastructure",
      "Security-hardened cloud environment",
      "Documented architecture and runbooks",
    ],
  },
  {
    id: "infrastructure-as-code",
    title: "Infrastructure as Code (Terraform)",
    description:
      "Turn manual infrastructure into repeatable, version-controlled code. We implement Terraform to automate provisioning, reduce errors, and enable rapid deployment across environments.",
    included: [
      "Terraform module development",
      "State management and backend configuration",
      "CI/CD pipeline integration",
      "Environment parity (dev/staging/prod)",
      "Documentation and knowledge transfer",
    ],
    typicalDuration: "3-6 weeks",
    outcomes: [
      "Automated infrastructure provisioning",
      "Version-controlled infrastructure definitions",
      "Faster deployment cycles",
    ],
  },
  {
    id: "devops-cicd",
    title: "DevOps & CI/CD",
    description:
      "Streamline your software delivery with continuous integration and deployment pipelines. We implement Jenkins, GitHub Actions, Docker, and Kubernetes to accelerate release velocity while maintaining quality.",
    included: [
      "CI/CD pipeline design and implementation",
      "Docker containerization",
      "Kubernetes orchestration setup",
      "Automated testing integration",
      "Deployment automation and rollback procedures",
    ],
    typicalDuration: "4-10 weeks",
    outcomes: [
      "Automated build, test, and deployment workflows",
      "Reduced time from commit to production",
      "Improved deployment reliability",
    ],
  },
  {
    id: "zero-trust",
    title: "Zero Trust Architecture & IAM Design",
    description:
      "Implement modern security architecture that assumes no implicit trust. We design identity and access management systems that verify every request, limit lateral movement, and protect your critical assets.",
    included: [
      "Zero Trust architecture design",
      "Identity and access management (IAM) policy development",
      "Multi-factor authentication implementation",
      "Role-based access control (RBAC) design",
      "Audit logging and monitoring configuration",
    ],
    typicalDuration: "6-12 weeks",
    outcomes: [
      "Defense-in-depth security posture",
      "Least-privilege access across systems",
      "Audit-ready access controls",
    ],
  },
  {
    id: "security-compliance",
    title: "Security & Compliance",
    description:
      "Align your infrastructure with industry standards and regulatory requirements. We assess, design, and implement controls for NIST, ISO, CIS, PCI DSS, and FedRAMP, with SIEM and continuous monitoring.",
    included: [
      "Security assessment and gap analysis",
      "Control implementation (NIST, ISO, CIS frameworks)",
      "SIEM deployment and configuration",
      "Compliance documentation and evidence collection",
      "Ongoing monitoring and alerting",
    ],
    typicalDuration: "8-16 weeks",
    outcomes: [
      "Compliance-ready infrastructure",
      "Continuous security monitoring",
      "Audit documentation and reports",
    ],
  },
  {
    id: "systems-administration",
    title: "Systems Administration",
    description:
      "Maintain reliable, secure, and performant infrastructure. We provide expert Linux and Windows Server administration, networking configuration, and proactive system management.",
    included: [
      "Linux/Windows Server management",
      "Patch management and updates",
      "Network configuration and troubleshooting",
      "Performance tuning and monitoring",
      "Backup and disaster recovery planning",
    ],
    typicalDuration: "Ongoing retainer or project-based",
    outcomes: [
      "Stable, performant infrastructure",
      "Reduced downtime and faster incident response",
      "Documented procedures and configurations",
    ],
  },
  {
    id: "managed-support",
    title: "Managed Support",
    description:
      "Ongoing infrastructure support and maintenance through flexible retainer agreements. We monitor, maintain, and optimize your systems so your team can focus on building your product.",
    included: [
      "24/7 monitoring and alerting",
      "Incident response and resolution",
      "Regular maintenance and updates",
      "Performance optimization",
      "Monthly reporting and recommendations",
    ],
    typicalDuration: "Monthly or annual retainer",
    outcomes: [
      "Proactive infrastructure management",
      "Reduced operational burden on your team",
      "Predictable monthly costs",
    ],
  },
];
