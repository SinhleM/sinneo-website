"use client";
import React from "react";
import { Building2, ArrowUp, MapPin, Mail } from "lucide-react";
import { companyDetails } from "@/lib/company";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const legalLine = [
    companyDetails.groupRegNo && `Sinneo Group Reg. No. ${companyDetails.groupRegNo}`,
    companyDetails.fintechRegNo && `Sinneo Financial Technologies Reg. No. ${companyDetails.fintechRegNo}`,
    companyDetails.bbbeeLevel && `B-BBEE ${companyDetails.bbbeeLevel}`,
  ]
    .filter(Boolean)
    .join(" · ");

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
    <footer className="bg-[#030712] text-gray-400 pt-12 pb-6 relative border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          {/* Column 1: Brand */}
          <div className="lg:pr-4">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-[#ff5100]" />
              <span className="text-white font-extrabold text-xl uppercase tracking-tighter">
                Sinneo Group
              </span>
            </div>
            <p className="text-sm leading-normal text-white/50">
              Technology driven group focused on building intelligent,
              scalable solutions through divisions like Sinneo Financial Technologies (Pty) Ltd.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:pl-4">
            <h3 className="text-white font-extrabold text-sm uppercase mb-4 tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#ff5100] transition-colors text-sm cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-extrabold text-sm uppercase mb-4 tracking-wider">
              Contact
            </h3>
            <div className="space-y-3 text-sm opacity-70">
              <div className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="w-4 h-4 text-[#ff5100] mt-0.5" />
                <p className="text-white/80">Pretoria, Gauteng<br />South Africa</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#ff5100]" />
                <a href="mailto:info@sinneogroup.co.za" className="text-white/80 hover:text-white transition-colors cursor-pointer">
                  info@sinneogroup.co.za
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col">
            <h3 className="text-white font-extrabold text-sm uppercase mb-4 tracking-wider">
              Newsletter
            </h3>
            <div className="flex flex-nowrap items-stretch mb-4 overflow-hidden rounded-sm border border-gray-800 h-11">
              <input
                type="email"
                placeholder="Email"
                aria-label="Email address for newsletter"
                className="bg-[#0f172a]/30 text-sm px-4 py-0 w-full focus:ring-0 outline-none border-none min-w-0 cursor-text"
              />
              <button className="bg-[#ff5100] text-white px-6 py-0 text-xs font-extrabold uppercase tracking-tighter hover:bg-[#e64a00] transition-colors whitespace-nowrap flex items-center justify-center cursor-pointer active:scale-95">
                SIGN UP
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="text-[10px] tracking-widest uppercase font-semibold opacity-90">
              © {currentYear} Sinneo Group (Pty) Ltd | Sinneo Financial Technologies (Pty) Ltd
            </p>
            {legalLine && (
              <p className="text-[9px] tracking-widest uppercase opacity-80">
                {legalLine}
              </p>
            )}
            <p className="text-[9px] tracking-widest uppercase opacity-80">
              POPIA compliant · Zero data retention · Pretoria, ZA
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="bg-[#ff5100] p-2 text-white hover:scale-110 transition-transform shadow-lg rounded-sm cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;