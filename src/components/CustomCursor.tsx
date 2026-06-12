"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // We update mouse position using GSAP quickTo for high performance
    const cursor = cursorRef.current;
    if (!cursor) return;

    let xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    let yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
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

    // Add magnetic hover to buttons and links
    const interactiveElements = document.querySelectorAll('a, button, [data-interactive="true"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        gsap.to(cursor, { 
          scale: 3, 
          backgroundColor: 'rgba(212, 255, 63, 0.1)', 
          borderColor: 'rgba(212, 255, 63, 0.8)',
          duration: 0.3 
        });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(cursor, { 
          scale: 1, 
          backgroundColor: 'transparent', 
          borderColor: 'rgba(212, 255, 63, 1)',
          duration: 0.3 
        });
      });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden md:flex fixed pointer-events-none z-[9999] w-6 h-6 rounded-full border-2 border-lime-green mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-colors shadow-[0_0_10px_rgba(212,255,63,0.5)]"
      style={{ left: 0, top: 0 }}
    >
      <div ref={textRef} className="text-[6px] font-mono font-bold uppercase tracking-widest text-lime-green absolute"></div>
    </div>
  );
}
