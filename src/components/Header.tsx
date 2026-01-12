"use client";
import { useState } from "react";
import { Menu, X, Phone, Mail, Twitter, Facebook, Linkedin, Github } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  // The blue color from your logo (Sky Blue)
  const logoBlue = "#38bdf8";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md">
      {/* 1. TOP BAR: Contact & Socials */}
      <div className="bg-[#0f172a]/95 text-white/70 border-b border-white/5 py-2 hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center text-[11px] font-medium uppercase tracking-wider">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={12} style={{ color: logoBlue }} /> +27 73 986 9091
            </span>
            <span className="flex items-center gap-2 border-l border-white/10 pl-6">
              <Mail size={12} style={{ color: logoBlue }} /> info@sinneogroup.com
            </span>
            <span className="hidden lg:flex items-center gap-2 border-l border-white/10 pl-6">
              Mon - Sat 8:00 - 17:30, Sunday - CLOSED
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Twitter size={14} className="hover:text-[#38bdf8] cursor-pointer transition-colors" />
            <Facebook size={14} className="hover:text-[#38bdf8] cursor-pointer transition-colors" />
            <Linkedin size={14} className="hover:text-[#38bdf8] cursor-pointer transition-colors" />
            <Github size={14} className="hover:text-[#38bdf8] cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* 2. MAIN NAV: Logo & Links */}
      <div className="bg-[#1e293b]/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <a href="#home" className="flex items-center gap-3">
              <img 
                src="/Sinneo-Logo-Transparent.png" 
                alt="Sinneo Group Logo" 
                className="h-14 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-[#38bdf8] transition-all text-sm font-bold uppercase tracking-widest"
                >
                  {link.label}
                </a>
              ))}
              
              {/* BLUE CTA BUTTON */}
              <a
                href="#contact"
                className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-white px-7 py-3 rounded-sm text-xs font-black uppercase tracking-tighter transition-all shadow-lg hover:shadow-[#38bdf8]/20"
              >
                Contact Now
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-[#0f172a] border-t border-white/10">
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/90 hover:text-[#38bdf8] text-lg  uppercase border-b border-white/5 pb-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-[#38bdf8] text-white text-center py-4 rounded font-black uppercase mt-4"
              >
                Contact Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;