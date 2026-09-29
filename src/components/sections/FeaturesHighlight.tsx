"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { featuresData } from "@/src/data/features";
import { CourseCard } from "@/src/components/ui/CourseCard";
import { gsap, useGSAP } from "@/src/lib/gsap";

export function FeaturesHighlight() {
  const sectionRef = useRef<HTMLElement>(null);
  const block1Ref = useRef<HTMLDivElement>(null);
  const block2Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        return;
      }

      // Block 1 animations
      gsap.fromTo(
        ".feat-block-1-text",
        { autoAlpha: 0, x: -30 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: block1Ref.current,
            start: "top 80%",
            once: true,
          },
          immediateRender: false,
        }
      );

      gsap.fromTo(
        ".feat-block-1-visual",
        { autoAlpha: 0, x: 30, scale: 0.98 },
        {
          autoAlpha: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: block1Ref.current,
            start: "top 80%",
            once: true,
          },
          immediateRender: false,
        }
      );

      // Block 2 animations
      gsap.fromTo(
        ".feat-block-2-visual",
        { autoAlpha: 0, x: -30, scale: 0.98 },
        {
          autoAlpha: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: block2Ref.current,
            start: "top 80%",
            once: true,
          },
          immediateRender: false,
        }
      );

      gsap.fromTo(
        ".feat-block-2-text",
        { autoAlpha: 0, x: 30 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: block2Ref.current,
            start: "top 80%",
            once: true,
          },
          immediateRender: false,
        }
      );

      // Floating micro-motion on cards
      gsap.to(".floating-feat-card", {
        y: "-=6",
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.4,
      });

      // Subtle float on 3D ornaments
      gsap.to(".floating-feat-spiral", {
        rotate: 4,
        y: "-=8",
        duration: 4,
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
      className="relative w-full bg-offwhite py-[80px] sm:py-[100px] lg:py-[120px] flex flex-col items-center overflow-hidden"
      aria-label="Features & Capabilities"
      data-node-id="34:1159"
    >
      {/* Background Ambient Glows from Figma (Group 5 & Ellipse 12) */}
      <div className="absolute top-[-466px] left-[calc(50%-1228px)] w-[2456px] h-[2391px] pointer-events-none select-none z-0">
        <Image
          src="/images/features/figma-group5.svg"
          alt=""
          width={2456}
          height={2391}
          priority
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-[946px] left-[calc(50%-1007px)] w-[672px] h-[672px] pointer-events-none select-none z-0">
        <Image
          src="/images/features/figma-ellipse12.svg"
          alt=""
          width={672}
          height={672}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-10 lg:px-12 flex flex-col gap-[80px] lg:gap-[120px] items-center">
        {/* ============================================================== */}
        {/* BLOCK 1: Your Path to Professional Growth Starts Here!        */}
        {/* ============================================================== */}
        <div
          ref={block1Ref}
          className="w-full flex flex-col lg:flex-row items-center justify-between gap-[48px] lg:gap-[63px]"
          data-node-id="34:1157"
        >
          {/* Left Text & Stats */}
          <div className="feat-block-1-text w-full lg:w-[574px] flex flex-col items-start text-left">
            <h2
              className="font-['Poppins',var(--font-poppins)] font-semibold text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.2] text-dark tracking-[-0.44px] max-w-[577px]"
              data-node-id="34:771"
            >
              {featuresData.growth.heading}
            </h2>
            <p
              className="mt-6 text-[16px] sm:text-[18px] leading-[1.6] text-pill-text font-normal max-w-[477px]"
              data-node-id="34:772"
            >
              {featuresData.growth.description}
            </p>

            {/* Stats row */}
            <div
              className="mt-8 sm:mt-10 flex items-end gap-[40px] sm:gap-[56px] whitespace-nowrap"
              data-node-id="34:773"
            >
              {featuresData.growth.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-start">
                  <span className="font-['Poppins',var(--font-poppins)] font-medium text-[32px] sm:text-[36px] leading-[1.2] text-primary-blue tracking-[-0.36px]">
                    {stat.number}
                  </span>
                  <span className="mt-1 font-['Satoshi',sans-serif] text-[16px] sm:text-[18px] leading-[1.6] text-pill-text">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Composition (Desktop 621px x 552px) */}
          <div className="feat-block-1-visual w-full max-w-[621px] flex justify-center">
            {/* Desktop Composition Frame (scaled on mobile) */}
            <div className="relative w-[340px] sm:w-[520px] lg:w-[621px] h-[360px] sm:h-[480px] lg:h-[552px] flex-shrink-0">
              {/* 1. Behind Student: Mini Course Card (z-10) */}
              <div className="absolute left-[-20px] sm:left-0 top-0 scale-[0.6] sm:scale-[0.8] lg:scale-100 origin-top-left z-[10] select-none pointer-events-none opacity-90 sm:opacity-100">
                <CourseCard
                  course={{
                    id: "feat-mini-card-1",
                    title: featuresData.growth.courseCard.title,
                    instructor: {
                      prefix: "by ",
                      name: "purepearl studio",
                    },
                    image: featuresData.growth.courseCard.thumbnail,
                    badgeLessons: featuresData.growth.courseCard.badgeLessons,
                    badgeDuration: featuresData.growth.courseCard.badgeDuration,
                    badgeComments: featuresData.growth.courseCard.badgeComments,
                    level: featuresData.growth.courseCard.level,
                    studentAvatars:
                      featuresData.growth.courseCard.studentAvatars,
                    studentCountText:
                      featuresData.growth.courseCard.studentCountText,
                    price: featuresData.growth.courseCard.price,
                    pricePeriod: featuresData.growth.courseCard.pricePeriod,
                    rating: featuresData.growth.courseCard.rating,
                  }}
                  className="shadow-card-float"
                />
              </div>

              {/* 2. Center: Student Portrait (z-20) */}
              <div className="absolute left-[30px] sm:left-[60px] lg:left-0 top-[20px] sm:top-[12px] w-[300px] sm:w-[460px] lg:w-[577px] h-[320px] sm:h-[460px] lg:h-[540px] z-[20] select-none pointer-events-none">
                <Image
                  src="/images/features/student-growth.png"
                  alt="Student learning with laptop"
                  width={577}
                  height={540}
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
                />
              </div>

              {/* 3. Learning Progress 55% Badge (z-25) */}
              <div className="floating-feat-card absolute right-0 sm:right-[10px] lg:left-[345px] top-[140px] sm:top-[180px] lg:top-[213px] z-[25] w-[180px] sm:w-[210px] lg:w-[232px] p-[12px] sm:p-[16px] rounded-[16px] bg-white/95 backdrop-blur-[10px] shadow-card-float border border-black/5 flex flex-col gap-[6px] sm:gap-[8px]">
                <span className="font-['Satoshi',sans-serif] font-medium text-[12px] sm:text-[14px] text-dark leading-[1.2]">
                  {featuresData.growth.learningProgress.label}
                </span>
                <span className="font-['Poppins',var(--font-poppins)] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] text-dark tracking-[-0.48px] leading-[1.1]">
                  {featuresData.growth.learningProgress.percentage}
                </span>
                <div className="w-full h-[6px] sm:h-[8px] bg-progress-track rounded-full overflow-hidden">
                  <div className="h-full bg-electric-lime rounded-full w-[56%]" />
                </div>
              </div>

              {/* 4. On Top: 3D Yellow Spiral Ornament (z-35, overlapping top-right of white progress card) */}
              <div className="floating-feat-spiral absolute right-[-10px] sm:right-[10px] lg:left-[406px] top-[10px] lg:top-[67px] w-[110px] sm:w-[160px] lg:w-[215px] h-[110px] sm:h-[160px] lg:h-[215px] z-[35] pointer-events-none select-none">
                <Image
                  src="/images/features/spiral-growth-yellow.png"
                  alt=""
                  width={215}
                  height={215}
                  className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(212,251,32,0.25)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* BLOCK 2: Create & Manage Courses Easily.                      */}
        {/* ============================================================== */}
        <div
          ref={block2Ref}
          className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-[48px] lg:gap-[79px]"
          data-node-id="34:1158"
        >
          {/* Left Visual Composition (Desktop 541px x 596px) */}
          <div className="feat-block-2-visual w-full max-w-[541px] flex justify-center">
            <div className="relative w-[340px] sm:w-[480px] lg:w-[541px] h-[380px] sm:h-[500px] lg:h-[596px] flex-shrink-0">
              {/* 1. Behind Instructor: 3D Yellow Spiral Ornament (z-10) */}
              <div className="floating-feat-spiral absolute right-[-10px] sm:right-[10px] lg:left-[305px] top-[40px] lg:top-[114px] w-[110px] sm:w-[160px] lg:w-[215px] h-[110px] sm:h-[160px] lg:h-[215px] z-[10] pointer-events-none select-none">
                <Image
                  src="/images/features/spiral-manage-yellow.png"
                  alt=""
                  width={215}
                  height={215}
                  className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(212,251,32,0.25)]"
                />
              </div>

              {/* 2. Center: Female Instructor Portrait (z-20) */}
              <div className="absolute left-[30px] sm:left-[50px] lg:left-[28px] top-0 w-[280px] sm:w-[380px] lg:w-[435px] h-[360px] sm:h-[500px] lg:h-[596px] z-[20] select-none pointer-events-none">
                <Image
                  src="/images/features/instructor-manage.png"
                  alt="Instructor managing courses"
                  width={435}
                  height={596}
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
                />
              </div>

              {/* 3. Floating Revenue Card 1 (Total Revenue) (z-25) */}
              <div className="floating-feat-card absolute left-0 top-[20px] sm:top-[30px] lg:top-[44px] z-[25] w-[160px] sm:w-[200px] lg:w-[232px] p-[10px] sm:p-[14px] lg:p-[16px] rounded-[16px] bg-primary-blue/95 backdrop-blur-[10px] text-white shadow-card-float flex flex-col gap-[6px] sm:gap-[8px]">
                <div className="flex flex-col">
                  <span className="font-['Satoshi',sans-serif] font-medium text-[13px] sm:text-[15px] lg:text-[16px] text-white leading-[1.2]">
                    {featuresData.management.revenueCard1.title}
                  </span>
                  <span className="font-['Satoshi',sans-serif] text-[9px] sm:text-[10px] text-subtext-gray leading-[1.2]">
                    {featuresData.management.revenueCard1.period}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-['Poppins',var(--font-poppins)] font-semibold text-[18px] sm:text-[22px] lg:text-[24px] text-white tracking-[-0.24px] leading-[1.2]">
                    {featuresData.management.revenueCard1.amount}
                  </span>
                  <span className="bg-bright-lime text-dark px-[6px] sm:px-[8px] py-[2px] rounded-[24px] text-[9px] sm:text-[10px] font-medium leading-[1.2]">
                    {featuresData.management.revenueCard1.badge}
                  </span>
                </div>
                <div className="w-full h-[6px] sm:h-[8px] bg-white/40 rounded-full overflow-hidden">
                  <div className="h-full bg-electric-lime rounded-full w-[56%]" />
                </div>
              </div>

              {/* 4. Floating Revenue Card 2 (Year to Date) (z-25) */}
              <div className="floating-feat-card absolute left-0 top-[140px] sm:top-[170px] lg:top-[194px] z-[25] w-[110px] sm:w-[125px] lg:w-[134px] p-[10px] sm:p-[12px] lg:p-[16px] rounded-[16px] bg-primary-blue/95 backdrop-blur-[10px] text-white shadow-card-float flex flex-col gap-[4px] sm:gap-[6px]">
                <div className="flex flex-col">
                  <span className="font-['Satoshi',sans-serif] font-medium text-[13px] sm:text-[15px] lg:text-[16px] text-white leading-[1.2]">
                    {featuresData.management.revenueCard2.title}
                  </span>
                  <span className="font-['Satoshi',sans-serif] text-[9px] sm:text-[10px] text-subtext-gray leading-[1.2]">
                    {featuresData.management.revenueCard2.period}
                  </span>
                </div>
                <span className="font-['Poppins',var(--font-poppins)] font-semibold text-[16px] sm:text-[20px] lg:text-[24px] text-white tracking-[-0.24px] leading-[1.2]">
                  {featuresData.management.revenueCard2.amount}
                </span>
                <span className="self-start bg-bright-lime text-dark px-[6px] sm:px-[8px] py-[2px] rounded-[24px] text-[9px] sm:text-[10px] font-medium leading-[1.2]">
                  {featuresData.management.revenueCard2.badge}
                </span>
              </div>

              {/* 5. In Front Bottom-Right: Happy Students Badge (z-30) */}
              <div className="floating-feat-card absolute right-0 sm:right-[10px] lg:left-[283px] top-[270px] sm:top-[350px] lg:top-[413px] z-[30] w-[210px] sm:w-[245px] lg:w-[258px] p-[12px] sm:p-[16px] rounded-[16px] bg-white/95 backdrop-blur-[10px] shadow-card-float border border-black/5 flex flex-col gap-[8px]">
                <div className="flex flex-col">
                  <span className="font-['Satoshi',sans-serif] font-medium text-[14px] sm:text-[16px] text-dark leading-[1.2]">
                    {featuresData.management.happyStudents.title}
                  </span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="font-['Satoshi',sans-serif] font-bold text-[11px] sm:text-[12px] text-dark">
                      {featuresData.management.happyStudents.rating}
                    </span>
                    <span className="font-['Satoshi',sans-serif] text-[11px] sm:text-[12px] text-muted-gray">
                      {featuresData.management.happyStudents.reviewsCount}
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

                {/* Overlapping Avatars */}
                <div className="flex items-center">
                  {featuresData.management.happyStudents.avatars.map(
                    (src, idx) => (
                      <div
                        key={idx}
                        className="relative w-[30px] sm:w-[38px] lg:w-[43px] h-[30px] sm:h-[38px] lg:h-[43px] rounded-full overflow-hidden ring-2 ring-white -mr-[12px] sm:-mr-[16px] flex-shrink-0"
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
                    )
                  )}
                  <div
                    className="relative w-[30px] sm:w-[38px] lg:w-[43px] h-[30px] sm:h-[38px] lg:h-[43px] rounded-full bg-electric-lime text-dark flex items-center justify-center font-bold text-[10px] sm:text-[12px] ring-2 ring-white flex-shrink-0"
                    style={{ zIndex: 10 }}
                  >
                    {featuresData.management.happyStudents.studentCountText}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text & Checklist */}
          <div className="feat-block-2-text w-full lg:w-[580px] flex flex-col items-start text-left">
            <h2
              className="font-['Poppins',var(--font-poppins)] font-semibold text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.2] text-dark tracking-[-0.44px] max-w-[420px]"
              data-node-id="34:900"
            >
              {featuresData.management.heading}
            </h2>
            <p
              className="mt-6 text-[16px] sm:text-[18px] leading-[1.6] text-pill-text font-normal max-w-[574px]"
              data-node-id="34:901"
            >
              <span className="font-['Satoshi',sans-serif] font-bold text-dark">
                {featuresData.management.brandWord}
              </span>{" "}
              {featuresData.management.description}
            </p>

            {/* Checklist */}
            <div
              className="mt-8 sm:mt-10 flex flex-col gap-[16px] items-start"
              data-node-id="34:902"
            >
              {featuresData.management.checklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-[12px]">
                  <div className="w-[24px] h-[24px] flex-shrink-0 flex items-center justify-center">
                    <Image
                      src="/icons/check-circle.svg"
                      alt="Checkmark"
                      width={24}
                      height={24}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-['Satoshi',sans-serif] font-medium text-[16px] sm:text-[18px] text-dark leading-[1.2]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
