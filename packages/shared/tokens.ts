/**
 * Design Tokens for Desert Diamond Tech
 * Shared across main consulting site and training academy
 */

export const colors = {
  gold: "#CC9F5E",
  blue: "#0A26B4",
  black: "#0B0B0C",
  white: "#FFFFFF",
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },
} as const;

export const brandAssets = {
  logoPath: "/logo/desert_diamond_logo_full-01.png",
  logoAlt: "Desert Diamond Tech - Discovery and Pursuit",
  tagline: "Discovery and Pursuit",
} as const;

export const certifications = [
  {
    name: "AWS Certified Solutions Architect – Professional",
    imagePath: "/certifications/aws-certified-solutions-architect-professional.png",
    alt: "AWS Certified Solutions Architect Professional badge",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    imagePath: "/certifications/aws-certified-solutions-architect-associate.png",
    alt: "AWS Certified Solutions Architect Associate badge",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    imagePath: "/certifications/aws-certified-cloud-practitioner.png",
    alt: "AWS Certified Cloud Practitioner Foundational badge",
  },
] as const;

export const contact = {
  email: "kondey@desertdiamondinc.com",
  mainDomain: "desertdiamondinc.com",
  academyDomain: "academy.desertdiamondinc.com",
} as const;
