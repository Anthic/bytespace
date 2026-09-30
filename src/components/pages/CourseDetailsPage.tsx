"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { courseDetailsData } from "@/src/data/courseDetails";
import { gsap, useGSAP } from "@/src/lib/gsap";

export function CourseDetailsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [bannerHeight, setBannerHeight] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("About");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  // Dynamically ensure blue banner extends exactly to the tabs boundary
  React.useEffect(() => {
    const updateBannerHeight = () => {
      if (tabsRef.current && containerRef.current) {
        const tabsRect = tabsRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const relativeTop = tabsRect.top - containerRect.top;
        // 8px breathing space above tabs
        setBannerHeight(Math.round(relativeTop - 8));
      }
    };

    updateBannerHeight();
    window.addEventListener("resize", updateBannerHeight);
    // Re-check after images/fonts settle
    const timer = setTimeout(updateBannerHeight, 300);
    return () => {
      window.removeEventListener("resize", updateBannerHeight);
      clearTimeout(timer);
    };
  }, []);

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      // Animate hero text
      gsap.fromTo(
        heroContentRef.current,
        { autoAlpha: 0, y: 25 },
        { autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out" }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full bg-white relative flex flex-col overflow-x-hidden selection:bg-electric-lime selection:text-dark"
      data-node-id="55:4066"
      data-name="Course Details"
    >
      {/* 1. BLUE HERO BANNER (Node 55:4160) - Extends behind the video across all screens */}
      <div
        className="absolute top-0 left-0 w-full h-[770px] sm:h-[895px] lg:h-[957px] bg-[#003be2] bg-grid-lines pointer-events-none z-0 transition-[height] duration-200"
        style={bannerHeight ? { height: `${bannerHeight}px` } : undefined}
        data-node-id="55:4160"
        data-name="Hero_Banner_Background"
      />

      {/* Reusable Navbar */}
      <div className="relative z-20 w-full">
        <Navbar />
      </div>

      {/* Hero Top Content: Title, Badges, Share (Node 55:4183) */}
      <div
        ref={heroContentRef}
        className="relative z-10 w-full max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-6 pt-[24px] sm:pt-[40px] pb-[32px] sm:pb-[40px] flex flex-col"
        data-node-id="55:4183"
      >
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-[24px]">
          {/* Title & Author Info (Node 55:4184) */}
          <div className="flex flex-col gap-[20px] sm:gap-[24px] max-w-[760px]">
            <div className="flex flex-col gap-[8px]" data-node-id="55:4185">
              <h1
                className="font-['Poppins',var(--font-poppins)] font-semibold text-[28px] sm:text-[36px] text-light-gray leading-[1.2] tracking-[-0.36px]"
                data-node-id="55:4186"
              >
                {courseDetailsData.title}
              </h1>
              <p
                className="font-['Poppins',var(--font-poppins)] text-[16px] sm:text-[20px] text-light-gray/90 leading-[1.3] tracking-[-0.2px]"
                data-node-id="55:4187"
              >
                {courseDetailsData.subtitle}
              </p>
            </div>

            {/* Author */}
            <div
              className="font-['Satoshi',sans-serif] text-[16px] sm:text-[18px] text-[#f1f4fe] flex items-center gap-1.5"
              data-node-id="55:4188"
            >
              <span>{courseDetailsData.instructor.prefix}</span>
              <Link
                href="#profile"
                className="text-electric-lime font-medium hover:underline"
              >
                {courseDetailsData.instructor.name}
              </Link>
            </div>

            {/* Badges Row (Node 55:4189) */}
            <div
              className="flex flex-wrap items-center gap-[10px] sm:gap-[16px]"
              data-node-id="55:4189"
            >
              {/* Level Badge */}
              <div
                className="backdrop-blur-[20px] bg-white px-[20px] sm:px-[24px] py-[8px] rounded-[24px] flex items-center gap-[8px] shadow-xs"
                data-node-id="55:4190"
              >
                <Image
                  src="/icons/course-details/intermediate.svg"
                  alt="Level"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px]"
                />
                <span className="font-['Satoshi',sans-serif] font-medium text-[15px] sm:text-[16px] text-dark">
                  {courseDetailsData.badges.level}
                </span>
              </div>

              {/* Rating Reviews Badge */}
              <div
                className="backdrop-blur-[20px] bg-white px-[20px] sm:px-[24px] py-[8px] rounded-[24px] flex items-center gap-[8px] shadow-xs"
                data-node-id="55:4193"
              >
                <Image
                  src="/icons/course-details/star.svg"
                  alt="Rating"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px]"
                />
                <span className="font-['Satoshi',sans-serif] font-medium text-[15px] sm:text-[16px] text-dark">
                  {courseDetailsData.badges.reviews}
                </span>
              </div>

              {/* Students Badge */}
              <div
                className="backdrop-blur-[20px] bg-white px-[20px] sm:px-[24px] py-[8px] rounded-[24px] flex items-center gap-[8px] shadow-xs"
                data-node-id="55:4196"
              >
                <Image
                  src="/icons/course-details/students.svg"
                  alt="Students"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px]"
                />
                <span className="font-['Satoshi',sans-serif] font-medium text-[15px] sm:text-[16px] text-dark">
                  {courseDetailsData.badges.students}
                </span>
              </div>
            </div>
          </div>

          {/* Share Button (Node 55:4199) */}
          <div className="shrink-0 self-start">
            <button
              type="button"
              onClick={handleShare}
              className="backdrop-blur-[20px] bg-electric-lime hover:brightness-105 active:scale-95 px-[24px] py-[8px] h-[44px] rounded-[24px] flex items-center gap-[8px] shadow-sm transition-all cursor-pointer select-none"
              data-node-id="55:4199"
            >
              <Image
                src="/icons/course-details/share.svg"
                alt="Share"
                width={20}
                height={20}
                className="w-[20px] h-[20px]"
              />
              <span className="font-['Satoshi',sans-serif] font-medium text-[16px] text-dark">
                {copiedShare ? "Copied Link!" : "Share"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN TWO-COLUMN CONTENT: Video (inside blue) + Left Details (in white) & Right Sticky Card */}
      <div className="relative z-10 w-full max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-6 pb-[80px] sm:pb-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] lg:gap-[40px] items-start">
          {/* LEFT COLUMN (7 of 12 cols, width ~720px) */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Video Preview Box (Node 55:4202) - Sits completely on the Blue Banner with 62px blue space below on desktop */}
            <div
              className="relative w-full h-[280px] sm:h-[380px] lg:h-[479px] rounded-[24px] overflow-hidden bg-[#443131] shadow-2xl group flex-shrink-0 mb-[36px] sm:mb-[48px] lg:mb-[62px]"
              data-node-id="55:4202"
            >
              <Image
                src="/images/course-details/video-thumb.png"
                alt={courseDetailsData.title}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Central Play Button (Node 55:4203) */}
              <button
                type="button"
                onClick={() => setIsVideoPlaying(true)}
                aria-label="Play Course Video Preview"
                className="absolute inset-0 m-auto w-[96px] sm:w-[104px] h-[96px] sm:h-[104px] backdrop-blur-[20px] bg-[rgba(61,61,61,0.28)] hover:bg-[rgba(61,61,61,0.4)] border border-[#4f4f4f] rounded-[24px] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl cursor-pointer"
                data-node-id="55:4203"
              >
                <div className="w-[60px] sm:w-[72px] h-[60px] sm:h-[72px] relative flex items-center justify-center">
                  <Image
                    src="/icons/course-details/play.svg"
                    alt="Play"
                    width={72}
                    height={72}
                    className="w-full h-full object-contain"
                  />
                </div>
              </button>
            </div>

            {/* WHITE SECTION CONTENT (Node 55:4116) - Starts right at the white background (y=957px) */}
            <div className="flex flex-col pt-1">
              {/* Tabs: About, Lessons, Reviews (Node 55:4118) */}
              <div
                ref={tabsRef}
                className="flex items-center gap-[12px] sm:gap-[16px]"
                data-node-id="55:4118"
              >
                {courseDetailsData.tabs.map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`h-[43px] px-[16px] sm:px-[20px] py-[12px] rounded-[24px] font-['Satoshi',sans-serif] text-[15px] sm:text-[16px] font-medium leading-[1.2] transition-all cursor-pointer select-none ${
                        isActive
                          ? "bg-electric-lime text-dark shadow-xs"
                          : "bg-light-gray text-pill-text hover:bg-[#eaebee] hover:text-dark"
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              {/* Conditional Content based on active tab */}
              {activeTab === "About" && (
                <div
                  className="mt-[32px] sm:mt-[40px] flex flex-col gap-[20px] sm:gap-[24px]"
                  data-node-id="55:4125"
                >
                  <h2
                    className="font-['Poppins',var(--font-poppins)] font-semibold text-[20px] text-dark tracking-[-0.2px] leading-[1.2]"
                    data-node-id="55:4126"
                  >
                    Description
                  </h2>
                  <div
                    className="font-['Satoshi',sans-serif] text-[16px] text-pill-text leading-[1.6] flex flex-col gap-[16px] max-w-[723px]"
                    data-node-id="55:4127"
                  >
                    {courseDetailsData.description.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Sneak Peak Section (Node 55:4128) */}
                  <div className="mt-[16px] flex flex-col gap-[20px]">
                    <h2
                      className="font-['Poppins',var(--font-poppins)] font-semibold text-[20px] text-dark tracking-[-0.2px] leading-[1.2]"
                      data-node-id="55:4128"
                    >
                      Sneak Peak
                    </h2>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-4 gap-[12px] sm:gap-[16px] w-full max-w-[725px]"
                      data-node-id="55:4129"
                    >
                      {courseDetailsData.sneakPeakImages.map((src, idx) => (
                        <div
                          key={idx}
                          className="relative w-full h-[120px] sm:h-[125px] rounded-[16px] overflow-hidden bg-[#d9d9d9] shadow-sm hover:scale-105 transition-transform duration-300"
                          data-node-id={`55:413${idx}`}
                        >
                          <Image
                            src={src}
                            alt={`Sneak peak ${idx + 1}`}
                            fill
                            sizes="(max-width: 640px) 50vw, 167px"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Points Section (Node 55:4134) */}
                  <div className="mt-[16px] flex flex-col gap-[20px]">
                    <h2
                      className="font-['Poppins',var(--font-poppins)] font-semibold text-[20px] text-dark tracking-[-0.2px] leading-[1.2]"
                      data-node-id="55:4134"
                    >
                      Key Points
                    </h2>
                    <div
                      className="flex flex-col gap-[12px]"
                      data-node-id="55:4135"
                    >
                      {courseDetailsData.keyPoints.map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-[10px]"
                          data-node-id={`55:413${idx + 6}`}
                        >
                          <div className="w-[24px] h-[24px] shrink-0 relative flex items-center justify-center">
                            <Image
                              src="/icons/course-details/check-circle.svg"
                              alt="Check"
                              width={24}
                              height={24}
                              className="w-[20px] h-[20px] object-contain"
                            />
                          </div>
                          <span className="font-['Satoshi',sans-serif] text-[16px] text-pill-text leading-[1.6]">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Lesson Tab Content (Node 60:624) */}
              {activeTab === "Lesson" && (
                <div
                  className="mt-[32px] sm:mt-[40px] flex flex-col gap-[24px] items-start"
                  data-node-id="60:624"
                  data-name="Lesson Tab Content"
                >
                  {/* Explore the Modules */}
                  <h2
                    className="font-['Poppins',var(--font-poppins)] font-semibold text-[20px] text-[#242528] tracking-[-0.2px] leading-[1.2]"
                    data-node-id="60:625"
                  >
                    {courseDetailsData.lessonTabContent.exploreModules.title}
                  </h2>
                  <p
                    className="font-['Satoshi',sans-serif] text-[16px] text-[#4b4c53] leading-[1.6] max-w-[723px]"
                    data-node-id="60:626"
                  >
                    {courseDetailsData.lessonTabContent.exploreModules.description}
                  </p>

                  {/* Lesson List */}
                  <h2
                    className="font-['Poppins',var(--font-poppins)] font-semibold text-[20px] text-[#242528] tracking-[-0.2px] leading-[1.2] pt-[8px]"
                    data-node-id="60:627"
                  >
                    {courseDetailsData.lessonTabContent.lessonList.title}
                  </h2>

                  <div className="flex flex-col gap-[20px] sm:gap-[24px] w-full max-w-[723px]">
                    {courseDetailsData.lessonTabContent.lessonList.modules.map((mod) => (
                      <div
                        key={mod.id}
                        className="flex items-start sm:items-center gap-[13px]"
                      >
                        {/* Outlined Videocam Icon Box (Node 60:629 / 60:630) */}
                        <div
                          className="bg-[#d4fb20] shrink-0 w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] rounded-[20px] sm:rounded-[24px] flex items-center justify-center p-[12px] sm:p-[16px] shadow-xs"
                          data-name="Videocam Icon Box"
                        >
                          <div className="w-[36px] sm:w-[40px] h-[36px] sm:h-[40px] relative flex items-center justify-center">
                            <Image
                              src="/icons/course-details/videocam.svg"
                              alt="Lesson video"
                              width={40}
                              height={40}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>

                        {/* Title & Description (Node 60:631) */}
                        <div className="flex flex-col gap-[4px] flex-1">
                          <h3 className="font-['Satoshi',sans-serif] font-medium text-[16px] text-[#242528] leading-[1.2]">
                            {mod.title}
                          </h3>
                          <p className="font-['Satoshi',sans-serif] text-[16px] text-[#4b4c53] leading-[1.6]">
                            {mod.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Lesson Content (Node 60:664) */}
                  <h2
                    className="font-['Poppins',var(--font-poppins)] font-semibold text-[20px] text-[#242528] tracking-[-0.2px] leading-[1.2] pt-[8px]"
                    data-node-id="60:664"
                  >
                    {courseDetailsData.lessonTabContent.lessonContent.title}
                  </h2>
                  <p
                    className="font-['Satoshi',sans-serif] text-[16px] text-[#4b4c53] leading-[1.6] max-w-[723px]"
                    data-node-id="60:665"
                  >
                    {courseDetailsData.lessonTabContent.lessonContent.description}
                  </p>

                  {/* Lesson Progress Tracking (Node 60:666) */}
                  <h2
                    className="font-['Poppins',var(--font-poppins)] font-semibold text-[20px] text-[#242528] tracking-[-0.2px] leading-[1.2] pt-[8px]"
                    data-node-id="60:666"
                  >
                    {courseDetailsData.lessonTabContent.progressTracking.title}
                  </h2>
                  <p
                    className="font-['Satoshi',sans-serif] text-[16px] text-[#4b4c53] leading-[1.6] max-w-[723px]"
                    data-node-id="60:667"
                  >
                    {courseDetailsData.lessonTabContent.progressTracking.description}
                  </p>

                  {/* Progress Card (Node 60:668) */}
                  <div
                    className="backdrop-blur-[10px] bg-white border border-[#ced0d3] flex flex-col gap-[8px] p-[16px] rounded-[16px] w-full max-w-[723px] shadow-xs"
                    data-node-id="60:668"
                  >
                    <span
                      className="font-['Satoshi',sans-serif] font-medium text-[#242528] text-[14px] leading-[1.2]"
                      data-node-id="60:669"
                    >
                      {courseDetailsData.lessonTabContent.progressTracking.label}
                    </span>
                    <span
                      className="font-['Poppins',var(--font-poppins)] font-semibold text-[#242528] text-[36px] tracking-[-0.36px] leading-[1.2]"
                      data-node-id="60:671"
                    >
                      {courseDetailsData.lessonTabContent.progressTracking.percentage}%
                    </span>
                    <div
                      className="w-full h-[8px] bg-[#e5e6e8] rounded-[24px] overflow-hidden relative"
                      data-node-id="60:672"
                    >
                      <div
                        className="h-full bg-[#d4fb20] rounded-[24px] transition-all duration-500 ease-out"
                        style={{
                          width: `${courseDetailsData.lessonTabContent.progressTracking.percentage}%`,
                        }}
                        data-node-id="60:674"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Reviews Tab Content */}
              {activeTab === "Reviews" && (
                <div
                  className="mt-[32px] sm:mt-[40px] flex flex-col gap-[24px] max-w-[723px]"
                  data-name="Reviews Tab Content"
                >
                  <h2 className="font-['Poppins',var(--font-poppins)] font-semibold text-[20px] text-dark tracking-[-0.2px] leading-[1.2]">
                    Student Reviews
                  </h2>
                  <div className="flex items-center gap-[16px] p-[20px] rounded-[16px] bg-[#f5f5f6] border border-[#ced0d3]">
                    <div className="text-center pr-4 border-r border-[#ced0d3]">
                      <span className="font-['Poppins',var(--font-poppins)] font-bold text-[36px] text-dark leading-none">
                        4.8
                      </span>
                      <p className="font-['Satoshi',sans-serif] text-[13px] text-[#4b4c53] mt-1">
                        out of 5
                      </p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1 text-electric-lime">
                        {"★".repeat(5)}
                      </div>
                      <p className="font-['Satoshi',sans-serif] text-[15px] text-[#4b4c53]">
                        Based on 172 verified student ratings
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Summary, Lessons & Enrollment Card (Node 55:4206) (5 of 12 cols) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <aside
              className="w-full max-w-[440px] bg-white border border-[#ced0d3] rounded-[24px] p-[28px] sm:p-[40px] shadow-2xl flex flex-col gap-[24px] sticky top-[24px]"
              data-node-id="55:4206"
            >
              {/* 1. Lessons Breakdown */}
              <div className="flex flex-col gap-[16px]">
                <h3
                  className="font-['Poppins',var(--font-poppins)] font-semibold text-[20px] text-dark tracking-[-0.2px] leading-[1.2]"
                  data-node-id="55:4209"
                >
                  {courseDetailsData.lessonsSummary.totalLessons} (
                  {courseDetailsData.lessonsSummary.totalDuration})
                </h3>

                <div
                  className="flex flex-col gap-[12px]"
                  data-node-id="55:4210"
                >
                  {courseDetailsData.lessonsSummary.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="flex items-start justify-between gap-[8px] text-[16px]"
                    >
                      <div className="flex items-start gap-[8px] font-['Satoshi',sans-serif] font-medium text-dark flex-1">
                        <span className="w-[24px] shrink-0 text-muted-gray">
                          {lesson.number}
                        </span>
                        <span className="leading-[1.3]">{lesson.title}</span>
                      </div>
                      <span className="font-['Satoshi',sans-serif] text-primary-blue shrink-0 whitespace-nowrap">
                        {lesson.duration}
                      </span>
                    </div>
                  ))}
                  <p className="font-['Satoshi',sans-serif] text-[#4b4c53] text-[16px] pt-1">
                    {courseDetailsData.lessonsSummary.moreVideosCount}
                  </p>
                </div>
              </div>

              {/* 2. CTA & Pricing Row */}
              <div className="flex flex-col gap-[16px] pt-2">
                <p className="font-['Satoshi',sans-serif] text-[#4b4c53] text-[16px] leading-[1.5]">
                  {courseDetailsData.callToAction}
                </p>

                <div className="flex items-baseline gap-1">
                  <span className="font-['Poppins',var(--font-poppins)] font-semibold text-[36px] text-primary-blue tracking-[-0.36px] leading-[1]">
                    {courseDetailsData.pricing.amount}
                  </span>
                  <span className="font-['Satoshi',sans-serif] text-[#4b4c53] text-[16px]">
                    {courseDetailsData.pricing.period}
                  </span>
                </div>

                <button
                  type="button"
                  className="w-full h-[52px] bg-electric-lime hover:brightness-105 active:scale-[0.98] text-dark font-['Satoshi',sans-serif] font-medium text-[18px] rounded-[24px] flex items-center justify-center transition-all shadow-sm cursor-pointer"
                  data-node-id="55:4232"
                >
                  Enroll Now
                </button>
              </div>

              {/* 3. Course Inclusions */}
              <div className="flex flex-col gap-[16px] pt-2">
                <h3
                  className="font-['Poppins',var(--font-poppins)] font-semibold text-[20px] text-dark tracking-[-0.2px] leading-[1.2]"
                  data-node-id="55:4234"
                >
                  This course include
                </h3>
                <div className="flex flex-col gap-[12px]">
                  {courseDetailsData.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-[10px]">
                      <div className="w-[24px] h-[24px] shrink-0 relative flex items-center justify-center">
                        <Image
                          src={feature.icon}
                          alt=""
                          width={24}
                          height={24}
                          className="w-[20px] h-[20px] object-contain"
                        />
                      </div>
                      <span className="font-['Satoshi',sans-serif] text-[16px] text-pill-text leading-[1.6]">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#ced0d3]" />

              {/* 4. Instructor Profile Card */}
              <div
                id="profile"
                className="flex flex-col gap-[16px]"
                data-node-id="55:4249"
              >
                <div className="flex items-center gap-[14px]">
                  <div className="w-[52px] h-[52px] rounded-full overflow-hidden shrink-0 relative bg-light-gray">
                    <Image
                      src={courseDetailsData.instructor.avatar}
                      alt={courseDetailsData.instructor.name}
                      width={52}
                      height={52}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-['Satoshi',sans-serif] font-medium text-[18px] text-dark leading-[1.2]">
                      {courseDetailsData.instructor.name}
                    </h4>
                    <p className="font-['Satoshi',sans-serif] text-[14px] text-pill-text leading-[1.4]">
                      {courseDetailsData.instructor.role}
                    </p>
                  </div>
                </div>

                <p className="font-['Satoshi',sans-serif] text-[14px] text-[#4b4c53] leading-[1.5]">
                  {courseDetailsData.instructor.bioCallout}
                </p>

                <Link
                  href="#profile"
                  className="w-fit border border-[#ced0d3] hover:border-dark px-[16px] py-[8px] rounded-[24px] font-['Satoshi',sans-serif] font-medium text-[15px] text-pill-text hover:text-dark transition-colors inline-flex items-center justify-center"
                  data-node-id="55:4256"
                >
                  See Full Profile
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Video Modal if clicked */}
      {isVideoPlaying && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 z-10 text-white bg-white/20 hover:bg-white/40 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-all"
            >
              ✕
            </button>
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-electric-lime flex items-center justify-center mx-auto mb-4 text-dark font-bold text-2xl">
                ▶
              </div>
              <h3 className="text-white text-2xl font-bold font-poppins mb-2">
                Course Preview Video
              </h3>
              <p className="text-light-gray/80 max-w-md mx-auto">
                Introduction to Digital Assets - 12 mins teaser preview
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 3. REUSABLE FOOTER */}
      <Footer />
    </div>
  );
}
