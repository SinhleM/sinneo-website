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
    { path: "../../public/fonts/montserrat/Montserrat-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/montserrat/Montserrat-Black.woff2", weight: "900", style: "normal" },
    { path: "../../public/fonts/montserrat/Montserrat-BlackItalic.woff2", weight: "900", style: "italic" },
  ],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Sinneo Group",
  description: "Building Solutions that transform business",
  icons: {
    icon: "/app/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <body className="antialiased bg-gray-50 text-gray-900 min-h-screen flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}