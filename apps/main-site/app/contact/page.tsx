import ContactForm from "@/components/ContactForm";
import { contact } from "@desertdiamond/shared/tokens";

export const metadata = {
  title: "Contact | Desert Diamond Tech",
  description: "Get in touch to discuss your AWS and cloud infrastructure needs.",
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-dd-black mb-6">
            Let's Talk
          </h1>
          <p className="text-xl text-dd-gray-700 max-w-3xl">
            Ready to build infrastructure that scales? Schedule a consultation and we'll discuss
            your requirements, timeline, and approach.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-dd-black mb-6">Send us a message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-dd-black mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-dd-black mb-2">Email</h3>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-dd-blue hover:text-dd-gold"
                  >
                    {contact.email}
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-dd-black mb-2">Response Time</h3>
                  <p className="text-dd-gray-700">
                    We typically respond to inquiries within 1 business day.
                  </p>
                </div>

                <div className="pt-6 border-t border-dd-gray-200">
                  <h3 className="font-semibold text-dd-black mb-3">What to Expect</h3>
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
                        Initial consultation call to understand your requirements
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
                        Tailored proposal with approach, timeline, and pricing
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
                        Clear communication throughout the engagement
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-dd-gray-200">
                  <h3 className="font-semibold text-dd-black mb-3">
                    Looking for training instead?
                  </h3>
                  <p className="text-dd-gray-700 mb-3">
                    Visit our training academy to learn cloud engineering, DevOps, and
                    cybersecurity through live instructor-led courses.
                  </p>
                  <a
                    href={`https://${contact.academyDomain}`}
                    className="text-dd-blue hover:text-dd-gold font-semibold"
                  >
                    Explore Training Programs →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
