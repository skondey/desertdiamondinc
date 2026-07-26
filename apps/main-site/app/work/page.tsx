import Link from "next/link";

export const metadata = {
  title: "Work | Desert Diamond Tech",
  description: "Case studies and client projects showcasing our cloud infrastructure expertise.",
};

export default function Work() {
  const caseStudies = [
    {
      client: "[CLIENT NAME PLACEHOLDER]",
      title: "AWS Migration & Zero Trust Implementation",
      challenge:
        "Legacy on-premises infrastructure with security vulnerabilities, high operational costs, and limited scalability.",
      approach: [
        "Conducted comprehensive security and infrastructure audit",
        "Designed AWS architecture with VPC isolation and Zero Trust principles",
        "Implemented IAM policies with least-privilege access",
        "Migrated workloads to EC2, RDS, and S3 with minimal downtime",
        "Deployed CloudTrail and CloudWatch for continuous monitoring",
        "Documented runbooks and trained internal team",
      ],
      results: [
        "80% reduction in security incidents",
        "40% reduction in infrastructure costs",
        "99.9% uptime achieved",
        "Passed third-party security audit with zero critical findings",
      ],
      tech: "AWS (EC2, RDS, S3, VPC, IAM), Terraform, CloudTrail, CloudWatch",
    },
    {
      client: "[CLIENT NAME PLACEHOLDER]",
      title: "CI/CD Pipeline Automation",
      challenge:
        "Manual deployment process taking 4-6 hours per release, frequent rollback due to human error, and limited test coverage.",
      approach: [
        "Implemented Jenkins CI/CD pipelines with automated testing",
        "Containerized applications with Docker",
        "Deployed Kubernetes for orchestration and auto-scaling",
        "Integrated GitHub Actions for pull request validation",
        "Set up staging and production environments with Terraform",
        "Created rollback procedures and blue-green deployment strategy",
      ],
      results: [
        "Deployment time reduced from hours to 8 minutes",
        "10x increase in deployment frequency",
        "95% reduction in failed deployments",
        "Developer velocity increased significantly",
      ],
      tech: "Jenkins, Docker, Kubernetes, GitHub Actions, Terraform, AWS",
    },
    {
      client: "[CLIENT NAME PLACEHOLDER]",
      title: "Compliance & Security Hardening",
      challenge:
        "Healthcare SaaS company needed to achieve HIPAA compliance and pass SOC 2 audit. Existing infrastructure lacked audit logging, encryption at rest, and access controls.",
      approach: [
        "Gap analysis against HIPAA and SOC 2 requirements",
        "Implemented encryption at rest and in transit for all data stores",
        "Deployed SIEM with centralized logging and alerting",
        "Redesigned IAM policies and implemented MFA across the organization",
        "Set up automated compliance reporting and evidence collection",
        "Conducted security training for development and operations teams",
      ],
      results: [
        "Achieved HIPAA compliance",
        "Passed SOC 2 Type II audit with zero findings",
        "Reduced audit preparation time by 70%",
        "Continuous compliance monitoring in place",
      ],
      tech: "AWS (KMS, CloudTrail, Config, GuardDuty), Splunk, Terraform, IAM",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="gradient-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-dd-black mb-6">Selected Work</h1>
          <p className="text-xl text-dd-gray-700 max-w-3xl">
            Real infrastructure challenges we've solved for clients across industries. Each case
            study demonstrates our approach to designing secure, scalable cloud systems.
          </p>
          <p className="text-sm text-dd-gray-600 mt-4">
            [Note: Client names and identifying details have been anonymized. Full case studies
            with references available upon request.]
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                className="border border-dd-gray-200 rounded-lg p-8 hover:border-dd-gold transition-colors"
              >
                <div className="text-dd-gold text-sm font-semibold mb-2 uppercase">
                  {study.client}
                </div>
                <h2 className="text-3xl font-bold text-dd-black mb-4">{study.title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="font-semibold text-dd-black mb-3">Challenge</h3>
                    <p className="text-dd-gray-700 mb-6">{study.challenge}</p>

                    <h3 className="font-semibold text-dd-black mb-3">Approach</h3>
                    <ul className="space-y-2">
                      {study.approach.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-dd-blue mr-2 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                          <span className="text-dd-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-dd-black mb-3">Results</h3>
                    <ul className="space-y-3 mb-6">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-dd-gold mr-2 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-dd-gray-700 font-medium">{result}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="font-semibold text-dd-black mb-2">Technologies Used</h3>
                    <p className="text-dd-gray-700 text-sm">{study.tech}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-border bg-dd-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dd-black mb-6">
            Ready to solve your infrastructure challenges?
          </h2>
          <p className="text-lg text-dd-gray-700 mb-8">
            Let's discuss your project requirements and how we can help.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
