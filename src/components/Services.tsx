"use client";
import { Code, Database, Cog, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom web and enterprise systems tailored to business and government needs. We build scalable, secure, and maintainable solutions that drive digital transformation.",
    features: ["Web Applications", "Enterprise Systems", "API Development", "Legacy Modernization"],
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    description: "Transform raw data into actionable insights. We design robust data pipelines, create interactive dashboards, and deliver comprehensive reporting solutions.",
    features: ["Data Pipelines", "BI Dashboards", "Predictive Analytics", "Data Warehousing"],
  },
  {
    icon: Cog,
    title: "Automation Solutions",
    description: "Streamline operations with intelligent automation. We integrate systems, automate workflows, and optimize processes to boost productivity and reduce costs.",
    features: ["Process Automation", "System Integration", "Workflow Optimization", "RPA Solutions"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">What We Do</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            OUR SERVICES
          </h2>
          <p className="text-muted-foreground text-lg">
            We deliver end-to-end technology solutions that empower organizations 
            to achieve operational excellence and strategic objectives.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-xl p-8 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;