"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { brandAssets } from "@desertdiamond/shared/tokens";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-dd-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src={brandAssets.logoPath}
              alt={brandAssets.logoAlt}
              width={200}
              height={60}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-dd-black hover:text-dd-blue transition-colors">
              Home
            </Link>
            <Link
              href="/programs"
              className="text-dd-black hover:text-dd-blue transition-colors"
            >
              Programs
            </Link>
            <Link
              href="/about"
              className="text-dd-black hover:text-dd-blue transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-dd-black hover:text-dd-blue transition-colors"
            >
              Contact
            </Link>
            <Link href="/contact#register" className="btn-primary">
              Register Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-dd-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-dd-black hover:text-dd-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/programs"
                className="text-dd-black hover:text-dd-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </Link>
              <Link
                href="/about"
                className="text-dd-black hover:text-dd-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-dd-black hover:text-dd-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link href="/contact#register" className="btn-primary text-center">
                Register Now
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
