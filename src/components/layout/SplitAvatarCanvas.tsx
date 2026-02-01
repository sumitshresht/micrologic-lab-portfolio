// components/layout/SplitAvatarCanvas.tsx
"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function SplitAvatarCanvas() {
  const { scrollY } = useScroll();

  // Animation Logic:
  // 0 - 300px scroll: The separation happens
  // 300px+: They stay fixed on the sides
  
  // Separation Distance (in vw)
  const separation = useTransform(scrollY, [0, 500], ["0vw", "35vw"]);
  
  // Scale: They start slightly larger and overlap, then shrink to fit sidebars
  const scale = useTransform(scrollY, [0, 500], [1.2, 0.9]);
  
  // Opacity for the "Overlay" effect that fades out
  const overlayOpacity = useTransform(scrollY, [0, 300], [0.8, 0]);
  
  // Vertical position: Starts lower, moves up slightly to "dock"
  const yPos = useTransform(scrollY, [0, 500], ["15%", "0%"]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none hidden md:flex items-center justify-center overflow-hidden bg-background">
      
      {/* Cinematic Background Gradient/Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-purple/10 via-background to-background opacity-50" />

      {/* DEVELOPER 1 (LEFT) */}
      <motion.div 
        style={{ x: useTransform(separation, (val) => `-${val}`), scale, y: yPos }}
        className="absolute z-10 w-[25vw] h-[60vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
      >
        <Image 
          src={PORTFOLIO_DATA.dev1.image} 
          alt={PORTFOLIO_DATA.dev1.name} 
          fill 
          className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${PORTFOLIO_DATA.dev1.color} opacity-20 mix-blend-overlay`} />
        {/* Name Tag (Only visible when split) */}
        <motion.div style={{ opacity: useTransform(scrollY, [200, 400], [0, 1]) }} className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
           <span className="text-white font-bold">{PORTFOLIO_DATA.dev1.name}</span>
        </motion.div>
      </motion.div>

      {/* DEVELOPER 2 (RIGHT) */}
      <motion.div 
        style={{ x: separation, scale, y: yPos }}
        className="absolute z-10 w-[25vw] h-[60vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
      >
        <Image 
          src={PORTFOLIO_DATA.dev2.image} 
          alt={PORTFOLIO_DATA.dev2.name} 
          fill 
          className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${PORTFOLIO_DATA.dev2.color} opacity-20 mix-blend-overlay`} />
         {/* Name Tag */}
         <motion.div style={{ opacity: useTransform(scrollY, [200, 400], [0, 1]) }} className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
           <span className="text-white font-bold">{PORTFOLIO_DATA.dev2.name}</span>
        </motion.div>
      </motion.div>

      {/* Initial Connecting Overlay (Fades out) */}
      <motion.div 
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 flex items-center justify-center z-20"
      >
        <h1 className="text-[12vw] font-bold text-white tracking-tighter mix-blend-difference">
          DUO<span className="text-brand-purple">.</span>SOLVE
        </h1>
      </motion.div>

    </div>
  );
}