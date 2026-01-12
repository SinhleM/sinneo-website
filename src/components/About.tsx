"use client";

import { Award, Users, Target, GraduationCap } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality Delivery",
    description: "We are committed to delivering solutions that meet the highest standards of quality, reliability, and security.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We work closely with our clients to understand their unique challenges and deliver tailored solutions.",
  },
  {
    icon: Target,
    title: "Results Focused",
    description: "Every solution we deliver is measured by the tangible value it creates for our clients' operations.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Company Overview */}
          <div>
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              WHO WE ARE
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Sinneo Group is a South African technology company specializing in 
                software development, data engineering, and automation solutions. 
                We partner with public and private sector organizations to modernize 
                systems, improve operational efficiency, and enable data-driven 
                decision-making.
              </p>
              <p>
                Founded on principles of technical excellence and client-focused 
                delivery, we have built a track record of successful projects across 
                government departments and corporate enterprises. Our team combines 
                deep technical expertise with a thorough understanding of 
                procurement requirements and compliance standards.
              </p>
              <p>
                We are committed to contributing to South Africa's digital 
                transformation while maintaining the highest standards of 
                professionalism, security, and ethical business practice.
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {values.map((value) => (
                <div key={value.title} className="text-center sm:text-left">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto sm:mx-0 mb-4">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Director Profile */}
          <div className="bg-primary rounded-2xl p-8 md:p-10 text-primary-foreground">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <span className="text-primary-foreground/70 text-sm uppercase tracking-wider">Leadership</span>
                <h3 className="font-bold text-lg">Director Profile</h3>
              </div>
            </div>

            <div className="space-y-4 text-primary-foreground/90">
              <p>
                Sinneo Group is led by a qualified technologist with a 
                <strong className="text-accent"> Bachelor's degree in Computer Science</strong>, 
                bringing both academic foundation and practical experience to every engagement.
              </p>
              <p>
                With extensive experience in software architecture, data systems, 
                and enterprise solutions, our leadership ensures that every project 
                benefits from strategic technical oversight and adherence to 
                industry best practices.
              </p>
              <p>
                The director maintains active involvement in project delivery, 
                providing clients with direct access to senior technical expertise 
                throughout the engagement lifecycle.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 pt-6 border-t border-primary-foreground/20">
              <h4 className="font-semibold mb-4 text-primary-foreground/70 text-sm uppercase tracking-wider">
                Key Qualifications
              </h4>
              <ul className="space-y-3">
                {[
                  "BSc Computer Science",
                  "Enterprise Architecture Experience",
                  "Data Systems Specialist",
                  "Procurement & Compliance Ready",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;