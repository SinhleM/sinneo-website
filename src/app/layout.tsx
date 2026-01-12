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
  title: "Sinneo Group",
  description: "Building ventures that transform business",
  icons: {
    icon: "/Sinneo-Logo1-Transparent.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.variable} suppressHydrationWarning>
      {/* suppressHydrationWarning on <html> and <body> is the standard fix 
          for attributes injected by browser extensions like 'bis_skin_checked'.
      */}
      <body className="antialiased bg-gray-50 text-gray-900" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}