"use client";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
      suppressHydrationWarning
    >
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/tebogo-losaba-ybjhQsdXxzY-unsplash.jpg" 
          alt="Construction and Technology Background" 
          className="w-full h-full object-cover"
        />
        {/* Stronger left-to-right gradient to make left-aligned white text pop */}
<div className="absolute inset-0 bg-[#0f172a]/65" />
      </div>
      
      {/* - pt-48 pb-32: Increased Y-padding significantly 
          - text-left: Explicitly ensuring everything stays on the left
      */}
      <div className="section-container relative z-10 pt-40 pb-32 text-left" suppressHydrationWarning>
        <div className="max-w-5xl" suppressHydrationWarning>
          
          {/* Accent Line */}
          <div className="flex items-center justify-start gap-4 mb-8 animate-fade-in">
            <div className="w-16 h-[3px] bg-[#ff5100]" />
            <span className="text-[#ffffff] text-xs font-black uppercase tracking-[0.3em]">
              Trusted Technology Partner
            </span>
          </div>

          {/* Main Heading - Increased size back to high-impact levels 
              - Leading-[0.85] keeps the lines tight for that "Construction" look
          */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white leading-[0.85] mb-8 animate-fade-in italic italic-custom uppercase tracking-tighter">
            <span className="">TECHNOLOGY</span>
            <br />
            SOLUTIONS
            <br />
            THAT <span className="text-[#132b72]/95">DELIVER</span>
          </h1>
          {/* text-[#38bdf8] [#1a3073]  */}

          {/* CTAs - Left aligned */}
          <div className="flex flex-col sm:flex-row justify-start gap-5 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <a 
              href="#services" 
              className="bg-[#132b72]/90 hover:bg-[#0d256d] text-white px-12 py-5 text-sm font-black uppercase tracking-widest transition-all shadow-2xl flex items-center justify-center gap-3 group"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <a 
              href="#portfolio" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#0f172a] px-12 py-5 text-sm font-black uppercase tracking-widest transition-all flex items-center justify-center"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;