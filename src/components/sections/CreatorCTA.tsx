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

      gsap.fromTo(
        ".cta-content-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".cta-ornament",
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.08,
          ease: "back.out(1.4)",
          force3D: true,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      data-node-id="34:1161"
      className="relative w-full bg-primary-blue overflow-hidden min-h-[488px] lg:h-[488px] flex items-center justify-center py-[64px] lg:py-0"
    >

      <div
        className="absolute inset-0 pointer-events-none z-0 w-full h-full bg-grid-lines opacity-100 select-none"
        aria-hidden="true"
      />

      <div
        ref={ornamentsRef}
        className="absolute inset-0 pointer-events-none overflow-hidden select-none"
        aria-hidden="true"
      >

        <div className="relative w-full max-w-[1440px] h-full mx-auto">

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

      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-[1020px] mx-auto gap-[32px] lg:gap-[40px]"
      >

        <h2 className="cta-content-item font-poppins font-semibold text-[32px] sm:text-[38px] lg:text-[44px] leading-[1.2] tracking-[-0.44px] text-light-gray max-w-[710px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        <p className="cta-content-item font-satoshi font-normal text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.6] text-light-gray max-w-[964px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

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
