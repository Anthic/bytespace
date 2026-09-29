"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { heroContent } from "@/src/data/hero";
import { Navbar } from "@/src/components/layout/Navbar";
import { Button } from "@/src/components/ui/Button";
import { FloatingCard } from "@/src/components/ui/FloatingCard";
import { gsap, useGSAP } from "@/src/lib/gsap";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const cardUiUxRef = useRef<HTMLDivElement>(null);
  const cardProgressRef = useRef<HTMLDivElement>(null);
  const cardStudentsRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const ornamentsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        if (progressFillRef.current) {
          gsap.set(progressFillRef.current, { width: "56%" });
        }
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.5 },
      });

      tl.fromTo(
        headlineRef.current,
        { y: 20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.4 }
      )
        .fromTo(
          subtextRef.current,
          { y: 15, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.35 },
          "-=0.25"
        )
        .fromTo(
          searchRef.current,
          { y: 15, autoAlpha: 0, scale: 0.98 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 0.35 },
          "-=0.25"
        )
        .fromTo(
          [circleRef.current, visualRef.current],
          { autoAlpha: 0, scale: 0.96 },
          { autoAlpha: 1, scale: 1, duration: 0.45 },
          "-=0.2"
        )
        .fromTo(
          [
            cardUiUxRef.current,
            cardProgressRef.current,
            cardStudentsRef.current,
          ],
          { autoAlpha: 0, y: 15, scale: 0.92 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.08 },
          "-=0.25"
        )
        .fromTo(
          progressFillRef.current,
          { width: "0%" },
          { width: "56%", duration: 0.6, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          ornamentsRef.current,
          { autoAlpha: 0, scale: 0.95 },
          { autoAlpha: 1, scale: 1, duration: 0.4 },
          "-=0.3"
        );

      // Floating micro-animations on cards
      gsap.to(cardUiUxRef.current, {
        y: "-=5",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.2,
      });

      gsap.to(cardProgressRef.current, {
        y: "+=5",
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

      gsap.to(cardStudentsRef.current, {
        y: "-=4",
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.3,
      });

      // Desktop interactive mouse parallax on 3D ornaments
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const handleMouseMove = (e: MouseEvent) => {
          if (!heroRef.current) return;
          const { clientX, clientY } = e;
          const xPercent = (clientX / window.innerWidth - 0.5) * 2;
          const yPercent = (clientY / window.innerHeight - 0.5) * 2;

          gsap.to(".ornament-item", {
            x: (i) => xPercent * (i % 2 === 0 ? 14 : -14),
            y: (i) => yPercent * (i % 2 === 0 ? 10 : -10),
            duration: 1,
            ease: "power1.out",
            overwrite: "auto",
          });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[100svh] min-h-[640px] max-h-[1024px] overflow-hidden bg-primary-blue flex flex-col items-center justify-between"
      aria-label="Hero Banner"
    >
      {/* 1. Full Banner Seamless Grid Covering the Entire Viewport (including Navbar) */}
      <div className="absolute inset-0 pointer-events-none z-0 w-full h-full bg-grid-lines opacity-100" />

      {/* 2. Top Header / Navbar (with grid directly behind it) */}
      <Navbar />

      {/* 3. DESKTOP PIXEL-PERFECT VIEW (xl: and above, scaled with vh to fit single screen) */}
      <div className="hidden xl:flex flex-1 w-full items-center justify-center relative overflow-hidden">
        <div
          className="relative w-[1440px] h-[904px] flex-shrink-0 origin-center"
          style={{
            transform: "scale(min(1, calc((100svh - 96px) / 904)))",
          }}
        >
          {/* Lime Ellipse 7 (Node 1:1866: x=145, y=582-120=462, w=1149, h=1149) */}
          <div
            ref={circleRef}
            className="absolute left-[145px] top-[462px] w-[1149px] h-[1149px] pointer-events-none z-[1] select-none"
          >
            <Image
              src="/images/hero/lime-circle.svg"
              alt=""
              width={1149}
              height={1149}
              priority
              className="w-full h-full object-contain"
            />
          </div>

          {/* 3D Floating Ornaments (Node 46:79) */}
          <div
            ref={ornamentsRef}
            className="absolute inset-0 pointer-events-none z-[2] select-none"
          >
            {/* Top-Left Lime Spiral (Node 46:90: x=-118, y=221-120=101) */}
            <div className="ornament-item absolute left-[-118px] top-[101px] w-[385px] h-[385px]">
              <Image
                src="/images/hero/ornament-loop-lime.png"
                alt=""
                width={385}
                height={385}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Mid-Left White Small Coil (Node 46:95: x=358, y=477-120=357) */}
            <div className="ornament-item absolute left-[358px] top-[357px] w-[175px] h-[175px] -scale-x-100">
              <Image
                src="/images/hero/ornament-loop-white.png"
                alt=""
                width={175}
                height={175}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Bottom-Left White Torus / Donut (Node 46:105: x=18, y=682-120=562) */}
            <div className="ornament-item absolute left-[18px] top-[562px] w-[342px] h-[342px]">
              <Image
                src="/images/hero/ornament-donut.png"
                alt=""
                width={342}
                height={342}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Top-Right Lime Cylinder (Node 46:110: x=1231, y=221-120=101) */}
            <div className="ornament-item absolute left-[1231px] top-[101px] w-[370px] h-[370px]">
              <Image
                src="/images/hero/ornament-cylinder-lime.png"
                alt=""
                width={370}
                height={370}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Mid-Right White Cone (Node 46:80: x=1106, y=464-120=344) */}
            <div className="ornament-item absolute left-[1106px] top-[344px] w-[188px] h-[188px]">
              <Image
                src="/images/hero/ornament-cone.png"
                alt=""
                width={188}
                height={188}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Bottom-Right White Spring Coil (Node 46:85: x=1127, y=672-120=552) */}
            <div className="ornament-item absolute left-[1127px] top-[552px] w-[330px] h-[330px]">
              <Image
                src="/images/hero/ornament-spiral-white.png"
                alt=""
                width={330}
                height={330}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Hero Content (Node 1:1769: x=120, y=169-120=49, w=1200) */}
          <div className="absolute left-[120px] top-[49px] w-[1200px] flex flex-col items-center z-10">
            {/* Headline & Subtitle */}
            <div className="flex flex-col items-center text-center">
              <h1
                ref={headlineRef}
                className="font-['Poppins',var(--font-poppins)] font-semibold text-[72px] leading-[1.2] text-white tracking-[-0.72px] w-[935px]"
              >
                {heroContent.headline}
              </h1>
              <p
                ref={subtextRef}
                className="mt-[32px] text-[18px] leading-[1.6] text-subtext-gray whitespace-nowrap font-normal"
              >
                {heroContent.subtitle}
              </p>
            </div>

            {/* Search Bar (Node 1:1772: top=293px relative to Hero container, gap=60px) */}
            <div
              ref={searchRef}
              className="mt-[60px] flex items-center gap-[16px]"
            >
              {/* Input field (Node 1:1773: w=461px, h=52px, rounded=24px) */}
              <div className="w-[461px] h-[52px] bg-white rounded-[24px] px-[24px] py-[12px] flex items-center gap-[8px] shadow-sm">
                <div className="w-[24px] h-[24px] flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/icons/search.svg"
                    alt="Search"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <input
                  type="text"
                  placeholder={heroContent.search.placeholder}
                  className="w-full bg-transparent text-[18px] leading-[1.6] text-dark placeholder:text-muted-gray outline-none border-none font-normal"
                />
              </div>

              {/* Search Button (Node 1:1776: rounded=24px, py=12, px=24, h=46) */}
              <Button
                variant="lime"
                className="h-[46px] px-[24px] py-[12px] text-[18px] font-medium leading-[1.2] text-dark rounded-[24px]"
              >
                {heroContent.search.buttonText}
              </Button>
            </div>
          </div>

          {/* Central Person (Node 1:1796: raised 2% higher to y=374) */}
          <div
            ref={visualRef}
            className="absolute left-[431px] top-[374px] w-[578px] h-[541px] z-10 pointer-events-none select-none"
          >
            <Image
              src="/images/hero/hero-person.png"
              alt="ByteSpace student learning online with laptop and headphones"
              width={578}
              height={541}
              priority
              className="w-full h-full object-contain filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.15)]"
            />
          </div>

          {/* Badge 1: UI/UX Design (Node 46:126: x=404, y=639-120=519, w=208, h=70) */}
          <div
            ref={cardUiUxRef}
            className="absolute left-[404px] top-[519px] z-20 pointer-events-auto"
          >
            <FloatingCard className="w-[208px] h-[70px] flex flex-col justify-center gap-[2px]">
              <span className="text-[16px] font-medium leading-[1.2] text-dark">
                {heroContent.badges.uiUx.title}
              </span>
              <div className="flex items-center gap-[8px] text-[12px] text-muted-gray leading-[1.6]">
                <span>{heroContent.badges.uiUx.coursesCount}</span>
                <span className="text-[10px] leading-none">•</span>
                <span>{heroContent.badges.uiUx.studentsCount}</span>
              </div>
            </FloatingCard>
          </div>

          {/* Badge 2: Learning Progress 55% (Node 1:1797: x=842, y=651-120=531, w=232, h=131) */}
          <div
            ref={cardProgressRef}
            className="absolute left-[842px] top-[531px] z-20 pointer-events-auto"
          >
            <FloatingCard className="w-[232px] h-[131px] flex flex-col justify-between p-[16px]">
              <span className="text-[14px] font-medium leading-[1.2] text-dark">
                {heroContent.badges.progress.label}
              </span>
              <div className="text-[48px] font-semibold leading-[1.2] tracking-[-0.48px] text-dark font-['Poppins',var(--font-poppins)]">
                {heroContent.badges.progress.percentage}
              </div>
              <div className="w-[200px] h-[8px] bg-progress-track rounded-full overflow-hidden">
                <div
                  ref={progressFillRef}
                  className="h-full bg-electric-lime rounded-full"
                  style={{ width: "56%" }}
                />
              </div>
            </FloatingCard>
          </div>

          {/* Badge 3: Happy Students (Node 1:1821: x=328, y=837-120=717, w=258, h=121) */}
          <div
            ref={cardStudentsRef}
            className="absolute left-[328px] top-[717px] z-20 pointer-events-auto"
          >
            <FloatingCard className="w-[258px] h-[121px] flex flex-col justify-between p-[16px]">
              <div className="flex flex-col gap-1">
                <span className="text-[16px] font-medium leading-[1.2] text-dark">
                  {heroContent.badges.students.title}
                </span>
                <div className="flex items-center gap-[6px]">
                  <span className="text-[12px] font-medium text-dark leading-[1.6]">
                    {heroContent.badges.students.rating}
                  </span>
                  <span className="text-[12px] text-muted-gray leading-[1.6]">
                    {heroContent.badges.students.reviewsCount}
                  </span>
                  <div className="w-[16px] h-[16px] flex items-center justify-center">
                    <Image
                      src="/icons/star.svg"
                      alt="Star rating"
                      width={16}
                      height={16}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Overlapping Avatars */}
              <div className="flex items-center">
                {heroContent.badges.students.avatarImages.map((src, idx) => (
                  <div
                    key={idx}
                    className="relative w-[43px] h-[43px] rounded-full overflow-hidden ring-2 ring-white -mr-[16px] flex-shrink-0"
                    style={{ zIndex: idx + 1 }}
                  >
                    <Image
                      src={src}
                      alt={`Student ${idx + 1}`}
                      width={43}
                      height={43}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div
                  className="relative w-[43px] h-[43px] rounded-full bg-electric-lime text-dark flex items-center justify-center font-bold text-[12px] ring-2 ring-white flex-shrink-0"
                  style={{ zIndex: 10 }}
                >
                  {heroContent.badges.students.studentCountText}
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>

      {/* 4. MOBILE & TABLET RESPONSIVE VIEW (< xl) */}
      <div className="xl:hidden relative w-full px-4 sm:px-6 py-4 flex-1 flex flex-col items-center justify-between z-10 overflow-y-auto">
        {/* Headline & Subtitle */}
        <div className="flex flex-col items-center text-center">
          <h1 className="font-['Poppins',var(--font-poppins)] font-semibold text-[32px] sm:text-[44px] md:text-[54px] leading-[1.2] text-white tracking-[-0.72px] max-w-[700px]">
            {heroContent.headline}
          </h1>
          <p className="mt-3 text-[14px] sm:text-[16px] leading-[1.5] text-subtext-gray max-w-[580px] font-normal">
            {heroContent.subtitle}
          </p>
        </div>

        {/* Responsive Search Bar */}
        <div className="mt-4 w-full max-w-[480px] flex flex-col sm:flex-row items-center gap-[10px]">
          <div className="w-full h-[48px] bg-white rounded-[24px] px-[18px] py-[10px] flex items-center gap-[8px] shadow-sm">
            <div className="w-[20px] h-[20px] flex-shrink-0 flex items-center justify-center">
              <Image
                src="/icons/search.svg"
                alt="Search"
                width={20}
                height={20}
                className="w-full h-full object-contain"
              />
            </div>
            <input
              type="text"
              placeholder={heroContent.search.placeholder}
              className="w-full bg-transparent text-[15px] leading-[1.6] text-dark placeholder:text-muted-gray outline-none border-none font-normal"
            />
          </div>
          <Button
            variant="lime"
            className="w-full sm:w-auto h-[44px] px-[22px] text-[15px] font-medium text-dark rounded-[24px]"
          >
            {heroContent.search.buttonText}
          </Button>
        </div>

        {/* Student Image & Lime Backdrop Circle */}
        <div className="relative mt-4 w-full max-w-[440px] flex flex-col items-center">
          {/* Lime Circle backdrop */}
          <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] pointer-events-none select-none z-0">
            <Image
              src="/images/hero/lime-circle.svg"
              alt=""
              width={380}
              height={380}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Student Portrait (raised 2% higher) */}
          <div className="relative z-10 w-[280px] sm:w-[340px] h-[260px] sm:h-[320px] -translate-y-[2%]">
            <Image
              src="/images/hero/hero-person.png"
              alt="ByteSpace student learning online with laptop and headphones"
              width={340}
              height={320}
              priority
              className="w-full h-full object-contain filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.15)]"
            />
          </div>

          {/* Badges Container */}
          <div className="relative z-20 w-full mt-4 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
            <FloatingCard className="w-[180px] h-[58px] flex flex-col justify-center gap-[2px]">
              <span className="text-[13px] font-medium leading-[1.2] text-dark">
                {heroContent.badges.uiUx.title}
              </span>
              <div className="flex items-center gap-[6px] text-[10px] text-muted-gray leading-[1.6]">
                <span>{heroContent.badges.uiUx.coursesCount}</span>
                <span className="text-[8px] leading-none">•</span>
                <span>{heroContent.badges.uiUx.studentsCount}</span>
              </div>
            </FloatingCard>

            <FloatingCard className="w-[180px] h-[95px] flex flex-col justify-between p-[12px]">
              <span className="text-[12px] font-medium leading-[1.2] text-dark">
                {heroContent.badges.progress.label}
              </span>
              <div className="text-[32px] font-semibold leading-[1.1] tracking-[-0.48px] text-dark font-['Poppins',var(--font-poppins)]">
                {heroContent.badges.progress.percentage}
              </div>
              <div className="w-full h-[6px] bg-progress-track rounded-full overflow-hidden">
                <div
                  className="h-full bg-electric-lime rounded-full"
                  style={{ width: "56%" }}
                />
              </div>
            </FloatingCard>

            <FloatingCard className="w-[220px] h-[95px] flex flex-col justify-between p-[12px]">
              <div className="flex flex-col gap-0.5">
                <span className="text-[13px] font-medium leading-[1.2] text-dark">
                  {heroContent.badges.students.title}
                </span>
                <div className="flex items-center gap-[4px]">
                  <span className="text-[11px] font-medium text-dark leading-[1.6]">
                    {heroContent.badges.students.rating}
                  </span>
                  <span className="text-[11px] text-muted-gray leading-[1.6]">
                    {heroContent.badges.students.reviewsCount}
                  </span>
                  <div className="w-[14px] h-[14px] flex items-center justify-center">
                    <Image
                      src="/icons/star.svg"
                      alt="Star rating"
                      width={14}
                      height={14}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                {heroContent.badges.students.avatarImages.slice(0, 5).map((src, idx) => (
                  <div
                    key={idx}
                    className="relative w-[30px] h-[30px] rounded-full overflow-hidden ring-2 ring-white -mr-[10px] flex-shrink-0"
                    style={{ zIndex: idx + 1 }}
                  >
                    <Image
                      src={src}
                      alt={`Student ${idx + 1}`}
                      width={30}
                      height={30}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div
                  className="relative w-[30px] h-[30px] rounded-full bg-electric-lime text-dark flex items-center justify-center font-bold text-[10px] ring-2 ring-white flex-shrink-0"
                  style={{ zIndex: 10 }}
                >
                  {heroContent.badges.students.studentCountText}
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>
    </section>
  );
}
