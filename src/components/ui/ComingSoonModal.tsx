"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChefHat, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          
          {/* Backdrop Blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/20 backdrop-blur-md cursor-pointer"
          />

          {/* The Clay Modal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative w-full max-w-md bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl border-2 border-white/50 overflow-hidden"
          >
            
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="text-center relative z-10">
               
               {/* Icon Container */}
               <div className="w-24 h-24 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-6 shadow-inner text-orange-500">
                  <ChefHat size={48} strokeWidth={1.5} />
               </div>

               <h3 className="text-3xl font-black text-text-main mb-3">
                 What's Cooking?
               </h3>
               
               <p className="text-gray-500 leading-relaxed mb-8">
                 We are currently documenting this architectural journey. These design elements are being prepped in our kitchen right now!
               </p>

               {/* CTA Section */}
               <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                    Want a sneak peek?
                  </p>
                  <Link href="/contact" onClick={onClose}>
                    {/* FIXED: Changed bg-brand-purple to bg-purple-600 */}
                    <button className="w-full py-4 bg-purple-600 text-white font-bold rounded-xl shadow-clay-card hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 hover:bg-purple-700">
                      Connect Directly <ArrowRight size={18} />
                    </button>
                  </Link>
               </div>

            </div>

            {/* Decorative Blobs */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-2xl pointer-events-none opacity-50" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-100 rounded-full blur-2xl pointer-events-none opacity-50" />

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}