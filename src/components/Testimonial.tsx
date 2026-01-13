"use client";
import React from "react";
import { Quote, ArrowUp } from "lucide-react";

const Testimonial = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#0a1e5e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10">
        
        {/* Header Section with Watermark */}
        <div className="relative mb-12">
          {/* Hollow Watermark "FEEDBACK" */}
          <span
            className="absolute -top-12 left-0 text-[80px] md:text-[130px] font-black leading-none select-none opacity-20 z-0 pointer-events-none"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px #ffffff", // Thin white stroke as seen in image
            }}
          >
            FEEDBACK
          </span>

          {/* Main Title */}
          <h2 className="relative z-10 text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
            TESTIMONIAL
          </h2>
        </div>

        {/* Content Block */}
        <div className="max-w-3xl relative z-10 pl-2">
          
          {/* Quote Icon - Outlined style to match screenshot */}
          <div className="mb-8">
            <Quote 
              size={48} 
              strokeWidth={1} 
              className="text-[#ff5100] fill-transparent" 
              style={{ transform: 'scaleX(-1)' }} // Flipping icon to match opening quote style
            />
          </div>

          {/* Testimonial Text */}
          <p className="text-blue-100/70 text-base md:text-lg leading-relaxed mb-10 font-medium">
            Mollit anim laborum. Dvcuis aute iruxvfg dhjkloohr in re voluptate velit esscillumlore 
            eu quife nrulla pariatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg 
            dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim. Mollit anim 
            laborum. Dvcuis aute iruxvfg dhjklohr in re voluptate velit esscillumlore eu quife 
            nrulla pariatur. Excghcepteur sfwsignjn.
          </p>

          {/* Author Block with Orange Vertical Line */}
          <div className="flex items-center">
            <div className="h-10 w-[2px] bg-[#ff5100] mr-4"></div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight">
                Jessya Inn
              </span>
              <span className="text-blue-200/50 text-sm font-medium">
                Co Founder
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Diagonal Pattern Bar */}
      <div 
        className="absolute bottom-0 left-0 w-full h-12 z-0 opacity-20"
        style={{
          // Pure CSS diagonal stripes to match the footer pattern in screenshot
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #ffffff,
            #ffffff 1px,
            transparent 1px,
            transparent 10px
          )`
        }}
      />

      {/* Floating Action Button (Bottom Right) */}
      <div className="absolute bottom-0 right-6 md:right-12 z-20 translate-y-1/2">
         {/* Note: In the screenshot the button is flush bottom/right, 
             but usually these overlap sections. I positioned it 
             to anchor to the bottom of this dark section. */}
        <button 
          onClick={scrollToTop}
          className="bg-[#ff5100] hover:bg-[#ff6a22] text-white p-4 transition-all duration-300 shadow-lg group"
        >
          <ArrowUp size={20} strokeWidth={3} className="group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;