"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xnjzplvp", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[2.5rem] p-10 shadow-clay-card text-center border-2 border-white/50"
      >
        <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-3xl font-black text-text-main mb-2">Message Sent!</h3>
        <p className="text-gray-500 mb-8">
          Thanks for reaching out. We'll analyze your request and get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="px-8 py-3 bg-gray-100 text-gray-600 font-bold rounded-full hover:bg-gray-200 transition-colors"
        >
          Send Another
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-clay-card border-2 border-white/50 relative overflow-hidden"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
        
        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-400 uppercase tracking-wider ml-4">Your Name</label>
            <input 
              type="text" 
              name="name" 
              required
              placeholder="John Doe"
              className="w-full bg-gray-50 rounded-2xl px-6 py-4 outline-none border-2 border-transparent focus:bg-white focus:border-purple-500/20 focus:shadow-xl transition-all font-medium text-text-main placeholder-gray-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-400 uppercase tracking-wider ml-4">Email Address</label>
            <input 
              type="email" 
              name="email" 
              required
              placeholder="john@company.com"
              className="w-full bg-gray-50 rounded-2xl px-6 py-4 outline-none border-2 border-transparent focus:bg-white focus:border-purple-500/20 focus:shadow-xl transition-all font-medium text-text-main placeholder-gray-300"
            />
          </div>
        </div>

        {/* Row 2: Service Type */}
        <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-400 uppercase tracking-wider ml-4">Project Type</label>
            <div className="relative">
              <select 
                name="projectType"
                className="w-full bg-gray-50 rounded-2xl px-6 py-4 outline-none border-2 border-transparent focus:bg-white focus:border-purple-500/20 focus:shadow-xl transition-all font-medium text-text-main cursor-pointer appearance-none"
              >
                <option>Web Application Development</option>
                <option>Mobile App Development</option>
                <option>UI/UX & Motion Design</option>
                <option>System Architecture Consulting</option>
                <option>Other</option>
              </select>
            </div>
        </div>

        {/* Row 3: Message */}
        <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-400 uppercase tracking-wider ml-4">Tell us about your vision</label>
            <textarea 
              name="message" 
              rows={5}
              required
              placeholder="We need a scalable platform that..."
              className="w-full bg-gray-50 rounded-2xl px-6 py-4 outline-none border-2 border-transparent focus:bg-white focus:border-purple-500/20 focus:shadow-xl transition-all font-medium text-text-main placeholder-gray-300 resize-none"
            />
        </div>

        {/* Submit Button - FIXED COLORS */}
        <button 
          type="submit" 
          disabled={status === "submitting"}
          className="mt-4 w-full bg-purple-600 text-white font-bold text-lg py-5 rounded-2xl shadow-xl hover:bg-purple-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="animate-spin" /> Sending...
            </>
          ) : (
            <>
              Launch Project <Send size={20} />
            </>
          )}
        </button>
      </form>

      {/* Decorative Blur Inside Card */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl -z-0 pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-0 pointer-events-none opacity-50" />

    </motion.div>
  );
}