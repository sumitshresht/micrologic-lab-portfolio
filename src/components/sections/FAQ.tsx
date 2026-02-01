"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircleQuestion } from "lucide-react";

const FAQS = [
  {
    question: "What exactly does Micrologic Lab do?",
    answer: "We are a creative-technical fusion studio. We specialize in building high-performance web ecosystems that don’t just work powerfully under the hood but also look and feel beautiful to the end-user. From Next.js frontends to Spring Boot microservices, we handle the full cycle of digital product development.",
    // FIXED: Switched to standard 'indigo-500' to guarantee color visibility
    color: "bg-indigo-500"
  },
  {
    question: "Which industries or project types do you specialize in?",
    answer: "Our experience is diverse. We’ve architected official conference platforms like the IEEE ICAIHC 2026 site, developed custom API testing tools like APIForge, and engineered AI-driven automation bots. Whether it’s a community-sharing platform or a complex enterprise logger, we can build it.",
    // FIXED: Switched to standard 'blue-500'
    color: "bg-blue-500"
  },
  {
    question: "What is your 'Targeted Tech Stack'?",
    answer: "We are heavily invested in the Java/Spring ecosystem for robust backends and React/Next.js for modern, SEO-friendly frontends. Our architecture includes Spring Boot Microservices, PostgreSQL, Docker/RabbitMQ for DevOps, and AI integration via Spring AI.",
    // FIXED: Switched to 'orange-400' (closest standard color to peach)
    color: "bg-orange-400"
  },
  {
    question: "Can you help with documentation and project planning?",
    answer: "Absolutely. We believe great code starts with great planning. We have extensive experience drafting Software Requirements Specifications (SRS) and Standard Operating Procedures (SOP) to ensure project scalability and clarity from day one.",
    color: "bg-pink-500"
  },
  {
    question: "How do we start a project with you?",
    answer: "It starts with a conversation. We’ll dive into your requirements, discuss the technical architecture, and define a roadmap that balances speed with long-term stability. Click the 'Start a Project' button below to get the ball rolling.",
    color: "bg-yellow-400"
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 max-w-4xl mx-auto px-6 relative z-10">
      
      {/* --- POLISHED HEADER --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-20 text-center"
      >
        {/* 1. The Badge */}
        <div className="mb-6 px-6 py-2 rounded-full bg-white border border-brand-purple/20 shadow-sm flex items-center gap-2">
           <MessageCircleQuestion size={16} className="text-brand-purple" />
           <span className="text-xs font-bold tracking-widest uppercase text-brand-purple">Common Queries</span>
        </div>
        
        {/* 2. The Balanced Heading */}
        <h2 className="text-5xl md:text-6xl font-black text-text-main leading-tight">
          You have questions?
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-peach">
             We have answers.
          </span>
        </h2>
      </motion.div>

      {/* FAQ List */}
      <div className="flex flex-col gap-6">
        {FAQS.map((faq, idx) => {
          const isOpen = activeIndex === idx;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px", once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div 
                onClick={() => setActiveIndex(isOpen ? null : idx)}
                className={`
                  group relative overflow-hidden
                  bg-white rounded-[2rem] 
                  border-2 border-transparent
                  transition-all duration-300 cursor-pointer
                  ${isOpen ? "shadow-inner bg-gray-50 border-gray-100" : "shadow-clay-card hover:scale-[1.01] hover:shadow-xl border-white"}
                `}
              >
                {/* Active Indicator Strip (Left Side) - NOW GUARANTEED TO SHOW */}
                <motion.div 
                   animate={{ height: isOpen ? "100%" : "0%" }}
                   className={`absolute left-0 top-0 w-2 ${faq.color}`}
                />

                <div className="p-6 md:p-8 flex justify-between items-center gap-6">
                  <h3 className={`text-lg md:text-xl font-bold transition-colors leading-relaxed ${isOpen ? "text-brand-purple" : "text-text-main"}`}>
                    {faq.question}
                  </h3>
                  
                  {/* Animated Icon Circle */}
                  <div className={`
                    w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300
                    ${isOpen ? `${faq.color} text-white rotate-180 shadow-md` : "bg-gray-100 text-gray-400 group-hover:bg-brand-purple group-hover:text-white"}
                  `}>
                    {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 text-gray-500 leading-relaxed border-t border-gray-100 pt-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}