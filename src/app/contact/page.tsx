"use client";
import ContactForm from "@/components/sections/ContactForm";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg-cream selection:bg-accent-yellow selection:text-black relative overflow-hidden flex items-center justify-center py-20 px-4">
      
      {/* --- BACKGROUND DECORATION (Static 3D Elements) --- */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Top Right - Purple Donut */}
         <div className="absolute top-[-5%] right-[-5%] w-64 h-64 border-[30px] border-purple-200 rounded-full blur-sm" />
         
         {/* Bottom Left - Blue Cube */}
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
           className="absolute bottom-[10%] left-[5%] w-32 h-32 bg-blue-500 rounded-3xl shadow-clay-card opacity-80"
         />
         
         {/* Top Left - Yellow Sphere */}
         <div className="absolute top-[10%] left-[10%] w-20 h-20 bg-yellow-400 rounded-full shadow-clay-card" />
      </div>

      {/* ALIGNMENT FIX: Changed items-start to items-center */}
      <div className="max-w-4xl w-full relative z-10 flex flex-col md:flex-row gap-12 items-center">
        
        {/* LEFT SIDE: Text Info */}
        <div className="w-full md:w-1/3">
           <Link href="/" className="inline-flex items-center gap-2 text-gray-500 font-bold uppercase tracking-wider text-xs hover:text-purple-600 mb-8 transition-colors">
              <ArrowLeft size={16} /> Back to Home
           </Link>

           <h1 className="text-5xl font-black text-text-main mb-6 leading-tight">
             Let's Build <br />
             <span className="text-purple-600">Something Real.</span>
           </h1>
           <p className="text-gray-500 leading-relaxed mb-8">
             Have a project in mind? We'd love to hear about it. Fill out the form and we'll get back to you within 24 hours.
           </p>

           {/* Contact Info Pills */}
           <div className="flex flex-col gap-4">
              
              {/* WhatsApp Pill */}
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-white/60">
                 <div className="w-10 h-10 shrink-0 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">W</div>
                 <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">WhatsApp</p>
                    <p className="text-text-main font-bold">+91 62058 78517</p>
                 </div>
              </div>

              {/* Email Pill */}
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-white/60">
                 <div className="w-10 h-10 shrink-0 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">@</div>
                 <div className="overflow-hidden"> 
                    <p className="text-xs text-gray-400 uppercase font-bold">Email</p>
                    <p className="text-text-main font-bold break-all">contact.micrologiclab@gmail.com</p>
                 </div>
              </div>

           </div>
        </div>

        {/* RIGHT SIDE: The Form */}
        <div className="w-full md:w-2/3">
           <ContactForm />
        </div>

      </div>
    </main>
  );
}