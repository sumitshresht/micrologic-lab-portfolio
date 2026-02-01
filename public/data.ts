// lib/data.ts
import { Code, Database, Globe, Server, Cpu, Layers } from "lucide-react";

export const PORTFOLIO_DATA = {
  dev1: {
    name: "Koustav", // Based on context (Dev A)
    role: "Full Stack Architect",
    image: "/dev2.jpeg", // Using uploaded filename
    color: "from-purple-500 to-indigo-500",
    align: "left",
  },
  dev2: {
    name: "Sumit", // Based on context (Dev B)
    role: "Frontend & Motion Expert",
    image: "/WhatsApp Image 2026-02-01 at 16.08.27.jpeg", // Using uploaded filename
    color: "from-blue-500 to-cyan-500",
    align: "right",
  }
};

export const TIMELINE_EXPERIENCE = [
  {
    year: "2025",
    dev: "dev1",
    role: "Senior System Architect",
    company: "TechNova",
    description: "Led the migration of legacy monoliths to microservices using Spring Boot and Kafka."
  },
  {
    year: "2024",
    dev: "dev2",
    role: "Lead UI Engineer",
    company: "CreativeFlow",
    description: "Designed the design system used by 40+ internal apps. Mastered Framer Motion."
  },
  {
    year: "2023",
    dev: "dev1",
    role: "Backend Developer",
    company: "DataCorp",
    description: "Optimized database queries reducing load times by 40% using Redis caching."
  },
  {
    year: "2023",
    dev: "dev2",
    role: "Frontend Developer",
    company: "WebWizards",
    description: "Built high-performance marketing sites earning Awwwards recognition."
  }
];

export const TECH_STACK = [
  { name: "Next.js", icon: Globe, category: "Frontend" },
  { name: "TypeScript", icon: Code, category: "Language" },
  { name: "Spring Boot", icon: Server, category: "Backend" },
  { name: "PostgreSQL", icon: Database, category: "Database" },
  { name: "Docker", icon: Layers, category: "DevOps" },
  { name: "Framer Motion", icon: Cpu, category: "Animation" },
];