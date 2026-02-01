"use client";
import { motion } from "framer-motion";

interface GlowProps {
  color?: string;
  size?: string;
  opacity?: number;
  className?: string;
}

export default function Glow({ 
  color = "bg-purple-600", 
  size = "w-[500px] h-[500px]", 
  opacity = 0.2,
  className = "" 
}: GlowProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity }}
      transition={{ duration: 2 }}
      className={`absolute pointer-events-none rounded-full blur-[120px] -z-10 ${color} ${size} ${className}`}
    />
  );
}