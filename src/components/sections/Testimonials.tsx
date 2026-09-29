"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  testimonialsHeaderData,
  testimonialsListData,
} from "@/src/data/testimonials";
import { gsap, useGSAP } from "@/src/lib/gsap";

export function Testimonials() {
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

      // Header entrance
      gsap.fromTo(
        ".testimonial-header-item",
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            once: true,
          },
          immediateRender: false,
        }
      );

      // Cards staggered reveal
      gsap.fromTo(
        ".testimonial-card",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            once: true,
          },
          immediateRender: false,
        }
      );

      // Subtle ambient motion for background glows
      gsap.to(".testimonial-glow-1", {
        x: "+=20",
        y: "-=15",
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".testimonial-glow-2", {
        x: "-=15",
        y: "+=20",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".testimonial-glow-3", {
        x: "+=25",
        y: "+=15",
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      data-node-id="34:1175"
      className="relative w-full bg-offwhite overflow-hidden py-[60px] sm:py-[74px] lg:py-[74px]"
    >
      {/* Background Glows (Figma Nodes 34:1314, 34:1311, 34:1313) */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden select-none"
        aria-hidden="true"
      >
        <div className="relative w-full max-w-[1440px] h-full mx-auto">
          {/* Top-Right Lime Radial Glow (Node 34:1314) */}
          <div className="testimonial-glow-1 absolute left-[842px] top-[-241px] w-[1137px] h-[1137px] -translate-x-1/2 opacity-70">
            <Image
              src="/images/testimonials/glow-top-right.svg"
              alt=""
              width={1137}
              height={1137}
              className="w-full h-full max-w-none"
              priority
            />
          </div>

          {/* Center-Top Yellow/Lime Blur (Node 34:1311) */}
          <div className="testimonial-glow-2 absolute left-[395px] top-[-138px] w-[672px] h-[672px] -translate-x-1/2 opacity-60">
            <Image
              src="/images/testimonials/glow-center.svg"
              alt=""
              width={672}
              height={672}
              className="w-full h-full max-w-none"
            />
          </div>

          {/* Bottom-Left Blue Radial Glow (Node 34:1313) */}
          <div className="testimonial-glow-3 absolute left-[-442px] top-[149px] w-[1137px] h-[1137px] -translate-x-1/2 opacity-40">
            <Image
              src="/images/testimonials/glow-bottom-left.svg"
              alt=""
              width={1137}
              height={1137}
              className="w-full h-full max-w-none"
            />
          </div>
        </div>
      </div>

      {/* Main Content Area (Figma Node 34:1176) */}
      <div className="relative z-10 w-full max-w-[1204px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col gap-[48px] lg:gap-[72px]">
        {/* Header Text (Figma Node 34:1177) */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-[24px] lg:gap-[43px]"
        >
          {/* Heading M (Figma Node 34:1180) */}
          <h2 className="testimonial-header-item font-poppins font-semibold text-[32px] sm:text-[38px] lg:text-[44px] leading-[1.2] tracking-[-0.44px] text-black w-full lg:w-[577px]">
            {testimonialsHeaderData.title}
          </h2>

          {/* Body L (Figma Node 34:1181) */}
          <p className="testimonial-header-item font-satoshi font-normal text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.6] text-text-body w-full lg:w-[580px]">
            {testimonialsHeaderData.subtitle}
          </p>
        </div>

        {/* Testimonials Cards Grid (Figma Node 34:1182) */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] lg:gap-[41px]"
        >
          {testimonialsListData.map((item) => (
            <article
              key={item.id}
              className="testimonial-card bg-white rounded-[24px] p-[24px] flex flex-col gap-[24px] shadow-[0px_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0px_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 h-full"
            >
              {/* Avatar (Figma Node 34:1184 / 34:1190 / 34:1196) */}
              <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden shrink-0">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Author Info (Figma Node 34:1185) */}
              <div className="flex flex-col items-start">
                <h3 className="font-poppins font-semibold text-[20px] leading-[1.2] text-black tracking-[-0.2px]">
                  {item.name}
                </h3>
                <p className="font-satoshi font-normal text-[18px] leading-[1.6] text-primary-blue">
                  {item.role}
                </p>
              </div>

              {/* Quote (Figma Node 34:1188) */}
              <p className="font-satoshi font-normal text-[16px] lg:text-[18px] leading-[1.6] text-text-body">
                {item.quote}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
