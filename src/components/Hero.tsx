import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
      suppressHydrationWarning
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.avif"
          fill
          priority
          sizes="100vw"
          alt="Johannesburg Skyline"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0f172a]/70" />
      </div>

      <div className="section-container relative z-10 pt-40 pb-32 text-left" suppressHydrationWarning>
        <div className="max-w-5xl" suppressHydrationWarning>

          {/* Accent Line */}
          <div className="flex items-center justify-start gap-4 mb-8">
            <div className="w-16 h-[3px] bg-[#ff5100]" />
            <span className="text-white text-xs font-extrabold uppercase tracking-[0.3em]">
              Sinneo Group · South Africa
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-white leading-[0.85] mb-6 italic uppercase tracking-tighter">
            WE BUILD
            <br />
            PRODUCTS
            <br />
            THAT <span className="text-[#ff5100]">SHIP.</span>
          </h1>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-start gap-5">
            <a
              href="#portfolio"
              className="bg-[#ff5100] hover:bg-[#e04800] text-white px-12 py-5 text-sm font-extrabold uppercase tracking-widest transition-all shadow-2xl flex items-center justify-center gap-3 group"
            >
              See What We Built
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="https://sorae.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/40 text-white hover:border-white hover:bg-white hover:text-[#0f172a] px-12 py-5 text-sm font-extrabold uppercase tracking-widest transition-all flex items-center justify-center gap-3"
            >
              Visit Sorae
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;