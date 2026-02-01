"use client";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Sticky3DBackground() {
  const { scrollY } = useScroll();
  
  // Smooth out the scroll values for a "luxurious" feel
  const smoothScroll = useSpring(scrollY, { stiffness: 60, damping: 20 });

  // --- ANIMATION LOGIC ---
  
  // 1. Separation: Moves cards from Center (0vw) to Sides (35vw)
  // Logic: At scroll 0, they are close. By scroll 400, they are fully separated.
  const xOffsetLeft = useTransform(smoothScroll, [0, 400], ["-2vw", "-32vw"]);
  const xOffsetRight = useTransform(smoothScroll, [0, 400], ["2vw", "32vw"]);

  // 2. Rotation: They start tilted (Isometric) and straighten up slightly when they stick
  const rotateLeft = useTransform(smoothScroll, [0, 400], [-10, 0]); // Starts tilted left
  const rotateRight = useTransform(smoothScroll, [0, 400], [10, 0]);  // Starts tilted right

  // 3. Scale: They start huge (Hero) and shrink to be unobtrusive sidebars
  const scale = useTransform(smoothScroll, [0, 400], [1.1, 0.85]);

  // 4. Opacity of the "Intro Text" (Fades out as they split)
  const introOpacity = useTransform(smoothScroll, [0, 250], [1, 0]);

  // 5. Parallax Floating Elements (Cubes/Spheres)
  const yFloat = useTransform(smoothScroll, [0, 1000], [0, -300]);
  const rotateFloat = useTransform(smoothScroll, [0, 1000], [0, 180]);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-center overflow-hidden">
      
      {/* BACKGROUND DECORATIONS (Floating 3D Objects) */}
      <motion.div style={{ y: yFloat, rotate: rotateFloat }} className="absolute top-[15%] left-[10%] w-24 h-24 bg-accent-pink/30 rounded-3xl blur-xl" />
      <motion.div style={{ y: yFloat, rotate: rotateFloat }} className="absolute bottom-[20%] right-[10%] w-32 h-32 bg-accent-yellow/20 rounded-full blur-2xl" />

      {/* --- INTRO TITLE (Fades out on scroll) --- */}
      <motion.div 
        style={{ opacity: introOpacity }}
        className="absolute z-0 text-center -mt-32"
      >
         <h1 className="text-[120px] font-black text-bg-purple/10 leading-none tracking-tighter">
           DUO
         </h1>
      </motion.div>

      {/* --- LEFT DEVELOPER CARD (Clay Style) --- */}
      <motion.div 
        style={{ x: xOffsetLeft, rotate: rotateLeft, scale }}
        className="absolute z-20 w-[300px] md:w-[350px] aspect-[3/4]"
      >
        <div className="relative w-full h-full bg-white rounded-[2rem] shadow-clay-card p-3 border border-white/50 transition-shadow duration-500">
           {/* Image Container */}
           <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-gray-100">
             <Image 
               src={PORTFOLIO_DATA.dev1.image} 
               alt={PORTFOLIO_DATA.dev1.name} 
               fill 
               className="object-cover hover:scale-110 transition-transform duration-700" 
             />
             
             {/* Name Tag */}
             <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-sm">
                <span className="font-bold text-accent-purple">Dev 1</span>
             </div>
           </div>
        </div>
      </motion.div>

      {/* --- RIGHT DEVELOPER CARD (Purple 3D Block Style) --- */}
      <motion.div 
        style={{ x: xOffsetRight, rotate: rotateRight, scale }}
        className="absolute z-20 w-[300px] md:w-[350px] aspect-[3/4]"
      >
        <div className="relative w-full h-full bg-gradient-to-br from-bg-purple to-indigo-600 rounded-[2rem] shadow-2xl p-3 border-t border-white/20">
           {/* Image Container */}
           <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden mix-blend-luminosity opacity-90">
             <Image 
               src={PORTFOLIO_DATA.dev2.image} 
               alt={PORTFOLIO_DATA.dev2.name} 
               fill 
               className="object-cover hover:scale-110 transition-transform duration-700" 
             />
             
             {/* Name Tag */}
             <div className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <span className="font-bold text-white">Dev 2</span>
             </div>
           </div>
        </div>
      </motion.div>

    </div>
  );
}