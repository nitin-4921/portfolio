"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import BootSequence from "@/components/BootSequence";

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
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10 5.523 0 10-4.478 10-10 0-5.523-4.477-10-10-10zm6.93 4.57c1.26 1.53 2.02 3.49 2.06 5.63-1.02-.21-2.05-.32-3.08-.32-.74 0-1.48.06-2.2.17-.23-.55-.47-1.09-.73-1.62 1.48-.64 2.82-1.55 3.95-2.86zM12 4.06c1.67 0 3.21.55 4.45 1.47-1.02 1.19-2.24 2.03-3.58 2.6A29.52 29.52 0 0010 4.27c.64-.14 1.3-.21 2-.21zM7.9 5.03c.7 1.27 1.32 2.6 1.84 3.97C7.9 9.72 6.1 10 4.27 10c-.06 0-.12 0-.18-.01A8.02 8.02 0 017.9 5.03zM4.06 12c0-.1 0-.2.01-.3.2.01.4.01.6.01 2.1 0 4.12-.35 6-.98.17.35.33.7.48 1.06C8.7 13 6.5 14.5 4.7 16.5A7.94 7.94 0 014.06 12zm7.94 7.94c-1.9 0-3.65-.67-5.02-1.77 1.6-1.84 3.67-3.2 6.02-3.87.6 1.6 1.04 3.27 1.3 4.99-.74.42-1.5.65-2.3.65zm4.12-.9c-.27-1.6-.68-3.15-1.22-4.63.64-.1 1.3-.15 1.96-.15.9 0 1.8.1 2.67.3a8.02 8.02 0 01-3.41 4.48z" />
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

const Award = ({ className }: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const Maximize = ({ className }: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
  </svg>
);

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorHovered, setCursorHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [heroMouseOffset, setHeroMouseOffset] = useState({ x: 0, y: 0 });
  const [booted, setBooted] = useState(false);

  // GSAP cursor refs
  const cursorRef = useRef<HTMLDivElement>(null);

  // SYSTEM_EVOLUTION Graph State
  const [activeNodeId, setActiveNodeId] = useState<string>("NITIN_KUMAR");
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [zoomScale, setZoomScale] = useState<number>(1.0);
  const [gridVisible, setGridVisible] = useState<boolean>(true);
  const [radarActive, setRadarActive] = useState<boolean>(true);

  // Nodes database for the classified network
  const systemNodes: Record<string, {
    id: string;
    type: string;
    label: string;
    title: string;
    subtitle: string;
    status: string;
    x: number;
    y: number;
    parent?: string;
    description?: string;
    organization?: string;
    duration?: string;
    skills?: string[];
    technologies?: string[];
    details?: {
      gpa?: string;
      duration?: string;
      semesters?: { name: string; status: string; value: number; gpa?: string }[];
    };
  }> = {
    NITIN_KUMAR: {
      id: "NITIN_KUMAR",
      type: "center",
      label: "NITIN_KUMAR",
      title: "SYS_CORE: NITIN KUMAR",
      subtitle: "INTERFACE ARCHITECT & AI SYSTEMS ENGINEER",
      status: "ACTIVE",
      x: 500,
      y: 300,
      description: "Central processing core of Nitin Kumar's professional capabilities, tracking academic training, commercial deployments, open source work, and verified hackathon achievements.",
      organization: "GLA University",
      duration: "2024 - Present",
      skills: ["AI Systems", "Full Stack Dev", "Computer Vision", "Software Engineering"],
      technologies: ["Next.js", "React", "Python", "TensorFlow", "Node.js"]
    },
    EDUCATION: {
      id: "EDUCATION",
      type: "category",
      label: "EDUCATION",
      title: "ACADEMIC INTERFACE",
      subtitle: "TRAINING_MODULES",
      status: "ONGOING",
      x: 500,
      y: 160,
      parent: "NITIN_KUMAR",
      description: "Academic track focused on core computer science disciplines, AI architectures, and interactive systems design.",
      organization: "GLA University",
      duration: "2024 - 2028",
      skills: ["Computer Science", "Data Structures", "Algorithms"],
      technologies: ["C++", "Java", "Python", "SQL"]
    },
    GLA_UNIVERSITY: {
      id: "GLA_UNIVERSITY",
      type: "leaf",
      label: "GLA_UNIVERSITY",
      title: "GLA UNIVERSITY",
      subtitle: "B.TECH COMPUTER SCIENCE · 2024-2028",
      status: "ONGOING",
      x: 500,
      y: 55,
      parent: "EDUCATION",
      description: "Currently pursuing Bachelor of Technology in Computer Science at GLA University, Mathura. Specializing in Artificial Intelligence, Full Stack Development, Computer Vision, and Software Engineering.",
      organization: "GLA University, Mathura",
      duration: "2024 - 2028",
      skills: ["Artificial Intelligence", "Full Stack Development", "Computer Vision", "Software Engineering"],
      technologies: ["Python", "Next.js", "TensorFlow", "OpenCV", "React.js"],
      details: {
        gpa: "8.51",
        duration: "2024 - 2028",
        semesters: [
          { name: "SEM 1", status: "COMPLETE", value: 100, gpa: "8.20" },
          { name: "SEM 2", status: "COMPLETE", value: 100, gpa: "8.40" },
          { name: "SEM 3", status: "COMPLETE", value: 100, gpa: "8.60" },
          { name: "SEM 4", status: "ACTIVE", value: 60, gpa: "8.51" },
          { name: "SEM 5", status: "PENDING", value: 0 },
          { name: "SEM 6", status: "PENDING", value: 0 },
          { name: "SEM 7", status: "PENDING", value: 0 },
          { name: "SEM 8", status: "PENDING", value: 0 }
        ]
      }
    },
    INTERNSHIPS: {
      id: "INTERNSHIPS",
      type: "category",
      label: "INTERNSHIPS",
      title: "FIELD DEPLOYMENTS",
      subtitle: "PRACTICAL_EXPERIENCES",
      status: "ACTIVE",
      x: 670,
      y: 200,
      parent: "NITIN_KUMAR",
      description: "Professional industry training and real-world system deployments.",
      organization: "Various Organizations",
      duration: "2025 - Present",
      skills: ["Software Engineering", "UI/UX Design", "System Administration"],
      technologies: ["React.js", "ServiceNow", "Figma", "Git"]
    },
    SERVICENOW_VIRTUAL: {
      id: "SERVICENOW_VIRTUAL",
      type: "leaf",
      label: "SERVICENOW_VIRTUAL",
      title: "ServiceNow Virtual Internship",
      subtitle: "SERVICENOW UNIVERSITY / AICTE / SMARTBRIDGE",
      status: "COMPLETED",
      x: 840,
      y: 140,
      parent: "INTERNSHIPS",
      description: "Completed ServiceNow Virtual Internship under the AICTE and SmartBridge initiative. Worked on Flow Designer, ServiceNow Administration, Automated Test Framework, Dashboard Configuration, Reporting Systems, and Agentic AI Concepts. Prepared for CSA certification pathway.",
      organization: "ServiceNow University, AICTE, SmartBridge",
      duration: "May 2026",
      skills: ["ServiceNow Administration", "Automated Testing", "Workflow Automation", "Dashboard Configuration"],
      technologies: ["ServiceNow Flow Designer", "ATF", "Agentic AI"]
    },
    AMROHA_POLICE: {
      id: "AMROHA_POLICE",
      type: "leaf",
      label: "AMROHA_POLICE",
      title: "AMROHA POLICE UP",
      subtitle: "CYBERSECURITY INTERN · 2026",
      status: "DEPLOYED",
      x: 840,
      y: 260,
      parent: "INTERNSHIPS",
      description: "Cyber monitoring, digital threat intelligence audits, and secure information operations for UP Law Enforcement infrastructure.",
      organization: "UP Law Enforcement",
      duration: "2026",
      skills: ["Cybersecurity Auditing", "Threat Intelligence", "Information Security"],
      technologies: ["Network Logs", "Security Protocol", "Information Operations"]
    },
    ACHIEVEMENTS: {
      id: "ACHIEVEMENTS",
      type: "category",
      label: "ACHIEVEMENTS",
      title: "VERIFIED MILESTONES",
      subtitle: "COMPETITIVE_AWARDS",
      status: "VERIFIED",
      x: 670,
      y: 400,
      parent: "NITIN_KUMAR",
      description: "Milestones achieved in high-pressure competitive programming and hackathon environments.",
      organization: "National & Regional hackathons",
      duration: "2025",
      skills: ["Competitive Programming", "Rapid Prototyping", "System Design"],
      technologies: ["AI", "Computer Vision", "Full Stack"]
    },
    SIH_WINNER: {
      id: "SIH_WINNER",
      type: "leaf",
      label: "SIH_WINNER",
      title: "Smart India Hackathon",
      subtitle: "NATIONAL WINNER · 2025",
      status: "WINNER",
      x: 840,
      y: 330,
      parent: "ACHIEVEMENTS",
      description: "Won Smart India Hackathon 2025 by developing an AI-powered public safety solution. Category: AI + Public Safety.",
      organization: "Ministry of Education, Govt. of India (National Level)",
      duration: "2025",
      skills: ["AI Systems", "Public Safety Technology", "National Competition Winner"],
      technologies: ["Deep Learning", "Computer Vision", "React.js", "Flask"]
    },
    SIH_INTERNAL: {
      id: "SIH_INTERNAL",
      type: "leaf",
      label: "SIH_INTERNAL",
      title: "SIH Internal Competition",
      subtitle: "2ND POSITION · 2025",
      status: "2ND PLACE",
      x: 840,
      y: 400,
      parent: "ACHIEVEMENTS",
      description: "Secured second position during internal Smart India Hackathon evaluations.",
      organization: "GLA University",
      duration: "2025",
      skills: ["Problem Solving", "Pitching", "Prototyping"],
      technologies: ["Python", "Full Stack Web", "AI model Integration"]
    },
    HACK_AND_VIZ: {
      id: "HACK_AND_VIZ",
      type: "leaf",
      label: "HACK_AND_VIZ",
      title: "Hack & Wiz 2.0",
      subtitle: "3RD POSITION · 2025",
      status: "3RD PLACE",
      x: 840,
      y: 470,
      parent: "ACHIEVEMENTS",
      description: "Achieved third position for technical innovation and problem solving.",
      organization: "GLA University",
      duration: "2025",
      skills: ["Technical Innovation", "Creative Visualization", "UI Prototyping"],
      technologies: ["React.js", "D3.js", "Data Visualization"]
    },
    OPEN_SOURCE: {
      id: "OPEN_SOURCE",
      type: "category",
      label: "OPEN_SOURCE",
      title: "DECENTRALIZED CONTRIBUTIONS",
      subtitle: "COMMUNITY_UPLINKS",
      status: "ACTIVE",
      x: 500,
      y: 440,
      parent: "NITIN_KUMAR",
      description: "Contributing code and documentation to decentralized open source repositories.",
      organization: "Global Developer Ecosystem",
      duration: "2025 - Present",
      skills: ["Open Source Git Workflow", "Collaboration", "Documentation"],
      technologies: ["React.js", "Git", "GitHub", "Markdown"]
    },
    GSSOC: {
      id: "GSSOC",
      type: "leaf",
      label: "GSSOC",
      title: "GirlScript Summer of Code",
      subtitle: "OPEN SOURCE CONTRIBUTOR · 2025",
      status: "ACTIVE",
      x: 500,
      y: 545,
      parent: "OPEN_SOURCE",
      description: "Contributed to open-source projects through collaborative software development and documentation improvements.",
      organization: "GirlScript Foundation",
      duration: "2025",
      skills: ["Collaborative Coding", "Git Workflows", "Documentation Engineering"],
      technologies: ["React.js", "JavaScript", "HTML/CSS", "Git"]
    },
    TECHNICAL_GROWTH: {
      id: "TECHNICAL_GROWTH",
      type: "category",
      label: "TECHNICAL_GROWTH",
      title: "CAPABILITY ARCHITECTURE",
      subtitle: "SYSTEMS_LOAD_LOGS",
      status: "ACTIVE",
      x: 330,
      y: 300,
      parent: "NITIN_KUMAR",
      description: "Chronological evolution of engineering capabilities and core programming stack.",
      organization: "Self-Guided Learning",
      duration: "2022 - Present",
      skills: ["Systems Programming", "Algorithms", "Machine Learning Pipeline"],
      technologies: ["C++", "Java", "Python", "JavaScript"]
    },
    GROWTH_2022: {
      id: "GROWTH_2022",
      type: "growth",
      label: "GROWTH_2022",
      title: "YEAR 2022",
      subtitle: "PROGRAMMING FOUNDATIONS",
      status: "INITIALIZED",
      x: 170,
      y: 100,
      parent: "TECHNICAL_GROWTH",
      description: "C/C++ core syntax, variables, conditionals, loops, functions, basic terminal interactions, script loading, and fundamental algorithmic logic.",
      organization: "Self-Guided",
      duration: "2022",
      skills: ["C/C++ Core", "Programming Logic", "CLI Basics"],
      technologies: ["C", "C++", "Terminal"]
    },
    GROWTH_2023: {
      id: "GROWTH_2023",
      type: "growth",
      label: "GROWTH_2023",
      title: "YEAR 2023",
      subtitle: "DSA + JAVA",
      status: "COMPILED",
      x: 170,
      y: 200,
      parent: "GROWTH_2022",
      description: "Advanced Data Structures & Algorithms, Java OOP principles, recursion, memory tracking, and software optimizations.",
      organization: "Self-Guided",
      duration: "2023",
      skills: ["Object Oriented Programming", "Data Structures", "Algorithms Analysis"],
      technologies: ["Java", "IntelliJ IDEA"]
    },
    GROWTH_2024: {
      id: "GROWTH_2024",
      type: "growth",
      label: "GROWTH_2024",
      title: "YEAR 2024",
      subtitle: "FULL STACK DEVELOPMENT",
      status: "STABLE",
      x: 170,
      y: 300,
      parent: "GROWTH_2023",
      description: "React/Next.js stack, web server routing (Node/Express), database persistence (NoSQL/SQL), and API integrations.",
      organization: "Self-Guided",
      duration: "2024",
      skills: ["Web Design", "Backend Server Design", "API Integrations"],
      technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "SQL"]
    },
    GROWTH_2025: {
      id: "GROWTH_2025",
      type: "growth",
      label: "GROWTH_2025",
      title: "YEAR 2025",
      subtitle: "AI + COMPUTER VISION",
      status: "OPTIMIZED",
      x: 170,
      y: 400,
      parent: "GROWTH_2024",
      description: "Convolutional neural networks, object detection architectures, real-time telemetry systems forecasting, and ML pipeline training on local devices.",
      organization: "Self-Guided",
      duration: "2025",
      skills: ["Neural Networks", "Object Detection", "Model Training"],
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "PyTorch"]
    },
    GROWTH_2026: {
      id: "GROWTH_2026",
      type: "growth",
      label: "GROWTH_2026",
      title: "YEAR 2026",
      subtitle: "CYBERSECURITY + ADVANCED SYSTEMS",
      status: "SECURED",
      x: 170,
      y: 500,
      parent: "GROWTH_2025",
      description: "Cyberthreat auditing, telemetry logs parsing, secure architecture protocols, distributed messaging networks, and advanced server designs.",
      organization: "Self-Guided / Law Enforcement",
      duration: "2026",
      skills: ["Security Posture Auditing", "Threat Analysis", "System Concurrency"],
      technologies: ["Network Logs", "Security Protocols", "Node.js", "Socket.io"]
    },
    CERTIFICATIONS: {
      id: "CERTIFICATIONS",
      type: "category",
      label: "CERTIFICATIONS",
      title: "VERIFIED CREDENTIALS",
      subtitle: "ACQUIRED_LICENSES",
      status: "ACTIVE",
      x: 380,
      y: 210,
      parent: "NITIN_KUMAR",
      description: "Professional certifications and workshop credentials verifying technical proficiency in cloud, frontend development, and emerging AI technologies.",
      organization: "Oracle, OneRoadmap, Deloitte",
      duration: "2025 - 2026",
      skills: ["Cloud Architecture", "Frontend Systems", "AI Fundamentals"],
      technologies: ["OCI", "React.js", "Next.js", "Enterprise AI"]
    },
    CERT_ORACLE: {
      id: "CERT_ORACLE",
      type: "leaf",
      label: "CERT_ORACLE",
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundation Associate",
      subtitle: "ORACLE UNIVERSITY",
      status: "CERTIFIED",
      x: 270,
      y: 100,
      parent: "CERTIFICATIONS",
      description: "Demonstrated fundamental knowledge of Artificial Intelligence and Machine Learning concepts and associated Oracle Cloud Infrastructure services.",
      organization: "Oracle University",
      duration: "2025",
      skills: ["AI Foundations", "Cloud Infrastructure", "ML Concepts"],
      technologies: ["Oracle Cloud Infrastructure (OCI)", "AI Services"]
    },
    CERT_ONEROADMAP: {
      id: "CERT_ONEROADMAP",
      type: "leaf",
      label: "CERT_ONEROADMAP",
      title: "Frontend Development Certification — OneRoadmap",
      subtitle: "ONEROADMAP ACADEMY",
      status: "CERTIFIED",
      x: 270,
      y: 170,
      parent: "CERTIFICATIONS",
      description: "Advanced certification covering frontend architecture, system state management, performance optimization, and responsive design systems.",
      organization: "OneRoadmap Academy",
      duration: "2025",
      skills: ["Frontend Architecture", "State Management", "Performance Optimization"],
      technologies: ["React.js", "Next.js", "Tailwind CSS", "Web Performance"]
    },
    CERT_DELOITTE: {
      id: "CERT_DELOITTE",
      type: "leaf",
      label: "CERT_DELOITTE",
      title: "Emerging Technology & AI Applications Workshop — Deloitte",
      subtitle: "DELOITTE WORKSHOP",
      status: "COMPLETED",
      x: 270,
      y: 240,
      parent: "CERTIFICATIONS",
      description: "Participated in hands-on sessions on emerging tech stacks and AI implementations in enterprise business environments.",
      organization: "Deloitte",
      duration: "2025",
      skills: ["Emerging Technologies", "AI Business Integration", "Enterprise Systems"],
      technologies: ["Generative AI", "Enterprise Architectures"]
    },
    LEADERSHIP: {
      id: "LEADERSHIP",
      type: "category",
      label: "LEADERSHIP",
      title: "LEADERSHIP & ENGAGEMENT",
      subtitle: "VOLUNTEER_ROLES",
      status: "ACTIVE",
      x: 380,
      y: 390,
      parent: "NITIN_KUMAR",
      description: "Volunteering, co-coordinating events, and leadership roles in technical fests and hackathons.",
      organization: "GLA University Events",
      duration: "2025 - Present",
      skills: ["Operations Management", "Event Logistics", "Team Leadership"],
      technologies: ["Collaboration Tools", "Event Management Platforms"]
    },
    LEAD_TECHNAVYA: {
      id: "LEAD_TECHNAVYA",
      type: "leaf",
      label: "LEAD_TECHNAVYA",
      title: "Co-Coordinator",
      subtitle: "TECHNAVYA 2.0 FEST",
      status: "COMPLETED",
      x: 270,
      y: 360,
      parent: "LEADERSHIP",
      description: "Co-coordinated the Technavya 2.0 Fest at GLA University, managing operations, scheduling, and participant logistics for technical and cultural events.",
      organization: "Technavya 2.0 Fest, GLA University",
      duration: "2025",
      skills: ["Operations Management", "Event Coordination", "Team Leadership"],
      technologies: ["Spreadsheets", "Collaboration Tools"]
    },
    LEAD_DEVIATHON: {
      id: "LEAD_DEVIATHON",
      type: "leaf",
      label: "LEAD_DEVIATHON",
      title: "Volunteer",
      subtitle: "DEVIATHON HACKATHON",
      status: "COMPLETED",
      x: 270,
      y: 430,
      parent: "LEADERSHIP",
      description: "Volunteered at Deviathon Hackathon, assisting participating teams, resolving logistics queries, and helping run operational schedules.",
      organization: "Deviathon Hackathon",
      duration: "2025",
      skills: ["Event Logistics", "Troubleshooting", "Technical Support"],
      technologies: ["Communication Systems", "Event Scheduling Tools"]
    }
  };

  const systemConnections = [
    { from: "NITIN_KUMAR", to: "EDUCATION", path: "M 500 300 L 500 160", color: "#D4FF3F" },
    { from: "NITIN_KUMAR", to: "OPEN_SOURCE", path: "M 500 300 L 500 440", color: "#D4FF3F" },
    { from: "NITIN_KUMAR", to: "TECHNICAL_GROWTH", path: "M 500 300 L 330 300", color: "#304FFE" },
    { from: "NITIN_KUMAR", to: "INTERNSHIPS", path: "M 500 300 L 585 300 L 585 200 L 670 200", color: "#304FFE" },
    { from: "NITIN_KUMAR", to: "ACHIEVEMENTS", path: "M 500 300 L 585 300 L 585 400 L 670 400", color: "#304FFE" },
    { from: "NITIN_KUMAR", to: "CERTIFICATIONS", path: "M 500 300 L 440 300 L 440 210 L 380 210", color: "#304FFE" },
    { from: "NITIN_KUMAR", to: "LEADERSHIP", path: "M 500 300 L 440 300 L 440 390 L 380 390", color: "#304FFE" },
    { from: "EDUCATION", to: "GLA_UNIVERSITY", path: "M 500 160 L 500 55", color: "#D4FF3F" },
    { from: "OPEN_SOURCE", to: "GSSOC", path: "M 500 440 L 500 545", color: "#D4FF3F" },
    { from: "INTERNSHIPS", to: "SERVICENOW_VIRTUAL", path: "M 670 200 L 750 200 L 750 140 L 840 140", color: "#304FFE" },
    { from: "INTERNSHIPS", to: "AMROHA_POLICE", path: "M 670 200 L 750 200 L 750 260 L 840 260", color: "#EF4444" },
    { from: "ACHIEVEMENTS", to: "SIH_WINNER", path: "M 670 400 L 750 400 L 750 330 L 840 330", color: "#FBBF24" },
    { from: "ACHIEVEMENTS", to: "SIH_INTERNAL", path: "M 670 400 L 840 400", color: "#D4FF3F" },
    { from: "ACHIEVEMENTS", to: "HACK_AND_VIZ", path: "M 670 400 L 750 400 L 750 470 L 840 470", color: "#D4FF3F" },
    { from: "TECHNICAL_GROWTH", to: "GROWTH_2024", path: "M 330 300 L 170 300", color: "#304FFE" },
    { from: "GROWTH_2022", to: "GROWTH_2023", path: "M 170 100 L 170 200", color: "#304FFE" },
    { from: "GROWTH_2023", to: "GROWTH_2024", path: "M 170 200 L 170 300", color: "#304FFE" },
    { from: "GROWTH_2024", to: "GROWTH_2025", path: "M 170 300 L 170 400", color: "#D4FF3F" },
    { from: "GROWTH_2025", to: "GROWTH_2026", path: "M 170 400 L 170 500", color: "#10B981" },
    { from: "CERTIFICATIONS", to: "CERT_ORACLE", path: "M 380 210 L 330 210 L 330 100 L 270 100", color: "#304FFE" },
    { from: "CERTIFICATIONS", to: "CERT_ONEROADMAP", path: "M 380 210 L 330 210 L 330 170 L 270 170", color: "#304FFE" },
    { from: "CERTIFICATIONS", to: "CERT_DELOITTE", path: "M 380 210 L 330 210 L 330 240 L 270 240", color: "#304FFE" },
    { from: "LEADERSHIP", to: "LEAD_TECHNAVYA", path: "M 380 390 L 330 390 L 330 360 L 270 360", color: "#304FFE" },
    { from: "LEADERSHIP", to: "LEAD_DEVIATHON", path: "M 380 390 L 330 390 L 330 430 L 270 430", color: "#304FFE" }
  ];



  useEffect(() => {
    // Ensure light mode on initial load regardless of system preference
    document.documentElement.classList.remove("dark");
  }, []);

  useEffect(() => {
    // GSAP cursor tracking
    const cursor = cursorRef.current;
    if (cursor) {
      const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
      const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });

      const handleMouseMove = (e: MouseEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);
        setMousePos({ x: e.clientX, y: e.clientY });
        const offsetX = (e.clientX - window.innerWidth / 2) / 25;
        const offsetY = (e.clientY - window.innerHeight / 2) / 25;
        setHeroMouseOffset({ x: offsetX, y: offsetY });
      };
      
      const handleMouseDown = () => {
        gsap.to(cursor, { scale: 0.8, duration: 0.1 });
      };

      const handleMouseUp = () => {
        gsap.to(cursor, { scale: 1, duration: 0.1, ease: "elastic.out(1, 0.3)" });
        // Ripple effect
        const ripple = document.createElement("div");
        ripple.className = "fixed pointer-events-none rounded-full border border-lime-green bg-lime-green/20 z-[9998] translate-x-[-50%] translate-y-[-50%]";
        ripple.style.left = `${cursor.getBoundingClientRect().x + cursor.offsetWidth/2}px`;
        ripple.style.top = `${cursor.getBoundingClientRect().y + cursor.offsetHeight/2}px`;
        ripple.style.width = "40px";
        ripple.style.height = "40px";
        document.body.appendChild(ripple);
        
        gsap.to(ripple, {
          width: 150,
          height: 150,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => ripple.remove()
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, []);

  const handleMouseEnter = (text: string = "") => {
    setCursorHovered(true);
    setCursorText(text);
  };
  const handleMouseLeave = () => {
    setCursorHovered(false);
    setCursorText("");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const skills = [
    { name: "Full Stack Dev", level: "Senior", category: "Core" },
    { name: "React / Next.js", level: "Expert", category: "Frontend" },
    { name: "Node.js / Express", level: "Advanced", category: "Backend" },
    { name: "MongoDB / SQL", level: "Advanced", category: "Database" },
    { name: "Java / DSA", level: "Competent", category: "Systems" },
    { name: "UI / UX Design", level: "Expert", category: "Design" },
    { name: "AI Tools Integration", level: "Expert", category: "Workflows" },
    { name: "Open Source Contrib", level: "Active", category: "Community" },
  ];

  const projects = [
    {
      id: "01",
      title: "TeerthFlow",
      subtitle: "Deep Learning Crowd Management for Mass Gatherings",
      year: "2026",
      label: "AI_CROWD_SYSTEM",
      tags: ["Python", "TensorFlow", "React.js", "Node.js", "IoT", "Computer Vision"],
      desc: "CNN-based crowd density estimation trained on 10,000+ annotated images. Spatiotemporal LSTM forecasting predicts crowd surges 10â€“15 min ahead. Real-time heatmap dashboard via WebSocket at 24 FPS on edge hardware.",
      stats: { accuracy: "91%", fps: "24 FPS", latency: "EDGE", status: "ACTIVE" },
      url: "#",
      size: "large",
      accent: "rgba(212,255,63,0.15)",
      bgPattern: "crowd",
      image: "/projects/project-1.png",
    },
    {
      id: "02",
      title: "Smart Pothole Detection",
      subtitle: "Road Health Monitoring System",
      year: "2025",
      label: "SMART_ROAD_AI",
      tags: ["Python", "TensorFlow", "Keras", "React.js", "IoT", "Object Detection"],
      desc: "MobileNetV2 classifier on accelerometer + vibration sensor streams. 93% detection accuracy across 4 severity classes. GPS-tagged geospatial heatmap with sub-200ms REST API inference.",
      stats: { accuracy: "93%", fps: "REALTIME", latency: "<200ms", status: "STABLE" },
      url: "#",
      size: "wide",
      accent: "rgba(48,79,254,0.15)",
      bgPattern: "road",
      image: "/projects/project-2.png",
    },
    {
      id: "03",
      title: "FaceAffect",
      subtitle: "Real-Time Facial Emotion Recognition",
      year: "2025",
      label: "AFFECTIVE_AI",
      tags: ["Python", "PyTorch", "OpenCV", "Flask", "React.js", "Transformers"],
      desc: "Hybrid CNN-Transformer architecture across 7 emotion classes. ResNet-18 + multi-head self-attention. 87.4% validation accuracy. ONNX-quantized for 30 FPS CPU inference.",
      stats: { accuracy: "87.4%", fps: "30 FPS", latency: "CPU_OPT", status: "ACTIVE" },
      url: "#",
      size: "medium",
      accent: "rgba(212,255,63,0.12)",
      bgPattern: "face",
      image: "/projects/project-3.png",
    },
    {
      id: "04",
      title: "IssueTrack",
      subtitle: "Full-Stack Collaborative Issue Management",
      year: "2025",
      label: "DEVOPS_SYSTEM",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
      desc: "Production-grade issue tracking platform with multi-user environments. 15+ reusable React component modules via Context API. JWT auth with role-based access control for admin, developer, and viewer roles.",
      stats: { accuracy: "PROD", fps: "N/A", latency: "REST", status: "DEPLOYED" },
      url: "#",
      size: "medium",
      accent: "rgba(48,79,254,0.12)",
      bgPattern: "devops",
      image: "/projects/project-4.png",
    },
  ];

  const experience = [
    {
      date: "2022 â€” PRESENT",
      role: "Lead Interface Architect",
      company: "SPECTRA_CORE INDUSTRIES",
      desc: "Orchestrating design systems for underground freight logistics and remote robotic handling consoles.",
      icon: Code2,
    },
    {
      date: "2020 â€” 2022",
      role: "Senior Creative Developer",
      company: "VOID_ARCHIVE SYSTEMS",
      desc: "Developed generative artwork tools and custom web GL web experiences for high-end boutique brands.",
      icon: FolderGit2,
    },
    {
      date: "2018 â€” 2020",
      role: "Computational Arts Scholar",
      company: "CYBER_UI INSTITUTE",
      desc: "Researched human-computer interfaces and kinetic typography applications under grid constraints.",
      icon: Award,
    },
  ];

  return (
    <>
      <AnimatePresence>
        {!booted && <BootSequence onComplete={() => setBooted(true)} />}
      </AnimatePresence>
      <motion.div 
        className="min-h-screen flex flex-col bg-soft-white dark:bg-[#050508] text-charcoal dark:text-soft-white font-sans selection:bg-lime-green selection:text-charcoal dot-bg"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={booted ? { opacity: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 1.5, ease: "circOut" }}
      >

        {/* Custom Cursor */}
        <div
          ref={cursorRef}
          className={`hidden md:flex fixed pointer-events-none z-[9999] rounded-full border-2 mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-colors shadow-[0_0_10px_rgba(212,255,63,0.5)] ${
            cursorHovered ? "w-24 h-24 bg-lime-green/20 border-lime-green" : "w-6 h-6 border-lime-green"
          }`}
          style={{ left: 0, top: 0 }}
        >
          {cursorHovered && cursorText && (
            <div className="w-full h-full flex items-center justify-center text-[10px] font-bold font-mono tracking-tighter text-lime-green uppercase select-none text-center px-1">
              {cursorText}
            </div>
          )}
        </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-40 px-4 md:px-12 py-4 flex justify-between items-center border-b-2 border-charcoal dark:border-white/10 bg-soft-white/80 dark:bg-[#050508]/80 backdrop-blur-md">
        <div
          className="font-syne font-extrabold text-2xl tracking-tighter text-charcoal dark:text-soft-white cursor-pointer select-none hover:rotate-[1deg] transition-transform"
          onMouseEnter={() => handleMouseEnter("Go Home")}
          onMouseLeave={handleMouseLeave}
        >
          NITIN KUMAR
        </div>

        <nav className="hidden md:flex gap-8 items-center font-mono text-xs font-bold">
          <a href="#about" className="hover:text-electric-blue dark:hover:text-lime-green transition-colors">ACCESS_ABOUT</a>
          <a href="#skills" className="hover:text-electric-blue dark:hover:text-lime-green transition-colors">TECHNICAL_ARSENAL</a>
          <a href="#projects" className="hover:text-electric-blue dark:hover:text-lime-green transition-colors">SELECTED_WORKS</a>
          <a href="#contact" className="hover:text-electric-blue dark:hover:text-lime-green transition-colors">CONNECT</a>
        </nav>

        <div className="flex gap-4 items-center">
          <button
            onClick={toggleDarkMode}
            className="p-2 border-2 border-charcoal dark:border-white/20 hover:bg-charcoal hover:text-soft-white dark:hover:bg-soft-white dark:hover:text-charcoal transition-colors"
            onMouseEnter={() => handleMouseEnter("Toggle Theme")}
            onMouseLeave={handleMouseLeave}
          >
            {darkMode ? <Sun className="w-4 h-4 text-white" /> : <Moon className="w-4 h-4 text-charcoal" />}
          </button>
          <a
            href="mailto:nitin1019b@gmail.com?subject=Portfolio%20Inquiry"
            className="bg-electric-blue text-soft-white hover:bg-lime-green hover:text-charcoal font-bold px-6 py-3 border-2 border-charcoal dark:border-white/20 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] transition-all duration-200 text-xs tracking-wider"
            onMouseEnter={() => handleMouseEnter("Send Email")}
            onMouseLeave={handleMouseLeave}
          >
            HIRE_ME_NOW
          </a>
        </div>
      </header>

      <main className="flex-1 flex flex-col pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)", y: 40 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "circOut", delay: 1 }}
          className="w-full flex flex-col"
        >

          {/* HERO SECTION */}
          <section className="min-h-[85vh] flex flex-col items-center justify-center relative px-6 md:px-12 py-16 overflow-hidden">
            {/* Ghost background text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-5 select-none pointer-events-none">
              <h1 className="font-syne font-black text-[15rem] md:text-[25rem] leading-none text-charcoal dark:text-soft-white">PORTFOLIO</h1>
            </div>

            <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-12 relative z-10">

              {/* Hero Image — floating signboard */}
              <div
                className="w-full lg:w-3/5 flex justify-center items-center relative"
                style={{
                  transform: `translate3d(${heroMouseOffset.x}px, ${heroMouseOffset.y}px, 0)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                <div className="w-full floating-signboard border-2 border-charcoal dark:border-white/20 bg-soft-white dark:bg-zinc-950 p-4 brutalist-shadow-blue rotate-[-3deg] relative">
                  <div className="absolute top-2 left-3 flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 border border-charcoal dark:border-white/20"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-charcoal dark:border-white/20"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 border border-charcoal dark:border-white/20"></span>
                  </div>
                  <div className="border border-charcoal/20 dark:border-white/10 bg-light-gray dark:bg-black/30 p-2 text-[10px] font-mono text-center text-charcoal/40 dark:text-soft-white/40 uppercase mb-4 mt-2">
                    MODULE_VISUALIZER // TILT_ENABLED
                  </div>
                  <img
                    src="/portfolio.png"
                    alt="3D Signboard Concept"
                    className="w-full h-auto object-cover transition-all border-2 border-charcoal dark:border-white/20"
                  />
                </div>
              </div>

              {/* Hero Text */}
              <div className="w-full lg:w-2/5 flex flex-col items-start text-left">
                <div className="bg-lime-green text-charcoal px-4 py-1.5 font-mono text-xs font-bold border border-charcoal dark:border-white/20 rotate-[-2deg] mb-6">
                  CREATIVE_DEV // NITIN KUMAR
                </div>
                <h2 className="font-syne font-black text-5xl md:text-7xl leading-none text-charcoal dark:text-soft-white tracking-tighter uppercase mb-6">
                  CRAFTING <br />
                  DIGITAL <br />
                  MONOGRAPHS.
                </h2>
                <p className="font-sans text-lg text-charcoal/80 dark:text-soft-white/80 mb-8 max-w-md">
                  An interdisciplinary approach to web development, mixing high-end art direction with rigid technical architectures.
                </p>
                <div className="flex gap-4 items-center">
                  <a
                    href="#about"
                    className="w-12 h-12 rounded-full border-2 border-charcoal dark:border-white/20 flex items-center justify-center hover:bg-charcoal hover:text-soft-white dark:hover:bg-soft-white dark:hover:text-charcoal transition-all cursor-pointer font-bold text-lg"
                    onMouseEnter={() => handleMouseEnter("Learn More")}
                    onMouseLeave={handleMouseLeave}
                  >
                    ↓
                  </a>
                  <div className="font-mono text-[11px] uppercase tracking-wide text-charcoal/60 dark:text-soft-white/60 leading-tight">
                    <span>EXPLORE ARCHIVES</span><br />
                    <span className="text-electric-blue dark:text-lime-green font-bold">SCROLL DOWN TO UNVEIL</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* ABOUT SECTION */}
          <section id="about" className="py-24 px-6 md:px-12 border-t-2 border-charcoal dark:border-white/10 bg-soft-white dark:bg-[#050508]/20 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-syne font-extrabold uppercase tracking-tight text-5xl md:text-7xl mb-12 text-left">
                IDENTITY // STUDIO
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                {/* Manifesto Card */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <div className="bg-soft-white dark:bg-zinc-950 border-2 border-charcoal dark:border-white/20 shadow-[8px_8px_0px_0px_rgba(48,79,254,1)] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(212,255,63,1)] transition-all duration-300 p-8 relative overflow-hidden">
                    <span className="font-mono text-xs bg-charcoal text-lime-green px-2 py-1 absolute top-0 right-0 border-b border-l border-charcoal dark:border-white/20 uppercase font-bold">
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

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                    {[
                      { title: "COMMISSIONS", val: "Q3 AVAILABLE" },
                      { title: "LOCATION", val: "INDIA" },
                      { title: "ART DIRECTION", val: "POST-MINIMAL" },
                    ].map((stat, i) => (
                      <div key={i} className="border-2 border-charcoal dark:border-white/20 p-4 bg-soft-white dark:bg-zinc-950 font-mono">
                        <div className="text-[10px] text-charcoal/40 dark:text-soft-white/40 uppercase font-bold">{stat.title}</div>
                        <div className="text-xs text-charcoal dark:text-soft-white mt-1 font-bold">{stat.val}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ID Card */}
                <div className="lg:col-span-5 flex flex-col items-center pt-8">
                  <div className="lanyard-cable h-24 w-1 relative mb-[-4px]">
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-6 h-6 border-4 border-charcoal dark:border-white/20 rounded-full bg-soft-white dark:bg-zinc-950 z-10"></div>
                  </div>
                  <div
                    className="w-full max-w-sm border-2 border-charcoal dark:border-white/20 bg-soft-white dark:bg-zinc-950 p-6 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.05)] rotate-2 hover:rotate-0 transition-transform duration-300"
                    onMouseEnter={() => handleMouseEnter("Access Level: Granted")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex justify-between items-center mb-4 font-mono text-[10px]">
                      <span className="text-charcoal/50 dark:text-soft-white/50">SYS_ID: // CR-7890</span>
                      <span className="text-lime-green bg-charcoal px-2 py-0.5 border border-charcoal dark:border-white/20 font-bold uppercase">LEVEL 03</span>
                    </div>
                    <div className="w-full aspect-square bg-light-gray dark:bg-black/30 border-2 border-charcoal dark:border-white/20 overflow-hidden">
                      <img
                        src="/nitin.jpeg"
                        alt="Nitin Kumar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-4 font-mono text-left">
                      <div className="text-[10px] text-charcoal/40 dark:text-soft-white/40 uppercase">NAME //</div>
                      <div className="font-syne font-bold text-xl text-charcoal dark:text-soft-white uppercase leading-none">NITIN</div>
                      <div className="flex justify-between items-end mt-4 pt-4 border-t border-charcoal/10 dark:border-white/10">
                        <div>
                          <div className="text-[9px] text-charcoal/40 dark:text-soft-white/40 uppercase">CLASS //</div>
                          <div className="text-xs font-bold text-electric-blue dark:text-lime-green">INTERFACE ARCHITECT</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[9px] text-charcoal/40 dark:text-soft-white/40 uppercase">STATUS //</div>
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
          <section id="skills" className="py-24 px-6 md:px-12 border-t-2 border-charcoal bg-charcoal text-soft-white">
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
                    <div className="font-mono text-xs text-lime-green uppercase">MOD_0{index + 1} // {skill.category}</div>
                    <h4 className="font-syne font-bold text-2xl text-soft-white mt-2 uppercase">{skill.name}</h4>
                    <div className="mt-4 pt-4 border-t border-soft-white/10 flex justify-between font-mono text-[10px]">
                      <span>LEVEL: {skill.level}</span>
                      <span>STABLE_REBUILD</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects" className="py-24 px-6 md:px-12 bg-[#080808] border-t-2 border-charcoal relative overflow-hidden">

            {/* Deep blueprint grid */}
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: "linear-gradient(to right, rgba(212,255,63,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(212,255,63,0.04) 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }}/>
            {/* Radial fog center */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(48,79,254,0.06) 0%, transparent 70%)"
            }}/>
            {/* Scanline sweep */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-lime-green/20 to-transparent"
                style={{ animation: "scanline 8s linear infinite" }}/>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
              <div className="flex items-baseline justify-between mb-4 border-b-2 border-soft-white/10 pb-4">
                <div>
                  <span className="font-mono text-[10px] text-lime-green uppercase tracking-widest block mb-2">// AI_SYSTEMS_ARCHIVE_2025â€“2026</span>
                  <h2 className="font-syne font-black text-4xl md:text-6xl text-soft-white uppercase leading-none">
                    SELECTED_WORKS.
                  </h2>
                </div>
                <div className="text-right hidden md:block">
                  <span className="font-mono text-[10px] text-soft-white/30 block">PROJECTS: 04</span>
                  <span className="font-mono text-[10px] text-lime-green">STATUS: ACTIVE</span>
                </div>
              </div>

              {/* Scrolling marquee */}
              <div className="overflow-hidden border-y border-soft-white/10 py-2 mb-10">
                <div className="flex gap-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
                  {["DEEP_LEARNING", "COMPUTER_VISION", "IoT_SYSTEMS", "NEURAL_NETWORKS", "REAL_TIME_AI", "EDGE_INFERENCE", "CROWD_ANALYTICS", "GEOSPATIAL_AI", "EMOTION_RECOGNITION", "FULL_STACK_ENGINEERING"].map((t, i) => (
                    <span key={i} className="font-mono text-[10px] text-soft-white/30 uppercase tracking-widest flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-lime-green inline-block"></span>{t}
                    </span>
                  ))}
                  {["DEEP_LEARNING", "COMPUTER_VISION", "IoT_SYSTEMS", "NEURAL_NETWORKS", "REAL_TIME_AI", "EDGE_INFERENCE", "CROWD_ANALYTICS", "GEOSPATIAL_AI", "EMOTION_RECOGNITION", "FULL_STACK_ENGINEERING"].map((t, i) => (
                    <span key={`b${i}`} className="font-mono text-[10px] text-soft-white/30 uppercase tracking-widest flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-lime-green inline-block"></span>{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[340px]">
                {projects.map((proj) => {
                  let gridSpan = "md:col-span-6 md:row-span-1";
                  if (proj.size === "large") gridSpan = "md:col-span-8 md:row-span-2";
                  if (proj.size === "wide") gridSpan = "md:col-span-12 md:row-span-1";

                  // SVG background patterns per project type
                  const bgPatterns: Record<string, React.ReactNode> = {
                    crowd: (
                      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
                        <defs>
                          <radialGradient id={`hm1-${proj.id}`} cx="30%" cy="40%"><stop offset="0%" stopColor="#D4FF3F" stopOpacity="0.8"/><stop offset="100%" stopColor="#D4FF3F" stopOpacity="0"/></radialGradient>
                          <radialGradient id={`hm2-${proj.id}`} cx="70%" cy="60%"><stop offset="0%" stopColor="#304FFE" stopOpacity="0.6"/><stop offset="100%" stopColor="#304FFE" stopOpacity="0"/></radialGradient>
                          <radialGradient id={`hm3-${proj.id}`} cx="50%" cy="30%"><stop offset="0%" stopColor="#FF4444" stopOpacity="0.5"/><stop offset="100%" stopColor="#FF4444" stopOpacity="0"/></radialGradient>
                        </defs>
                        <rect width="400" height="400" fill={`url(#hm1-${proj.id})`}/>
                        <rect width="400" height="400" fill={`url(#hm2-${proj.id})`}/>
                        <rect width="400" height="400" fill={`url(#hm3-${proj.id})`}/>
                        {[...Array(12)].map((_, i) => (
                          <circle key={i} cx={30 + (i % 4) * 110} cy={40 + Math.floor(i / 4) * 120} r={3 + (i % 3) * 2} fill="#D4FF3F" opacity={0.4 + (i % 3) * 0.2}/>
                        ))}
                        {[...Array(8)].map((_, i) => (
                          <line key={i} x1={30 + (i % 4) * 110} y1={40 + Math.floor(i / 4) * 120} x2={30 + ((i + 1) % 4) * 110} y2={40 + Math.floor((i + 1) / 4) * 120} stroke="#D4FF3F" strokeWidth="0.5" opacity="0.3"/>
                        ))}
                      </svg>
                    ),
                    road: (
                      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 200" preserveAspectRatio="xMidYMid slice">
                        <defs>
                          <radialGradient id={`rd1-${proj.id}`} cx="20%" cy="50%"><stop offset="0%" stopColor="#FF6B00" stopOpacity="0.7"/><stop offset="100%" stopColor="#FF6B00" stopOpacity="0"/></radialGradient>
                          <radialGradient id={`rd2-${proj.id}`} cx="55%" cy="50%"><stop offset="0%" stopColor="#304FFE" stopOpacity="0.5"/><stop offset="100%" stopColor="#304FFE" stopOpacity="0"/></radialGradient>
                          <radialGradient id={`rd3-${proj.id}`} cx="80%" cy="50%"><stop offset="0%" stopColor="#D4FF3F" stopOpacity="0.6"/><stop offset="100%" stopColor="#D4FF3F" stopOpacity="0"/></radialGradient>
                        </defs>
                        <rect width="800" height="200" fill={`url(#rd1-${proj.id})`}/>
                        <rect width="800" height="200" fill={`url(#rd2-${proj.id})`}/>
                        <rect width="800" height="200" fill={`url(#rd3-${proj.id})`}/>
                        {[...Array(20)].map((_, i) => (
                          <rect key={i} x={i * 42} y={85 + (i % 3) * 10} width="8" height="8" fill={i % 3 === 0 ? "#FF6B00" : i % 3 === 1 ? "#304FFE" : "#D4FF3F"} opacity="0.6" rx="1"/>
                        ))}
                        <line x1="0" y1="100" x2="800" y2="100" stroke="#D4FF3F" strokeWidth="0.5" strokeDasharray="20 10" opacity="0.4"/>
                      </svg>
                    ),
                    face: (
                      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice">
                        <circle cx="150" cy="150" r="100" fill="none" stroke="#D4FF3F" strokeWidth="0.5" opacity="0.5"/>
                        <circle cx="150" cy="150" r="70" fill="none" stroke="#304FFE" strokeWidth="0.5" opacity="0.4"/>
                        <circle cx="150" cy="150" r="40" fill="none" stroke="#D4FF3F" strokeWidth="0.5" opacity="0.3"/>
                        {[...Array(8)].map((_, i) => {
                          const angle = (i / 8) * Math.PI * 2;
                          return <line key={i} x1={150 + Math.cos(angle) * 40} y1={150 + Math.sin(angle) * 40} x2={150 + Math.cos(angle) * 100} y2={150 + Math.sin(angle) * 100} stroke="#D4FF3F" strokeWidth="0.5" opacity="0.3"/>;
                        })}
                        <circle cx="120" cy="130" r="8" fill="none" stroke="#304FFE" strokeWidth="1" opacity="0.6"/>
                        <circle cx="180" cy="130" r="8" fill="none" stroke="#304FFE" strokeWidth="1" opacity="0.6"/>
                        <path d="M 125 175 Q 150 195 175 175" fill="none" stroke="#D4FF3F" strokeWidth="1" opacity="0.5"/>
                      </svg>
                    ),
                    devops: (
                      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice">
                        {[...Array(6)].map((_, i) => (
                          <rect key={i} x={20 + (i % 3) * 95} y={20 + Math.floor(i / 3) * 130} width="75" height="100" fill="none" stroke="#304FFE" strokeWidth="0.5" opacity="0.5" rx="2"/>
                        ))}
                        {[...Array(6)].map((_, i) => (
                          <line key={i} x1={57 + (i % 3) * 95} y1={120 + Math.floor(i / 3) * 130} x2={57 + ((i + 1) % 3) * 95} y2={120 + Math.floor((i + 1) / 3) * 130} stroke="#D4FF3F" strokeWidth="0.5" opacity="0.3"/>
                        ))}
                        {[...Array(3)].map((_, i) => (
                          <circle key={i} cx={57 + i * 95} cy={20} r="4" fill="#D4FF3F" opacity="0.5"/>
                        ))}
                      </svg>
                    ),
                  };

                  return (
                    <div
                      key={proj.id}
                      className={`${gridSpan} group relative overflow-hidden border border-soft-white/10 bg-zinc-950 cursor-pointer
                        hover:border-lime-green transition-all duration-500 flex flex-col md:flex-row`}
                      style={{ boxShadow: `0 0 0 0 ${proj.accent}` }}
                      onMouseEnter={() => handleMouseEnter(proj.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* IMAGE AREA */}
                      <div className={`relative w-full shrink-0 h-64 md:h-full overflow-hidden ${
                        proj.size === "large" ? "md:w-[60%]" : "md:w-[70%]"
                      }`}>
                        {/* Blueprint grid texture */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                          style={{
                            backgroundImage: "linear-gradient(to right, #D4FF3F 1px, transparent 1px), linear-gradient(to bottom, #D4FF3F 1px, transparent 1px)",
                            backgroundSize: "20px 20px"
                          }}
                        />

                        {/* SVG pattern or Image background */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          {proj.image ? (
                            <img 
                              src={proj.image} 
                              alt={proj.title} 
                              className="w-full h-full object-cover opacity-50 group-hover:opacity-90 transition-all duration-700 ease-out scale-105 group-hover:scale-100 mix-blend-luminosity group-hover:mix-blend-normal" 
                            />
                          ) : (
                            bgPatterns[proj.bgPattern]
                          )}
                        </div>

                        {/* Scanline overlay */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                          style={{
                            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212,255,63,0.5) 2px, rgba(212,255,63,0.5) 3px)",
                          }}
                        />

                        {/* Image Protection Layer (Fix 04) */}
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                        {/* Top bar — system header */}
                        <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-4 py-3 border-b border-soft-white/10 bg-black/40 backdrop-blur-md">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-lime-green animate-pulse"></span>
                            <span className="font-mono text-[9px] text-lime-green uppercase tracking-widest">{proj.label}</span>
                          </div>
                          <div className="flex items-center gap-3 font-mono text-[9px] text-soft-white/30">
                            <span>SYS_{proj.id}</span>
                            <span className="text-lime-green">{proj.year}</span>
                          </div>
                        </div>

                        {/* Corner index */}
                        <div className="absolute bottom-4 left-4 z-20 font-mono text-[60px] md:text-[80px] font-black text-soft-white/5 group-hover:text-soft-white/10 transition-colors leading-none select-none">
                          {proj.id}
                        </div>
                      </div>

                      {/* INFORMATION PANEL (Fix 01 & Fix 02) */}
                      <div className={`relative w-full shrink-0 flex flex-col p-6 md:p-8 z-20 bg-zinc-950 border-t md:border-t-0 md:border-l border-soft-white/10 ${
                        proj.size === "large" ? "md:w-[40%]" : "md:w-[30%]"
                      }`}>
                        
                        {/* Accent glow on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                          style={{ background: `radial-gradient(circle at center, ${proj.accent}, transparent 100%)` }}
                        />

                        {/* Always visible title block */}
                        <div className="relative z-10 mb-4 shrink-0">
                          <h3 className="font-syne font-black text-2xl md:text-3xl text-soft-white uppercase tracking-tighter leading-none mb-2 group-hover:text-lime-green transition-colors duration-300">
                            {proj.title}
                          </h3>
                          <p className="font-mono text-[10px] text-soft-white/50 uppercase tracking-wider">{proj.subtitle}</p>
                        </div>

                        {/* Hover Reveal Panel (Fix 07) */}
                        <div className="relative z-10 flex flex-col flex-1 justify-end transition-all duration-500 ease-out md:transform md:translate-y-8 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                          
                          {/* Tech Stack (Tags) Fix 08 */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {proj.tags.map((tag, i) => {
                              const isDesktopVisible = i < 4;
                              const isMobileVisible = i < 2;
                              return (
                                <span key={i} className={`font-mono text-[8px] border border-soft-white/15 text-soft-white/70 px-2 py-0.5 uppercase ${
                                  !isDesktopVisible ? "hidden" : "hidden md:inline-block"
                                } ${
                                  isMobileVisible ? "inline-block" : ""
                                }`}>
                                  {tag}
                                </span>
                              )
                            })}
                            {proj.tags.length > 4 && (
                              <span className="font-mono text-[8px] border border-soft-white/15 bg-white/5 text-soft-white/90 px-2 py-0.5 uppercase hidden md:inline-block">
                                +{proj.tags.length - 4} MORE
                              </span>
                            )}
                            {proj.tags.length > 2 && (
                              <span className="font-mono text-[8px] border border-soft-white/15 bg-white/5 text-soft-white/90 px-2 py-0.5 uppercase md:hidden inline-block">
                                +{proj.tags.length - 2} MORE
                              </span>
                            )}
                          </div>

                          {/* Short Description (Fix 03) */}
                          <p className="font-sans text-xs text-soft-white/70 leading-relaxed mb-6 line-clamp-2 md:line-clamp-3">
                            {proj.desc}
                          </p>

                          {/* Action Area */}
                          <div className="mt-auto pt-4 border-t border-soft-white/10 flex justify-between items-center shrink-0">
                            <div className="flex gap-2">
                               <span className={`font-mono text-[8px] uppercase px-2 py-1 border ${
                                 proj.stats.status === "ACTIVE" ? "border-lime-green/30 text-lime-green bg-lime-green/5" :
                                 proj.stats.status === "DEPLOYED" ? "border-electric-blue/30 text-electric-blue bg-electric-blue/5" :
                                 "border-soft-white/20 text-soft-white/50 bg-white/5"
                               }`}>
                                 ● {proj.stats.status}
                               </span>
                            </div>
                            <a
                              href={proj.url}
                              className="inline-flex items-center gap-2 font-mono text-[10px] font-bold text-zinc-950 bg-lime-green px-4 py-2 hover:bg-white transition-all duration-200 uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.4)]"
                            >
                              OPEN_CASE_FILE <ArrowUpRight className="w-3 h-3" />
                            </a>
                          </div>

                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          </section>


          {/* SYSTEM_EVOLUTION: MISSION PROGRESSION MAP */}
          <section id="experience" className="relative py-24 px-6 md:px-12 overflow-hidden" style={{ background: "#050508" }}>
            {/* Design Grid & Highlights */}
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(212,255,63,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(212,255,63,0.02) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%,rgba(48,79,254,0.07) 0%,transparent 65%)" }} />
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="w-full h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(212,255,63,0.2),transparent)", animation: "scanline 12s linear infinite" }} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              {/* Header */}
              <div className="mb-12 pb-5 border-b border-white/5">
                <p className="font-mono text-[10px] text-lime-green/60 uppercase tracking-[0.3em] mb-2">// SYSTEM_EVOLUTION</p>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <h2 className="font-syne font-black text-4xl md:text-6xl text-white uppercase leading-none">MISSION PROGRESSION MAP.</h2>
                  <div className="flex flex-col items-start md:items-end gap-1">
                    <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">CAREER_OPERATING_SYSTEM // SECURE_UPLINK</span>
                    <span className="font-mono text-[9px] text-lime-green flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-green inline-block" style={{ animation: "pulse 2s infinite" }} />
                      COMMAND_CENTER_ONLINE · 26 ACTIVE_NODES
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Content Dashboard */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Left/Center Column (8 cols): Interactive Network Viewport */}
                <div className="lg:col-span-8 border border-white/10 bg-black/40 backdrop-blur-md p-4 relative flex flex-col justify-between overflow-hidden group/console shadow-[0_0_20px_rgba(48,79,254,0.1)]">
                  {/* Console Header Bar */}
                  <div className="flex justify-between items-center pb-3 border-b border-white/5 font-mono text-[9px] text-white/40 mb-4 select-none">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                      <span>CONSOLE_STATUS // OPERATIONAL</span>
                    </div>
                    <div className="flex gap-4">
                      <span>ZOOM: {Math.round(zoomScale * 100)}%</span>
                      <span className="hidden sm:inline">REFRESH_RATE: 60HZ</span>
                    </div>
                  </div>

                  {/* SVG Map Container (scrollable on mobile) */}
                  <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-thin border border-white/5 bg-zinc-950/70 relative py-6">
                    {/* Floating Instruction overlay */}
                    <div className="absolute top-2 left-2 z-20 font-mono text-[8px] text-white/30 uppercase pointer-events-none">
                      [ PAN_OR_ZOOM_TO_INSPECT_SYSTEM ]
                    </div>
                    
                    <svg 
                      viewBox="0 0 1000 600" 
                      className="min-w-[1000px] w-full h-[600px] transition-transform duration-300"
                    >
                      <g style={{ transform: `scale(${zoomScale})`, transformOrigin: '500px 300px', transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)' }}>
                        {/* 1. Grid overlay */}
                        {gridVisible && (
                          <g stroke="rgba(255, 255, 255, 0.015)" strokeWidth="0.5">
                            {Array.from({ length: 21 }).map((_, i) => (
                              <line key={`v-${i}`} x1={i * 50} y1={0} x2={i * 50} y2={600} />
                            ))}
                            {Array.from({ length: 13 }).map((_, i) => (
                              <line key={`h-${i}`} x1={0} y1={i * 50} x2={1000} y2={i * 50} />
                            ))}
                          </g>
                        )}

                        {/* 2. Radar sweep */}
                        {radarActive && (
                          <g className="pointer-events-none opacity-25">
                            <circle cx="500" cy="300" r="120" fill="none" stroke="rgba(212,255,63,0.03)" strokeWidth="1" strokeDasharray="5 3" />
                            <circle cx="500" cy="300" r="240" fill="none" stroke="rgba(48,79,254,0.02)" strokeWidth="1" />
                            <circle cx="500" cy="300" r="320" fill="none" stroke="rgba(212,255,63,0.01)" strokeWidth="0.5" />
                            {/* Scanning Sweeper line */}
                            <line 
                              x1="500" 
                              y1="300" 
                              x2="780" 
                              y2="300" 
                              stroke="var(--color-lime-green)" 
                              strokeWidth="1" 
                              className="origin-[500px_300px] animate-[spin_12s_linear_infinite] opacity-30" 
                            />
                          </g>
                        )}

                        {/* 3. Render connection paths */}
                        {systemConnections.map((conn, idx) => {
                          const pNode = systemNodes[conn.from as keyof typeof systemNodes];
                          const cNode = systemNodes[conn.to as keyof typeof systemNodes];
                          if (!pNode || !cNode) return null;

                          const isHovered = hoveredNodeId === conn.to || hoveredNodeId === conn.from;
                          const isActive = activeNodeId === conn.to || activeNodeId === conn.from ||
                                           (systemNodes[activeNodeId as keyof typeof systemNodes]?.parent === conn.to && conn.from === "NITIN_KUMAR") ||
                                           (systemNodes[activeNodeId as keyof typeof systemNodes]?.parent === conn.from && conn.to === activeNodeId);

                          return (
                            <g key={idx}>
                              {/* Background connection path */}
                              <path
                                d={conn.path}
                                fill="none"
                                stroke={isActive || isHovered ? conn.color : "rgba(255,255,255,0.06)"}
                                strokeWidth={isActive || isHovered ? 2.5 : 1}
                                className="transition-all duration-300"
                              />
                              {/* Pulse Flow effect */}
                              {(isActive || isHovered) && (
                                <path
                                  d={conn.path}
                                  fill="none"
                                  stroke={conn.color}
                                  strokeWidth={3.5}
                                  strokeDasharray="12 18"
                                  className="animate-[data-flow_3.5s_linear_infinite] opacity-75 filter drop-shadow-[0_0_5px_currentColor]"
                                />
                              )}
                            </g>
                          );
                        })}

                        {/* 4. Render Nodes */}
                        {Object.values(systemNodes).map((node) => {
                          const isHovered = hoveredNodeId === node.id;
                          const isActive = activeNodeId === node.id;
                          
                          // Determine color scheme based on node type
                          let nodeColor = "#304FFE"; // default electric blue
                          if (node.type === "center" || node.parent === "EDUCATION" || node.parent === "OPEN_SOURCE" || node.id === "EDUCATION" || node.id === "OPEN_SOURCE") {
                            nodeColor = "#D4FF3F"; // lime green
                          } else if (node.id === "AMROHA_POLICE") {
                            nodeColor = "#EF4444"; // red for police/cybersec
                          } else if (node.id === "SIH_WINNER") {
                            nodeColor = "#FBBF24"; // amber for hackathon winner
                          } else if (node.type === "growth" && node.id === "GROWTH_2026") {
                            nodeColor = "#10B981"; // emerald for 2026 growth
                          }

                          // Get Hexagon coordinates for category nodes
                          const getHexPoints = (cx: number, cy: number, r: number) => {
                            const pts = [];
                            for (let i = 0; i < 6; i++) {
                              const angle = (i * Math.PI) / 3;
                              pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
                            }
                            return pts.join(" ");
                          };

                          return (
                            <g 
                              key={node.id}
                              className="cursor-pointer"
                              onMouseEnter={() => {
                                setHoveredNodeId(node.id);
                                handleMouseEnter(`ACCESS // ${node.label}`);
                              }}
                              onMouseLeave={() => {
                                setHoveredNodeId(null);
                                handleMouseLeave();
                              }}
                              onClick={() => setActiveNodeId(node.id)}
                            >
                              {/* Pulsing indicator ring */}
                              {(isActive || isHovered) && (
                                <circle
                                  cx={node.x}
                                  cy={node.y}
                                  r={node.type === "center" ? 48 : node.type === "category" ? 28 : 20}
                                  stroke={nodeColor}
                                  strokeWidth="1"
                                  strokeDasharray="4 2"
                                  fill="none"
                                  className="animate-[spin_15s_linear_infinite] opacity-60"
                                />
                              )}

                              {/* Node shape */}
                              {node.type === "center" ? (
                                <g>
                                  {/* Multi-layered futuristic core */}
                                  <circle cx={node.x} cy={node.y} r={32} fill="#050508" stroke={nodeColor} strokeWidth="3" className="filter drop-shadow-[0_0_8px_rgba(212,255,63,0.3)]" />
                                  <circle cx={node.x} cy={node.y} r={24} fill="rgba(212,255,63,0.08)" stroke={nodeColor} strokeWidth="1.5" strokeDasharray="3 3" className="animate-[spin_10s_linear_infinite]" />
                                  <circle cx={node.x} cy={node.y} r={8} fill={nodeColor} className="animate-pulse" />
                                  {/* Decorative brackets */}
                                  <path d={`M ${node.x - 42} ${node.y - 12} L ${node.x - 42} ${node.y - 20} L ${node.x - 34} ${node.y - 20}`} stroke={nodeColor} strokeWidth="1.5" fill="none" />
                                  <path d={`M ${node.x + 42} ${node.y - 12} L ${node.x + 42} ${node.y - 20} L ${node.x + 34} ${node.y - 20}`} stroke={nodeColor} strokeWidth="1.5" fill="none" />
                                  <path d={`M ${node.x - 42} ${node.y + 12} L ${node.x - 42} ${node.y + 20} L ${node.x - 34} ${node.y + 20}`} stroke={nodeColor} strokeWidth="1.5" fill="none" />
                                  <path d={`M ${node.x + 42} ${node.y + 12} L ${node.x + 42} ${node.y + 20} L ${node.x + 34} ${node.y + 20}`} stroke={nodeColor} strokeWidth="1.5" fill="none" />
                                </g>
                              ) : node.type === "category" ? (
                                <polygon
                                  points={getHexPoints(node.x, node.y, 20)}
                                  fill="#050508"
                                  stroke={nodeColor}
                                  strokeWidth="2"
                                  className="transition-transform duration-200"
                                  style={{ transformOrigin: `${node.x}px ${node.y}px`, transform: isHovered || isActive ? 'scale(1.15)' : 'scale(1)' }}
                                />
                              ) : (
                                <circle
                                  cx={node.x}
                                  cy={node.y}
                                  r={isActive || isHovered ? 14 : 10}
                                  fill="#050508"
                                  stroke={nodeColor}
                                  strokeWidth="2"
                                  className="transition-all duration-200"
                                />
                              )}

                              {/* Tiny status LED indicator on leaf nodes */}
                              {node.type === "leaf" && (
                                <circle
                                  cx={node.x + 8}
                                  cy={node.y - 8}
                                  r={3}
                                  fill={node.status === "ACTIVE" || node.status === "ONGOING" ? "#D4FF3F" : node.status === "ACCEPTED" ? "#304FFE" : node.status === "DEPLOYED" ? "#10B981" : "#FBBF24"}
                                  className="animate-pulse"
                                />
                              )}

                              {/* Node Label Text */}
                              <text
                                x={node.x}
                                y={node.type === "center" ? node.y + 55 : node.y + 32}
                                textAnchor="middle"
                                className={`font-mono text-[9px] font-bold select-none transition-colors duration-200 ${
                                  isActive ? 'fill-lime-green' : isHovered ? 'fill-white' : 'fill-white/40'
                                }`}
                              >
                                {node.type === "growth" ? node.subtitle.split(" ")[0] : node.label}
                              </text>
                            </g>
                          );
                        })}
                      </g>
                    </svg>
                  </div>

                  {/* Viewport Control Bar */}
                  <div className="flex flex-wrap justify-between items-center pt-4 border-t border-white/5 gap-3">
                    <div className="flex gap-1.5 font-mono text-[8px]">
                      <button 
                        onClick={() => setZoomScale(prev => Math.min(prev + 0.1, 1.4))}
                        className="px-2 py-1 border border-white/15 bg-white/5 hover:border-lime-green hover:bg-lime-green/10 text-white hover:text-lime-green transition-all"
                      >
                        [ ZOOM + ]
                      </button>
                      <button 
                        onClick={() => setZoomScale(prev => Math.max(prev - 0.1, 0.6))}
                        className="px-2 py-1 border border-white/15 bg-white/5 hover:border-lime-green hover:bg-lime-green/10 text-white hover:text-lime-green transition-all"
                      >
                        [ ZOOM - ]
                      </button>
                      <button 
                        onClick={() => setZoomScale(1.0)}
                        className="px-2 py-1 border border-white/15 bg-white/5 hover:border-lime-green hover:bg-lime-green/10 text-white hover:text-lime-green transition-all"
                      >
                        [ RESET ]
                      </button>
                    </div>

                    <div className="flex gap-2 font-mono text-[8px] text-white/50">
                      <button 
                        onClick={() => setGridVisible(!gridVisible)}
                        className={`px-3 py-1 border transition-all ${gridVisible ? 'border-lime-green/40 text-lime-green bg-lime-green/5' : 'border-white/10 hover:border-white/30'}`}
                      >
                        GRID: {gridVisible ? "ON" : "OFF"}
                      </button>
                      <button 
                        onClick={() => setRadarActive(!radarActive)}
                        className={`px-3 py-1 border transition-all ${radarActive ? 'border-lime-green/40 text-lime-green bg-lime-green/5' : 'border-white/10 hover:border-white/30'}`}
                      >
                        RADAR: {radarActive ? "ON" : "OFF"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column (4 cols): SYS_LOG_DECODER // HUD Panel */}
                <div className="lg:col-span-4 border border-white/10 bg-zinc-950/60 p-5 flex flex-col justify-between relative shadow-[0_0_20px_rgba(212,255,63,0.03)] min-h-[500px]">
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.5) 2px,rgba(255,255,255,0.5) 3px)" }} />
                  
                  <div className="flex flex-col gap-6">
                    {/* HUD Header */}
                    <div className="flex justify-between items-center pb-3 border-b border-white/10">
                      <div className="font-mono text-[10px] text-lime-green uppercase tracking-wider font-bold">
                        SYS_LOG_DECODER // HUD
                      </div>
                      <span className="w-2 h-2 rounded-full bg-lime-green animate-pulse"></span>
                    </div>

                    {/* Animated Content Panel */}
                    <motion.div
                      key={activeNodeId}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-mono text-left"
                    >
                      {/* Node Heading */}
                      <span className="text-[8px] text-white/30 block mb-1">NODE_ID: {activeNodeId}</span>
                      <h3 className="font-syne font-black text-xl text-white uppercase tracking-tight leading-none mb-1">
                        {systemNodes[activeNodeId as keyof typeof systemNodes]?.title}
                      </h3>
                      <span className="text-[10px] text-lime-green block mb-4">
                        {systemNodes[activeNodeId as keyof typeof systemNodes]?.subtitle}
                      </span>

                      {/* Decoded content body */}
                      <div className="space-y-4 text-xs text-white/70 leading-relaxed font-sans">
                        
                        {/* Dynamic Metadata Panel */}
                        <div className="space-y-2 border-t border-white/5 pt-3">
                          {systemNodes[activeNodeId as keyof typeof systemNodes]?.organization && (
                            <div className="flex justify-between items-start text-[10px] font-mono border-b border-white/5 pb-1.5 gap-4">
                              <span className="text-white/40 uppercase shrink-0">ORGANIZATION //</span>
                              <span className="text-white font-bold text-right">{systemNodes[activeNodeId as keyof typeof systemNodes]?.organization}</span>
                            </div>
                          )}
                          {systemNodes[activeNodeId as keyof typeof systemNodes]?.duration && (
                            <div className="flex justify-between items-center text-[10px] font-mono border-b border-white/5 pb-1.5">
                              <span className="text-white/40 uppercase">DURATION //</span>
                              <span className="text-white font-bold">{systemNodes[activeNodeId as keyof typeof systemNodes]?.duration}</span>
                            </div>
                          )}
                          {systemNodes[activeNodeId as keyof typeof systemNodes]?.status && (
                            <div className="flex justify-between items-center text-[10px] font-mono border-b border-white/5 pb-1.5">
                              <span className="text-white/40 uppercase">STATUS //</span>
                              <span className={`font-bold ${
                                ["ACTIVE", "ONGOING", "WINNER", "DEPLOYED", "CERTIFIED"].includes(systemNodes[activeNodeId as keyof typeof systemNodes]?.status || "") 
                                  ? "text-lime-green" 
                                  : "text-blue-400"
                              }`}>{systemNodes[activeNodeId as keyof typeof systemNodes]?.status}</span>
                            </div>
                          )}
                        </div>

                        <p className="text-white/90 leading-relaxed">{systemNodes[activeNodeId as keyof typeof systemNodes]?.description}</p>

                        {/* Key Skills widget */}
                        {systemNodes[activeNodeId as keyof typeof systemNodes]?.skills && (systemNodes[activeNodeId as keyof typeof systemNodes]?.skills?.length ?? 0) > 0 && (
                          <div className="pt-2">
                            <div className="text-[9px] font-mono text-white/40 uppercase mb-1.5">KEY_SKILLS //</div>
                            <div className="flex flex-wrap gap-1">
                              {systemNodes[activeNodeId as keyof typeof systemNodes]?.skills?.map((skill, idx) => (
                                <span key={idx} className="text-[8px] font-mono border border-lime-green/20 text-lime-green/80 px-2 py-0.5 uppercase bg-lime-green/5">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Relevant Technologies widget */}
                        {systemNodes[activeNodeId as keyof typeof systemNodes]?.technologies && (systemNodes[activeNodeId as keyof typeof systemNodes]?.technologies?.length ?? 0) > 0 && (
                          <div className="pt-2">
                            <div className="text-[9px] font-mono text-white/40 uppercase mb-1.5 font-bold">RELEVANT_TECHNOLOGIES //</div>
                            <div className="flex flex-wrap gap-1">
                              {systemNodes[activeNodeId as keyof typeof systemNodes]?.technologies?.map((tech, idx) => (
                                <span key={idx} className="text-[8px] font-mono border border-blue-500/20 text-blue-400/80 px-2 py-0.5 uppercase bg-blue-500/5">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Custom Widgets depending on selected node */}
                        {activeNodeId === "GLA_UNIVERSITY" && (
                          <div className="mt-4 border-t border-white/5 pt-4 space-y-3 font-mono">
                            <div className="flex justify-between text-[9px] text-white/40">
                              <span>ACADEMIC_INTEGRITY:</span>
                              <span className="text-lime-green font-bold">CGPA: {systemNodes.GLA_UNIVERSITY.details?.gpa} / 10</span>
                            </div>
                            <div className="w-full bg-white/5 h-1.5 overflow-hidden">
                              <div className="h-full bg-lime-green" style={{ width: "85.1%" }} />
                            </div>
                            
                            <div className="text-[9px] text-white/40 pt-2 pb-1 border-b border-white/5 uppercase">SEMESTER_STATE_ARRAY //</div>
                            <div className="grid grid-cols-2 gap-2 text-[9px]">
                              {systemNodes.GLA_UNIVERSITY.details?.semesters?.map((sem, idx) => (
                                <div key={idx} className="flex justify-between items-center p-1.5 border border-white/5 bg-black/20">
                                  <span className="text-white/40">{sem.name}</span>
                                  <span className={`font-bold ${
                                    sem.status === "COMPLETE" ? "text-lime-green" :
                                    sem.status === "ACTIVE" ? "text-blue-400" : "text-white/20"
                                  }`}>
                                    {sem.status === "COMPLETE" ? `OK (${sem.gpa})` : sem.status}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeNodeId === "AMROHA_POLICE" && (
                          <div className="mt-4 border-t border-white/5 pt-4 space-y-3 font-mono">
                            <div className="bg-red-950/20 border border-red-500/30 p-3 rounded-sm">
                              <div className="flex items-center gap-2 text-[10px] text-red-400 font-bold mb-1.5">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                                <span>THREAT_ASSESSMENT_MONITOR</span>
                              </div>
                              <p className="text-[9px] text-white/60 leading-normal font-sans">Assisted law enforcement on network log audits, cybersecurity postures, and proactive diagnostics.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-1.5 text-[9px]">
                              <div className="border border-white/5 p-2 bg-black/40">
                                <div className="text-white/30">CLEARANCE:</div>
                                <div className="text-red-400 font-bold">LEVEL_03</div>
                              </div>
                              <div className="border border-white/5 p-2 bg-black/40">
                                <div className="text-white/30">INTEGRITY:</div>
                                <div className="text-green-400 font-bold">SECURED</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {activeNodeId === "SERVICENOW_VIRTUAL" && (
                          <div className="mt-4 border-t border-white/5 pt-4 space-y-3 font-mono">
                            <div className="bg-blue-950/20 border border-blue-500/30 p-3 rounded-sm">
                              <div className="flex items-center gap-2 text-[10px] text-blue-400 font-bold mb-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                                <span>SERVICENOW_PLATFORM_LOG</span>
                              </div>
                              <p className="text-[9px] text-white/60 leading-normal font-sans">Configured workflow execution modules, automated verification cases, and analytics dashboards.</p>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {["FLOW_DESIGNER", "ATF", "ADMINISTRATION", "DASHBOARD_CONFIG"].map((kw, i) => (
                                <span key={i} className="text-[8px] border border-blue-500/25 text-blue-400/70 px-2 py-0.5 uppercase bg-blue-500/5">{kw}</span>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeNodeId === "GSSOC" && (
                          <div className="mt-4 border-t border-white/5 pt-4 space-y-3 font-mono">
                            <div className="flex justify-between text-[9px] text-white/40 uppercase">
                              <span>COMMIT_LOG_CONTRIBUTION_GRID //</span>
                              <span className="text-lime-green">84 COMMITS</span>
                            </div>
                            
                            {/* Simulated GitHub grid */}
                            <div className="grid grid-cols-12 gap-0.5 p-1 border border-white/5 bg-black/50">
                              {Array.from({ length: 48 }).map((_, i) => {
                                const val = (i * 7) % 11;
                                let bg = "rgba(255,255,255,0.03)";
                                if (val > 8) bg = "#D4FF3F";
                                else if (val > 5) bg = "rgba(212,255,63,0.5)";
                                else if (val > 2) bg = "rgba(212,255,63,0.2)";
                                return (
                                  <div key={i} className="w-full aspect-square rounded-sm" style={{ backgroundColor: bg }} />
                                );
                              })}
                            </div>
                            <div className="flex justify-between text-[8px] text-white/30">
                              <span>LESS</span>
                              <div className="flex gap-0.5">
                                <div className="w-2.5 h-2.5 bg-white/5 rounded-sm" />
                                <div className="w-2.5 h-2.5 bg-lime-green/20 rounded-sm" />
                                <div className="w-2.5 h-2.5 bg-lime-green/50 rounded-sm" />
                                <div className="w-2.5 h-2.5 bg-lime-green rounded-sm" />
                              </div>
                              <span>MORE</span>
                            </div>
                          </div>
                        )}

                        {(activeNodeId === "SIH_WINNER" || activeNodeId === "SIH_INTERNAL" || activeNodeId === "HACK_AND_VIZ") && (
                          <div className="mt-4 border-t border-white/5 pt-4 space-y-3 font-mono">
                            <div className="border border-yellow-400/20 bg-yellow-400/5 p-3 flex items-start gap-3">
                              <span className="text-2xl select-none">
                                {activeNodeId === "SIH_WINNER" ? "🏆" : activeNodeId === "SIH_INTERNAL" ? "🥈" : "🥉"}
                              </span>
                              <div className="text-[10px] space-y-1">
                                <div className="text-yellow-400 font-bold uppercase">SECURED_STANDINGS //</div>
                                <div className="text-white/60 font-sans text-[11px]">
                                  {activeNodeId === "SIH_WINNER" && "National-level winner across all Indian universities in the AI + Public Safety sector."}
                                  {activeNodeId === "SIH_INTERNAL" && "Ranked 2nd internally at GLA University, proving viability and technical stack readiness."}
                                  {activeNodeId === "HACK_AND_VIZ" && "3rd Place in Hack & Wiz 2.0. Visual data architectures mapping real-time streams."}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {activeNodeId.startsWith("GROWTH_") && (
                          <div className="mt-4 border-t border-white/5 pt-4 space-y-3 font-mono">
                            <span className="text-[9px] text-white/40 block uppercase">CAPABILITIES_REGISTRY //</span>
                            <div className="space-y-1 text-[9px] text-white/50 bg-black/30 p-2 border border-white/5">
                              {activeNodeId === "GROWTH_2022" && (
                                <>
                                  <div>&gt; LOADED: C/C++ CORE SYNTAX</div>
                                  <div>&gt; LOADED: SCRIPTING FOUNDATIONS</div>
                                  <div>&gt; LOADED: SHELL UTILITIES</div>
                                </>
                              )}
                              {activeNodeId === "GROWTH_2023" && (
                                <>
                                  <div>&gt; COMPILED: OBJECT ORIENTED PROGRAMMING</div>
                                  <div>&gt; COMPILED: DSA & GRAPHS ALGORITHMS</div>
                                  <div>&gt; COMPILED: COMPLEXITY ANALYSIS</div>
                                </>
                              )}
                              {activeNodeId === "GROWTH_2024" && (
                                <>
                                  <div>&gt; STABILIZED: NEXT.JS FRONTEND ARCHITECTURES</div>
                                  <div>&gt; STABILIZED: RESTFUL API ROUTING</div>
                                  <div>&gt; STABILIZED: DATABASE PERSISTENCE</div>
                                </>
                              )}
                              {activeNodeId === "GROWTH_2025" && (
                                <>
                                  <div>&gt; OPTIMIZED: CNN/LSTM MODEL INFERENCE</div>
                                  <div>&gt; OPTIMIZED: OBJECT DETECTION PIPELINES</div>
                                  <div>&gt; OPTIMIZED: EDGE PLATFORM DEPLOYMENTS</div>
                                </>
                              )}
                              {activeNodeId === "GROWTH_2026" && (
                                <>
                                  <div>&gt; SECURED: AUDITING & THREAT ANALYSIS</div>
                                  <div>&gt; SECURED: SYSTEM CONCURRENCY SCALING</div>
                                  <div>&gt; SECURED: DISTRIBUTED TELEMETRY MONITORING</div>
                                </>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Terminal status logs at footer */}
                  <div className="font-mono text-[9px] text-lime-green/50 border-t border-white/5 pt-3 mt-4 space-y-1 select-none">
                    <div className="flex gap-2">
                      <span className="text-white/30">&gt;</span>
                      <span>SYS_STATUS_CODE: 200_OK</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-white/30">&gt;</span>
                      <span>ACTIVE_NODE_PATH: {systemNodes[activeNodeId as keyof typeof systemNodes]?.parent || "ROOT"} --&gt; {activeNodeId}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-white/30">&gt;</span>
                      <span className="text-white animate-pulse">■ TERMINAL_LOG_UPLINK_SECURE</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* CONTACT SECTION */}
          <section id="contact" className="py-24 px-6 md:px-12 border-t-2 border-charcoal bg-electric-blue text-soft-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none select-none md:block hidden">
              <Maximize className="w-96 h-96" />
            </div>

            <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-12 items-center relative z-10">

              <div className="md:col-span-7 flex flex-col items-start text-left">
                <div className="mb-6 rotate-[-2deg]">
                  <span className="bg-lime-green text-charcoal px-4 py-2 font-mono text-xs font-bold shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] uppercase">
                    â— UPLINK_ACTIVE_Q3_2026
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
                    href="mailto:nitin1019b@gmail.com?subject=Portfolio%20Inquiry"
                    className="bg-soft-white text-electric-blue hover:bg-lime-green hover:text-charcoal px-10 py-5 font-syne font-black text-lg transition-all duration-300 border-2 border-charcoal shadow-[6px_6px_0px_0px_rgba(26,26,26,1)]"
                    onMouseEnter={() => handleMouseEnter("Open mail client")}
                    onMouseLeave={handleMouseLeave}
                  >
                    SAY_HELLO_NOW
                  </a>
                  <div className="flex flex-col font-mono text-xs text-soft-white/60 gap-1 pl-6 border-l border-soft-white/20">
                    <div>AVAILABILITY: ACCEPTING COMMISSIONS</div>
                    <div>LOCATION: INDIA</div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 w-full flex flex-col gap-8">
                <div className="border-2 border-charcoal bg-soft-white shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] relative overflow-hidden group">
                  <div className="absolute top-2 left-2 z-10 bg-electric-blue text-soft-white px-3 py-1 font-mono text-[9px]">
                    IST_TIMEZONE // 27.4924° N, 77.6737° E · MATHURA, IN
                  </div>
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=77.6237%2C27.4624%2C77.7237%2C27.5224&layer=mapnik&marker=27.4924%2C77.6737"
                    className="w-full aspect-video border-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                    title="Mathura, India"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col font-mono text-xs gap-4 mt-4">
                  <div className="text-soft-white/50 text-[10px] tracking-wider">// SOCIAL_UPLINKS</div>
                  {[
                    { name: "GITHUB", url: "https://github.com/nitin-4921", icon: Github },
                    { name: "LINKEDIN", url: "https://linkedin.com/in/nitin-kumar-21b163309/", icon: Linkedin },
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
      </main>

      {/* FOOTER */}
      <footer className="w-full border-t-2 border-charcoal bg-charcoal py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-soft-white">
        <div className="font-mono text-[10px] text-lime-green uppercase mb-4 md:mb-0">
          Â© 2026 SYSTEM_ERR_DEV. ALL REGISTERED MONOGRAPHS RESERVED.
        </div>
        <div className="flex gap-8 font-mono text-[10px] uppercase">
          <a href="#" className="opacity-60 hover:opacity-100 hover:text-lime-green transition-colors">STITCH_STRUCTURE</a>
          <a href="#" className="opacity-60 hover:opacity-100 hover:text-lime-green transition-colors">COMPONENTS_EXPORTS</a>
          <a href="#" className="opacity-60 hover:opacity-100 hover:text-lime-green transition-colors">SOURCE_REPOSITORY</a>
          <a href="#" className="text-lime-green underline font-bold tracking-widest">[ONLINE]</a>
        </div>
      </footer>

    </motion.div>
    </>
  );
}
