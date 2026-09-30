"use client";

import React, { useRef, useState } from "react";
import {
  coursesHeaderData,
  courseCategoryPills,
  coursesListData,
} from "@/src/data/courses";
import { CourseCard } from "@/src/components/ui/CourseCard";
import { gsap, useGSAP } from "@/src/lib/gsap";

export function FeaturedCourses() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  const [activeCategory, setActiveCategory] = useState("featured");

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
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
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
        ".category-pill-item",
        { opacity: 0, y: 15, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.03,
          ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: pillsRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".course-card-wrapper",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: cardsGridRef.current,
            start: "top 80%",
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
      className="w-full bg-white py-[80px] sm:py-[100px] lg:py-[120px] flex flex-col items-center overflow-hidden"
      aria-label="Popular Courses"
      data-node-id="12:101"
    >
      <div className="w-full max-w-[1440px] px-6 sm:px-10 lg:px-12 flex flex-col items-center">

        <div
          ref={headerRef}
          className="flex flex-col items-center text-center max-w-[920px]"
        >
          <h2
            className="font-['Poppins',var(--font-poppins)] font-semibold text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.2] text-heading-dark tracking-[-0.44px] max-w-[620px]"
            data-node-id="11:65"
          >
            {coursesHeaderData.title}
          </h2>
          <p
            className="mt-4 sm:mt-5 text-[16px] sm:text-[18px] leading-[1.6] text-muted-gray font-normal"
            data-node-id="11:64"
          >
            {coursesHeaderData.subtitle}
          </p>
        </div>

        <div
          ref={pillsRef}
          className="mt-[36px] sm:mt-[42px] w-full flex flex-col items-center gap-[16px]"
          data-name="Tab_Categories_Container"
        >

          <div
            className="flex flex-wrap items-center justify-center gap-[12px] sm:gap-[16px]"
            data-node-id="21:33"
            data-name="Tab_Categories"
          >
            {courseCategoryPills.row1.map((pill) => {
              const isActive = activeCategory === pill.id;
              return (
                <button
                  key={pill.id}
                  onClick={() => setActiveCategory(pill.id)}
                  type="button"
                  className={`category-pill-item px-[16px] py-[12px] rounded-[24px] text-[15px] sm:text-[16px] font-medium leading-[1.2] transition-all duration-200 select-none ${
                    isActive
                      ? "bg-electric-lime text-dark font-medium shadow-sm"
                      : "bg-light-gray text-pill-text hover:bg-[#eaebee] hover:text-dark"
                  }`}
                >
                  {pill.label}
                </button>
              );
            })}
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-[12px] sm:gap-[16px]"
            data-node-id="21:56"
            data-name="Frame 6"
          >
            {courseCategoryPills.row2.map((pill) => {
              const isActive = activeCategory === pill.id;
              return (
                <button
                  key={pill.id}
                  onClick={() => setActiveCategory(pill.id)}
                  type="button"
                  className={`category-pill-item px-[16px] py-[12px] rounded-[24px] text-[15px] sm:text-[16px] font-medium leading-[1.2] transition-all duration-200 select-none ${
                    isActive
                      ? "bg-electric-lime text-dark font-medium shadow-sm"
                      : "bg-light-gray text-pill-text hover:bg-[#eaebee] hover:text-dark"
                  }`}
                >
                  {pill.label}
                </button>
              );
            })}
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-[12px] sm:gap-[16px]"
            data-node-id="21:63"
            data-name="Frame 7"
          >
            {courseCategoryPills.row3.map((pill) => {
              const isActive = activeCategory === pill.id;
              return (
                <button
                  key={pill.id}
                  onClick={() => setActiveCategory(pill.id)}
                  type="button"
                  className={`category-pill-item px-[16px] py-[12px] rounded-[24px] text-[15px] sm:text-[16px] font-medium leading-[1.2] transition-all duration-200 select-none ${
                    isActive
                      ? "bg-electric-lime text-dark font-medium shadow-sm"
                      : pill.isMore
                      ? "bg-transparent text-pill-text hover:text-dark px-[12px]"
                      : "bg-light-gray text-pill-text hover:bg-[#eaebee] hover:text-dark"
                  }`}
                >
                  {pill.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          ref={cardsGridRef}
          className="mt-[48px] sm:mt-[60px] lg:mt-[72px] w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[32px] lg:gap-[40px] justify-items-center"
          data-node-id="33:683"
          data-name="Frame 8"
        >
          {coursesListData.map((course) => (
            <div
              key={course.id}
              className="course-card-wrapper w-full flex justify-center"
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
