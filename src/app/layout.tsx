import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Compassionate Care & Hope`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Cancer Care Sri Lanka",
    "Cancer Care Association",
    "Hospice Sri Lanka",
    "Palliative Care Anuradhapura",
    "Karapitiya Saku Nikethana",
    "Dr Samadhi Rajapaksa",
    "Home-based palliative care Sri Lanka",
    "Cancer patient charity Sri Lanka",
    "Free hospice care Sri Lanka",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: siteConfig.name,
    alternateName: siteConfig.sinhalaName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    foundingDate: "2003",
    founder: {
      "@type": "Person",
      name: siteConfig.registration.founder,
    },
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 56, Munasinghe Rd, Galawilawatte",
      addressLocality: "Homagama",
      addressCountry: "LK",
    },
    telephone: siteConfig.contact.headOffice.mobile,
    email: siteConfig.contact.headOffice.email,
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F5FAFE] text-[#18334A] selection:bg-[#1261A0] selection:text-white pb-20 lg:pb-0">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
