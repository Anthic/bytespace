"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/src/lib/gsap";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      autoResize: true,
    });
    window.__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Watch for dynamic DOM height changes (e.g. tabs switching, expanding lists)
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    });

    if (document.body) {
      resizeObserver.observe(document.body);
    }

    const handleResize = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      gsap.ticker.remove(tick);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return <>{children}</>;
}
