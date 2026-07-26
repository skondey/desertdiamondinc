import CertificationBadges from "@/components/CertificationBadges";
import { promise } from "@desertdiamond/shared/content/marketing";

export const metadata = {
  title: "About | Desert Diamond Academy",
  description:
    "Learn from AWS-certified instructors through live, project-based training that prepares you for real-world tech careers.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-dd-black mb-6">
            Transforming Ambition into Mastery
          </h1>
          <p className="text-xl text-dd-gray-700 max-w-3xl">
            At Desert Diamond Academy, you are a step closer, not a step away, from your success.
            We deliver live instructor-led training that bridges the gap between where you are and
            where you want to be in tech.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dd-black mb-8 text-center">
            Our Approach
          </h2>
          <div className="prose prose-lg max-w-none text-dd-gray-700">
            <p className="text-lg mb-6">
              Most training programs teach theory in isolation. We teach by building. Every concept
              you learn is immediately applied in hands-on labs that mirror real production
              environments.
            </p>
            <p className="text-lg mb-6">
              Our instructors are AWS-certified professionals with years of experience building and
              maintaining infrastructure at scale. They don't just teach — they've done the work,
              solved the problems, and debugged the systems you'll encounter in your career.
            </p>
            <p className="text-lg">
              We keep cohorts small, sessions live, and feedback immediate. This isn't
              self-paced video courses. It's structured, instructor-led training with the
              flexibility to ask questions, troubleshoot together, and learn from your peers.
            </p>
          </div>
        </div>
      </section>

      {/* Certification Strip */}
      <CertificationBadges />

      {/* Our Promise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dd-black mb-12 text-center">
            Our Promise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promise.map((item, idx) => (
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
                <p className="text-dd-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Format */}
      <section className="py-20 bg-dd-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dd-black mb-12 text-center">
            Live Instructor-Led Sessions
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-dd-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-dd-black mb-3">Live & Interactive</h3>
                <p className="text-dd-gray-700">
                  Real-time instruction with Q&A, code reviews, and pair programming. Ask
                  questions when you're stuck, not hours later.
                </p>
              </div>

              <div className="bg-white border border-dd-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-dd-black mb-3">Hands-On Projects</h3>
                <p className="text-dd-gray-700">
                  Build real infrastructure — deploy applications to AWS, configure CI/CD
                  pipelines, secure networks, and automate deployments.
                </p>
              </div>

              <div className="bg-white border border-dd-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-dd-black mb-3">Real-World Labs</h3>
                <p className="text-dd-gray-700">
                  Work in environments that replicate production systems, not toy examples. Learn
                  to troubleshoot under real constraints.
                </p>
              </div>

              <div className="bg-white border border-dd-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-dd-black mb-3">Career Support</h3>
                <p className="text-dd-gray-700">
                  Resume coaching, interview prep, and job placement guidance to help you land
                  your first (or next) role in tech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dd-black mb-12 text-center">
            Meet Your Instructor
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="border border-dd-gray-200 rounded-lg p-8 bg-dd-gray-50">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-32 h-32 bg-dd-gray-300 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-4xl text-dd-gray-500">👤</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dd-black mb-2">
                    [INSTRUCTOR NAME PLACEHOLDER]
                  </h3>
                  <p className="text-dd-gold font-semibold mb-4">Lead Instructor</p>
                  <div className="text-dd-gray-700 space-y-3">
                    <p>
                      [BIO PLACEHOLDER: AWS-certified Solutions Architect (Professional and
                      Associate) with X years of hands-on experience building and teaching cloud
                      infrastructure.]
                    </p>
                    <p>
                      [Expertise in AWS, Kubernetes, Docker, Terraform, DevOps automation, and
                      cybersecurity. Has taught hundreds of students who have gone on to roles at
                      major tech companies.]
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
    </>
  );
}
