"use client";
import React from "react";
import { ArrowUp } from "lucide-react"; // Assuming you are using lucide-react, or standard icons

const teamMembers = [
  {
    id: 1,
    name: "Ethan Welch",
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800&h=800", // Construction/Hard hat placeholder
  },
  {
    id: 2,
    name: "James Miller",
    role: "Lead Engineer",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2815d22?auto=format&fit=crop&q=80&w=800&h=800", // Engineer placeholder
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1590649880765-91b1956b8276?auto=format&fit=crop&q=80&w=800&h=800", // Architect/Manager placeholder
  },
];

const Team = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Header Section with Watermark */}
        <div className="relative mb-16 md:mb-20">
          {/* Hollow Watermark "EXPERTS" */}
          <span
            className="absolute -top-12 md:-top-20 left-0 text-[80px] md:text-[150px] font-black leading-none select-none opacity-5 z-0"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px #0a1e5e",
            }}
          >
            EXPERTS
          </span>

          {/* Main Title */}
          <h2 className="relative z-10 text-5xl md:text-6xl font-black text-[#0a1e5e] uppercase tracking-tighter leading-none">
            OUR TEAM
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {teamMembers.map((member) => (
            <div key={member.id} className="group flex flex-col">
              {/* Image Container */}
              <div className="relative overflow-hidden w-full aspect-square mb-6 bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-start">
                {/* Orange Accent Line */}
                <div className="w-8 h-[3px] bg-[#ff5100] mb-3"></div>
                
                {/* Role */}
                <span className="text-[#ff5100] font-bold text-[10px] uppercase tracking-widest mb-1">
                  {member.role}
                </span>
                
                {/* Name */}
                <h3 className="text-[#0a1e5e] font-black text-2xl md:text-3xl uppercase tracking-tight">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Button (Bottom Right) - Matches screenshot */}
      <div className="absolute bottom-10 right-6 md:right-12 z-20">
        <button 
            onClick={scrollToTop}
            className="bg-[#ff5100] text-white p-3 shadow-xl transition-transform hover:-translate-y-1 hover:bg-[#e04800]"
        >
            <ArrowUp size={24} strokeWidth={3} />
        </button>
      </div>
    </section>
  );
};

export default Team;