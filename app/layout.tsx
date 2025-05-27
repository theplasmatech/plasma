import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "The Plasma Tech | Custom Software Solutions for Enterprises",
  description:
    "The Plasma Tech is a leading software development agency delivering scalable, secure, and cutting-edge digital solutions for businesses, enterprises, and startups worldwide.",
  keywords: [
    "enterprise software development",
    "custom software solutions",
    "web application development",
    "mobile app development",
    "AI software development",
    "ML solutions for business",
    "IoT integration services",
    "enterprise digital transformation",
    "B2B software development",
    "The Plasma Tech agency",
  ],
  metadataBase: new URL("https://theplasma.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Plasma Tech | Enterprise Software Development Agency",
    description:
      "Partner with The Plasma Tech to build robust, scalable, and AI-powered software solutions tailored for your enterprise needs.",
    url: "https://theplasma.tech",
    siteName: "The Plasma Tech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://theplasma.tech/plasma.png", // Ensure this is a clean professional banner
        width: 1200,
        height: 630,
        alt: "The Plasma Tech - Enterprise Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Plasma Tech | Enterprise Software Development Agency",
    description:
      "We engineer scalable, secure, and AI-driven software for global businesses. Let's build the future of your digital infrastructure.",
    images: ["https://theplasma.tech/plasma.png"],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
