"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, useGSAP } from "@/src/lib/gsap";

export function LoginPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Logged in successfully with ${email}!`);
  };

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      // Card entrance
      gsap.fromTo(
        ".login-card",
        { autoAlpha: 0, y: 30, scale: 0.98 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" }
      );

      // Left content entrance
      gsap.fromTo(
        ".login-left-text",
        { autoAlpha: 0, x: -30 },
        { autoAlpha: 1, x: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" }
      );

      gsap.fromTo(
        ".login-visual-card",
        { autoAlpha: 0, y: 40, scale: 0.96 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power2.out",
          delay: 0.2,
        }
      );

      // Gentle floating animation for 3D elements
      gsap.to(".login-ornament-1", {
        y: "-=10",
        rotation: "+=3",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".login-ornament-2", {
        y: "+=12",
        rotation: "-=3",
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".login-ornament-3", {
        y: "-=8",
        x: "+=5",
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      data-node-id="49:195"
      className="relative w-full min-h-screen bg-primary-blue overflow-x-hidden flex flex-col justify-between py-6 sm:py-8 lg:py-10"
    >
      {/* 1. Background Grid Pattern - 100% full coverage */}
      <div
        className="absolute inset-0 pointer-events-none z-0 w-full h-full bg-grid-lines opacity-100"
        aria-hidden="true"
      />

      {/* 2. Top Header / Brand Logo (Figma node 49:247) */}
      <header className="relative z-20 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-[10px] group transition-transform duration-200 hover:scale-[1.02]"
        >
          <div className="relative w-[28.88px] h-[31.5px] shrink-0">
            <Image
              src="/logos/logo.svg"
              alt="ByteSpace Logo"
              width={29}
              height={32}
              priority
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-clash font-bold text-[24px] text-light-gray tracking-normal">
            ByteSpace
          </span>
        </Link>

        <Link
          href="/"
          className="font-satoshi text-[14px] text-light-gray/80 hover:text-white transition-colors"
        >
          &larr; Back to Home
        </Link>
      </header>

      {/* 3. Main Center Content (Left Elements + Right Login Card) */}
      <main className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 py-8 flex flex-col xl:flex-row items-center xl:items-start justify-between gap-[48px] xl:gap-[60px]">
        {/* ================= LEFT SIDE (Figma node 49:244 + Course Cards + Badges + 3D Ornaments) ================= */}
        <div className="flex-1 w-full max-w-[620px] flex flex-col gap-[36px] xl:pt-[16px]">
          {/* Headline & Subtitle (Figma node 49:244) */}
          <div className="flex flex-col gap-[16px] text-left">
            <h2 className="login-left-text font-poppins font-semibold text-[20px] sm:text-[22px] text-light-gray tracking-[-0.2px]">
              Sign in with ease
            </h2>
            <p className="login-left-text font-satoshi font-normal text-[16px] sm:text-[18px] leading-[1.6] text-light-gray max-w-[500px]">
              Experience a seamless and efficient sign-in process that grants you
              instant access to a world of knowledge.
            </p>
          </div>

          {/* Visual Stacking Showcase (Overlapping Course Cards + Floating Badges + 3D Shapes) */}
          <div className="hidden md:block relative w-full h-[540px] select-none">
            {/* 3D Torus Ring (Figma node 49:185) */}
            <div
              className="login-ornament-1 absolute left-[80px] top-[10px] w-[140px] z-30 pointer-events-none"
              style={{ willChange: "transform" }}
            >
              <Image
                src="/images/cta/cta-torus-yellow.png"
                alt=""
                width={140}
                height={140}
                className="w-full h-auto object-contain drop-shadow-md"
              />
            </div>

            {/* Back Course Card - Build Digital Asset (Figma node 49:251) */}
            <div className="login-visual-card absolute left-[0px] top-[90px] w-[360px] lg:w-[373px] bg-white border border-card-border rounded-[24px] p-[15px] shadow-[0_12px_36px_rgba(0,0,0,0.08)] z-10">
              {/* Thumbnail */}
              <div className="relative w-full h-[195px] rounded-[12px] overflow-hidden mb-[16px]">
                <Image
                  src="/images/register/course-back.png"
                  alt="Build Digital Asset"
                  fill
                  className="object-cover"
                />
                {/* Meta pills on thumbnail */}
                <div className="absolute left-[12px] bottom-[12px] flex items-center gap-[6px]">
                  <span className="backdrop-blur-[4px] bg-[rgba(246,246,246,0.7)] px-[10px] py-[4px] rounded-[24px] font-satoshi font-medium text-[11px] text-dark">
                    17 Lessons
                  </span>
                  <span className="backdrop-blur-[4px] bg-[rgba(246,246,246,0.7)] px-[10px] py-[4px] rounded-[24px] font-satoshi font-medium text-[11px] text-dark">
                    2 hours 16 mins
                  </span>
                </div>
              </div>

              {/* Title & Author */}
              <div className="flex flex-col gap-[2px] mb-[14px]">
                <h3 className="font-poppins font-semibold text-[18px] text-dark tracking-[-0.2px]">
                  Build Digital Asset
                </h3>
                <p className="font-satoshi text-[12px] text-text-body">
                  by <span className="text-primary-blue">purepearl studio</span>
                </p>
              </div>

              {/* Bottom Info: Difficulty, Avatars, Price, Rating */}
              <div className="flex items-center justify-between pt-1 border-t border-card-border/40">
                <div className="flex items-center gap-[8px]">
                  <span className="bg-[#f5f5f6] px-[10px] py-[4px] rounded-[24px] font-satoshi font-medium text-[12px] text-[#4b4c53]">
                    Beginner
                  </span>
                  <div className="flex items-center -space-x-2">
                    {[1, 2, 3].map((num) => (
                      <div
                        key={num}
                        className="w-[26px] h-[26px] rounded-full overflow-hidden ring-2 ring-white"
                      >
                        <Image
                          src={`/images/hero/avatar-${num}.png`}
                          alt=""
                          width={26}
                          height={26}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    <div className="w-[26px] h-[26px] rounded-full bg-dark text-white font-satoshi font-medium text-[10px] flex items-center justify-center ring-2 ring-white">
                      26+
                    </div>
                  </div>
                </div>

                <div className="flex items-baseline">
                  <span className="font-poppins font-semibold text-[18px] text-primary-blue">
                    $25
                  </span>
                  <span className="font-satoshi text-[11px] text-text-body">
                    /lifetime
                  </span>
                </div>
              </div>
            </div>

            {/* Front Course Card - the Power of Big Data (Figma node 49:282) */}
            <div className="login-visual-card absolute left-[110px] lg:left-[125px] top-[0px] w-[360px] lg:w-[373px] bg-white border border-card-border rounded-[24px] p-[15px] shadow-[0_24px_50px_rgba(0,0,0,0.16)] z-20">
              {/* Thumbnail */}
              <div className="relative w-full h-[195px] rounded-[12px] overflow-hidden mb-[16px]">
                <Image
                  src="/images/register/course-front.png"
                  alt="the Power of Big Data"
                  fill
                  className="object-cover"
                />
                {/* Meta pills on thumbnail */}
                <div className="absolute left-[12px] bottom-[12px] flex items-center gap-[6px]">
                  <span className="backdrop-blur-[4px] bg-[rgba(246,246,246,0.7)] px-[10px] py-[4px] rounded-[24px] font-satoshi font-medium text-[11px] text-dark">
                    17 Lessons
                  </span>
                  <span className="backdrop-blur-[4px] bg-[rgba(246,246,246,0.7)] px-[10px] py-[4px] rounded-[24px] font-satoshi font-medium text-[11px] text-dark">
                    2 hours 16 mins
                  </span>
                  <span className="backdrop-blur-[4px] bg-[rgba(246,246,246,0.7)] px-[10px] py-[4px] rounded-[24px] font-satoshi font-medium text-[11px] text-dark">
                    59 Comments
                  </span>
                </div>
              </div>

              {/* Title & Author */}
              <div className="flex items-start justify-between mb-[14px]">
                <div className="flex flex-col gap-[2px]">
                  <h3 className="font-poppins font-semibold text-[18px] text-dark tracking-[-0.2px]">
                    the Power of Big Data
                  </h3>
                  <p className="font-satoshi text-[12px] text-text-body">
                    by{" "}
                    <span className="text-primary-blue">purepearl studio</span>
                  </p>
                </div>
                <div className="flex items-center gap-1 font-satoshi font-medium text-[16px] text-dark">
                  <span>4.5</span>
                  <span className="text-yellow-400">★</span>
                </div>
              </div>

              {/* Bottom Info: Difficulty, Avatars, Price */}
              <div className="flex items-center justify-between pt-1 border-t border-card-border/40">
                <div className="flex items-center gap-[8px]">
                  <span className="bg-[#f5f5f6] px-[10px] py-[4px] rounded-[24px] font-satoshi font-medium text-[12px] text-[#4b4c53]">
                    Beginner
                  </span>
                  <div className="flex items-center -space-x-2">
                    {[1, 2, 3, 4].map((num) => (
                      <div
                        key={num}
                        className="w-[26px] h-[26px] rounded-full overflow-hidden ring-2 ring-white"
                      >
                        <Image
                          src={`/images/hero/avatar-${num}.png`}
                          alt=""
                          width={26}
                          height={26}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    <div className="w-[26px] h-[26px] rounded-full bg-dark text-white font-satoshi font-medium text-[10px] flex items-center justify-center ring-2 ring-white">
                      26+
                    </div>
                  </div>
                </div>

                <div className="flex items-baseline">
                  <span className="font-poppins font-semibold text-[18px] text-primary-blue">
                    $25
                  </span>
                  <span className="font-satoshi text-[11px] text-text-body">
                    /lifetime
                  </span>
                </div>
              </div>
            </div>

            {/* Happy Students Floating Badge (Figma node 49:313) */}
            <div className="login-visual-card absolute left-[210px] lg:left-[240px] top-[430px] w-[260px] backdrop-blur-[10px] bg-electric-lime rounded-[16px] p-[16px] shadow-[0_16px_36px_rgba(0,0,0,0.14)] z-30">
              <div className="flex items-center justify-between mb-2">
                <span className="font-satoshi font-medium text-[16px] text-dark">
                  Happy Students
                </span>
                <span className="font-satoshi font-bold text-[12px] text-dark flex items-center gap-1">
                  4.5 (240) <span className="text-primary-blue">★</span>
                </span>
              </div>
              <div className="flex items-center -space-x-3">
                {[1, 2, 3, 4].map((num) => (
                  <div
                    key={num}
                    className="w-[38px] h-[38px] rounded-full overflow-hidden ring-2 ring-white shrink-0"
                  >
                    <Image
                      src={`/images/hero/avatar-${num}.png`}
                      alt=""
                      width={38}
                      height={38}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-[38px] h-[38px] rounded-full bg-dark text-white font-satoshi font-bold text-[12px] flex items-center justify-center ring-2 ring-white shrink-0">
                  2K+
                </div>
              </div>
            </div>

            {/* 3D Yellow Pyramid (Figma node 49:190) */}
            <div
              className="login-ornament-2 absolute left-[-30px] top-[380px] w-[188px] z-30 pointer-events-none"
              style={{ willChange: "transform" }}
            >
              <Image
                src="/images/cta/cta-pyramid-yellow.png"
                alt=""
                width={188}
                height={188}
                className="w-full h-auto object-contain drop-shadow-lg"
              />
            </div>

            {/* 3D Silver Spiral (Figma node 49:180) */}
            <div
              className="login-ornament-3 absolute left-[390px] lg:left-[430px] top-[300px] w-[160px] z-30 pointer-events-none"
              style={{ willChange: "transform" }}
            >
              <div className="-scale-x-100 w-full h-full">
                <Image
                  src="/images/cta/cta-spiral-silver.png"
                  alt=""
                  width={160}
                  height={160}
                  className="w-full h-auto object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE: LOGIN FORM (Figma node 49:220) ================= */}
        <div className="login-card w-full max-w-[579px] bg-white rounded-[24px] p-[32px] sm:p-[48px] lg:p-[60px] shadow-[0_24px_64px_rgba(0,0,0,0.18)] flex flex-col justify-between min-h-[640px] lg:h-[784px]">
          {/* Header & Inputs */}
          <div className="flex flex-col gap-[36px] sm:gap-[40px]">
            {/* Title Area (Figma node 49:223) */}
            <div className="flex flex-col items-start">
              <span className="font-satoshi font-normal text-[16px] sm:text-[18px] leading-[1.6] text-primary-blue">
                Sign In
              </span>
              <h1 className="font-poppins font-semibold text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.2] tracking-[-0.44px] text-dark mt-1">
                Welcome Back
              </h1>
            </div>

            {/* Form Fields (Figma node 49:226) */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
              {/* Email */}
              <div className="flex flex-col gap-[8px] text-left">
                <label
                  htmlFor="email"
                  className="font-satoshi font-medium text-[14px] leading-[1.2] text-dark"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  required
                  className="w-full h-[52px] bg-white border border-[#e5e6e8] rounded-[12px] px-[24px] font-satoshi text-[16px] text-dark placeholder:text-[#82868e] focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-[8px] text-left">
                <label
                  htmlFor="password"
                  className="font-satoshi font-medium text-[14px] leading-[1.2] text-dark"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  required
                  className="w-full h-[52px] bg-white border border-[#e5e6e8] rounded-[12px] px-[24px] font-satoshi text-[16px] text-dark placeholder:text-[#82868e] focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                />
              </div>

              {/* Sign In CTA Button (Figma node 49:239) */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-electric-lime text-dark font-satoshi font-medium text-[18px] leading-[1.2] px-[28px] py-[14px] rounded-[24px] shadow-sm hover:brightness-105 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center justify-center"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>

          {/* Bottom Social Login & Auth Switcher (Figma node 50:362 & 49:241) */}
          <div className="flex flex-col gap-[28px] items-center pt-6">
            {/* "or" Divider Line (Figma node 50:349) */}
            <div className="w-full flex items-center justify-center gap-[12px]">
              <div className="flex-1 h-[1px] bg-[#e5e6e8]" />
              <span className="font-satoshi font-normal text-[16px] text-[#888888] px-2">
                or
              </span>
              <div className="flex-1 h-[1px] bg-[#e5e6e8]" />
            </div>

            {/* Social Login Buttons (Figma node 50:353) */}
            <div className="flex items-center justify-center gap-[16px]">
              {/* Facebook Button (node 50:354) */}
              <button
                type="button"
                aria-label="Sign in with Facebook"
                className="w-[72px] h-[72px] rounded-[24px] border border-[#d1d1d1] flex items-center justify-center hover:bg-black/5 hover:border-black/30 hover:scale-[1.03] active:scale-[0.97] transition-all cursor-pointer shadow-sm"
              >
                <div className="w-[40px] h-[40px] relative">
                  <Image
                    src="/icons/social/facebook.svg"
                    alt="Facebook"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
              </button>

              {/* Google Button (node 50:358) */}
              <button
                type="button"
                aria-label="Sign in with Google"
                className="w-[72px] h-[72px] rounded-[24px] border border-[#d1d1d1] flex items-center justify-center hover:bg-black/5 hover:border-black/30 hover:scale-[1.03] active:scale-[0.97] transition-all cursor-pointer shadow-sm"
              >
                <div className="w-[40px] h-[40px] relative">
                  <Image
                    src="/icons/social/google.svg"
                    alt="Google"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
              </button>
            </div>

            {/* Auth Switcher (Figma node 49:241) */}
            <div className="flex items-center justify-center gap-1 font-satoshi text-[16px] leading-[1.6]">
              <span className="text-[#888888]">New user?</span>
              <Link
                href="/signup"
                className="text-primary-blue font-medium hover:underline transition-colors"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* 4. Bottom Spacing */}
      <div className="h-4" />
    </div>
  );
}
