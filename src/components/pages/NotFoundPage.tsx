"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
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
          scale: 0.9,
          y: 30,
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
          y: 25,
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
        y: "-=10",
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
      data-node-id="63:252"
      className="relative w-full min-h-screen bg-white overflow-x-hidden flex flex-col selection:bg-electric-lime selection:text-dark"
    >
      {/* ================= TOP BLUE 404 HERO SECTION (Figma Node 63:409) ================= */}
      <section
        data-node-id="63:409"
        className="relative w-full bg-[#003be2] overflow-hidden min-h-[720px] md:min-h-[820px] xl:h-[957px] flex flex-col justify-between"
      >
        {/* Full-bleed CSS Grid lines pattern */}
        <div
          className="absolute inset-0 pointer-events-none z-0 w-full h-full bg-grid-lines opacity-100"
          aria-hidden="true"
        />

        {/* SVG Grid Overlay directly from Figma (Node 63:410) */}
        <div
          data-node-id="63:410"
          className="absolute inset-0 pointer-events-none z-0 w-full h-[1024px] overflow-hidden flex items-start justify-center"
          aria-hidden="true"
        >
          <div className="relative w-[1440px] h-[1024px] shrink-0">
            <Image
              src="/images/404/grid-bg.svg"
              alt=""
              width={1442}
              height={1026}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Header / Navigation (Figma Node 78:2779) */}
        <div className="relative z-30 w-full">
          <Navbar />
        </div>

        {/* Giant 404 Number (Figma Node 63:643) */}
        <p
          ref={numberRef}
          data-node-id="63:643"
          className="absolute left-1/2 -translate-x-1/2 font-poppins font-semibold leading-none tracking-[-2px] sm:tracking-[-3px] lg:tracking-[-4.8px] text-transparent bg-clip-text pointer-events-none select-none z-10 whitespace-nowrap text-[160px] sm:text-[240px] md:text-[340px] lg:text-[420px] xl:text-[480px] top-[140px] sm:top-[150px] xl:top-[160px]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgb(212, 251, 32) 0%, rgba(212, 251, 32, 0.96) 25%, rgba(212, 251, 32, 0.81) 50.5%, rgba(212, 251, 32, 0.61) 68%, rgba(255, 255, 255, 0) 100%)",
          }}
        >
          404
        </p>

        {/* Center Content: Headline, Subtitle, CTA (Figma Node 63:638) */}
        <div
          ref={contentRef}
          data-node-id="63:638"
          className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center text-center mt-[180px] sm:mt-[220px] md:mt-[280px] lg:mt-[340px] xl:mt-0 xl:absolute xl:left-1/2 xl:-translate-x-1/2 xl:top-[521px] max-w-[935px] gap-[24px] sm:gap-[32px] pb-16 xl:pb-0"
        >
          {/* Main Headline (Figma Node 63:639) */}
          <h1
            data-node-id="63:639"
            className="not-found-anim font-poppins font-semibold text-[32px] sm:text-[46px] md:text-[58px] lg:text-[68px] xl:text-[72px] leading-[1.2] text-white tracking-[-0.72px] text-center w-full max-w-[935px]"
          >
            The page you are looking for doesn’t exist
          </h1>

          {/* Subtitle (Figma Node 63:640) */}
          <p
            data-node-id="63:640"
            className="not-found-anim font-satoshi font-normal text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] text-[#e5e6e8] text-center max-w-[640px]"
          >
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Action CTA Button (Figma Node 63:641) */}
          <div className="not-found-anim">
            <Link
              href="/"
              data-node-id="63:641"
              className="group inline-flex items-center justify-center bg-[#d4fb20] hover:bg-[#cbfc01] text-[#242528] font-satoshi font-medium text-[16px] sm:text-[18px] leading-[1.2] px-[24px] py-[12px] rounded-[24px] transition-all duration-200 shadow-md hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-electric-lime/40"
            >
              <span data-node-id="63:642" className="relative z-10 whitespace-nowrap">
                Back to Home
              </span>
            </Link>
          </div>
        </div>

        {/* Empty bottom space placeholder matching Figma 957px boundary */}
        <div className="hidden xl:block h-[30px]" aria-hidden="true" />
      </section>

      {/* ================= BOTTOM WHITE FOOTER (Figma Node 78:1457) ================= */}
      <Footer />
    </div>
  );
}
