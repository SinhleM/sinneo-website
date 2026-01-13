"use client";
import React from "react";
import { ArrowUp } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Sfiso Dlamini",
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800&h=800",
  },
  {
    id: 2,
    name: "Thabo Mokoena",
    role: "Lead Engineer",
    image: "/fortune-vieyra-xdmtQVVKibU-unsplash.jpg",
  },
  {
    id: 3,
    name: "Ntabiseng Mabaso",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1590649880765-91b1956b8276?auto=format&fit=crop&q=80&w=800&h=800",
  },
];

const Team = () => {
  return (
    <section id="team" className="relative pb-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        
        {/* Header Section - Scaled Down */}
        <div className="relative mb-12 h-24 flex items-end">
          <span
            className="absolute top-0 left-0 text-[60px] md:text-[90px] font-black leading-none select-none z-0"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px #f1f5f9", // Lightened stroke to match other sections
            }}
          >
            EXPERTS
          </span>

          <h2 className="relative z-10 text-2xl md:text-3xl font-black text-[#0f172a] uppercase tracking-tighter pb-2">
            OUR TEAM
          </h2>
        </div>

        {/* Team Grid - Max Width restricted for cleaner vertical alignment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="group flex flex-col w-full max-w-[340px]">
              
              {/* Image Container - Square Aspect Ratio */}
              <div className="relative overflow-hidden w-full aspect-square mb-5 bg-gray-50 border border-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-start relative">
                {/* Underlined Accent Line (matches Services/Projects logic) */}
                <div className="w-full h-[2px] bg-gray-100 group-hover:bg-[#ff5100] transition-colors duration-300 mb-4"></div>
                
                {/* Role - Small & Spaced */}
                <span className="text-[#ff5100] font-bold text-[10px] uppercase tracking-[0.2em] mb-1">
                  {member.role}
                </span>
                
                {/* Name - Scaled to base size */}
                <h3 className="text-[#0f172a] font-black text-lg md:text-xl uppercase tracking-tight">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;