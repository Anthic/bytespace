"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { categoriesHeaderData, categoriesListData } from "@/src/data/categories";
import { gsap, useGSAP } from "@/src/lib/gsap";

export function CategoriesShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        return;
      }

      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".category-box-item",
        { opacity: 0, y: 20, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-[60px] sm:py-[80px] lg:py-[100px] flex flex-col items-center overflow-hidden"
      aria-label="Diverse Learning Paths"
      data-node-id="34:684"
    >
      <div className="w-full max-w-[1440px] px-6 sm:px-10 lg:px-12 flex flex-col items-center">

        <div
          ref={headerRef}
          className="flex flex-col items-center text-center max-w-[920px]"
        >
          <h2
            className="font-['Poppins',var(--font-poppins)] font-semibold text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.2] text-heading-dark tracking-[-0.36px]"
            data-node-id="34:685"
          >
            {categoriesHeaderData.title}
          </h2>
          <p
            className="mt-4 text-[15px] sm:text-[18px] leading-[1.6] text-muted-gray font-normal"
            data-node-id="34:686"
          >
            {categoriesHeaderData.subtitle}
          </p>
        </div>

        <div
          ref={cardsRef}
          className="mt-[44px] sm:mt-[56px] lg:mt-[68px] w-full max-w-[1202px] grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-[16px] sm:gap-[24px] lg:gap-[40px] justify-items-center"
          data-node-id="34:725"
          data-name="Frame 10"
        >
          {categoriesListData.map((cat) => (
            <div
              key={cat.id}
              className="category-box-item group w-[150px] sm:w-[167px] h-[150px] sm:h-[167px] bg-white border border-card-border rounded-[24px] flex flex-col items-center justify-center gap-[12px] p-[16px] cursor-pointer transition-[box-shadow,border-color] duration-300 hover:border-dark/30 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] select-none"
              data-name="Categories_Card_1"
            >

              <div className="bg-electric-lime rounded-[40px] p-[12px] size-[56px] sm:size-[60px] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                <div className="relative size-[32px] sm:size-[36px] flex items-center justify-center">
                  <Image
                    src={cat.icon}
                    alt={cat.name}
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <span className="font-['Satoshi',sans-serif] font-medium text-[16px] sm:text-[20px] text-dark leading-[1.2] text-center whitespace-nowrap">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
