import Link from "next/link";
import Image from "next/image";
import { brandAssets, contact } from "@desertdiamond/shared/tokens";

export default function Footer() {
  return (
    <footer className="bg-dd-gray-50 border-t border-dd-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div className="col-span-1">
            <Image
              src={brandAssets.logoPath}
              alt={brandAssets.logoAlt}
              width={200}
              height={60}
              className="h-12 w-auto mb-4"
            />
            <p className="text-dd-gray-600 text-sm">{brandAssets.tagline}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-dd-black mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-dd-gray-600 hover:text-dd-blue text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-dd-gray-600 hover:text-dd-blue text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-dd-gray-600 hover:text-dd-blue text-sm">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-dd-gray-600 hover:text-dd-blue text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Training Link */}
          <div>
            <h3 className="font-semibold text-dd-black mb-4">Training</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`https://${contact.academyDomain}`}
                  className="text-dd-gray-600 hover:text-dd-blue text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Training Academy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-dd-black mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-dd-gray-600 hover:text-dd-blue text-sm"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dd-gray-200">
          <p className="text-dd-gray-600 text-sm text-center">
            &copy; {new Date().getFullYear()} Desert Diamond Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
