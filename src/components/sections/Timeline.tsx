"use client";
import { motion } from "framer-motion";
import { TIMELINE_EXPERIENCE } from "@/lib/data";

export default function Timeline() {
  return (
    <section>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h2 className="text-5xl font-black text-text-main mb-4">Our Journey</h2>
        <div className="w-24 h-2 bg-accent-yellow mx-auto rounded-full" />
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Central Line - Dashed & Purple */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 border-l-2 border-dashed border-bg-purple/30 -translate-x-1/2 hidden md:block" />

        <div className="space-y-16">
          {TIMELINE_EXPERIENCE.map((item, idx) => {
            const isLeft = item.dev === "dev1";
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-center ${isLeft ? "md:justify-start" : "md:justify-end"} relative`}
              >
                {/* 3D Connector Sphere */}
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-bg-purple shadow-lg z-10 hidden md:block" />

                {/* THE CLAY CARD */}
                <div className={`
                    w-full md:w-[45%] p-8 
                    material-clay
                    relative group
                    hover:scale-[1.02] transition-transform duration-300
                `}>
                  {/* Decorative corner tag */}
                  <div className={`absolute top-0 ${isLeft ? "right-0 rounded-bl-2xl" : "left-0 rounded-br-2xl"} bg-bg-purple text-white text-xs font-bold px-4 py-2`}>
                     {item.year}
                  </div>

                  <h3 className="text-2xl font-bold text-text-main mb-1">{item.role}</h3>
                  <h4 className="text-bg-purple font-medium mb-4">{item.company}</h4>
                  <p className="text-text-muted leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}