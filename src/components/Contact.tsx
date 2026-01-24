"use client";
import React, { useState } from "react";
import ContactModal from "../modals/ContactModal";

const pillars = [
  { 
    id: "01", 
    title: "COMPUTER EQUIPMENT & CONFIGURATION", 
    subtitle: "Supply, Setup & Implementation" 
  },
  { 
    id: "02", 
    title: "CLOUD MIGRATION SERVICES", 
    subtitle: "Secure Transition & Deployment" 
  },
  { 
    id: "03", 
    title: "SOFTWARE & AI WORKFLOW DELIVERY", 
    subtitle: "Custom Solutions & Automation" 
  },
];

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <section id="contact" className="relative">
      {/* Upper Content Area */}
      <div 
        className="relative py-24 md:py-32 bg-[#0a1e5e] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 30, 94, 0.9), rgba(10, 30, 94, 0.9)), url('https://www.transparenttextures.com/patterns/blueprint.png')`,
          backgroundSize: 'cover'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center md:text-left">
          {/* Hollow Watermark */}
          <span 
            className="absolute -top-10 md:-top-16 left-1/2 md:left-12 -translate-x-1/2 md:translate-x-0 text-[60px] md:text-[120px] font-black leading-none select-none opacity-10"
            style={{ 
              color: 'transparent',
              WebkitTextStroke: '2px #ffffff' 
            }}
          >
            LET'S CHAT
          </span>

          <div className="relative z-20 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
              LET'S TALK WITH US
            </h2>
            
            <p className="text-blue-100/80 text-sm md:text-base font-medium leading-relaxed mb-10 max-w-xl">
              Sinneo Group is a technology-driven company focused on building intelligent, scalable solutions. 
              Have a project, idea, or opportunity in mind? Let’s chat and explore how we can work together.
            </p>

            {/* Contact Us Button */}
            <button 
              onClick={handleModalOpen}
              className="cursor-pointer bg-white text-[#0a1e5e] font-black uppercase tracking-widest text-[10px] px-10 py-4 transition-all duration-300 hover:bg-[#ff5100] hover:text-white active:scale-95 shadow-lg"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <ContactModal onClose={handleModalClose} />}

      {/* Updated High-Impact Pillar Bar */}
      <div className="relative z-30 max-w-6xl mx-auto -mt-12 md:-mt-16 px-6">
        <div className="bg-[#ff5100] grid grid-cols-1 md:grid-cols-3 py-10 md:py-14 shadow-2xl">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.id} 
              className={`flex items-center justify-start md:justify-center gap-5 px-10 ${
                index !== pillars.length - 1 ? "md:border-r border-white/20" : ""
              } mb-8 md:mb-0`}
            >
              {/* Number */}
              <div className="text-white font-black text-5xl md:text-6xl leading-none opacity-40">
                {pillar.id}
              </div>
              
              {/* Text Pillar Content */}
              <div className="flex flex-col">
                <span className="text-white font-black text-lg md:text-xl uppercase leading-tight tracking-tight mb-1">
                  {pillar.title}
                </span>
                <span className="text-white/80 font-bold text-[10px] md:text-[11px] uppercase tracking-[0.15em]">
                  {pillar.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="h-24 bg-white" />
    </section>
  );
};

export default Contact;
