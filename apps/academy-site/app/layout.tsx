import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brandAssets, contact } from "@desertdiamond/shared/tokens";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desert Diamond Academy | Live Instructor-Led IT Training",
  description:
    "Learn cloud engineering, DevOps, and cybersecurity through hands-on, live instructor-led training. AWS, Kubernetes, Docker, and more.",
  keywords:
    "AWS training, cloud engineering bootcamp, DevOps course, cybersecurity training, Kubernetes, Docker, live instructor",
  authors: [{ name: "Desert Diamond Tech" }],
  openGraph: {
    title: "Desert Diamond Academy | Live Instructor-Led IT Training",
    description:
      "Learn cloud engineering, DevOps, and cybersecurity through hands-on, live instructor-led training.",
    url: `https://${contact.academyDomain}`,
    siteName: "Desert Diamond Academy",
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
