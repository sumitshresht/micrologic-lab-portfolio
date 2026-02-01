"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/lib/data";
import Link from "next/link";
import { Download } from "lucide-react"; // <--- Import Download Icon

export default function UnifiedHero() {
  const { scrollY } = useScroll();
  const smoothScroll = useSpring(scrollY, { stiffness: 50, damping: 25 });

  // --- 1. COORDINATE MAPPING ---

  // BACKGROUND (Purple Layer)
  const bgX = useTransform(smoothScroll, [0, 400], ["0vw", "100vw"]); 
  const bgOpacity = useTransform(smoothScroll, [0, 400], [1, 0]); 

  // LEFT CARD (Dev 1)
  const leftCardLeft = useTransform(smoothScroll, [0, 500], ["55vw", "4vw"]);
  const leftCardRotate = useTransform(smoothScroll, [0, 500], [-6, 0]);

  // RIGHT CARD (Dev 2)
  const rightCardRight = useTransform(smoothScroll, [0, 500], ["15vw", "4vw"]);
  const rightCardRotate = useTransform(smoothScroll, [0, 500], [8, 0]);

  // VERTICAL POSITIONING
  const cardTop = useTransform(smoothScroll, [0, 500], ["50%", "15%"]);
  const cardYOffset = useTransform(smoothScroll, [0, 500], ["-50%", "0%"]);
  const cardScale = useTransform(smoothScroll, [0, 500], [1, 0.75]);

  // INTRO TEXT
  const textOpacity = useTransform(smoothScroll, [0, 200], [1, 0]);
  const textY = useTransform(smoothScroll, [0, 200], [0, -50]);

  // --- 3D FLOATERS ANIMATION ---
  const shapeY = useTransform(smoothScroll, [0, 2000], [0, -400]);
  const shapeRotate = useTransform(smoothScroll, [0, 2000], [0, 360]);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-50 overflow-hidden">
      
      {/* === LAYER 0: PERSISTENT 3D ELEMENTS === */}
      <div className="absolute inset-0 z-0">
         <motion.div style={{ y: useTransform(scrollY, [0, 1000], [0, -150]), rotate: -45 }} className="absolute top-[18%] left-[8%] w-24 h-10 bg-pink-500 rounded-full shadow-clay-card border border-pink-400/50 flex items-center justify-center"><div className="w-16 h-3 bg-white/20 rounded-full blur-sm" /></motion.div>
         <motion.div style={{ y: shapeY, rotate: shapeRotate }} className="absolute top-[12%] right-[10%] w-20 h-20 bg-brand-purple rounded-full shadow-clay-purple flex items-center justify-center border-4 border-indigo-400/20"><div className="w-8 h-8 bg-bg-cream rounded-full shadow-inner" /></motion.div>
         <motion.div style={{ y: useTransform(scrollY, [0, 1000], [0, -200]), rotate: shapeRotate }} className="absolute bottom-[15%] left-[8%] w-20 h-20 bg-blue-500 rounded-3xl shadow-clay-card flex items-center justify-center border-2 border-blue-400"><div className="w-10 h-10 rounded-full bg-white/20 blur-md" /></motion.div>
         <motion.div style={{ y: useTransform(scrollY, [0, 1000], [0, -150]), rotate: 45 }} className="absolute bottom-[20%] right-[15%] w-16 h-16 bg-yellow-400 rounded-xl shadow-clay-card flex items-center justify-center border-2 border-yellow-300"><div className="w-6 h-6 rounded-full bg-white/30 blur-md" /></motion.div>
         <motion.div style={{ y: useTransform(scrollY, [0, 1000], [0, -600]) }} className="absolute top-[10%] left-[45%] w-14 h-14 bg-orange-300 rounded-full shadow-clay-card border-2 border-orange-200"><div className="absolute top-2 left-3 w-4 h-4 bg-white/40 rounded-full blur-sm" /></motion.div>
      </div>

      {/* === LAYER 1: TEXT CONTENT === */}
      <motion.div 
        style={{ opacity: textOpacity, y: textY }}
        className="absolute top-0 left-0 w-1/2 h-full flex items-center justify-start pl-[8vw] pr-10 z-30 pointer-events-none"
      >
        <div className="max-w-xl"> 
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-orange-300 rounded-full" />
              <span className="text-sm font-bold tracking-widest uppercase text-gray-500">The Architects</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black leading-tight text-text-main mb-8">
              Hello,<br />
              We are <span className="text-brand-purple">MicroLogic Lab.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-10">
              A creative fusion of Systems Architecture and Motion Design. We build digital experiences that feel alive.
            </p>
            
            <Link href="/contact" className="inline-block pointer-events-auto relative z-50"> 
              <button className="px-10 py-5 bg-text-main text-white font-bold rounded-full text-xl shadow-clay-card hover:scale-105 active:scale-95 transition-all cursor-pointer">
                Start a Project
              </button>
            </Link>
        </div>
      </motion.div>

      {/* === LAYER 2: PURPLE BACKGROUND BLOCK === */}
      <motion.div 
        style={{ x: bgX, opacity: bgOpacity }}
        className="absolute top-0 left-0 w-full h-full bg-brand-purple z-10 pointer-events-none"
      >
         <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      </motion.div>

      {/* === LAYER 3: THE PERSISTENT AVATARS (Click to Download Resume) === */}
      
      {/* DEV 1 (Sumit) */}
      <motion.div 
        style={{ left: leftCardLeft, top: cardTop, y: cardYOffset, rotate: leftCardRotate, scale: cardScale }}
        className="absolute z-20 hover:z-50 w-[300px] aspect-[3/4] origin-top-left transition-all duration-300 ease-out pointer-events-auto cursor-pointer group" // Added 'group'
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      >
        <a href={PORTFOLIO_DATA.dev1.resume} download className="block w-full h-full"> {/* Wrapped in Anchor */}
          <div className="relative w-full h-full bg-white rounded-[2rem] shadow-clay-card p-3 border border-white/50">
             <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-gray-50">
               <Image src={PORTFOLIO_DATA.dev1.image} alt="Sumit" fill className="object-cover" />
               <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <p className="font-bold text-lg">{PORTFOLIO_DATA.dev1.name}</p>
                  <p className="text-xs opacity-80">{PORTFOLIO_DATA.dev1.role}</p>
                  
                  {/* Download Hint on Hover */}
                  <div className="flex items-center gap-2 mt-2 text-accent-yellow font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                    <Download size={16} /> Download Resume
                  </div>
               </div>
             </div>
          </div>
        </a>
      </motion.div>

      {/* DEV 2 (Koustav) */}
      <motion.div 
        style={{ right: rightCardRight, top: cardTop, y: cardYOffset, rotate: rightCardRotate, scale: cardScale }}
        className="absolute z-20 hover:z-50 w-[300px] aspect-[3/4] origin-top-right transition-all duration-300 ease-out pointer-events-auto cursor-pointer group" // Added 'group'
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      >
        <a href={PORTFOLIO_DATA.dev2.resume} download className="block w-full h-full"> {/* Wrapped in Anchor */}
          <div className="relative w-full h-full bg-white rounded-[2rem] shadow-clay-card p-3 border border-white/50">
             <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-gray-50">
               <Image src={PORTFOLIO_DATA.dev2.image} alt="Koustav" fill className="object-cover" />
               <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <p className="font-bold text-lg">{PORTFOLIO_DATA.dev2.name}</p>
                  <p className="text-xs opacity-80">{PORTFOLIO_DATA.dev2.role}</p>
                  
                   {/* Download Hint on Hover */}
                  <div className="flex items-center gap-2 mt-2 text-accent-yellow font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                    <Download size={16} /> Download Resume
                  </div>
               </div>
             </div>
          </div>
        </a>
      </motion.div>

    </div>
  );
}