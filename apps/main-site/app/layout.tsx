import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brandAssets, contact } from "@desertdiamond/shared/tokens";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desert Diamond Tech | AWS Cloud & Infrastructure Consulting",
  description:
    "Expert AWS cloud architecture, DevOps, Zero Trust security, and managed infrastructure support. Discovery and Pursuit.",
  keywords:
    "AWS, cloud architecture, DevOps, Terraform, Kubernetes, Zero Trust, cybersecurity, infrastructure",
  authors: [{ name: "Desert Diamond Tech" }],
  openGraph: {
    title: "Desert Diamond Tech | AWS Cloud & Infrastructure Consulting",
    description:
      "Expert AWS cloud architecture, DevOps, Zero Trust security, and managed infrastructure support.",
    url: `https://${contact.mainDomain}`,
    siteName: "Desert Diamond Tech",
    images: [
      {
        url: brandAssets.logoPath,
        width: 400,
        height: 120,
        alt: brandAssets.logoAlt,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
