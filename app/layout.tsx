import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/site/footer";
import { MobileStickyCta } from "@/components/site/mobile-sticky-cta";
import { Navbar } from "@/components/site/navbar";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import { siteConfig } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.seoKeywords,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-white font-sans text-slate-900">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-24 pt-10 sm:px-6 sm:pb-8">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <MobileStickyCta />
      </body>
    </html>
  );
}
