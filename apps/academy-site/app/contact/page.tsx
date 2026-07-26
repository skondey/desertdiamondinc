import RegistrationForm from "@/components/RegistrationForm";
import { contact } from "@desertdiamond/shared/tokens";
import { cohorts, registrationStatus } from "@desertdiamond/shared/content";

export const metadata = {
  title: "Contact & Register | Desert Diamond Academy",
  description: "Register for an upcoming cohort or get in touch with questions about our programs.",
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-dd-gold font-semibold mb-4 uppercase tracking-wide">
            {registrationStatus}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-dd-black mb-6">
            Start Your Journey
          </h1>
          <p className="text-xl text-dd-gray-700 max-w-3xl">
            Ready to transform your career? Register for an upcoming cohort or reach out with
            questions about our programs.
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-dd-black mb-6">Register for a Cohort</h2>
              <RegistrationForm />
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-dd-black mb-6">Upcoming Cohorts</h2>
              <div className="space-y-4 mb-8">
                {cohorts.map((cohort) => (
                  <div
                    key={cohort.name}
                    className="border border-dd-gray-200 rounded-lg p-4 bg-dd-gray-50"
                  >
                    <h3 className="font-bold text-dd-black">{cohort.name}</h3>
                    <p className="text-dd-gray-700">Starts {cohort.startDate}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-dd-gray-200">
                <h3 className="font-semibold text-dd-black mb-3">Contact Information</h3>
                <p className="text-dd-gray-700 mb-2">
                  Questions about programs, pricing, or registration?
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-dd-blue hover:text-dd-gold font-semibold"
                >
                  {contact.email}
                </a>
              </div>

              <div className="pt-6 border-t border-dd-gray-200 mt-6">
                <h3 className="font-semibold text-dd-black mb-3">After You Register</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
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
                    <span className="text-dd-gray-700">
                      We'll contact you within 1 business day to confirm your registration
                    </span>
                  </li>
                  <li className="flex items-start">
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
                    <span className="text-dd-gray-700">
                      You'll receive enrollment details, payment options, and program materials
                    </span>
                  </li>
                  <li className="flex items-start">
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
                    <span className="text-dd-gray-700">
                      Access to pre-course materials and our student community
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-dd-gray-200 mt-6">
                <h3 className="font-semibold text-dd-black mb-3">
                  Looking for consulting services?
                </h3>
                <p className="text-dd-gray-700 mb-3">
                  Need AWS architecture, DevOps, or infrastructure support for your business?
                </p>
                <a
                  href={`https://${contact.mainDomain}`}
                  className="text-dd-blue hover:text-dd-gold font-semibold"
                >
                  Visit Desert Diamond Tech →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
