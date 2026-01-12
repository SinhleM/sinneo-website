"use client";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-navy-dark py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">S</span>
              </div>
              <span className="text-hero-foreground font-bold text-xl">Sinneo Group</span>
            </a>
            <p className="text-hero-foreground/50 text-sm">
              © {currentYear} Sinneo Group. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-hero-foreground/60 hover:text-hero-accent transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-center text-hero-foreground/40 text-sm">
            Technology solutions for public and private sector organizations in South Africa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
