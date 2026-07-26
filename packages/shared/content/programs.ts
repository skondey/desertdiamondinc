/**
 * Training Academy Programs
 * Real pricing and curriculum from official brochure - update dates/pricing here
 */

export interface Program {
  id: string;
  title: string;
  duration: string;
  price: number;
  overview: string;
  topics: string[];
  projects: string[];
  outcomes: string[];
}

export const programs: Program[] = [
  {
    id: "system-engineering-comprehensive",
    title: "System Engineering (AWS, DevOps, Networking, Windows, Linux & AI)",
    duration: "5 Months",
    price: 3500,
    overview:
      "Comprehensive, all-in-one program transforming beginners into job-ready System Engineers with strong cloud, infrastructure, automation, and AI fundamentals.",
    topics: [
      "AWS Cloud Architecture & Deployment",
      "Networking Fundamentals (TCP/IP, DNS, VPNs)",
      "Windows Server Administration",
      "Linux System Administration",
      "DevOps Foundations (CI/CD, Git, Automation)",
      "Introduction to AI in Cloud Operations",
    ],
    projects: [
      "Deploy multi-tier applications on AWS",
      "Build and secure enterprise networks",
      "Automate infrastructure deployments",
    ],
    outcomes: ["Cloud Engineer", "System Administrator", "DevOps Engineer (Junior)"],
  },
  {
    id: "cloud-system-engineering",
    title: "Cloud System Engineering (AWS & AI)",
    duration: "6 Weeks",
    price: 2500,
    overview:
      "Intensive program focused on AWS cloud technologies and AI integration for modern cloud environments.",
    topics: [
      "AWS Core Services (EC2, S3, RDS, IAM)",
      "Cloud Security & Best Practices",
      "Infrastructure as Code (IaC)",
      "AI/ML Basics in AWS",
      "Automation & Monitoring",
    ],
    projects: ["Build cloud-native applications", "Deploy AI-powered cloud solutions"],
    outcomes: ["AWS Cloud Engineer", "Cloud Support Specialist"],
  },
  {
    id: "system-engineering-os",
    title: "System Engineering (Windows, Linux & Unix)",
    duration: "6 Weeks",
    price: 2500,
    overview:
      "Focused training on operating systems and enterprise system administration.",
    topics: [
      "Windows Server (Active Directory, Group Policy)",
      "Linux Administration (Ubuntu, Red Hat)",
      "Unix Fundamentals",
      "System Security & Hardening",
      "Scripting (PowerShell & Bash)",
    ],
    projects: ["Configure enterprise environments", "Automate administrative tasks"],
    outcomes: ["System Administrator", "IT Support Engineer"],
  },
  {
    id: "devops-engineering",
    title: "DevOps Engineering (Docker, Kubernetes & Jenkins)",
    duration: "6 Weeks",
    price: 2500,
    overview:
      "Master modern DevOps tools and practices for automation, scalability, and continuous delivery.",
    topics: [
      "Docker Containerization",
      "Kubernetes Orchestration",
      "Jenkins CI/CD Pipelines",
      "Git & Version Control",
      "Infrastructure Automation",
    ],
    projects: ["Build CI/CD pipelines", "Deploy containerized applications"],
    outcomes: ["DevOps Engineer", "Cloud DevOps Specialist"],
  },
  {
    id: "cybersecurity-protection",
    title: "Cybersecurity Protection & Monitoring",
    duration: "6 Weeks",
    price: 2500,
    overview:
      "Learn to protect, detect, and respond to cybersecurity threats in enterprise environments.",
    topics: [
      "Security Fundamentals & Threat Landscape",
      "Network Security & Firewalls",
      "SIEM Tools & Monitoring",
      "Incident Response & Risk Management",
      "Ethical Hacking Basics",
    ],
    projects: [
      "Monitor and respond to simulated attacks",
      "Secure cloud and on-prem environments",
    ],
    outcomes: ["Cybersecurity Analyst", "SOC Analyst"],
  },
];

export interface Cohort {
  name: string;
  startDate: string;
}

export const cohorts: Cohort[] = [
  { name: "March Cohort", startDate: "03/21" },
  { name: "June Cohort", startDate: "06/20" },
  { name: "October Cohort", startDate: "10/17" },
];

export const registrationStatus = "Registration in progress";
