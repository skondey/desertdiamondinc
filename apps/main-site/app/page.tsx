import Link from "next/link";
import CertificationBadges from "@/components/CertificationBadges";
import { services } from "@desertdiamond/shared/content";
import { contact } from "@desertdiamond/shared/tokens";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dd-black mb-6">
              Build infrastructure
              <br />
              that <span className="text-dd-blue">scales with confidence</span>
            </h1>
            <p className="text-xl text-dd-gray-700 mb-8">
              Expert AWS architecture, DevOps automation, and Zero Trust security for modern
              businesses. We design, deploy, and maintain cloud infrastructure that works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-center">
                Book a Consultation
              </Link>
              <Link href="/services" className="btn-secondary text-center">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dd-black mb-4">
              What We Build
            </h2>
            <p className="text-lg text-dd-gray-700 max-w-2xl mx-auto">
              End-to-end cloud infrastructure services, from initial architecture through
              ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="border border-dd-gray-200 rounded-lg p-6 hover:border-dd-gold transition-colors"
              >
                <h3 className="text-xl font-bold text-dd-black mb-3">{service.title}</h3>
                <p className="text-dd-gray-700 mb-4">{service.description}</p>
                <Link
                  href={`/services#${service.id}`}
                  className="text-dd-blue hover:text-dd-gold font-semibold"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Certification Strip */}
      <CertificationBadges />

      {/* Differentiators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dd-black mb-4">
              Why Work With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-dd-gold bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-dd-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dd-black mb-3">
                AWS-Certified Expertise
              </h3>
              <p className="text-dd-gray-700">
                Professional-level AWS certifications and years of production experience
                designing infrastructure at scale.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-dd-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-dd-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dd-black mb-3">
                Infrastructure as Code
              </h3>
              <p className="text-dd-gray-700">
                Every environment we build is version-controlled, repeatable, and automated with
                Terraform and modern DevOps practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-dd-gold bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-dd-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dd-black mb-3">Security-First</h3>
              <p className="text-dd-gray-700">
                Zero Trust architecture, compliance-ready controls, and continuous monitoring
                built in from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Callout */}
      <section className="bg-gradient-to-r from-dd-gold to-dd-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Looking to build your skills instead?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Learn cloud engineering, DevOps, and cybersecurity through live instructor-led
              training at our academy.
            </p>
            <a
              href={`https://${contact.academyDomain}`}
              className="inline-block bg-white text-dd-blue px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Explore Training Programs
            </a>
          </div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="py-20 bg-dd-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dd-black mb-4">
              Selected Work
            </h2>
            <p className="text-lg text-dd-gray-700">
              Real infrastructure challenges, solved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-dd-gray-200 rounded-lg p-8">
              <div className="text-dd-gold text-sm font-semibold mb-2 uppercase">
                [CLIENT NAME PLACEHOLDER]
              </div>
              <h3 className="text-2xl font-bold text-dd-black mb-4">
                AWS Migration & Zero Trust Implementation
              </h3>
              <p className="text-dd-gray-700 mb-4">
                Migrated legacy on-premises infrastructure to AWS with Zero Trust architecture,
                reducing security incidents by 80% and cutting operational costs by 40%.
              </p>
              <div className="text-sm text-dd-gray-600">
                <strong>Tech:</strong> AWS, Terraform, IAM, VPC, CloudTrail
              </div>
            </div>

            <div className="bg-white border border-dd-gray-200 rounded-lg p-8">
              <div className="text-dd-gold text-sm font-semibold mb-2 uppercase">
                [CLIENT NAME PLACEHOLDER]
              </div>
              <h3 className="text-2xl font-bold text-dd-black mb-4">
                CI/CD Pipeline Automation
              </h3>
              <p className="text-dd-gray-700 mb-4">
                Built end-to-end CI/CD pipelines with Jenkins and Kubernetes, reducing deployment
                time from hours to minutes and enabling 10x faster iteration.
              </p>
              <div className="text-sm text-dd-gray-600">
                <strong>Tech:</strong> Jenkins, Docker, Kubernetes, GitHub Actions
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/work" className="btn-secondary">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="gradient-border bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dd-black mb-6">
            Ready to build something solid?
          </h2>
          <p className="text-lg text-dd-gray-700 mb-8">
            Schedule a consultation and let's talk about your infrastructure needs.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
