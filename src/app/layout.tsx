import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sinneogroup.co.za"),

  title: {
    default: "Sinneo Group | Business Transformation & Digital Solutions",
    template: "%s | Sinneo Group",
  },

  description:
    "Sinneo Group provides innovative business and technology solutions that help companies grow, scale, and transform digitally.",

  keywords: [
    "business solutions",
    "digital transformation",
    "technology consulting",
    "business consulting",
    "Sinneo Group"
  ],

  authors: [{ name: "Sinneo Group" }],
  creator: "Sinneo Group",
  publisher: "Sinneo Group",

  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Sinneo Group | Business Transformation & Digital Solutions",
    description:
      "Innovative business and digital transformation solutions designed to help companies grow and scale.",
    url: "https://sinneogroup.co.za",
    siteName: "Sinneo Group",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sinneo Group",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sinneo Group | Business Transformation & Digital Solutions",
    description:
      "Innovative business and digital transformation solutions designed to help companies grow and scale.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.variable} suppressHydrationWarning>
      <body className="antialiased bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}