"use client";
import React, { useState } from "react";

const categories = ["Show All", "Software", "AI", "Infrastructure", "Data"];

const projects = [
  {
    title: "Provincial Digital Transformation",
    category: "Data",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
  },
  {
    title: "Enterprise ERM Platform",
    category: "Software",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
  },
  {
    title: "Cloud Infrastructure Scale",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("Show All");

  const filteredProjects = activeFilter === "Show All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="section-container">
        
        {/* Header and Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-8">
          <div className="relative h-20 flex items-end">
            {/* ADJUSTED: Watermark positioned higher to avoid messy overlap */}
            <span 
              className="absolute -top-1 left-0 text-[50px] md:text-[80px] font-black leading-none select-none z-0"
              style={{ 
                color: 'transparent',
                WebkitTextStroke: '1px #e5e7eb'
              }}
            >
              GALLERY
            </span>
            {/* Main Heading */}
            <h2 className="relative z-10 text-2xl md:text-3xl font-black text-[#0f172a] uppercase tracking-tighter pb-1">
              OUR PROJECTS
            </h2>
          </div>

          {/* Navigation Filters */}
          <nav className="flex flex-wrap gap-5 z-10 pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
                  activeFilter === cat ? "text-[#ff5100]" : "text-gray-400 hover:text-[#0f172a] hover:cursor-pointer"
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>

        {/* SCALED DOWN: Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group flex flex-col max-w-[340px]">
              
              {/* SCALED DOWN: Image Container */}
              <div className="relative overflow-hidden aspect-square mb-4 bg-gray-50 border border-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[20%] transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>

              {/* SCALED DOWN: Text Info */}
              <h3 className="text-base font-black text-[#0f172a] uppercase tracking-tight mb-1">
                {project.title}
              </h3>
              <p className="text-[#38bdf8] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                {project.category}
              </p>

              {/* Bottom Accent Border */}
              <div className="w-full h-[2px] bg-gray-100 group-hover:bg-[#ff5100] transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;