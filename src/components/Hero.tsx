"use client";
import { ArrowRight, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-hero via-hero to-navy-dark" />
      
      {/* Accent Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-hero-accent" />
            <span className="text-hero-foreground/90 text-sm font-medium">
              Trusted Technology Partner for Public & Private Sector
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-hero-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            TECHNOLOGY
            <br />
            <span className="text-hero-accent">SOLUTIONS</span>
            <br />
            THAT DELIVER
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-hero-foreground/80 max-w-2xl mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Sinneo Group provides software development, data engineering, analytics, 
            and automation solutions to help organizations modernize systems, improve 
            efficiency, and make data-driven decisions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a href="#services" className="btn-primary inline-flex items-center justify-center gap-2">
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#portfolio" className="btn-outline text-hero-foreground inline-flex items-center justify-center gap-2">
              View Our Work
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div>
              <div className="flex items-center gap-2 text-hero-accent mb-1">
                <Zap className="w-5 h-5" />
                <span className="text-2xl md:text-3xl font-bold">50+</span>
              </div>
              <p className="text-hero-foreground/60 text-sm">Projects Delivered</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-hero-accent mb-1">
                <span className="text-2xl md:text-3xl font-bold">100%</span>
              </div>
              <p className="text-hero-foreground/60 text-sm">Client Satisfaction</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-hero-accent mb-1">
                <span className="text-2xl md:text-3xl font-bold">B-BBEE</span>
              </div>
              <p className="text-hero-foreground/60 text-sm">Compliant</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-hero-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-hero-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
