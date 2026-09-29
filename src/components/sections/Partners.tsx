"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { partnersData } from "@/src/data/partners";
import { gsap, useGSAP } from "@/src/lib/gsap";

export function Partners() {
  const sectionRef = useRef<HTMLElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        return;
      }

      gsap.fromTo(
        ".partner-logo-item",
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            once: true,
          },
          immediateRender: false,
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-light-gray py-[60px] lg:py-[80px] flex items-center justify-center border-t border-black/5"
      aria-label="Partner Logos"
      data-node-id="1:1794"
      data-name="Frame 2"
    >
      <div className="w-full max-w-[1440px] px-6 sm:px-12 flex items-center justify-center">
        <div
          ref={logosRef}
          className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-8 sm:gap-12 lg:gap-[72px]"
          data-node-id="1:1708"
          data-name="Logo_Partner"
        >
          {partnersData.map((logo) => (
            <div
              key={logo.id}
              className="partner-logo-item flex items-center justify-center transition-all duration-300 hover:opacity-75 hover:scale-[1.03] select-none"
              style={{
                width: `${logo.width}px`,
                height: `${logo.height}px`,
                maxWidth: "100%",
              }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="w-auto h-auto max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
