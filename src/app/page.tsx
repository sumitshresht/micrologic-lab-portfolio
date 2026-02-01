"use client";
import UnifiedHero from "@/components/layout/UnifiedHero";
import Timeline from "@/components/sections/Timeline";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import TechStack from "@/components/sections/TechStack";
import FAQ from "@/components/sections/FAQ";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-cream selection:bg-accent-yellow selection:text-black overflow-x-hidden">

      {/* 1. THE UNIFIED HERO (Fixed Background) 
          - Handles the Landing Page state 
          - Handles the "Split to Sides" animation on scroll 
      */}
      <UnifiedHero />

      {/* 2. SCROLLABLE CONTENT LAYER */}
      <div className="relative z-10">

        {/* SPACER SECTION: 
            This invisible 100vh block forces you to scroll past the "Hero" state.
            As you scroll through this empty space, the cards animate to the sides.
        */}
        <div className="h-[100vh] w-full pointer-events-none" />

        {/* MIDDLE CONTENT COLUMN 
            - Centered tightly (max-w-2xl) so it fits BETWEEN the split avatars.
            - Starts appearing after the spacer.
        */}
        <div className="max-w-[500px] md:max-w-2xl mx-auto pb-32 px-4">

          {/* Visual Connector Line */}
          <div className="h-32 w-px bg-gradient-to-b from-transparent to-bg-purple/30 mx-auto mb-10" />

          {/* Timeline Section */}
          <Timeline />

          {/* Spacer */}
          <div className="h-32" />

          {/* --- NEW PROJECT SHOWCASE SECTION --- */}
          <ProjectShowcase />

          {/* Spacer */}
          <div className="h-32" />

          {/* Tech Stack Section */}
          <section className="relative w-screen left-1/2 -translate-x-1/2">
            <TechStack />
          </section>

          <div className="h-32" />

          <FAQ />

          {/* Contact CTA */}
          <div className="mt-32 text-center">
            <h2 className="text-3xl font-black text-text-main mb-6">Ready to Collaborate?</h2>
            <Link href="/contact">
            <button className="px-10 py-5 bg-text-main text-white font-bold rounded-full text-xl shadow-clay-card hover:scale-105 active:scale-95 transition-all">
              Start a Project
            </button>
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}