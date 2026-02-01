"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Hero3D() {
  const { scrollY } = useScroll();
  
  // Parallax for floating elements
  const y1 = useTransform(scrollY, [0, 500], [0, -200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      
      {/* BACKGROUND DECORATIONS (Floating Cubes/Spheres) */}
      <motion.div style={{ y: y1 }} className="absolute top-20 left-[10%] w-16 h-16 rounded-xl bg-accent-pink shadow-lg animate-float-slow opacity-80 z-0" />
      <motion.div style={{ y: y2 }} className="absolute bottom-40 left-[15%] w-12 h-12 rounded-full bg-accent-yellow shadow-lg animate-float-med z-20" />
      <motion.div style={{ rotate }} className="absolute top-40 right-[10%] w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-md border border-white z-20 rotate-12" />

      {/* THE MAIN LAYOUT */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 h-full items-center relative z-10">
        
        {/* LEFT SIDE: Text & Intro */}
        <div className="relative z-30 pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-accent-coral rounded-full" />
              <span className="text-accent-purple font-bold tracking-widest uppercase">The Architects</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-tight text-text-main mb-8">
              Hello,<br />
              We are <span className="text-bg-purple">DuoSolve.</span>
            </h1>
            
            <p className="text-xl text-text-muted max-w-md leading-relaxed mb-10">
              A creative fusion of Systems Architecture and Motion Design. We build digital experiences that feel alive.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-text-main text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:bg-bg-purple transition-colors"
            >
              Explore Our World
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT SIDE: The "Purple Block" 3D Scene */}
        <div className="relative h-full hidden md:flex items-center justify-center">
           {/* The Purple Geometric Background */}
           <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="absolute right-[-10vw] top-0 bottom-0 w-[60vw] bg-bg-purple transform skew-x-[-6deg] origin-top-right shadow-2xl z-0"
           />

           {/* 3D Floating Cards for the Developers */}
           <div className="relative z-10 w-full h-[600px] perspective-[2000px]">
              
              {/* DEV 1 CARD (Left/Front) */}
              <motion.div 
                style={{ y: y2 }}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-[10%] left-[10%] w-[320px] h-[420px] bg-white rounded-[2rem] shadow-clay-card p-4 rotate-[-6deg] hover:rotate-0 transition-transform duration-500 hover:z-50"
              >
                <div className="w-full h-full relative rounded-[1.5rem] overflow-hidden">
                   <Image src={PORTFOLIO_DATA.dev1.image} alt="Dev 1" fill className="object-cover" />
                   <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                      <p className="font-bold text-lg">{PORTFOLIO_DATA.dev1.name}</p>
                      <p className="text-xs opacity-80">Backend Architect</p>
                   </div>
                </div>
              </motion.div>

              {/* DEV 2 CARD (Right/Back) */}
              <motion.div 
                style={{ y: y1 }}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute top-[25%] right-[10%] w-[320px] h-[420px] bg-accent-yellow rounded-[2rem] shadow-xl p-4 rotate-[6deg] hover:rotate-0 transition-transform duration-500"
              >
                 <div className="w-full h-full relative rounded-[1.5rem] overflow-hidden grayscale contrast-125">
                   <Image src={PORTFOLIO_DATA.dev2.image} alt="Dev 2" fill className="object-cover mix-blend-multiply opacity-90" />
                   <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/10 backdrop-blur-sm text-text-main">
                      <p className="font-bold text-lg">{PORTFOLIO_DATA.dev2.name}</p>
                      <p className="text-xs font-semibold opacity-80">Visual Lead</p>
                   </div>
                </div>
              </motion.div>

              {/* Floating Decorative Sphere */}
              <motion.div 
                animate={{ y: [0, -30, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-[20%] left-[40%] w-20 h-20 bg-accent-pink rounded-full shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.1)] z-20"
              />

           </div>
        </div>

      </div>
    </section>
  );
}