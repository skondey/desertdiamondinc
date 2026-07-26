import { services } from "@desertdiamond/shared/content";
import Link from "next/link";

export const metadata = {
  title: "Services | Desert Diamond Tech",
  description:
    "AWS cloud architecture, DevOps automation, Zero Trust security, and managed infrastructure support.",
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-dd-black mb-6">Services</h1>
          <p className="text-xl text-dd-gray-700 max-w-3xl">
            End-to-end cloud infrastructure solutions, from initial architecture through ongoing
            managed support. Every engagement is tailored to your specific requirements and
            delivered with AWS-certified expertise.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="border-l-4 border-dd-gold pl-8 scroll-mt-20"
              >
                <h2 className="text-3xl font-bold text-dd-black mb-4">{service.title}</h2>
                <p className="text-lg text-dd-gray-700 mb-6">{service.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                  <div>
                    <h3 className="font-semibold text-dd-black mb-3">What's Included</h3>
                    <ul className="space-y-2">
                      {service.included.map((item, idx) => (
                        <li key={idx} className="flex items-start">
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
                          <span className="text-dd-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-dd-black mb-3">Typical Duration</h3>
                    <p className="text-dd-gray-700">{service.typicalDuration}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-dd-black mb-3">Outcomes</h3>
                    <ul className="space-y-2">
                      {service.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start">
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
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-dd-gray-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-border bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dd-black mb-6">
            Let's talk about your infrastructure needs
          </h2>
          <p className="text-lg text-dd-gray-700 mb-8">
            Schedule a consultation to discuss your project requirements and timeline.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
