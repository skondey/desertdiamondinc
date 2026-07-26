import CertificationBadges from "@/components/CertificationBadges";
import { brandAssets } from "@desertdiamond/shared/tokens";

export const metadata = {
  title: "About | Desert Diamond Tech",
  description:
    "AWS-certified cloud architects and DevOps engineers delivering secure, scalable infrastructure solutions.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-dd-black mb-6">
            {brandAssets.tagline}
          </h1>
          <p className="text-xl text-dd-gray-700 max-w-3xl">
            We build cloud infrastructure that companies depend on. Every solution we design is
            grounded in AWS best practices, security-first architecture, and the kind of
            operational rigor that only comes from experience running production systems at scale.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dd-black mb-8 text-center">
            Our Mission
          </h2>
          <div className="prose prose-lg max-w-none text-dd-gray-700">
            <p className="text-lg mb-6">
              Too many businesses struggle with infrastructure that doesn't scale, security
              postures that don't hold up to audit, and technical debt that slows every new
              feature to a crawl. We exist to fix that.
            </p>
            <p className="text-lg mb-6">
              Desert Diamond Tech delivers expert cloud architecture, DevOps automation, and
              security engineering for companies that need infrastructure they can trust. We bring
              AWS-certified expertise, a methodical approach to problem-solving, and a commitment
              to building systems that work reliably under real-world conditions.
            </p>
            <p className="text-lg">
              Whether you're migrating to the cloud, hardening your security posture, or
              automating deployments, we'll meet you where you are and build what you need.
            </p>
          </div>
        </div>
      </section>

      {/* Certification Strip */}
      <CertificationBadges />

      {/* Team / Founder Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dd-black mb-12 text-center">
            Leadership
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="border border-dd-gray-200 rounded-lg p-8 bg-dd-gray-50">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-32 h-32 bg-dd-gray-300 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-4xl text-dd-gray-500">👤</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dd-black mb-2">
                    [FOUNDER NAME PLACEHOLDER]
                  </h3>
                  <p className="text-dd-gold font-semibold mb-4">
                    Founder & Lead Architect
                  </p>
                  <div className="text-dd-gray-700 space-y-3">
                    <p>
                      [BIO PLACEHOLDER: AWS-certified Solutions Architect (Professional and
                      Associate) with X years of experience designing and deploying production
                      cloud infrastructure for enterprise clients.]
                    </p>
                    <p>
                      [Expertise in Zero Trust architecture, Infrastructure as Code, Kubernetes
                      orchestration, and compliance frameworks including NIST, ISO, and FedRAMP.]
                    </p>
                    <p>
                      [Prior to founding Desert Diamond Tech, worked at [COMPANY] building
                      large-scale distributed systems and leading security initiatives.]
                    </p>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-semibold text-dd-black mb-2">Certifications:</h4>
                    <ul className="list-disc list-inside text-dd-gray-700 space-y-1">
                      <li>AWS Certified Solutions Architect – Professional</li>
                      <li>AWS Certified Solutions Architect – Associate</li>
                      <li>AWS Certified Cloud Practitioner</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Approach */}
      <section className="py-20 bg-dd-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dd-black mb-12 text-center">
            How We Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-dd-black mb-3">
                1. Understand the problem
              </h3>
              <p className="text-dd-gray-700">
                Before proposing solutions, we take the time to understand your business
                requirements, constraints, and growth trajectory. Good architecture starts with
                clear requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-dd-black mb-3">
                2. Design for resilience
              </h3>
              <p className="text-dd-gray-700">
                Every system we build is designed to handle failure gracefully. We architect for
                redundancy, implement monitoring and alerting, and document runbooks for incident
                response.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-dd-black mb-3">
                3. Automate everything
              </h3>
              <p className="text-dd-gray-700">
                Manual processes break at scale. We codify infrastructure with Terraform, automate
                deployments with CI/CD, and eliminate toil wherever possible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
