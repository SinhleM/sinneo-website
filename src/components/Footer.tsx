"use client";
import React from "react";
import { Building2, ArrowUp, Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Projects" },
    { href: "#contact", label: "Contact Us" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#030712] text-gray-400 pt-10 pb-5 relative border-t border-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6 mb-8">
          
          {/* Column 1: Brand */}
          <div className="lg:pr-2">
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="w-4 h-4 text-[#ff5100]" />
              <span className="text-white font-black text-base uppercase tracking-tighter">
                Sinneo Group
              </span>
            </div>
            <p className="text-[10px] leading-tight opacity-70">
              Technology driven company focused on building intelligent, scalable solutions across South Africa.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:pl-2">
            <h3 className="text-white font-black text-[11px] uppercase mb-3 tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="hover:text-[#ff5100] transition-colors text-[10px] cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info (Added Email Link) */}
          <div>
            <h3 className="text-white font-black text-[11px] uppercase mb-3 tracking-wider">
              Contact
            </h3>
            <div className="space-y-2 text-[10px] opacity-70">
              <div className="flex items-start gap-2">
                <MapPin className="w-3 h-3 text-[#ff5100] mt-0.5" />
                <p>Sandton, Gauteng<br />South Africa</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 text-[#ff5100]" />
                <a href="tel:+27739869091" className="hover:text-white transition-colors cursor-pointer">
                  +27 73 986 9091
                </a>
              </div>
              {/* Added Email Line */}
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3 text-[#ff5100]" />
                <a href="mailto:info@sinneogroup.com" className="hover:text-white transition-colors cursor-pointer">
                  info@sinneogroup.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter (Added Pointer Cursor) */}
          <div className="flex flex-col">
            <h3 className="text-white font-black text-[11px] uppercase mb-3 tracking-wider">
              Newsletter
            </h3>
            <div className="flex flex-nowrap items-stretch mb-4 overflow-hidden rounded-sm border border-gray-800 h-9">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-[#0f172a]/30 text-[9px] px-3 py-0 w-full focus:ring-0 outline-none border-none min-w-0 cursor-text"
              />
              {/* Added cursor-pointer to the button */}
              <button className="bg-[#ff5100] text-white px-4 py-0 text-[9px] font-black uppercase tracking-tighter hover:bg-[#e64a00] transition-colors whitespace-nowrap flex items-center justify-center cursor-pointer active:scale-95">
                SIGN UP
              </button>
            </div>
            
           
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-4 flex justify-between items-center">
          <p className="text-[8px] tracking-widest uppercase font-bold opacity-50">
            © {currentYear} Sinneo Group | Sandton, ZA
          </p>
          
          <button 
            onClick={scrollToTop}
            className="bg-[#ff5100] p-1.5 text-white hover:scale-110 transition-transform shadow-lg rounded-sm cursor-pointer"
          >
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;