"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/src/components/layout/Navbar";
import { gsap, useGSAP } from "@/src/lib/gsap";

export function NotFoundPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Giant 404 entrance
      tl.fromTo(
        numberRef.current,
        {
          autoAlpha: 0,
          scale: 0.88,
          y: 40,
        },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 1.1,
        }
      );

      // 2. Text elements entrance (staggered)
      tl.fromTo(
        ".not-found-anim",
        {
          autoAlpha: 0,
          y: 30,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
        },
        "-=0.6"
      );

      // 3. Subtle floating loop on 404 backdrop
      gsap.to(numberRef.current, {
        y: "-=12",
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.2,
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      data-node-id="63:409"
      className="relative w-full min-h-screen bg-primary-blue overflow-x-hidden flex flex-col justify-between selection:bg-electric-lime selection:text-dark"
    >
      {/* Background Grid Pattern (100% full coverage matching Figma Group 4) */}
      <div
        className="absolute inset-0 pointer-events-none z-0 w-full h-full bg-grid-lines opacity-100"
        aria-hidden="true"
      />

      {/* SVG Grid Accent overlay from Figma */}
      <div
        className="absolute inset-0 pointer-events-none z-0 w-full h-full overflow-hidden flex items-start justify-center opacity-30"
        aria-hidden="true"
      >
        <Image
          src="/images/404/grid-bg.svg"
          alt=""
          width={1442}
          height={1026}
          className="w-full max-w-[1920px] h-full object-cover min-h-[900px]"
          priority
        />
      </div>

      {/* Top Navigation Header (Figma node 78:2779) */}
      <div className="relative z-30 w-full">
        <Navbar />
      </div>

      {/* Center 404 Content Container */}
      <main className="relative z-20 flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center py-12 lg:py-20 select-none">
        <div className="relative w-full flex flex-col items-center justify-center">
          {/* Giant 404 Text Backdrop (Figma node 63:643) */}
          <p
            ref={numberRef}
            data-node-id="63:643"
            className="absolute left-1/2 -translate-x-1/2 -top-[90px] sm:-top-[130px] md:-top-[170px] lg:-top-[220px] xl:-top-[250px] font-poppins font-semibold text-[170px] sm:text-[250px] md:text-[340px] lg:text-[420px] xl:text-[480px] leading-none tracking-[-2px] sm:tracking-[-3px] lg:tracking-[-4.8px] text-transparent bg-clip-text pointer-events-none select-none z-0 whitespace-nowrap"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgb(212, 251, 32) 0%, rgba(212, 251, 32, 0.96) 25%, rgba(212, 251, 32, 0.81) 50.5%, rgba(212, 251, 32, 0.61) 68%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            404
          </p>

          {/* Foreground Text & Action CTA (Figma node 63:638) */}
          <div
            ref={contentRef}
            data-node-id="63:638"
            className="relative z-10 flex flex-col items-center text-center mt-[90px] sm:mt-[130px] md:mt-[160px] lg:mt-[180px] xl:mt-[200px] max-w-[935px]"
          >
            {/* Title (Figma node 63:639) */}
            <h1
              data-node-id="63:639"
              className="not-found-anim font-poppins font-semibold text-[32px] sm:text-[46px] md:text-[58px] lg:text-[68px] xl:text-[72px] leading-[1.15] sm:leading-[1.2] text-white tracking-[-0.72px] text-center w-full"
            >
              The page you are looking for doesn’t exist
            </h1>

            {/* Subtitle (Figma node 63:640) */}
            <p
              data-node-id="63:640"
              className="not-found-anim mt-[20px] sm:mt-[24px] lg:mt-[32px] font-satoshi font-normal text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] text-subtext-gray text-center max-w-[620px]"
            >
              Try to use a correct url or go back to homepage to start again
            </p>

            {/* Back to Home Button CTA (Figma node 63:641) */}
            <div className="not-found-anim mt-[28px] sm:mt-[32px]">
              <Link
                href="/"
                data-node-id="63:641"
                className="group relative inline-flex items-center justify-center bg-electric-lime hover:bg-[#cbfc01] text-dark font-satoshi font-medium text-[16px] sm:text-[18px] leading-[1.2] px-[24px] py-[12px] rounded-[24px] transition-all duration-200 shadow-md hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-electric-lime/40"
              >
                <span data-node-id="63:642" className="relative z-10">
                  Back to Home
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom spacer / subtle bar to balance viewport on extra tall screens */}
      <footer className="relative z-20 w-full py-6 text-center">
        <p className="font-satoshi text-[13px] text-white/40">
          &copy; {new Date().getFullYear()} ByteSpace. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
