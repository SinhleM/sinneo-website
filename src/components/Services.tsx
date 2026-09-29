import Image from "next/image";
import { Plus } from "lucide-react";

const services = [
  {
    title: "Sorae: Financial Intelligence API",
    image: "/imgae11.avif",
    link: "https://sorae.co.za",
  },
  {
    title: "ICT Infrastructure",
    image: "/service22.avif",
    link: "#contact",
  },
  {
    title: "AI & Data Engineering",
    image: "/service33.avif",
    link: "#contact",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white w-full">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="relative mb-12 h-24 flex items-end">
          <span
            aria-hidden="true"
            className="absolute top-0 left-0 text-[60px] md:text-[90px] font-extrabold leading-none select-none z-0"
            style={{
              color: 'transparent',
              WebkitTextStroke: '1px #e5e7eb'
            }}
          >
            SERVICES
          </span>
          <h2 className="relative z-10 text-2xl md:text-3xl font-extrabold text-[#0f172a] uppercase tracking-tighter pb-2">
            WHAT WE DO
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full justify-items-center">
          {services.map((service) => (
            <div key={service.title} className="group flex flex-col cursor-pointer w-full max-w-[320px]">

              {/* Square Image Box */}
              <div className="relative overflow-hidden mb-4 aspect-square bg-gray-100 border border-gray-100 w-full">
                <Image
                  src={service.image}
                  fill
                  sizes="(min-width: 768px) 320px, 100vw"
                  alt={service.title}
                  className="object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
              </div>

              {/* Title */}
              <h3 className="text-base font-extrabold text-[#0f172a] mb-3 leading-tight uppercase tracking-tight">
                {service.title}
              </h3>

              {/* Footer */}
              <div className="mt-auto pt-3 border-t border-gray-100 group-hover:border-orange-500 flex items-center justify-between w-full">
                <a
                  href={service.link}
                  target={service.link.startsWith("http") ? "_blank" : undefined}
                  rel={service.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-gray-500 group-hover:text-[#0f172a] transition-colors"
                >
                  Read More<span className="sr-only"> about {service.title}</span>
                </a>

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