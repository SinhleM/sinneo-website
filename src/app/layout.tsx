import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = localFont({
  src: [
    { path: "../../public/fonts/montserrat/Montserrat-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/montserrat/Montserrat-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/montserrat/Montserrat-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/montserrat/Montserrat-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "../../public/fonts/montserrat/Montserrat-ExtraBoldItalic.woff2", weight: "800", style: "italic" },
  ],
  display: "swap",
  variable: "--font-montserrat",
});

const siteUrl = "https://sinneogroup.co.za";
const description =
  "Sinneo Group is a South African technology holding company building Sorae, a bank statement intelligence API, plus ICT infrastructure and AI & data engineering services.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sinneo Group | Fintech, ICT & AI Engineering, South Africa",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Sinneo Group",
    title: "Sinneo Group | We build products that ship",
    description,
    locale: "en_ZA",
    images: [{ url: "/tebogo-losaba-ybjhQsdXxzY-unsplash.jpg", width: 4000, height: 2667, alt: "Johannesburg skyline" }],
  },
  twitter: { card: "summary_large_image" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sinneo Group (Pty) Ltd",
  url: siteUrl,
  logo: `${siteUrl}/Sinneo-Logo-Transparent.png`,
  email: "info@sinneogroup.co.za",
  address: { "@type": "PostalAddress", addressLocality: "Pretoria", addressRegion: "Gauteng", addressCountry: "ZA" },
  subOrganization: { "@type": "Organization", name: "Sinneo Financial Technologies (Pty) Ltd" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <body className="antialiased bg-gray-50 text-gray-900 min-h-screen flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}