"use client"; 
import React, { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content Column */}
          <div className="relative">
            {/* Outlined Watermark Text */}
            <span 
              className="absolute -top-12 left-0 text-[60px] md:text-[100px] font-black leading-none select-none z-0 opacity-5"
              style={{ 
                color: 'transparent',
                WebkitTextStroke: '2px #0f172a' 
              }}
            >
              ABOUT US
            </span>

            {/* Main Heading */}
            <h2 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-black text-[#0f172a] uppercase tracking-tighter mb-8">
              WHO WE ARE
            </h2>

            {/* Initial Preview Text */}
            <div className="text-gray-600 text-base leading-relaxed mb-4 space-y-4">
              <p className="text-[#0f172a] text-lg font-bold leading-relaxed mb-6">
                Sinneo Group is a modern, founder-led holding company built around 
                execution, systems, and long-term value creation. We identify 
                high-upside opportunities and scale them using technology and 
                disciplined strategy.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-10">
                At our core, we operate with a builder's mindset. We prioritize 
                fundamentals, automation, and leverage over shortcuts. We are creating 
                systems that collect data, analyse behavior, and improve decision-making, 
                positioning ourselves as a quiet operator building the tools that modern 
                businesses rely on.
              </p>
            </div>

            {/* Expanded Text (hidden initially) */}
            {showMore && (
              <div className="text-gray-600 text-base leading-relaxed mb-10 space-y-4">
                <p>
                  We create systems that collect data, analyse behavior, and improve decision-making even further. 
                  Our approach allows us to quietly build businesses that scale efficiently 
                  without unnecessary distractions.
                </p>
                <p>
                  <span className="text-xl font-bold text-gray-700">Sinneo Group </span> is deeply committed to sustainable growth. We combine 
                   innovative technology solutions with disciplined operational practices, 
                  ensuring long-term value creation for our partners, stakeholders, 
                  and communities.
                </p>
                <p>
                  Our team of experts focuses on leveraging market insight, operational rigor, 
                  and strategic partnerships to deliver consistent results. We 
                  believe in building for the future while staying grounded in strong 
                  fundamentals today.
                </p>
                <p>
                  By integrating automation and data-driven systems across all ventures, 
                  Sinneo Group ensures efficiency, resilience, and innovation at every level of operation.
                </p>
              </div>
            )}

            {/* Read More / Show Less Button */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-[#ff5100] hover:bg-[#e64a00] hover:cursor-pointer text-white font-black uppercase tracking-widest text-xs px-10 py-4 transition-all duration-300 shadow-lg active:scale-95"
            >
              {showMore ? "Show Less" : "Read More"}
            </button>
          </div>

          {/* Right Image Column */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative z-10 overflow-hidden shadow-2xl">
              <img 
                src="/tommy-texter-T42j_xLOqw0-unsplash.jpg" // Replace with your actual image path
                alt="Sinneo Group Builder"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* "Since" Badge Overlay */}
            <div className="absolute -bottom-6 -left-6 md:-left-10 z-20 bg-[#1a3073] p-8 md:p-10 min-w-[140px] md:min-w-[180px] text-center shadow-xl">
              <div className="text-white font-black text-4xl md:text-5xl leading-none mb-1">
                2025
              </div>
              <div className="text-[#38bdf8] font-bold text-xs md:text-sm uppercase tracking-[0.3em]">
                Since
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
