import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RFQDrawer from "@/components/RFQDrawer";
import { RFQProvider } from "@/context/RFQContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.kuberpack.com";
const siteName = "Kuber Paper & Pack Pvt. Ltd.";
const defaultDescription =
  "ISO 9001:2015 certified manufacturer of premium B2B corrugated boxes, sheets, and custom packaging solutions with 3,500 MT/month capacity. Delhi & Sonipat.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | High-Performance Corrugated Packaging Solutions`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "corrugated boxes manufacturer",
    "corrugated packaging Delhi",
    "corrugated packaging Sonipat",
    "corrugated box manufacturer India",
    "custom packaging solutions",
    "kraft paper boxes",
    "Kuber Paper Pack",
  ],
  authors: [{ name: siteName }],
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
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName,
    title: `${siteName} | High-Performance Corrugated Packaging Solutions`,
    description: defaultDescription,
    images: [
      {
        url: "/images/factory-aerial.webp",
        width: 1700,
        height: 1060,
        alt: "Kuber Paper & Pack manufacturing facility, Sonipat, Haryana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | High-Performance Corrugated Packaging Solutions`,
    description: defaultDescription,
    images: ["/images/factory-aerial.webp"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  alternateName: "Kuber Pack",
  url: siteUrl,
  logo: `${siteUrl}/kuber-logo-mark.png`,
  image: `${siteUrl}/images/factory-aerial.webp`,
  description: defaultDescription,
  foundingDate: "2017",
  slogan: "Assuring your business needs",
  email: "kuberpack@gmail.com",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "173, Deepali Enclave, Pitampura",
      addressLocality: "Delhi",
      postalCode: "110034",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "60/7, Kami-Gannaur Road, V.P.O. Kami",
      addressLocality: "Sonipat",
      addressRegion: "Haryana",
      postalCode: "131001",
      addressCountry: "IN",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-11-47082459",
      contactType: "sales",
      areaServed: "IN",
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-8860602060",
      contactType: "customer service",
      areaServed: "IN",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} dark antialiased`}
    >
      <body className="bg-black text-zinc-100 min-h-screen flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <RFQProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
          <RFQDrawer />
        </RFQProvider>
      </body>
    </html>
  );
}
