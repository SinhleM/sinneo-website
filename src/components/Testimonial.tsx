"use client";
import React from "react";
import { Quote, ArrowUp, Star } from "lucide-react";

const Testimonial = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#0a1e5e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-32 relative z-10">

        {/* Header Section with Watermark */}
        <div className="relative mb-12">
          {/* Hollow Watermark "FEEDBACK" */}
          <span
            className="absolute -top-13 left-0 text-[60px] md:text-[90px] font-black leading-none select-none opacity-20 z-0 pointer-events-none"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px #ffffff",
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

          {/* Quote Icon */}
          <div className="mb-4">
            <Quote
              size={48}
              strokeWidth={1}
              className="text-[#ff5100] fill-transparent"
              style={{ transform: "scaleX(-1)" }}
            />
          </div>

          {/* Testimonial Text */}
          <p className="text-blue-50/80 text-base md:text-lg leading-relaxed mb-10 font-medium">
            What stood out about Sinneo Group was their depth of thinking. Every decision is intentional,
            from strategy to execution. They focus on building strong foundations, scalable systems,
            and long term value rather than short term wins. Working with them feels structured,
            deliberate, and aligned with future growth.
          </p>

          {/* Author Block with Orange Vertical Line and Stars on the Right */}
          <div className="flex items-center">
            <div className="h-10 w-[2px] bg-[#ff5100] mr-4"></div>

            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight">
                Sinhle Mkhabela
              </span>
              <span className="text-blue-200/50 text-sm font-medium">
                Cheif Technology Officer
              </span>
            </div>

            {/* 5 Star Rating - Right aligned */}
            <div className="flex gap-1 ml-auto">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill="#ff5100"
                  className="text-[#ff5100]"
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonial;
