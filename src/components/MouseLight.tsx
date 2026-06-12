"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MouseLight() {
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const light = lightRef.current;
    if (!light) return;

    let xTo = gsap.quickTo(light, "x", { duration: 0.1, ease: "power2.out" });
    let yTo = gsap.quickTo(light, "y", { duration: 0.1, ease: "power2.out" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX - 250); // Center the 500px light
      yTo(e.clientY - 250);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={lightRef}
      className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] rounded-full z-[-1]"
      style={{
        background: "radial-gradient(circle, rgba(212,255,63,0.03) 0%, rgba(0,0,0,0) 70%)",
        mixBlendMode: "screen",
      }}
    />
  );
}
