import { programs } from "@desertdiamond/shared/content";
import Link from "next/link";

export const metadata = {
  title: "Programs | Desert Diamond Academy",
  description:
    "Comprehensive cloud engineering, DevOps, and cybersecurity training programs with live instruction and hands-on projects.",
};

// Generate Course structured data for SEO
const generateCourseSchema = (program: typeof programs[0]) => {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: program.title,
    description: program.overview,
    provider: {
      "@type": "Organization",
      name: "Desert Diamond Tech",
    },
    offers: {
      "@type": "Offer",
      price: program.price,
      priceCurrency: "USD",
    },
    educationalCredentialAwarded: program.outcomes.join(", "),
    timeRequired: program.duration,
  };
};

export default function Programs() {
  return (
    <>
      {/* Add structured data for all courses */}
      {programs.map((program) => (
        <script
          key={program.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateCourseSchema(program)),
          }}
        />
      ))}

      {/* Hero */}
      <section className="gradient-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-dd-black mb-6">
            Training Programs
          </h1>
          <p className="text-xl text-dd-gray-700 max-w-3xl">
            Live instructor-led training designed to take you from beginner to job-ready. Every
            program includes hands-on projects, real-world labs, and career support.
          </p>
        </div>
      </section>

      {/* Programs Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program) => (
              <div
                key={program.id}
                id={program.id}
                className="border-l-4 border-dd-gold pl-8 scroll-mt-20"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div className="mb-4 md:mb-0">
                    <h2 className="text-3xl font-bold text-dd-black mb-3">{program.title}</h2>
                    <div className="flex flex-wrap items-center gap-4 text-dd-gray-600">
                      <span className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Duration: {program.duration}
                      </span>
                    </div>
                  </div>
                  <div className="text-left md:text-right">
                    <div className="text-4xl font-bold text-dd-gold mb-2">
                      ${program.price.toLocaleString()}
                    </div>
                    <Link href="/contact#register" className="btn-primary inline-block">
                      Register Now
                    </Link>
                  </div>
                </div>

                <p className="text-lg text-dd-gray-700 mb-8">{program.overview}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-semibold text-dd-black mb-4 text-lg">Key Topics</h3>
                    <ul className="space-y-2">
                      {program.topics.map((topic, idx) => (
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
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-dd-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-dd-black mb-4 text-lg">
                      Hands-On Projects
                    </h3>
                    <ul className="space-y-2">
                      {program.projects.map((project, idx) => (
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
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                          </svg>
                          <span className="text-dd-gray-700">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-dd-black mb-4 text-lg">
                      Career Outcomes
                    </h3>
                    <ul className="space-y-2">
                      {program.outcomes.map((outcome, idx) => (
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
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
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
            Ready to start your journey?
          </h2>
          <p className="text-lg text-dd-gray-700 mb-8">
            Register for an upcoming cohort and take the first step toward a new career in tech.
          </p>
          <Link href="/contact#register" className="btn-primary text-lg px-10 py-4">
            Register Now
          </Link>
        </div>
      </section>
    </>
  );
}
