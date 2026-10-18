
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

const siteUrl = "https://nilesh-portfolio-omega.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Nilesh Salvi | Software Developer",
    template: "%s | Nilesh Salvi",
  },

  description:
    "Explore the portfolio of Nilesh Salvi, a software developer focused on Java, Spring Boot, Android development, Kotlin, Jetpack Compose and real-world digital products.",

  keywords: [
    "Nilesh Salvi",
    "Nilesh Salvi Portfolio",
    "Software Developer",
    "Java Developer",
    "Spring Boot Developer",
    "Android Developer",
    "Kotlin Developer",
    "Jetpack Compose",
    "Backend Development",
    "Next.js Portfolio",
    "Aai Cha Swaad",
    "Domixa",
    "RailWatch",
  ],

  authors: [
    {
      name: "Nilesh Salvi",
      url: siteUrl,
    },
  ],

  creator: "Nilesh Salvi",
  publisher: "Nilesh Salvi",

  applicationName: "Nilesh Salvi Portfolio",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Nilesh Salvi Portfolio",
    title: "Nilesh Salvi | Software Developer",
    description:
      "Java Backend • Android Development • Real-World Digital Products. Explore my projects, engineering skills and future technology roadmap.",
    images: [
      {
        url: "/portfolio-hero.png",
        alt: "Nilesh Salvi Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nilesh Salvi | Software Developer",
    description:
      "Explore my Java Backend, Android and real-world software development projects.",
    images: ["/portfolio-hero.png"],
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
