"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable scrolling during boot
    document.body.style.overflow = "hidden";
    
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          scale: 1.1,
          duration: 0.4,
          ease: "power2.inOut",
          onComplete: () => {
            document.body.style.overflow = "";
            onComplete();
          }
        });
      }
    });

    tl.to(".boot-text", { opacity: 1, duration: 0.1, stagger: 0.15 })
      .to(".boot-text-ok", { opacity: 1, duration: 0.1, stagger: 0.15 }, "-=0.7")
      .to(".boot-welcome", { opacity: 1, y: 0, duration: 0.3, ease: "power3.out" }, "+=0.1")
      .to(".boot-title", { opacity: 1, y: 0, duration: 0.2, stagger: 0.05, ease: "power2.out" })
      .to(".boot-online", { opacity: 1, scale: 1, duration: 0.2, ease: "back.out(1.7)" }, "+=0.1")
      .to({}, { duration: 0.4 }); // Hold before fade out

    return () => {
      document.body.style.overflow = "";
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[10000] bg-black text-lime-green font-mono flex flex-col justify-center items-start p-8 md:p-24 uppercase overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJub25lIi8+CjxwYXRoIGQ9Ik0wIDBMMCA0TDEgNEwxIDBaIiBmaWxsPSIjRjBGMEYwIi8+Cjwvc3ZnPg==')] mix-blend-overlay"></div>
      
      <div className="text-sm md:text-lg mb-12 flex flex-col gap-2">
        <div className="opacity-0 boot-text mb-4 text-white font-bold text-xl">SYSTEM_ERR</div>
        <div className="flex justify-between w-64"><span className="opacity-0 boot-text text-white/70">INITIALIZING CORE...</span><span className="opacity-0 boot-text-ok text-lime-green">[OK]</span></div>
        <div className="flex justify-between w-64"><span className="opacity-0 boot-text text-white/70">VERIFYING USER...</span><span className="opacity-0 boot-text-ok text-lime-green">[OK]</span></div>
        <div className="flex justify-between w-64"><span className="opacity-0 boot-text text-white/70">LOADING PROJECT DATABASE...</span><span className="opacity-0 boot-text-ok text-lime-green">[OK]</span></div>
        <div className="flex justify-between w-64"><span className="opacity-0 boot-text text-white/70">CONNECTING AI MODULES...</span><span className="opacity-0 boot-text-ok text-lime-green">[OK]</span></div>
        <div className="flex justify-between w-64"><span className="opacity-0 boot-text text-white/70">ACCESSING ARCHIVE SYSTEM...</span><span className="opacity-0 boot-text-ok text-lime-green">[OK]</span></div>
        <div className="flex justify-between w-64"><span className="opacity-0 boot-text text-white/70">AUTHENTICATING USER...</span><span className="opacity-0 boot-text-ok text-lime-green">[OK]</span></div>
      </div>

      <div className="mt-8">
        <div className="opacity-0 boot-welcome translate-y-4 text-2xl md:text-4xl font-syne font-black text-white mb-6">
          WELCOME,<br/><span className="text-lime-green">NITIN KUMAR</span>
        </div>
        
        <div className="flex flex-col gap-2 text-sm md:text-base text-white/60 font-mono">
          <div className="opacity-0 boot-title translate-y-2">SMART INDIA HACKATHON WINNER</div>
          <div className="opacity-0 boot-title translate-y-2">AI ENGINEER</div>
          <div className="opacity-0 boot-title translate-y-2">FULL STACK DEVELOPER</div>
          <div className="opacity-0 boot-title translate-y-2">OPEN SOURCE CONTRIBUTOR</div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 opacity-0 boot-online scale-90 border border-lime-green px-4 py-2 text-lime-green font-bold animate-pulse">
        SYSTEM ONLINE
      </div>
    </div>
  );
}
