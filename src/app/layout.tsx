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

export const metadata: Metadata = {
  title: "Kuber Paper & Pack | High-Performance Corrugated Packaging Solutions",
  description: "ISO 9001:2015 certified manufacturer of premium B2B corrugated boxes, sheets, and custom packaging solutions with 150 MT/month capacity. Delhi & Sonipat.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} dark antialiased`}
    >
      <body className="bg-black text-zinc-100 min-h-screen flex flex-col font-sans">
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
