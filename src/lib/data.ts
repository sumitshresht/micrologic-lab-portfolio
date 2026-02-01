// lib/data.ts

import {
  Code,
  Database,
  Globe,
  Server,
  Cpu,
  Layers,
  Shield,
  Cloud,
  Box,
  GitBranch,
  Lock,
  Activity,
  Terminal,
} from "lucide-react";

export const PORTFOLIO_DATA = {
  dev1: {
    name: "Sumit", // Based on context (Dev A)
    role: "Founder & Full-Stack Developer",
    image: "/sumit.png", // Using uploaded filename
    color: "from-purple-500 to-indigo-500",
    align: "left",
  },
  dev2: {
    name: "Koustav", // Based on context (Dev B)
    role: "Co-Founder & System Architect",
    image: "/koustav.jpeg", // Using uploaded filename
    color: "from-blue-500 to-cyan-500",
    align: "right",
  }
};

export const TIMELINE_EXPERIENCE = [
  {
    year: "2026",
    dev: "dev1",
    role: "Founder & Full-Stack Developer",
    company: "Micrologic Lab",
    description: "Building high-performance, scalable web applications that balance power with aesthetic beauty. Architecting robust backends using Spring Boot, Docker, and RabbitMQ, seamlessly integrated with optimized Next.js frontends to meet diverse user needs."
  },
  {
    year: "2026",
    dev: "dev2",
    role: "Co-Founder & System Architect",
    company: "Micrologic Lab",
    description: "Co-founding a studio dedicated to building powerful, scalable web ecosystems. Specializing in integrating complex backend architectures with high-speed frontends to ensure every product is as technically robust as it is user-centric."
  },
  {
    year: "2025",
    dev: "dev1",
    role: "Team Member",
    company: "IEEE ICAIHC 2026",
    description: "UI/UX redesign for the official IEEE ICAIHC conference website. Focused on delivering a responsive, accessible, and visually clear platform through close collaboration with faculty coordinators and IEEE members."
  },
  {
    year: "2023",
    dev: "dev2",
    role: "Associate Automation Engineer",
    company: "ANM",
    description: "Led cross-functional teams to deploy automation bots that increased operational efficiency by 80%. Engineered a live AI support bot that slashed response times by 40% and boosted customer satisfaction scores by 25% within three months."
  }
];

export const TECH_STACK = [
  /* ================= FRONTEND ================= */
  { name: "Next.js", icon: Globe, category: "Frontend" },
  { name: "React", icon: Globe, category: "Frontend" },
  { name: "Tailwind CSS", icon: Layers, category: "Frontend" },
  { name: "Material UI", icon: Layers, category: "Frontend" },
  { name: "Shadcn UI", icon: Layers, category: "Frontend" },
  { name: "Framer Motion", icon: Cpu, category: "Animation" },
  { name: "Vite", icon: Terminal, category: "Build Tool" },

  /* ================= LANGUAGES ================= */
  { name: "Java", icon: Code, category: "Language" },
  { name: "TypeScript", icon: Code, category: "Language" },

  /* ================= BACKEND ================= */
  { name: "Spring Boot", icon: Server, category: "Backend" },
  { name: "Spring Security", icon: Shield, category: "Backend" },
  { name: "Spring Cloud", icon: Cloud, category: "Backend" },
  { name: "Spring Data JPA", icon: Database, category: "Backend" },
  { name: "Microservices", icon: GitBranch, category: "Architecture" },
  { name: "REST APIs", icon: Server, category: "Backend" },
  { name: "OpenFeign", icon: Activity, category: "Backend" },
  { name: "JWT Authentication", icon: Lock, category: "Security" },
  { name: "RBAC", icon: Shield, category: "Security" },

  /* ================= DATABASE ================= */
  { name: "PostgreSQL", icon: Database, category: "Database" },
  { name: "MySQL", icon: Database, category: "Database" },
  { name: "Flat File JSON Storage", icon: Database, category: "Database" },

  /* ================= DEVOPS ================= */
  { name: "Docker", icon: Box, category: "DevOps" },
  { name: "API Gateway", icon: Cloud, category: "DevOps" },
  { name: "Service Discovery", icon: Cloud, category: "DevOps" },

  /* ================= MESSAGING ================= */
  { name: "RabbitMQ", icon: Activity, category: "Messaging" },

  /* ================= TESTING ================= */
  { name: "JUnit", icon: Code, category: "Testing" },

  /* ================= SECURITY & CRYPTO ================= */
  { name: "AES Encryption", icon: Lock, category: "Security" },
  { name: "SHA-256 / SHA-1 / MD5", icon: Shield, category: "Security" },

  /* ================= AI ================= */
  { name: "Spring AI", icon: Cpu, category: "AI" },
  { name: "HuggingFace", icon: Cpu, category: "AI" },

  /* ================= TOOLS & BUILD ================= */
  { name: "Maven", icon: Box, category: "Build Tool" },
  { name: "Lombok", icon: Code, category: "Developer Tool" },
  { name: "Gson", icon: Code, category: "Developer Tool" },
];