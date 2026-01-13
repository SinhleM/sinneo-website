"use client";
import { Plus } from "lucide-react";

const services = [
  {
    title: "Software Development",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800",
    link: "#contact",
  },
  {
    title: "Data Engineering & Analytics",
    image: "consulting.jpg",
    link: "#contact",
  },
  {
    title: "Automation Solutions",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    link: "#contact",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white w-full">
      {/* The 'mx-auto' on the container ensures equal X margins on both sides.
        The 'max-w' here controls the total width of your services area.
      */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="relative mb-12 h-24 flex items-end">
          <span 
            className="absolute top-0 left-0 text-[60px] md:text-[90px] font-black leading-none select-none z-0"
            style={{ 
              color: 'transparent',
              WebkitTextStroke: '1px #e5e7eb'
            }}
          >
            SERVICES
          </span>
          <h2 className="relative z-10 text-2xl md:text-3xl font-black text-[#0f172a] uppercase tracking-tighter pb-2">
            OUR SERVICES
          </h2>
        </div>

        {/* - gap-4: Reduces the space between the images significantly.
          - justify-items-center: Keeps everything balanced in the middle of each column.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full justify-items-center">
          {services.map((service) => (
            <div key={service.title} className="group flex flex-col cursor-pointer w-full max-w-[320px]">
              
              {/* Scaled Square Image Box */}
              <div className="overflow-hidden mb-4 aspect-square bg-gray-100 border border-gray-100 w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
              </div>

              {/* Scaled Title */}
              <h3 className="text-base font-black text-[#0f172a] mb-3 leading-tight uppercase tracking-tight">
                {service.title}
              </h3>

              {/* Scaled Footer */}
              <div className="mt-auto pt-3 border-t border-gray-100 group-hover:border-orange-500 flex items-center justify-between w-full">
                <a
                  href={service.link}
                  className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-[#38bdf8] transition-colors"
                >
                  Read More
                </a>
                
                {/* Scaled Plus Box */}
                <div className="w-8 h-8 flex items-center justify-center bg-[#f8fafc] border border-gray-100 text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:border-[#38bdf8] group-hover:text-white transition-all duration-300">
                  <Plus className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;