"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
interface IconProps {
  className?: string;
}

const ArrowUpRight = ({ className }: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

const Mail = ({ className }: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const Terminal = ({ className }: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const Layers = ({ className }: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const Cpu = ({ className }: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" />
  </svg>
);

const Menu = ({ className }: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const X = ({ className }: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ChevronRight = ({ className }: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const Sparkles = ({ className }: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const Globe = ({ className }: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const MapPin = ({ className }: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const FileText = ({ className }: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const Check = ({ className }: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const Sun = ({ className }: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.364l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
  </svg>
);

const Moon = ({ className }: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const Github = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const Linkedin = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const Dribbble = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10 5.523 0 10-4.478 10-10 0-5.523-4.477-10-10-10zm7.93 9.87c-.12-.29-.68-1.54-2.14-2.13-1.46-.59-2.93-.15-3.08-.1-.02-.05-.05-.11-.08-.17-.41-.85-.89-1.68-1.4-2.48.97-.24 2.87-.51 4.54.49.12.07.19.06.27-.04.09-.11.07-.22-.04-.3C15.82 6.01 13.82 6.3 12.78 6.6c-.53-.87-1.12-1.68-1.75-2.42-.08-.09-.19-.11-.29-.04-.09.07-.11.19-.04.29.62.74 1.2 1.54 1.73 2.4-2.6.72-4.99.64-5.26.63-.12 0-.21.08-.22.2 0 .12.08.21.2.22.1.01 2.37.1 4.93-.6.5.95.94 1.95 1.3 2.97-3.92 1.1-7.22.42-7.46.36-.12-.03-.24.04-.27.16-.03.12.04.24.16.27.09.02 3.25.66 7.15-.38.38.97.7 1.96.95 2.95-3.3 1.34-5.27 3.51-5.4 3.66-.08.09-.07.21.02.29.05.04.1.06.16.06.05 0 .1-.02.13-.06.07-.08 1.95-2.16 5.14-3.46.74 1.6 1.31 3.2 1.67 4.75-.49.25-1.92 1-2.91 2.9-.06.11-.02.24.09.3.04.02.08.03.12.03.08 0 .15-.04.19-.11.89-1.7 2.22-2.38 2.72-2.61.42 1.38.74 2.7.94 3.91.02.12.12.2.24.2.02 0 .03 0 .05-.01.12-.02.2-.13.18-.25-.2-1.22-.52-2.52-.94-3.89 3.03-1.07 4.25-3 4.31-3.1.06-.1-.01-.23-.12-.28zm-3.15.53c-.02.04-1.14 1.83-3.94 2.82-.3-.88-.67-1.78-1.08-2.66 1.7-.3 3.42.06 4.7.74.19.1.26.43.32.9.23-.74.6-1.5 1.1-2.22 1.25.5 1.75 1.5 1.85 1.76-.23.4-.95 1.56-2.95 2.1z" />
  </svg>
);

const Code2 = ({ className }: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const FolderGit2 = ({ className }: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11a1 1 0 100-2 1 1 0 000 2zm0 0v4" />
  </svg>
);

const Bookmark = ({ className }: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
  </svg>
);

const Award = ({ className }: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const LayoutGrid = ({ className }: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const Maximize = ({ className }: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
  </svg>
);

// Concept Definitions
type Concept = "signboard" | "magazine" | "developer" | "collage";

export default function Home() {
  const [activeConcept, setActiveConcept] = useState<Concept>("signboard");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  
  // Custom cursor state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorHovered, setCursorHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  
  // Parallax / mouse follow state for hero elements
  const [heroMouseOffset, setHeroMouseOffset] = useState({ x: 0, y: 0 });
  
  // Dev Concept Terminal log lines
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "Initializing SYSTEM_ERR Core v2.0...",
    "Loading Technical Arsenal modules...",
    "Establishing secure remote uplink...",
    "Status: ACTIVE // AVAILABLE_FOR_COMMISSIONS"
  ]);
  const [terminalInput, setTerminalInput] = useState("");

  // Track mouse for custom cursor and parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Calculate offset from center for subtle parallax
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const offsetX = (e.clientX - windowWidth / 2) / 25;
      const offsetY = (e.clientY - windowHeight / 2) / 25;
      setHeroMouseOffset({ x: offsetX, y: offsetY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Theme configuration based on active concept
  useEffect(() => {
    if (activeConcept === "developer") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, [activeConcept]);

  // Terminal submission handler
  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const cmd = terminalInput.toLowerCase().trim();
    let response = `Command not found: '${cmd}'. Type 'help' for options.`;
    
    if (cmd === "help") {
      response = "Available: about, skills, projects, contact, clear, concept <name>";
    } else if (cmd === "about") {
      response = "SYSTEM_ERR: Full-stack architect pushing technical limits with neo-cyber art direction.";
    } else if (cmd === "skills") {
      response = "Active Modules: React, Next.js, Node.js, UI/UX, AI Integration, Distributed Systems.";
    } else if (cmd === "projects") {
      response = "Selected: Cyber-Reality Systems, Kinetic Interface Lab, Neo-Dash, Quantum Dashboard.";
    } else if (cmd === "contact") {
      response = "Uplink: hello@system-err.dev // Status: Accept Comm commissions.";
    } else if (cmd.startsWith("concept ")) {
      const parts = cmd.split(" ");
      const target = parts[1] as Concept;
      if (["signboard", "magazine", "developer", "collage"].includes(target)) {
        setActiveConcept(target);
        response = `Concept switched to: ${target.toUpperCase()}`;
      } else {
        response = "Available concepts: signboard, magazine, developer, collage";
      }
    } else if (cmd === "clear") {
      setTerminalLogs([]);
      setTerminalInput("");
      return;
    }

    setTerminalLogs(prev => [...prev, `> ${terminalInput}`, response]);
    setTerminalInput("");
  };

  // Cursor hover helpers
  const handleMouseEnter = (text: string = "") => {
    setCursorHovered(true);
    setCursorText(text);
  };
  const handleMouseLeave = () => {
    setCursorHovered(false);
    setCursorText("");
  };

  // Switch dark/light manually
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Custom styling mappings based on concept
  const getConceptStyles = () => {
    switch (activeConcept) {
      case "magazine":
        return {
          wrapper: "bg-[#F3EFE9] text-charcoal font-sans selection:bg-electric-blue selection:text-soft-white",
          header: "border-b-2 border-charcoal bg-[#F3EFE9]/90",
          card: "bg-[#FAF8F5] border-2 border-charcoal rounded-none shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] transition-all duration-300",
          accentText: "text-electric-blue",
          buttonPrimary: "bg-charcoal text-[#F3EFE9] hover:bg-electric-blue font-bold px-6 py-3 border-2 border-charcoal shadow-[4px_4px_0px_0px_rgba(48,79,254,1)] transition-all",
          badge: "bg-lime-green text-charcoal font-mono border border-charcoal uppercase text-xs px-3 py-1 font-bold",
          sectionTitle: "font-syne font-extrabold uppercase tracking-tighter text-4xl md:text-6xl border-b-2 border-charcoal pb-4 mb-12"
        };
      case "developer":
        return {
          wrapper: "bg-black text-[#00FF66] font-mono selection:bg-[#00FF66] selection:text-black",
          header: "border-b border-[#00FF66]/30 bg-black/90 text-[#00FF66]",
          card: "bg-zinc-950 border border-[#00FF66]/30 rounded-md hover:border-[#00FF66] hover:shadow-[0_0_15px_rgba(0,255,102,0.15)] transition-all duration-300",
          accentText: "text-[#00FF66]",
          buttonPrimary: "bg-[#00FF66] text-black hover:bg-black hover:text-[#00FF66] border border-[#00FF66] font-mono px-6 py-3 transition-all",
          badge: "border border-[#00FF66] text-[#00FF66] px-2 py-0.5 text-xs uppercase tracking-wider",
          sectionTitle: "font-mono font-bold uppercase tracking-wider text-2xl md:text-3xl border-l-4 border-[#00FF66] pl-4 mb-12"
        };
      case "collage":
        return {
          wrapper: "bg-light-gray text-charcoal font-sans selection:bg-lime-green selection:text-charcoal",
          header: "border-b-2 border-dashed border-charcoal bg-soft-white/80",
          card: "bg-soft-white border-2 border-charcoal rounded-sm shadow-[10px_10px_0px_0px_rgba(26,26,26,0.1)] hover:-translate-y-1 hover:shadow-[14px_14px_0px_0px_rgba(26,26,26,0.15)] transition-all duration-300",
          accentText: "text-lime-green",
          buttonPrimary: "bg-lime-green text-charcoal hover:bg-electric-blue hover:text-soft-white font-bold px-6 py-3 border-2 border-charcoal shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] transition-all",
          badge: "bg-electric-blue text-soft-white border border-charcoal px-3 py-1 text-xs rotate-[-1deg]",
          sectionTitle: "font-syne font-extrabold uppercase text-4xl md:text-6xl text-charcoal mb-12 text-center"
        };
      case "signboard":
      default:
        return {
          wrapper: "bg-soft-white text-charcoal font-sans selection:bg-lime-green selection:text-charcoal dot-bg",
          header: "border-b-2 border-charcoal bg-soft-white/80 backdrop-blur-md",
          card: "bg-soft-white border-2 border-charcoal shadow-[8px_8px_0px_0px_rgba(48,79,254,1)] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(212,255,63,1)] transition-all duration-300",
          accentText: "text-electric-blue",
          buttonPrimary: "bg-electric-blue text-soft-white hover:bg-lime-green hover:text-charcoal font-bold px-6 py-3 border-2 border-charcoal shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] transition-all duration-200",
          badge: "bg-lime-green text-charcoal border border-charcoal font-mono font-bold px-3 py-1 text-xs",
          sectionTitle: "font-syne font-extrabold uppercase tracking-tight text-5xl md:text-7xl mb-12 text-left"
        };
    }
  };

  const theme = getConceptStyles();

  // Skills List
  const skills = [
    { name: "Full Stack Dev", level: "Senior", category: "Core" },
    { name: "React / Next.js", level: "Expert", category: "Frontend" },
    { name: "Node.js / Express", level: "Advanced", category: "Backend" },
    { name: "MongoDB / SQL", level: "Advanced", category: "Database" },
    { name: "Java / DSA", level: "Competent", category: "Systems" },
    { name: "UI / UX Design", level: "Expert", category: "Design" },
    { name: "AI Tools Integration", level: "Expert", category: "Workflows" },
    { name: "Open Source Contrib", level: "Active", category: "Community" }
  ];

  // Projects List
  const projects = [
    {
      title: "Cyber-Reality Systems",
      desc: "An immersive VR/AR telemetry mapping tool built for aerospace monitoring.",
      tags: ["Next.js", "Three.js", "WebVR"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDReSlLMuTe3PvfheD5BhB5b8MJIxNVxP1v-_i-6pu9LAdYqJYtVFaf1z7O4Jwv89U7yrodlYdPyTacl-Is9ROUDZO9hX_Hafuy-psSaId3Pu5Kgx0MTrOSR2hCTjNr_km2DtLwcG3xAZxhWHAZ1tbo5bFky0JFVH2PbiLeKYbTGXNjjDfMzQ3kIijsm5-7JuiBu5gFYW2reA6iOg87wmoi7L7bSc2eOdISXMRwyTnFZdlEVMUbxOHeXXBaun0aY5AwiuMGP29qC13X",
      url: "#",
      size: "large"
    },
    {
      title: "Kinetic Interface Lab",
      desc: "HCI keyboard tactile layouts rendered dynamically with SVG physics.",
      tags: ["React", "Framer Motion", "Physics"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD77g7eLg-rAhPyLEjnrswNJSbkq2TWZbSck04trD3E2b9uxip923K_uZr4HVGaH-8foUXGrd9UFluxe2jaFQrKBZQaESbbORAfg3C3AewKgYzN6awqxm3LpyrxFckjeVYJvLpOop7O3FRg-NqXvr50khTAOyqBOcAovKlBIN2sxmla0xVZAhlYpjd7spuivnM-WZQx3MvTDQ3Aqr3azlXYl9m5CGVnsPi4XKurOpEzdYvnjGm4YakeU67cThsmL8ylH25Qccf4ozLF",
      url: "#",
      size: "medium"
    },
    {
      title: "Neo-Dash Core",
      desc: "Telemetry dashboard for autonomous drone coordination.",
      tags: ["TypeScript", "GraphQL", "Tailwind"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFiQrfSaeEuOiTZ-eQFpUPvrGdxG0H5Qm9FlnwPCGvLetCI0VsfHE9GXujQiZWCJZFsioXY30gBH8pBRc_UmpPzqbvCL4WySZZwfp_XmtzEmP4Eu9oty6RDPOOn3IImQuxrWhfE2uyrjUAzDBbNdYOlkf-zXrsEtCZYLCO3JfsFOJK8O5McZCIGcOkwj08uIW3zpMmsxFHTnhcxHE94SAUlOjWgnnXHzIxpe-Mmq7OZ9PtW7MJxd2yzA9xSbEPCoEJxvquggm4dg64",
      url: "#",
      size: "medium"
    },
    {
      title: "Quantum Dashboard",
      desc: "Analytical dashboard displaying real-time cryptographic particle metrics.",
      tags: ["React", "D3.js", "NextJS"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQiWXq1VgulS-nw7vvAsyxGGXwYKqIai7aoXzKuFuauGXHIH4CpTvRr7oxwyZLZWv1-XpEpvslRqcddirwU1CG3jgNhzAZSEq6CL7Sc0tS3PAbeaPwn7KnkPL0uTiPGqlxLkflzcSmh3BAtxlLl9y9pDr-u3tG9DLIeZFLeX7vSXRFMhWAwWgMo-OwY9NO0Quw-KTZpIE0x9sWQP7oaC7al5v7dwzYLErNlbLfbDXiEHnfhgDCzXcomZabWFRKDjT9I2OlpF0h49Lu",
      url: "#",
      size: "wide"
    }
  ];

  // Experience History
  const experience = [
    {
      date: "2022 — PRESENT",
      role: "Lead Interface Architect",
      company: "SPECTRA_CORE INDUSTRIES",
      desc: "Orchestrating design systems for underground freight logistics and remote robotic handling consoles.",
      icon: Code2
    },
    {
      date: "2020 — 2022",
      role: "Senior Creative Developer",
      company: "VOID_ARCHIVE SYSTEMS",
      desc: "Developed generative artwork tools and custom web GL web experiences for high-end boutique brands.",
      icon: FolderGit2
    },
    {
      date: "2018 — 2020",
      role: "Computational Arts Scholar",
      company: "CYBER_UI INSTITUTE",
      desc: "Researched human-computer interfaces and kinetic typography applications under grid constraints.",
      icon: Award
    }
  ];

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${theme.wrapper}`}>
      
      {/* Custom Cursor */}
      <div 
        className={`hidden md:block fixed pointer-events-none z-[9999] rounded-full border-2 border-charcoal mix-blend-difference transition-all duration-75 ease-out ${
          cursorHovered ? "w-24 h-24 bg-lime-green/20 border-lime-green scale-110" : "w-6 h-6 bg-transparent"
        }`}
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: "translate(-50%, -50%)"
        }}
      >
        {cursorHovered && cursorText && (
          <div className="w-full h-full flex items-center justify-center text-[10px] font-bold font-mono tracking-tighter text-lime-green uppercase select-none text-center px-1">
            {cursorText}
          </div>
        )}
      </div>

      {/* Dynamic Floating Concept Switcher (Stitch and Presentation Controller) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-charcoal border-2 border-soft-white rounded-full p-1.5 flex gap-1 items-center shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
        <span className="text-[10px] text-soft-white/60 font-mono px-3 hidden lg:inline-block">CONCEPT CONTROLLER //</span>
        {[
          { id: "signboard", label: "01 // SIGNBOARD", icon: LayoutGrid },
          { id: "magazine", label: "02 // MAGAZINE", icon: Bookmark },
          { id: "developer", label: "03 // DEV OS", icon: Terminal },
          { id: "collage", label: "04 // COLLAGE", icon: Sparkles }
        ].map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveConcept(item.id as Concept)}
              onMouseEnter={() => handleMouseEnter(`Switch to ${item.id}`)}
              onMouseLeave={handleMouseLeave}
              className={`px-4 py-2 rounded-full font-mono text-xs flex items-center gap-1.5 transition-all duration-300 ${
                activeConcept === item.id 
                  ? "bg-lime-green text-charcoal font-bold scale-105" 
                  : "text-soft-white hover:text-lime-green hover:bg-white/10"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Top App Bar Header */}
      <header className={`fixed top-0 w-full z-40 px-4 md:px-12 py-4 flex justify-between items-center transition-colors duration-500 ${theme.header} ${
        activeConcept === "magazine" ? "border-b-2 border-charcoal" : 
        activeConcept === "developer" ? "border-b border-[#00FF66]/30" : 
        activeConcept === "collage" ? "border-b-2 border-dashed border-charcoal" : "border-b-2 border-charcoal"
      }`}>
        <div 
          className="font-syne font-extrabold text-2xl tracking-tighter text-charcoal dark:text-soft-white cursor-pointer select-none hover:rotate-[1deg]"
          onClick={() => setActiveConcept("signboard")}
          onMouseEnter={() => handleMouseEnter("Go Home")}
          onMouseLeave={handleMouseLeave}
        >
          {activeConcept === "developer" ? "SYSTEM_ERR.exe" : "SYSTEM_ERR"}
        </div>
        
        <nav className="hidden md:flex gap-8 items-center font-mono text-xs font-bold">
          <a href="#about" className="hover:text-electric-blue dark:hover:text-lime-green transition-colors">ACCESS_ABOUT</a>
          <a href="#skills" className="hover:text-electric-blue dark:hover:text-lime-green transition-colors">TECHNICAL_ARSENAL</a>
          <a href="#projects" className="hover:text-electric-blue dark:hover:text-lime-green transition-colors">SELECTED_WORKS</a>
          <a href="#contact" className="hover:text-electric-blue dark:hover:text-lime-green transition-colors">CONNECT</a>
        </nav>

        <div className="flex gap-4 items-center">
          {activeConcept !== "developer" && (
            <button 
              onClick={toggleDarkMode}
              className="p-2 border-2 border-charcoal hover:bg-charcoal hover:text-soft-white transition-colors"
              onMouseEnter={() => handleMouseEnter("Toggle Theme")}
              onMouseLeave={handleMouseLeave}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}
          <a 
            href="mailto:hello@system-err.dev" 
            className={`${theme.buttonPrimary} text-xs tracking-wider`}
            onMouseEnter={() => handleMouseEnter("Send Email")}
            onMouseLeave={handleMouseLeave}
          >
            HIRE_ME_NOW
          </a>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="flex-1 flex flex-col pt-24 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeConcept}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col"
          >
            
            {/* HERO SECTION */}
            <section className="min-h-[85vh] flex flex-col items-center justify-center relative px-6 md:px-12 py-16 overflow-hidden">
              
              {/* Concept 1: Floating Signboard Hero Background */}
              {activeConcept === "signboard" && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-5 select-none pointer-events-none">
                  <h1 className="font-syne font-black text-[15rem] md:text-[25rem] leading-none text-charcoal">PORTFOLIO</h1>
                </div>
              )}

              {/* Concept 2: Magazine Editorial Hero Layout */}
              {activeConcept === "magazine" && (
                <div className="w-full max-w-6xl flex flex-col items-start text-left mb-8 md:mb-16">
                  <span className="font-mono text-xs uppercase tracking-widest text-electric-blue font-bold mb-3 border-b border-electric-blue pb-1">MONOGRAPH VOL. 02 // ISSUE 01</span>
                  <div className="flex flex-col lg:flex-row justify-between w-full items-baseline gap-6 border-b-2 border-charcoal pb-4">
                    <h1 className="font-syne font-extrabold text-[4rem] md:text-[8rem] leading-[0.9] tracking-tight uppercase text-charcoal max-w-4xl">
                      CRAFTING DIGITAL <br />
                      <span className="text-electric-blue">MONOLITHS.</span>
                    </h1>
                    <div className="font-mono text-sm text-right text-charcoal/60 uppercase">
                      [DESIGNER + ARCHITECT]<br />
                      52.5200° N, 13.4050° E
                    </div>
                  </div>
                </div>
              )}

              {/* Dynamic Content grid based on chosen Concept */}
              <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-12 relative z-10">
                
                {/* HERO IMAGE CONTAINER */}
                <div 
                  className="w-full lg:w-3/5 flex justify-center items-center relative"
                  style={{
                    transform: activeConcept === "signboard" ? `translate3d(${heroMouseOffset.x}px, ${heroMouseOffset.y}px, 0)` : 'none',
                    transition: "transform 0.1s ease-out"
                  }}
                >
                  {activeConcept === "signboard" && (
                    <div className="w-full floating-signboard border-2 border-charcoal bg-soft-white p-4 brutalist-shadow-blue rotate-[-3deg] relative">
                      <div className="absolute top-2 left-3 flex gap-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 border border-charcoal"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-charcoal"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 border border-charcoal"></span>
                      </div>
                      <div className="border border-charcoal/20 bg-light-gray p-2 text-[10px] font-mono text-center text-charcoal/40 uppercase mb-4 mt-2">
                        MODULE_VISUALIZER // TILT_ENABLED
                      </div>
                      <img 
                        src="https://lh3.googleusercontent.com/aida/ADBb0uglGPltix2kdC2NZ2XrngvUlud-Ro8y4kt9mjPN81BXufhYS1u4949q1V-HStj_o-dgbRYYUMljQzqbjpR1olkrutXLFKkhXVmWC7stqI5y3jBsIiVEabMaVHwtemULAQZtTU5ErT1d1f6Wtr7GZBaKIzEscJbmTkn0OH0nGU77ZZ9gAmTRVu7aAB7y6B423Y6pgBGQzlQVD4a4v49OCzog9_Cwfg-H0d7XOKCAGGCn9nKwOf9ixGNGuPNW" 
                        alt="3D Signboard Concept" 
                        className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all border-2 border-charcoal"
                      />
                    </div>
                  )}

                  {activeConcept === "magazine" && (
                    <div className="w-full max-w-lg relative rotate-2 tape-top border-4 border-double border-charcoal p-1 bg-[#FAF8F5]">
                      <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQiWXq1VgulS-nw7vvAsyxGGXwYKqIai7aoXzKuFuauGXHIH4CpTvRr7oxwyZLZWv1-XpEpvslRqcddirwU1CG3jgNhzAZSEq6CL7Sc0tS3PAbeaPwn7KnkPL0uTiPGqlxLkflzcSmh3BAtxlLl9y9pDr-u3tG9DLIeZFLeX7vSXRFMhWAwWgMo-OwY9NO0Quw-KTZpIE0x9sWQP7oaC7al5v7dwzYLErNlbLfbDXiEHnfhgDCzXcomZabWFRKDjT9I2OlpF0h49Lu" 
                        alt="Magazine Editorial Concept" 
                        className="w-full h-auto object-cover grayscale"
                      />
                      <div className="mt-4 border-t border-charcoal pt-3 flex justify-between font-mono text-[10px]">
                        <span>EDITION // 2026</span>
                        <span>[FIGURE 1A: EXPERIMENTAL GRID]</span>
                      </div>
                    </div>
                  )}

                  {activeConcept === "developer" && (
                    <div className="w-full max-w-xl border-2 border-[#00FF66] bg-black text-[#00FF66] font-mono shadow-[0_0_20px_rgba(0,255,102,0.2)]">
                      <div className="bg-[#00FF66]/10 px-4 py-2 border-b border-[#00FF66]/30 flex justify-between items-center text-xs">
                        <span className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#00FF66]"></span>
                          terminal_session.sh
                        </span>
                        <div className="flex gap-1.5">
                          <span className="w-2 h-2 rounded-full border border-[#00FF66]"></span>
                          <span className="w-2 h-2 rounded-full border border-[#00FF66] bg-[#00FF66]/50"></span>
                          <span className="w-2 h-2 rounded-full border border-[#00FF66] bg-[#00FF66]"></span>
                        </div>
                      </div>
                      <div className="p-4 h-64 overflow-y-auto text-xs flex flex-col gap-1.5 select-text">
                        {terminalLogs.map((log, index) => (
                          <div key={index} className="whitespace-pre-wrap">{log}</div>
                        ))}
                      </div>
                      <form onSubmit={handleTerminalSubmit} className="border-t border-[#00FF66]/30 flex">
                        <span className="pl-4 py-3 text-xs">{">"}</span>
                        <input
                          type="text"
                          value={terminalInput}
                          onChange={(e) => setTerminalInput(e.target.value)}
                          className="flex-1 bg-transparent outline-none border-none py-3 px-2 text-xs font-mono text-[#00FF66]"
                          placeholder="Type 'help' for terminal commands..."
                          onMouseEnter={() => handleMouseEnter("Type a command")}
                          onMouseLeave={handleMouseLeave}
                        />
                      </form>
                    </div>
                  )}

                  {activeConcept === "collage" && (
                    <div className="w-full max-w-md relative">
                      {/* Stacked polaroids and sticky notes representing a physical collage */}
                      <div className="absolute top-[-30px] left-[-20px] w-48 bg-soft-white border border-charcoal p-2 rotate-[-8deg] shadow-lg z-10">
                        <img 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiorPQ-vI7N8munLunCSA9tlC7-lZlafNb-tJoyjAEWYuRtg3gtPSDKRRmapAjexd7FiS8GksG5kbpT8eXs50ZrmCVrqzT68o_jCKOvSsi_v22NnrTjWqxjaFGC0hhb51SO36hOkUjrbOB7qKY_qRhDJfDhhWeKzDW-GZ8OIR9u2sdODWBgPRegI-lncrNdJimfKkfVm7M8hUUOxvD0ZpnHRW0AfogYczL46O9g53A4gCEOrYICZqFftN4u6C4Tjz9_8OYzz47H0ht" 
                          alt="Collage portrait" 
                          className="w-full aspect-square object-cover grayscale"
                        />
                        <div className="font-mono text-[9px] mt-2 text-center text-charcoal">PROFILE_SKETCH.PNG</div>
                      </div>
                      
                      <div className="w-full bg-soft-white border-2 border-charcoal p-4 rotate-3 shadow-xl pt-16 z-20 tape-corner">
                        <img 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBPgQlO55KT7npfUSWsOtC4BSjj-uvVP7eC4weLuMugIzxPa4r9EpdQUaIhvawMbEkMnMX5kSkXeqKj1g2PaFH5vYtXthlvdVwNeRcexP0V4-uENJGCwOANwoUYknJhynO3hah4CxpP45nUDBV2jvsiVNA5EuECa09pVU64jPhZd5W3MQlMFFfAN0be_4RIYymMWgLOv_ZDkL-6Wu6hJ2-3fbj9X-h3-MuM4W5i1PxdBtUB4bS3Kg_UyY5VzYrWOVOCYvYPDqc5PFD" 
                          alt="Collage details" 
                          className="w-full h-64 object-cover border border-charcoal"
                        />
                        <div className="mt-4 flex justify-between font-mono text-[10px] text-charcoal">
                          <span>FILE: ARCHIVE_V2.TIFF</span>
                          <span className="bg-lime-green px-1.5 border border-charcoal rotate-[-1deg] font-bold">#COLLAGE_ART</span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>

                {/* HERO TEXT COLUMN */}
                <div className="w-full lg:w-2/5 flex flex-col items-start text-left">
                  {activeConcept === "signboard" && (
                    <>
                      <div className="bg-lime-green px-4 py-1.5 font-mono text-xs font-bold border border-charcoal rotate-[-2deg] mb-6">
                        CREATIVE_DEV // SYSTEM_ERR_v2.0
                      </div>
                      <h2 className="font-syne font-black text-5xl md:text-7xl leading-none text-charcoal tracking-tighter uppercase mb-6">
                        CRAFTING <br />
                        DIGITAL <br />
                        MONOGRAPHS.
                      </h2>
                      <p className="font-sans text-lg text-charcoal/80 mb-8 max-w-md">
                        An interdisciplinary approach to web development, mixing high-end art direction with rigid technical architectures.
                      </p>
                      <div className="flex gap-4 items-center">
                        <a 
                          href="#about"
                          className="w-12 h-12 rounded-full border-2 border-charcoal flex items-center justify-center hover:bg-charcoal hover:text-soft-white transition-all cursor-pointer font-bold"
                          onMouseEnter={() => handleMouseEnter("Learn More")}
                          onMouseLeave={handleMouseLeave}
                        >
                          ↓
                        </a>
                        <div className="font-mono text-[11px] uppercase tracking-wide text-charcoal/60 leading-tight">
                          <span>EXPLORE ARCHIVES</span><br />
                          <span className="text-electric-blue font-bold">SCROLL DOWN TO UNVEIL</span>
                        </div>
                      </div>
                    </>
                  )}

                  {activeConcept === "magazine" && (
                    <div className="flex flex-col items-start gap-4">
                      <div className="h-0.5 w-16 bg-charcoal mb-4"></div>
                      <h3 className="font-syne font-extrabold text-2xl uppercase tracking-tighter text-charcoal">
                        THE ART OF RIGID STRUCTURES
                      </h3>
                      <p className="font-sans text-md leading-relaxed text-charcoal/70 mb-4 max-w-sm">
                        Digital spaces should feel as tangible and curated as a physical print monograph. I design websites that resist standard templates, utilizing editorial layout principles.
                      </p>
                      <div className="flex flex-col font-mono text-xs text-charcoal/50 gap-1.5 uppercase">
                        <div>// TYPOGRAPHY SCALE: GEOMETRIC + SYNE</div>
                        <div>// LAYOUT RATIO: ASYMMETRICAL COLUMN</div>
                        <div>// VISUAL METAPHOR: POSTER SHEETS</div>
                      </div>
                    </div>
                  )}

                  {activeConcept === "developer" && (
                    <div className="flex flex-col items-start gap-6 font-mono text-[#00FF66]">
                      <div>
                        <span className="text-zinc-600">01 //</span> SYSTEM PROFILE
                      </div>
                      <h2 className="text-3xl md:text-5xl font-bold uppercase leading-none tracking-tight">
                        INTELLIGENT <br />
                        SYSTEMS // <br />
                        EXPRESSIVE UI
                      </h2>
                      <p className="text-xs text-zinc-400 leading-relaxed max-w-md">
                        Merging high-performance runtime applications with artistic visual structures. Responsive terminals, WebGL layers, and automated generative workflows.
                      </p>
                      <div className="text-[10px] text-[#00FF66]/60 border border-[#00FF66]/30 p-3 bg-[#00FF66]/5 w-full">
                        <div>SYS_STATUS: READY</div>
                        <div>LATENCY: 12MS // REGION: GLOBAL_REMOTE</div>
                        <div>UPTIME: 99.98% // PKG: ACTIVE_DEV</div>
                      </div>
                    </div>
                  )}

                  {activeConcept === "collage" && (
                    <div className="flex flex-col items-start gap-6 relative">
                      <div className="absolute top-[-40px] right-[-20px] bg-charcoal text-lime-green px-3 py-1 font-mono text-xs uppercase font-black rotate-[8deg] border border-charcoal">
                        STICKER #1024
                      </div>
                      <h2 className="font-syne font-black text-4xl md:text-6xl text-charcoal leading-none uppercase mb-2">
                        HANDCRAFTED <br />
                        COLLAGE <br />
                        DESIGN.
                      </h2>
                      <p className="font-sans text-md text-charcoal/80 max-w-md italic mb-4">
                        "Visual storytelling is an art installation of elements: tape, Polaroid grids, realistic drop shadows, and handcrafted aesthetics."
                      </p>
                      <a 
                        href="#projects" 
                        className="bg-lime-green text-charcoal px-6 py-3 border-2 border-charcoal font-bold font-mono text-xs uppercase hover:bg-electric-blue hover:text-soft-white hover:scale-95 transition-all shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
                      >
                        BROWSE SCENE_COLLECTION
                      </a>
                    </div>
                  )}

                </div>
              </div>

            </section>

            {/* ABOUT / IDENTITY SECTION */}
            <section id="about" className="py-24 px-6 md:px-12 border-t-2 border-charcoal dark:border-[#00FF66]/30 relative overflow-hidden bg-soft-white dark:bg-zinc-950">
              
              <div className="max-w-6xl mx-auto">
                <div className={theme.sectionTitle}>
                  {activeConcept === "developer" ? "02 // IDENTITY_MANIFESTO.md" : "IDENTITY // STUDIO"}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  
                  {/* Left Column: Manifesto Card */}
                  <div className="lg:col-span-7 flex flex-col gap-6">
                    <div className={theme.card + " p-8 relative overflow-hidden"}>
                      <span className="font-mono text-xs bg-charcoal text-lime-green px-2 py-1 absolute top-0 right-0 border-b border-l border-charcoal uppercase font-bold">
                        MANIFESTO // v2
                      </span>
                      <h3 className="font-syne font-extrabold text-2xl md:text-3xl text-charcoal dark:text-soft-white mb-6 uppercase">
                        BEYOND THE GRID.
                      </h3>
                      <p className="font-sans text-base leading-relaxed text-charcoal/80 dark:text-soft-white/80 mb-4">
                        I believe in the friction between technical precision and creative expression. Standard UI templates have made the web boring and predictable. My mission is to build highly immersive, memorable interfaces that balance editorial sophistication with reliable backend infrastructure.
                      </p>
                      <p className="font-mono text-xs text-electric-blue dark:text-lime-green font-bold italic">
                        "Precision meets poetry in the pursuit of the perfect digital medium."
                      </p>
                    </div>

                    {/* Stats or details depending on theme */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                      {[
                        { title: "COMMISSIONS", val: "Q3 AVAILABLE" },
                        { title: "LOCATION", val: "GLOBAL REMOTE" },
                        { title: "ART DIRECTION", val: "POST-MINIMAL" }
                      ].map((stat, i) => (
                        <div key={i} className="border-2 border-charcoal dark:border-[#00FF66]/30 p-4 bg-soft-white dark:bg-black font-mono">
                          <div className="text-[10px] text-charcoal/40 dark:text-[#00FF66]/40 uppercase font-bold">{stat.title}</div>
                          <div className="text-xs text-charcoal dark:text-soft-white mt-1 font-bold">{stat.val}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Profile Lanyard ID Card (Concept 1 style but adaptable) */}
                  <div className="lg:col-span-5 flex flex-col items-center pt-8">
                    {/* Hanging Cable */}
                    {activeConcept === "signboard" && (
                      <div className="lanyard-cable h-24 w-1 relative mb-[-4px]">
                        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-6 h-6 border-4 border-charcoal rounded-full bg-soft-white z-10"></div>
                      </div>
                    )}
                    {activeConcept === "collage" && (
                      <div className="lanyard-cable-lime h-24 w-1 relative mb-[-4px]">
                        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-6 h-6 border-4 border-charcoal rounded-full bg-soft-white z-10"></div>
                      </div>
                    )}

                    {/* ID Card Wrapper */}
                    <div 
                      className={`w-full max-w-sm border-2 border-charcoal bg-soft-white p-6 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] transition-transform duration-300 ${
                        activeConcept === "signboard" ? "rotate-2 hover:rotate-0" :
                        activeConcept === "magazine" ? "rotate-[-3deg]" :
                        activeConcept === "developer" ? "border-[#00FF66] bg-black text-[#00FF66] shadow-[0_0_15px_rgba(0,255,102,0.1)]" : "rotate-6"
                      }`}
                      onMouseEnter={() => handleMouseEnter("Access Level: Granted")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="flex justify-between items-center mb-4 font-mono text-[10px]">
                        <span className="text-charcoal/50 dark:text-[#00FF66]/50">SYS_ID: // CR-7890</span>
                        <span className="text-lime-green bg-charcoal px-2 py-0.5 border border-charcoal dark:border-[#00FF66]/30 font-bold uppercase">LEVEL 03</span>
                      </div>
                      
                      {/* Profile Image */}
                      <div className="w-full aspect-square bg-light-gray dark:bg-zinc-900 border-2 border-charcoal dark:border-[#00FF66]/30 overflow-hidden relative grayscale contrast-125">
                        <img 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiorPQ-vI7N8munLunCSA9tlC7-lZlafNb-tJoyjAEWYuRtg3gtPSDKRRmapAjexd7FiS8GksG5kbpT8eXs50ZrmCVrqzT68o_jCKOvSsi_v22NnrTjWqxjaFGC0hhb51SO36hOkUjrbOB7qKY_qRhDJfDhhWeKzDW-GZ8OIR9u2sdODWBgPRegI-lncrNdJimfKkfVm7M8hUUOxvD0ZpnHRW0AfogYczL46O9g53A4gCEOrYICZqFftN4u6C4Tjz9_8OYzz47H0ht" 
                          alt="Creative portrait" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="mt-4 font-mono text-left">
                        <div className="text-[10px] text-charcoal/40 dark:text-[#00FF66]/40 uppercase">NAME //</div>
                        <div className="font-syne font-bold text-xl text-charcoal dark:text-soft-white uppercase leading-none">SYSTEM_ERR</div>
                        
                        <div className="flex justify-between items-end mt-4 pt-4 border-t border-charcoal/10 dark:border-[#00FF66]/20">
                          <div>
                            <div className="text-[9px] text-charcoal/40 dark:text-[#00FF66]/40 uppercase">CLASS //</div>
                            <div className="text-xs font-bold text-electric-blue dark:text-lime-green">INTERFACE ARCHITECT</div>
                          </div>
                          <div className="text-right">
                            <div className="text-[9px] text-charcoal/40 dark:text-[#00FF66]/40 uppercase">STATUS //</div>
                            <div className="text-xs font-bold text-charcoal dark:text-soft-white">ACTIVE</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </section>

            {/* SKILLS SECTION */}
            <section id="skills" className="py-24 px-6 md:px-12 border-t-2 border-charcoal dark:border-[#00FF66]/30 bg-charcoal dark:bg-black text-soft-white">
              
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-16 border-b border-soft-white/10 pb-6">
                  <div>
                    <h2 className="font-syne font-black text-4xl md:text-6xl text-soft-white uppercase leading-none">
                      TECHNICAL <br />
                      <span className="text-lime-green">ARSENAL.</span>
                    </h2>
                    <p className="font-mono text-xs text-lime-green mt-2">SYS_STACK_REGISTRY_2026</p>
                  </div>
                  <div className="max-w-md font-sans text-sm text-soft-white/70">
                    A curated selection of languages, platforms, and methodologies engineered to manifest high-performance visual installations.
                  </div>
                </div>

                {/* Dynamic Skills display */}
                {activeConcept === "signboard" ? (
                  // Signboard Style - Asymmetric street signboard stack
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                      <div 
                        key={index} 
                        className={`border-2 border-soft-white p-6 brutalist-shadow-lime cursor-default transition-all duration-300 bg-zinc-950 ${
                          index % 3 === 0 ? "rotate-[-1.5deg]" : index % 3 === 1 ? "rotate-[1deg]" : "rotate-[-0.5deg]"
                        }`}
                        onMouseEnter={() => handleMouseEnter(`Inspect: ${skill.name}`)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="font-mono text-xs text-lime-green uppercase">MOD_0{index+1} // {skill.category}</div>
                        <h4 className="font-syne font-bold text-2xl text-soft-white mt-2 uppercase">{skill.name}</h4>
                        <div className="mt-4 pt-4 border-t border-soft-white/10 flex justify-between font-mono text-[10px]">
                          <span>LEVEL: {skill.level}</span>
                          <span>STABLE_REBUILD</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : activeConcept === "magazine" ? (
                  // Magazine Style - Asymmetric minimal columns
                  <div className="divide-y-2 divide-soft-white/20">
                    {skills.map((skill, index) => (
                      <div 
                        key={index}
                        className="py-6 flex flex-col md:flex-row justify-between items-baseline gap-4 hover:pl-4 transition-all duration-300 group"
                      >
                        <div className="flex gap-4 items-center">
                          <span className="font-mono text-xs text-soft-white/40">0{index+1}_</span>
                          <span className="font-syne font-bold text-3xl uppercase tracking-tighter group-hover:text-electric-blue transition-colors">{skill.name}</span>
                        </div>
                        <div className="flex gap-8 items-center font-mono text-xs">
                          <span className="opacity-60 uppercase">{skill.category}</span>
                          <span className="border border-soft-white/30 px-3 py-1 font-bold text-lime-green">{skill.level.toUpperCase()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : activeConcept === "developer" ? (
                  // Developer OS Style - Bento Terminal grids
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                      <div key={index} className="border border-[#00FF66]/30 bg-zinc-950 p-6 flex flex-col justify-between h-56 hover:border-[#00FF66] transition-colors group">
                        <div className="flex justify-between items-start font-mono text-[10px]">
                          <span className="text-[#00FF66]/60">FILE: 00{index+1}.sys</span>
                          <span className="text-[#00FF66] font-bold">READY</span>
                        </div>
                        <div>
                          <h4 className="font-mono text-lg font-bold uppercase text-soft-white group-hover:text-[#00FF66] transition-colors">{skill.name}</h4>
                          <p className="font-mono text-[11px] text-zinc-500 mt-2">// CATEGORY: {skill.category.toUpperCase()}</p>
                        </div>
                        <div className="flex gap-1 items-center mt-4">
                          <span className="text-[10px] font-mono text-[#00FF66]">LOAD:</span>
                          <div className="h-1.5 flex-1 bg-zinc-900 border border-[#00FF66]/30 relative overflow-hidden">
                            <div 
                              className="h-full bg-[#00FF66] transition-all"
                              style={{ width: skill.level === "Expert" ? "95%" : skill.level === "Advanced" ? "80%" : "65%" }}
                            ></div>
                          </div>
                          <span className="text-[9px] font-mono text-zinc-400">{skill.level}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Collage Style - Sticker-inspired layout
                  <div className="flex flex-wrap justify-center gap-6 py-12">
                    {skills.map((skill, index) => (
                      <div 
                        key={index}
                        className={`bg-soft-white text-charcoal border-2 border-charcoal px-6 py-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] transition-transform duration-300 cursor-default hover:scale-105 hover:rotate-0 ${
                          index % 4 === 0 ? "rotate-[-3deg]" : index % 4 === 1 ? "rotate-[2deg]" : index % 4 === 2 ? "rotate-[-1.5deg]" : "rotate-[3deg]"
                        }`}
                        onMouseEnter={() => handleMouseEnter(`Sticker #${index+100}`)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="font-mono text-[9px] text-electric-blue uppercase font-bold">ADHESIVE_LABEL // 0{index+1}</div>
                        <h4 className="font-syne font-black text-xl uppercase mt-1">{skill.name}</h4>
                        <div className="font-mono text-[10px] text-charcoal/50 border-t border-charcoal/10 mt-3 pt-2">
                          {skill.category} // {skill.level}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>

            </section>

            {/* PROJECTS SECTION */}
            <section id="projects" className="py-24 px-6 md:px-12 bg-soft-white dark:bg-zinc-900 border-t-2 border-charcoal dark:border-[#00FF66]/30">
              
              <div className="max-w-6xl mx-auto">
                <div className="flex items-baseline justify-between mb-16 border-b-2 border-charcoal dark:border-[#00FF66]/30 pb-4">
                  <h2 className="font-syne font-black text-4xl md:text-6xl text-charcoal dark:text-soft-white uppercase leading-none">
                    SELECTED_WORKS.
                  </h2>
                  <span className="font-mono text-xs text-charcoal/50 dark:text-soft-white/50">VOL_01_2026</span>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[300px] md:auto-rows-[400px]">
                  
                  {projects.map((proj, idx) => {
                    let gridSpan = "md:col-span-6 md:row-span-1";
                    if (proj.size === "large") gridSpan = "md:col-span-8 md:row-span-2";
                    if (proj.size === "wide") gridSpan = "md:col-span-12 md:row-span-1";

                    return (
                      <div 
                        key={idx}
                        className={`${gridSpan} group relative overflow-hidden border-2 border-charcoal dark:border-[#00FF66]/30 bg-light-gray dark:bg-zinc-950 ${
                          activeConcept === "developer" ? "border-[#00FF66]/30 text-[#00FF66] shadow-[0_0_10px_rgba(0,255,102,0.05)] hover:border-[#00FF66]" : ""
                        }`}
                        onMouseEnter={() => handleMouseEnter(`View project: ${proj.title}`)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {/* Image overlay */}
                        <img 
                          src={proj.img} 
                          alt={proj.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                        />

                        {/* Interactive overlay card on hover */}
                        <div className="absolute inset-0 bg-charcoal/50 dark:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                          <div className={`p-6 max-w-md translate-y-4 group-hover:translate-y-0 transition-transform duration-500 border-2 border-charcoal bg-soft-white text-charcoal ${
                            activeConcept === "developer" ? "bg-black border-[#00FF66] text-[#00FF66]" : ""
                          }`}>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {proj.tags.map((tag, i) => (
                                <span key={i} className="font-mono text-[9px] border border-charcoal/20 dark:border-[#00FF66]/30 px-2 py-0.5 uppercase">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <h3 className="font-syne font-black text-2xl uppercase tracking-tighter mb-2">{proj.title}</h3>
                            <p className="font-sans text-xs text-charcoal/70 dark:text-[#00FF66]/80 mb-4">{proj.desc}</p>
                            
                            <a 
                              href={proj.url} 
                              className="font-mono text-xs font-bold text-electric-blue dark:text-[#00FF66] hover:underline flex items-center gap-1.5"
                            >
                              INITIATE_UP_LINK <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>

                        {/* Floating visual watermark sticker (Concept 2/4 style) */}
                        {activeConcept !== "developer" && (
                          <div className="absolute top-4 left-4 z-10">
                            <span className="bg-lime-green text-charcoal px-3 py-1 font-mono text-[9px] border border-charcoal shadow-sm uppercase font-bold rotate-[-1deg]">
                              {proj.tags[0]}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}

                </div>
              </div>

            </section>

            {/* EXPERIENCE & EDUCATION SECTION */}
            <section className="py-24 px-6 md:px-12 border-t-2 border-charcoal dark:border-[#00FF66]/30 bg-soft-white dark:bg-zinc-950">
              
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  
                  {/* Left Column: Heading */}
                  <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                    <span className="font-mono text-xs text-electric-blue dark:text-lime-green font-bold uppercase tracking-wider block mb-2">// TIME_LINE_ARCHIVE</span>
                    <h2 className="font-syne font-black text-4xl md:text-5xl text-charcoal dark:text-soft-white uppercase leading-none">
                      EXPERIENCE <br />
                      &amp; HISTORIC <br />
                      GROWTH.
                    </h2>
                  </div>

                  {/* Right Column: Timeline Cards */}
                  <div className="lg:col-span-8 flex flex-col gap-12 relative pl-6 md:pl-12">
                    {/* Vertical Timeline Cable */}
                    <div className="absolute left-1.5 md:left-2 top-0 bottom-0 w-1 bg-charcoal dark:bg-[#00FF66]/30 opacity-10"></div>

                    {experience.map((exp, idx) => {
                      const Icon = exp.icon;
                      
                      // Rotated card styling based on concept
                      const rotation = idx % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]";
                      const cardStyle = activeConcept === "developer" 
                        ? "border-[#00FF66]/30 bg-black text-[#00FF66] hover:border-[#00FF66] shadow-[0_0_15px_rgba(0,255,102,0.05)]" 
                        : `border-2 border-charcoal bg-soft-white hover:border-electric-blue ${rotation}`;

                      return (
                        <div key={idx} className="relative group">
                          {/* Anchor bullet */}
                          <div className={`absolute -left-[30px] md:-left-[46px] top-4 w-6 h-6 border-4 border-soft-white dark:border-zinc-950 rounded-full z-10 transition-colors ${
                            activeConcept === "developer" 
                              ? "bg-[#00FF66] border-black" 
                              : idx % 2 === 0 ? "bg-electric-blue" : "bg-lime-green"
                          }`}></div>

                          <div 
                            className={`p-8 transition-all duration-300 brutalist-shadow ${cardStyle}`}
                            onMouseEnter={() => handleMouseEnter(`Inspect history: ${exp.company}`)}
                            onMouseLeave={handleMouseLeave}
                          >
                            <div className="flex justify-between items-start mb-4 font-mono text-xs">
                              <span className="text-electric-blue dark:text-lime-green font-bold">{exp.date}</span>
                              <Icon className="w-4 h-4 text-charcoal/40 dark:text-[#00FF66]/60" />
                            </div>

                            <h4 className="font-syne font-black text-2xl uppercase tracking-tighter text-charcoal dark:text-soft-white mb-1">
                              {exp.role}
                            </h4>
                            <p className="font-mono text-xs text-charcoal/50 dark:text-[#00FF66]/60 uppercase mb-4">
                              {exp.company}
                            </p>

                            <p className="font-sans text-sm text-charcoal/80 dark:text-soft-white/80 leading-relaxed">
                              {exp.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}

                  </div>

                </div>
              </div>

            </section>

            {/* CONTACT & FOOTER SECTION */}
            <section id="contact" className="py-24 px-6 md:px-12 border-t-2 border-charcoal dark:border-[#00FF66]/30 bg-electric-blue text-soft-white relative overflow-hidden">
              
              {/* Giant graphic background badge */}
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none select-none md:block hidden">
                <Maximize className="w-96 h-96" />
              </div>

              <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-12 items-center relative z-10">
                
                {/* Left Side: Contact CTA */}
                <div className="md:col-span-7 flex flex-col items-start text-left">
                  {/* Availability Sticker */}
                  <div className="mb-6 rotate-[-2deg]">
                    <span className="bg-lime-green text-charcoal px-4 py-2 font-mono text-xs font-bold shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] uppercase">
                      ● UPLINK_ACTIVE_Q3_2026
                    </span>
                  </div>

                  <h2 className="font-syne font-black text-4xl md:text-7xl text-soft-white uppercase leading-none tracking-tight mb-8">
                    READY TO START A <br />
                    <span className="italic text-lime-green">NEW CHAPTER?</span>
                  </h2>

                  <p className="font-sans text-lg text-soft-white/90 mb-12 max-w-xl">
                    I am currently accepting commission bookings for Q3 2026. Whether it is an immersive design system, a dynamic Next.js application, or a full art-directed site, let us build something memorable.
                  </p>

                  <div className="flex flex-wrap gap-6 items-center">
                    <a 
                      href="mailto:hello@system-err.dev"
                      className="bg-soft-white text-electric-blue hover:bg-lime-green hover:text-charcoal px-10 py-5 font-syne font-black text-lg transition-all duration-300 border-2 border-charcoal shadow-[6px_6px_0px_0px_rgba(26,26,26,1)]"
                      onMouseEnter={() => handleMouseEnter("Open mail client")}
                      onMouseLeave={handleMouseLeave}
                    >
                      SAY_HELLO_NOW
                    </a>

                    <div className="flex flex-col font-mono text-xs text-soft-white/60 gap-1 pl-6 border-l border-soft-white/20">
                      <div>AVAILABILITY: ACCEPTING COMMISSIONS</div>
                      <div>LOCATIONS: EUROPE / ASIA / NORTH AMERICA</div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Visual Map & Social Links Grid */}
                <div className="md:col-span-5 w-full flex flex-col gap-8">
                  
                  {/* Stylized City Map */}
                  <div className="border-2 border-charcoal bg-soft-white p-4 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] relative overflow-hidden grayscale contrast-125 group">
                    <div className="absolute top-2 left-2 z-10 bg-electric-blue text-soft-white px-3 py-1 font-mono text-[9px]">
                      EST_TIMEZONE // 52.5200° N, 13.4050° E
                    </div>
                    <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIwZcjw9-5thvE0DqZL5BrBJjT_7JT9Th0tgh5AUo2G4yGIg_I2P6sfz6GEQRZxMnU04IWem-lfeyNbIYFbGHewBbPMqu2JUQ1s0YBtujiL__ovZ7hcedCGMhHEV2RlnCBbuL3bLOGnwxSlmReuPuD89guKJzkFp-XfyV9df6LDVEchZOxmP7tx2RhdGwS19mY1oOqS6BgeEYBNFGtOj0msFyRUhJZZFgQxj9uwb2_nkDkS0Jy2uAt5T8fE5YRlZwQw7xrBA69lxoi" 
                      alt="Berlin Map Vector" 
                      className="w-full aspect-video object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 border border-charcoal"
                    />
                  </div>

                  {/* Social Channels list */}
                  <div className="flex flex-col font-mono text-xs gap-4 mt-4">
                    <div className="text-soft-white/50 text-[10px] tracking-wider">// SOCIAL_UPLINKS</div>
                    
                    {[
                      { name: "GITHUB", url: "https://github.com", icon: Github },
                      { name: "BEHANCE", url: "https://behance.net", icon: Dribbble },
                      { name: "LINKEDIN", url: "https://linkedin.com", icon: Linkedin }
                    ].map((sock, i) => {
                      const Icon = sock.icon;
                      return (
                        <a 
                          key={i}
                          href={sock.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex justify-between items-center py-3 border-b border-soft-white/20 hover:border-lime-green transition-all hover:pl-2 group"
                          onMouseEnter={() => handleMouseEnter(`Uplink: ${sock.name}`)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <span className="flex items-center gap-2 font-bold font-syne text-md tracking-tight uppercase">
                            <Icon className="w-4 h-4 text-lime-green" />
                            {sock.name}
                          </span>
                          <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:text-lime-green transition-all" />
                        </a>
                      );
                    })}
                  </div>

                </div>

              </div>

            </section>

          </motion.div>
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="w-full border-t-2 border-charcoal bg-charcoal py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-soft-white mt-auto z-10 relative">
        <div className="font-mono text-[10px] text-lime-green uppercase mb-4 md:mb-0">
          © 2026 SYSTEM_ERR_DEV. ALL REGISTERED MONOGRAPHS RESERVED.
        </div>
        <div className="flex gap-8 font-mono text-[10px] uppercase">
          <a href="#" className="opacity-60 hover:opacity-100 hover:text-lime-green transition-colors">STITCH_STRUCTURE</a>
          <a href="#" className="opacity-60 hover:opacity-100 hover:text-lime-green transition-colors">COMPONENTS_EXPORTS</a>
          <a href="#" className="opacity-60 hover:opacity-100 hover:text-lime-green transition-colors">SOURCE_REPOSITORY</a>
          <a href="#" className="text-lime-green underline font-bold tracking-widest">[ONLINE]</a>
        </div>
      </footer>

    </div>
  );
}
