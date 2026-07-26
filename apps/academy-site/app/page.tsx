import Link from "next/link";
import CertificationBadges from "@/components/CertificationBadges";
import { programs, cohorts, registrationStatus } from "@desertdiamond/shared/content";
import { differentiators } from "@desertdiamond/shared/content/marketing";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="text-dd-gold font-semibold mb-4 uppercase tracking-wide">
              {registrationStatus}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dd-black mb-6">
              Secure, Smart, and
              <br />
              <span className="text-dd-blue">Scalable Education</span>
            </h1>
            <p className="text-xl text-dd-gray-700 mb-8">
              IT Education Done Right. Master cloud engineering, DevOps, and cybersecurity through
              live instructor-led sessions. Hands-on projects, real-world scenarios, and career
              support from AWS-certified professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact#register" className="btn-primary text-center">
                Register Now
              </Link>
              <Link href="/programs" className="btn-secondary text-center">
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cohort Dates Callout */}
      <section className="bg-gradient-to-r from-dd-gold to-dd-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Upcoming Cohorts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cohorts.map((cohort) => (
              <div
                key={cohort.name}
                className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-bold text-white mb-2">{cohort.name}</h3>
                <p className="text-white text-lg opacity-90">Starts {cohort.startDate}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dd-black mb-4">Our Programs</h2>
            <p className="text-lg text-dd-gray-700 max-w-2xl mx-auto">
              Comprehensive, project-based training designed to get you job-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className="border border-dd-gray-200 rounded-lg p-8 hover:border-dd-gold transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-dd-black mb-2">{program.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-dd-gray-600">
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
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
                        {program.duration}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-dd-gold">
                      ${program.price.toLocaleString()}
                    </div>
                  </div>
                </div>

                <p className="text-dd-gray-700 mb-4">{program.overview}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-dd-black mb-2 text-sm">Career Outcomes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.outcomes.map((outcome, idx) => (
                      <span
                        key={idx}
                        className="bg-dd-blue bg-opacity-10 text-dd-blue text-xs px-3 py-1 rounded-full"
                      >
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/programs#${program.id}`}
                  className="text-dd-blue hover:text-dd-gold font-semibold"
                >
                  View full curriculum →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/programs" className="btn-secondary">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Certification Strip */}
      <CertificationBadges />

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dd-black mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-dd-gray-700">
              At Desert Diamond, you are a step closer, not a step away, from your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((diff, idx) => (
              <div key={idx} className="text-center">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dd-black mb-3">{diff.title}</h3>
                <p className="text-dd-gray-700">{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-20 bg-dd-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dd-black mb-4">
              Student Success Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-dd-gray-200 rounded-lg p-8">
              <div className="text-dd-gold text-4xl mb-4">"</div>
              <p className="text-dd-gray-700 mb-6">
                [TESTIMONIAL PLACEHOLDER — replace with actual student quote about their experience,
                what they learned, and their career outcome]
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-dd-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-dd-black">[Student Name]</div>
                  <div className="text-dd-gray-600 text-sm">[Job Title], [Company]</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-dd-gray-200 rounded-lg p-8">
              <div className="text-dd-gold text-4xl mb-4">"</div>
              <p className="text-dd-gray-700 mb-6">
                [TESTIMONIAL PLACEHOLDER — replace with actual student quote about their experience,
                what they learned, and their career outcome]
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-dd-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-dd-black">[Student Name]</div>
                  <div className="text-dd-gray-600 text-sm">[Job Title], [Company]</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="gradient-border bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dd-black mb-6">
            Ready to transform your career?
          </h2>
          <p className="text-lg text-dd-gray-700 mb-8">
            Empowering the pursuit of greatness in technology. Register now for an upcoming cohort.
          </p>
          <Link href="/contact#register" className="btn-primary text-lg px-10 py-4">
            Register Now
          </Link>
        </div>
      </section>
    </>
  );
}
