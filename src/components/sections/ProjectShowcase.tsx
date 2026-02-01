"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import ComingSoonModal from "@/components/ui/ComingSoonModal"; 
import Link from "next/link";

// --- REAL PROJECT DATA ---
const PROJECTS = [
  {
    title: "API Forge",
    category: "DevTools & API Testing",
    description: "A developer-first platform for simulating realistic backend environments. Features a dynamic mock engine with latency injection, chaos engineering, and a custom Next.js reverse proxy for seamless CORS handling.",
    tags: ["Spring Boot", "Next.js", "Docker", "PostgreSQL"],
    color: "from-blue-500 to-indigo-600",
    link: "https://apiforge-frontend.vercel.app",
    repo: "https://github.com/helpdeskapiforge/apiforge-backend",
    image: "/api-forge.png"
  },
  {
    title: "HealthConnect",
    category: "Healthcare Microservices",
    description: "A resilient healthcare ecosystem built on domain-driven microservices. Integrates Spring AI for medical insights, RabbitMQ for asynchronous messaging, and a highly optimized doctor dashboard handling complex slot management.",
    tags: ["Microservices", "Spring Cloud", "RabbitMQ", "Spring AI"],
    color: "from-emerald-500 to-teal-600",
    link: "https://github.com/Ksarkarupes/health-connect-microservices",
    repo: "https://github.com/Ksarkarupes/health-connect-microservices",
    image: "/health-connect.png"
  },
  {
    title: "CX Dance Academy",
    category: "Creative Brand Portal",
    description: "A high-performance advertisement portal designed for visual impact. Built with a streamlined Express.js backend and Tailwind CSS to deliver a fast, responsive, and aesthetically engaging user experience.",
    tags: ["Express.js", "Pug", "Tailwind CSS"],
    color: "from-rose-500 to-pink-600",
    link: "https://dance-website-blush.vercel.app/",
    repo: "https://github.com/Ksarkarupes/DanceWebsite",
    image: "/cxdance-academy.png"
  }
];

export default function ProjectShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-10 relative">
      
      {/* Modal */}
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl font-black text-text-main mb-4">Selected Works</h2>
        <div className="flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-purple" />
            <div className="w-12 h-2 rounded-full bg-brand-peach" />
            <div className="w-2 h-2 rounded-full bg-brand-blue" />
        </div>
      </motion.div>

      <div className="flex flex-col gap-20">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ margin: "-100px", once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative"
          >
            {/* Colorful Glow Behind Card */}
            <div className={`absolute -inset-2 bg-gradient-to-r ${project.color} opacity-20 blur-2xl rounded-[3rem] group-hover:opacity-40 transition-opacity duration-500`} />

            {/* The Clay Card */}
            <motion.div 
              whileHover={{ y: -10, rotateX: 2, rotateY: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-white rounded-[2.5rem] p-4 md:p-6 shadow-clay-card border border-white/60 overflow-hidden"
            >
              {/* Image Area */}
              <div className="relative h-64 md:h-80 w-full rounded-[2rem] overflow-hidden bg-gray-100 mb-8 border border-black/5 group-hover:shadow-inner transition-shadow">
                 
                 <Image 
                   src={project.image} 
                   alt={project.title}
                   fill
                   className="object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 mix-blend-overlay`} />

                 {/* "View Case Study" Button Overlay - CLICK OPENS MODAL */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-sm">
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="bg-white text-black px-8 py-3 rounded-full font-bold shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform cursor-pointer"
                    >
                        View Case Study <ArrowUpRight size={18} />
                    </button>
                 </div>
              </div>

              {/* Content Area */}
              <div className="px-2 md:px-4">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className={`text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-2 block`}>
                            {project.category}
                        </span>
                        <h3 className="text-3xl font-bold text-text-main group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-gray-500 transition-all">
                            {project.title}
                        </h3>
                    </div>
                    
                    {/* Links */}
                    <div className="flex gap-3">
                        {/* Repo Link (Always External) */}
                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-50 hover:bg-black hover:text-white transition-colors">
                            <Github size={20} />
                        </a>

                        {/* External Link Logic */}
                        {/* IF PROJECT IS HEALTHCONNECT -> OPEN MODAL */}
                        {project.title === "HealthConnect" ? (
                             <button
                                onClick={() => setIsModalOpen(true)}
                                className="p-3 rounded-full bg-gray-50 hover:bg-brand-purple hover:text-white transition-colors cursor-pointer"
                             >
                                <ExternalLink size={20} />
                             </button>
                        ) : (
                            /* ELSE -> GO TO REAL LINK */
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-50 hover:bg-brand-purple hover:text-white transition-colors">
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-gray-500 leading-relaxed mb-8">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 text-sm font-medium text-gray-600 hover:scale-105 hover:bg-white hover:shadow-md transition-all cursor-default">
                            {tag}
                        </span>
                    ))}
                </div>
              </div>

            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* --- DIVE DEEPER BUTTON --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-50px" }}
        className="mt-32 flex justify-center pb-20"
      >
        <div onClick={() => setIsModalOpen(true)} className="relative group cursor-pointer">
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="relative z-10 flex items-center gap-6 bg-white px-10 py-6 rounded-full shadow-[20px_20px_60px_#d9d1cd,-20px_-20px_60px_#ffffff] border-2 border-white group-hover:shadow-[25px_25px_70px_#d9d1cd,-25px_-25px_70px_#ffffff] transition-shadow duration-300"
          >
            <span className="text-lg font-black text-text-main uppercase tracking-[0.2em] group-hover:text-brand-purple transition-colors">
              Dive Deeper
            </span>
            <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-brand-purple flex items-center justify-center transition-all duration-300 shadow-inner">
               <ArrowRight size={24} className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </motion.button>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[120%] bg-brand-purple/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-full" />
        </div>
      </motion.div>

    </section>
  );
}