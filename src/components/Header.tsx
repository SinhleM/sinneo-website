"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  const brandOrange = "#ff5100";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${
        scrolled ? "shadow-lg -translate-y-[37px]" : "shadow-md translate-y-0"
      }`}
    >
      {/* TOP BAR */}
      <div className="bg-[#0f172a]/95 text-white/70 border-b border-white/5 py-2 hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center text-[10px] font-medium uppercase tracking-[0.15em]">
          <div className="flex items-center gap-6">
            <a
              href="tel:+27739869091"
              className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors duration-300 group"
            >
              <Phone
                size={10}
                style={{ color: brandOrange }}
                className="group-hover:scale-110 transition-transform"
              />
              <span>+27 73 986 9091</span>
            </a>

            <a
              href="mailto:info@sinneogroup.co.za"
              className="flex items-center gap-2 border-l border-white/10 pl-6 cursor-pointer hover:text-white transition-colors duration-300 group"
            >
              <Mail
                size={10}
                style={{ color: brandOrange }}
                className="group-hover:scale-110 transition-transform"
              />
              <span>info@sinneogroup.co.za</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div
        className={`bg-[#1e293b]/90 backdrop-blur-md border-b border-white/10 transition-all duration-500 ${
          scrolled ? "py-1" : "py-0"
        }`}
      >
        <div className="container mx-auto px-6">
          <div
            className={`flex items-center transition-all duration-500 ${
              scrolled ? "h-14" : "h-20"
            }`}
          >
            {/* Logo */}
            <div className="w-[180px] flex-shrink-0">
              <a href="#home" className="cursor-pointer">
                <img
                  src="/output-onlinepngtools - Copy.png"
                  alt="Sinneo Group Logo"
                  className={`transition-all duration-500 object-contain ${
                    scrolled ? "h-8" : "h-11"
                  }`}
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-grow justify-center">
              <nav className="flex items-center gap-5 translate-x-12">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative text-white/80 hover:text-[#ff5100] transition-all text-[10.5px] font-medium uppercase tracking-[0.18em] group cursor-pointer"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#ff5100] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex w-[180px] justify-end flex-shrink-0">
              <a
                href="#contact"
                className={`bg-[#ff5100] hover:bg-[#e64a00] text-white rounded-sm text-[9px] font-black uppercase tracking-[0.12em] transition-all duration-300 cursor-pointer shadow-md active:scale-95 ${
                  scrolled ? "px-4 py-1.5" : "px-6 py-2.5"
                }`}
              >
                Get Started
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 ml-auto cursor-pointer"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU WITH SLIDE + FADE */}
        <div
          className={`md:hidden bg-[#1e293b]/95 backdrop-blur-md border-t border-white/10 transition-all duration-300 transform origin-top ${
            isMenuOpen
              ? "opacity-100 scale-y-100 max-h-screen py-4"
              : "opacity-0 scale-y-0 max-h-0 py-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white/80 hover:text-[#ff5100] text-sm font-medium uppercase tracking-[0.12em] transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 bg-[#ff5100] hover:bg-[#e64a00] text-white rounded-sm text-sm font-black uppercase tracking-[0.1em] px-6 py-2 transition-all duration-300 shadow-md"
            >
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
