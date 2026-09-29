"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/src/lib/gsap";

export function CreatorCTA() {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ornamentsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        return;
      }

      // Entrance animation for content
      gsap.fromTo(
        ".cta-content-item",
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
          immediateRender: false,
        }
      );

      // Entrance animation for ornaments
      gsap.fromTo(
        ".cta-ornament",
        { autoAlpha: 0, scale: 0.85 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 1,
          stagger: 0.08,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
          immediateRender: false,
        }
      );

      // Subtle ambient floating motion for ornaments
      const floatingItems = [
        { selector: ".cta-ornament-1", y: -12, x: 6, rot: 3, dur: 4.2 },
        { selector: ".cta-ornament-2", y: 10, x: -5, rot: -4, dur: 3.8 },
        { selector: ".cta-ornament-3", y: -8, x: 4, rot: 2, dur: 4.5 },
        { selector: ".cta-ornament-4", y: 14, x: -6, rot: -3, dur: 5.0 },
        { selector: ".cta-ornament-5", y: -10, x: 5, rot: 4, dur: 3.9 },
        { selector: ".cta-ornament-6", y: 12, x: -7, rot: -2, dur: 4.7 },
        { selector: ".cta-ornament-7", y: -14, x: 6, rot: 3, dur: 4.4 },
      ];

      floatingItems.forEach(({ selector, y, x, rot, dur }) => {
        gsap.to(selector, {
          y: `+=${y}`,
          x: `+=${x}`,
          rotation: `+=${rot}`,
          duration: dur,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      data-node-id="34:1161"
      className="relative w-full bg-primary-blue overflow-hidden min-h-[488px] lg:h-[488px] flex items-center justify-center py-[64px] lg:py-0"
    >
      {/* Full width & height seamless grid background covering entire section */}
      <div
        className="absolute inset-0 pointer-events-none z-0 w-full h-full bg-grid-lines opacity-100 select-none"
        aria-hidden="true"
      />

      {/* Floating 3D Ornaments Container (Figma node 46:78) */}
      <div
        ref={ornamentsRef}
        className="absolute inset-0 pointer-events-none overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* Ornaments wrapper aligned with 1440px Figma layout frame */}
        <div className="relative w-full max-w-[1440px] h-full mx-auto">
          {/* 1. Top-Left Yellow Spiral (Figma node 34:1206) */}
          <div
            className="cta-ornament cta-ornament-1 absolute left-[calc(50%-645px)] top-[-162px] w-[385px] -translate-x-1/2 hidden md:block"
            style={{ willChange: "transform, opacity" }}
          >
            <Image
              src="/images/cta/cta-spiral-top-yellow.png"
              alt=""
              width={385}
              height={385}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* 2. Mid-Left Silver/White Spiral (Figma node 34:1236, flipped horizontally) */}
          <div
            className="cta-ornament cta-ornament-2 absolute left-[calc(50%-455px)] top-[5px] w-[175px] -translate-x-1/2 hidden md:block"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="-scale-x-100 w-full h-full">
              <Image
                src="/images/cta/cta-spiral-silver.png"
                alt=""
                width={175}
                height={175}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* 3. Lower-Left White Cone (Figma node 46:55) */}
          <div
            className="cta-ornament cta-ornament-3 absolute left-[calc(50%-674px)] top-[225px] w-[188px] -translate-x-1/2 hidden lg:block"
            style={{ willChange: "transform, opacity" }}
          >
            <Image
              src="/images/cta/cta-cone-white.png"
              alt=""
              width={188}
              height={188}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* 4. Bottom-Left Yellow Torus/Ring (Figma node 46:67) */}
          <div
            className="cta-ornament cta-ornament-4 absolute left-[calc(50%-529px)] top-[299px] w-[342px] -translate-x-1/2 hidden md:block"
            style={{ willChange: "transform, opacity" }}
          >
            <Image
              src="/images/cta/cta-torus-yellow.png"
              alt=""
              width={342}
              height={342}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* 5. Top-Middle Yellow Pyramid (Figma node 46:61) */}
          <div
            className="cta-ornament cta-ornament-5 absolute left-[calc(50%+454px)] top-[0px] w-[188px] -translate-x-1/2 hidden md:block"
            style={{ willChange: "transform, opacity" }}
          >
            <Image
              src="/images/cta/cta-pyramid-yellow.png"
              alt=""
              width={188}
              height={188}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* 6. Top-Right White Cylinder (Figma node 46:73) */}
          <div
            className="cta-ornament cta-ornament-6 absolute left-[calc(50%+691px)] top-[6px] w-[370px] -translate-x-1/2 hidden lg:block"
            style={{ willChange: "transform, opacity" }}
          >
            <Image
              src="/images/cta/cta-cylinder-white.png"
              alt=""
              width={370}
              height={370}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* 7. Bottom-Right Yellow Spiral (Figma node 34:1221) */}
          <div
            className="cta-ornament cta-ornament-7 absolute left-[calc(50%+555px)] top-[289px] w-[330px] -translate-x-1/2 hidden md:block"
            style={{ willChange: "transform, opacity" }}
          >
            <Image
              src="/images/cta/cta-spiral-bottom-yellow.png"
              alt=""
              width={330}
              height={330}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Main Content Area (Figma node 34:1170) */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-[1020px] mx-auto gap-[32px] lg:gap-[40px]"
      >
        {/* Heading M (Figma node 34:1171) */}
        <h2 className="cta-content-item font-poppins font-semibold text-[32px] sm:text-[38px] lg:text-[44px] leading-[1.2] tracking-[-0.44px] text-light-gray max-w-[710px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        {/* Body L (Figma node 34:1172) */}
        <p className="cta-content-item font-satoshi font-normal text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.6] text-light-gray max-w-[964px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        {/* CTA Button (Figma node 34:1173) */}
        <div className="cta-content-item pt-2">
          <button
            type="button"
            className="inline-flex items-center justify-center bg-electric-lime text-dark font-satoshi font-medium text-[18px] leading-[1.2] px-[24px] py-[12px] rounded-[24px] shadow-sm hover:brightness-105 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Join as Creator
          </button>
        </div>
      </div>
    </section>
  );
}
