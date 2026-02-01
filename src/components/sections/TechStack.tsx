"use client";
import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/data";

export default function TechStack() {
  const rows = [
    TECH_STACK.slice(0, 10),  
    TECH_STACK.slice(10, 19), 
    TECH_STACK.slice(19, 26), 
    TECH_STACK.slice(26, 30), 
    TECH_STACK.slice(30, 32), 
  ];

  return (
    <section className="py-24 relative overflow-visible z-10">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-black mb-16 text-center text-gray-800 tracking-tight">
          Targeted Technologies
        </h2>
        
        <div className="flex flex-col items-center gap-4 w-full">
          {rows.map((row, rowIndex) => (
            <div 
              key={rowIndex} 
              className="flex flex-row flex-wrap justify-center gap-3 w-full px-4"
            >
              {row.map((tech) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    /* Reduced width/height from 32 to 24 (md) and 24 to 20 (base) */
                    className="group relative w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center rounded-2xl bg-white shadow-clay-card border border-gray-100 transition-all pointer-events-auto"
                  >
                    {/* Smaller Icon size for balance */}
                    <div className="text-gray-400 group-hover:text-brand-purple transition-colors mb-1">
                      <Icon size={24} />
                    </div>
                    
                    {/* Tighter font sizing */}
                    <span className="text-[8px] md:text-[10px] font-bold text-gray-500 uppercase tracking-tighter text-center px-1">
                      {tech.name}
                    </span>
                    
                    {/* Refined Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}