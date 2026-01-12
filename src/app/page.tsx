import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Header and Footer are removed because they are in layout.tsx */}
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}