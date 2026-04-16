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
                Sinneo Group is a founder led holding company built around execution,
                systems, and long term value creation. Our first operating division ;
                Sinneo Financial Technologies (Pty) Ltd builds intelligent financial
                infrastructure for the South African market.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-10">
                We operate with a builder's mindset. We prioritise shipping real products
                over pitching ideas. Our flagship product, Sorae, is a live bank statement
                intelligence API trusted by lenders, rental agents, and employers to make
                fast, reliable affordability decisions ; without manual review.
              </p>
            </div>

            {/* Expanded Text */}
            {showMore && (
              <div className="text-gray-600 text-base leading-relaxed mb-10 space-y-4">
                <p>
                  Sorae parses PDF bank statements from all five major South African banks:
                  Capitec, FNB, ABSA, Standard Bank, and Nedbank; returning verified income,
                  a full expense breakdown, an affordability score, and up to 13 behavioural
                  risk signals in under 3 seconds.
                </p>
                <p>
                  <span className="text-md font-semibold text-gray-900">Privacy is not an after thought. </span> Sorae
                  is built on a zero data retention architecture ; raw statements are never
                  stored, making it POPIA compliant by design. In a market where data privacy
                  obligations are increasingly enforced, this is a meaningful competitive advantage.
                </p>
                <p>
                  Sinneo Group is based in South Africa and focused on identifying high-upside
                  opportunities at the intersection of financial services and technology. We scale
                  using disciplined systems, not shortcuts.
                </p>
                <p>
                  We are building for the long term ; starting with the tools that the South
                  African credit and rental market needs right now.
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
                src="/tommy-texter-T42j_xLOqw0-unsplash.jpg"
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