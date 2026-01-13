import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Testimonial from "@/components/Testimonial";
import Team from "@/components/Team";


export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Header and Footer are removed because they are in layout.tsx */}
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
      <Team />
      <Testimonial />
      
    </div>
  );
}