"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { creatorProfileData } from "@/src/data/creatorProfile";

export function CreatorProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(
    parseInt(creatorProfileData.stats.followersCount, 10)
  );
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const handleFollowToggle = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowersCount((prev) => prev - 1);
    } else {
      setIsFollowing(true);
      setFollowersCount((prev) => prev + 1);
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-white relative flex flex-col overflow-x-hidden selection:bg-electric-lime selection:text-dark"
      data-node-id="60:1878"
      data-name="Creator Profile"
    >
      {/* 1. BLUE HERO BANNER (Node 60:2155) */}
      <section
        className="relative w-full bg-[#003be2] bg-grid-lines text-white pb-[60px] sm:pb-[80px]"
        data-node-id="60:2155"
      >
        {/* Reusable Navbar */}
        <div className="relative z-20 w-full">
          <Navbar />
        </div>

        {/* Hero Creator Info (Node 60:2171) */}
        <div
          className="relative z-10 w-full max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-6 pt-[24px] sm:pt-[44px] flex flex-col gap-[32px] sm:gap-[40px]"
          data-node-id="60:2171"
        >
          {/* Creator Header Row: Avatar, Name, Badge, Role (Node 60:2174) */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-[24px]">
            <div className="flex flex-col sm:flex-row sm:items-center gap-[20px] sm:gap-[24px]">
              {/* Creator Avatar (Node 60:2175) */}
              <div
                className="relative rounded-[24px] overflow-hidden shrink-0 w-[84px] h-[84px] sm:w-[96px] sm:h-[96px] bg-white/10 shadow-lg border border-white/20"
                data-node-id="60:2175"
              >
                <Image
                  src={creatorProfileData.avatar}
                  alt={creatorProfileData.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Name, Badge, Role (Node 60:2179) */}
              <div className="flex flex-col gap-[6px] sm:gap-[8px]">
                <div className="flex flex-wrap items-center gap-[10px] sm:gap-[12px]">
                  <h1
                    className="font-['Poppins',var(--font-poppins)] font-semibold text-[28px] sm:text-[36px] text-light-gray tracking-[-0.36px] leading-[1.2]"
                    data-node-id="60:2181"
                  >
                    {creatorProfileData.name}
                  </h1>
                  <span
                    className="backdrop-blur-[20px] bg-[#d4fb20] text-[#242528] px-[20px] sm:px-[24px] py-[6px] sm:py-[8px] rounded-[24px] font-['Satoshi',sans-serif] font-medium text-[15px] sm:text-[16px] leading-[1.2] shadow-xs"
                    data-node-id="60:2182"
                  >
                    {creatorProfileData.badge}
                  </span>
                </div>
                <p
                  className="font-['Satoshi',sans-serif] text-[16px] sm:text-[18px] text-[#f5f5f6] leading-[1.6]"
                  data-node-id="60:2184"
                >
                  {creatorProfileData.role}
                </p>
              </div>
            </div>
          </div>

          {/* Bio Description (Node 60:2185) */}
          <div
            className="font-['Satoshi',sans-serif] text-[16px] sm:text-[18px] text-[#f5f5f6] leading-[1.6] max-w-[1197px] flex flex-col gap-[8px]"
            data-node-id="60:2185"
          >
            {creatorProfileData.bio.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Action & Stats Row (Node 60:2186) */}
          <div
            className="flex flex-wrap items-center justify-between gap-[20px] w-full pt-1"
            data-node-id="60:2186"
          >
            {/* Stats Badges (Node 60:2187) */}
            <div className="flex flex-wrap items-center gap-[12px] sm:gap-[16px]">
              {/* Products Badge */}
              <div
                className="backdrop-blur-[20px] bg-white px-[20px] sm:px-[24px] py-[10px] sm:py-[12px] rounded-[24px] flex items-center gap-[8px] shadow-sm select-none"
                data-node-id="60:2188"
              >
                <span className="font-['Satoshi',sans-serif] font-medium text-[16px] sm:text-[18px] text-[#003be2]">
                  {creatorProfileData.stats.productsCount}
                </span>
                <span className="font-['Satoshi',sans-serif] font-medium text-[16px] sm:text-[18px] text-[#242528]">
                  {creatorProfileData.stats.productsLabel}
                </span>
              </div>

              {/* Followers Badge */}
              <div
                className="backdrop-blur-[20px] bg-white px-[20px] sm:px-[24px] py-[10px] sm:py-[12px] rounded-[24px] flex items-center gap-[8px] shadow-sm select-none"
                data-node-id="60:2191"
              >
                <span className="font-['Satoshi',sans-serif] font-medium text-[16px] sm:text-[18px] text-[#003be2]">
                  {followersCount}
                </span>
                <span className="font-['Satoshi',sans-serif] font-medium text-[16px] sm:text-[18px] text-[#242528]">
                  {creatorProfileData.stats.followersLabel}
                </span>
              </div>
            </div>

            {/* Follow Button (Node 60:2194) */}
            <button
              type="button"
              onClick={handleFollowToggle}
              className={`font-['Satoshi',sans-serif] font-medium text-[16px] sm:text-[18px] px-[24px] sm:px-[28px] py-[10px] sm:py-[12px] rounded-[24px] shadow-sm transition-all cursor-pointer select-none active:scale-95 ${
                isFollowing
                  ? "bg-white text-[#242528] hover:bg-white/90"
                  : "bg-[#d4fb20] text-[#040819] hover:brightness-105"
              }`}
              data-node-id="60:2194"
            >
              {isFollowing ? "Following" : creatorProfileData.followButtonText}
            </button>
          </div>
        </div>
      </section>

      {/* 2. COURSES CATALOG SECTION (Node 60:1928 / 60:1929) */}
      <section
        className="w-full max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-6 py-[48px] sm:py-[64px] flex flex-col gap-[32px] sm:gap-[40px]"
        data-node-id="60:1929"
      >
        {/* Controls / Filter Bar (Node 60:1930) */}
        <div
          className="flex flex-wrap items-center justify-between gap-[16px] w-full"
          data-node-id="60:1930"
        >
          {/* Left: Filter, Level, Category Pills */}
          <div className="flex flex-wrap items-center gap-[12px] sm:gap-[16px]">
            {/* Filter */}
            <button
              type="button"
              onClick={() => setActiveFilter(activeFilter === "filter" ? "all" : "filter")}
              className={`border border-[#ced0d3] rounded-[24px] px-[16px] py-[10px] sm:py-[12px] flex items-center gap-[6px] font-['Satoshi',sans-serif] font-medium text-[15px] sm:text-[16px] transition-all cursor-pointer select-none ${
                activeFilter === "filter"
                  ? "bg-[#242528] text-white border-[#242528]"
                  : "bg-white text-[#4b4c53] hover:bg-[#f5f5f6]"
              }`}
              data-node-id="60:1932"
            >
              <div className="w-[20px] h-[20px] relative">
                <Image
                  src="/icons/creator-profile/filter.svg"
                  alt="Filter"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </div>
              <span>Filter</span>
            </button>

            {/* Level */}
            <button
              type="button"
              onClick={() => setActiveFilter(activeFilter === "level" ? "all" : "level")}
              className={`border border-[#ced0d3] rounded-[24px] px-[16px] py-[10px] sm:py-[12px] flex items-center gap-[6px] font-['Satoshi',sans-serif] font-medium text-[15px] sm:text-[16px] transition-all cursor-pointer select-none ${
                activeFilter === "level"
                  ? "bg-[#242528] text-white border-[#242528]"
                  : "bg-white text-[#4b4c53] hover:bg-[#f5f5f6]"
              }`}
              data-node-id="60:1935"
            >
              <div className="w-[20px] h-[20px] relative">
                <Image
                  src="/icons/creator-profile/level.svg"
                  alt="Level"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </div>
              <span>Level</span>
            </button>

            {/* Category */}
            <button
              type="button"
              onClick={() => setActiveFilter(activeFilter === "category" ? "all" : "category")}
              className={`border border-[#ced0d3] rounded-[24px] px-[16px] py-[10px] sm:py-[12px] flex items-center gap-[6px] font-['Satoshi',sans-serif] font-medium text-[15px] sm:text-[16px] transition-all cursor-pointer select-none ${
                activeFilter === "category"
                  ? "bg-[#242528] text-white border-[#242528]"
                  : "bg-white text-[#4b4c53] hover:bg-[#f5f5f6]"
              }`}
              data-node-id="60:1938"
            >
              <div className="w-[20px] h-[20px] relative">
                <Image
                  src="/icons/creator-profile/category.svg"
                  alt="Category"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </div>
              <span>Category</span>
            </button>
          </div>

          {/* Right: Most relevant Sort */}
          <button
            type="button"
            className="border border-[#ced0d3] bg-white hover:bg-[#f5f5f6] rounded-[24px] px-[16px] py-[10px] sm:py-[12px] flex items-center gap-[6px] font-['Satoshi',sans-serif] font-medium text-[15px] sm:text-[16px] text-[#4b4c53] transition-all cursor-pointer select-none"
            data-node-id="60:1941"
          >
            <div className="w-[20px] h-[20px] relative">
              <Image
                src="/icons/creator-profile/sort.svg"
                alt="Sort"
                width={20}
                height={20}
                className="w-full h-full object-contain"
              />
            </div>
            <span>Most relevant</span>
          </button>
        </div>

        {/* Course Cards Grid (Node 78:2503) */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px] lg:gap-[40px] items-stretch"
          data-node-id="78:2503"
        >
          {creatorProfileData.courses.map((course) => (
            <Link
              key={course.id}
              href={course.href}
              className="bg-white border border-[#ced0d3] rounded-[24px] p-[15px] flex flex-col gap-[20px] overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              data-name="Course_Card"
            >
              {/* Thumbnail Container with Badges */}
              <div className="relative w-full h-[195px] rounded-[12px] overflow-hidden bg-[#443131]">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badges on Thumbnail */}
                <div className="absolute left-[12px] bottom-[12px] flex flex-wrap gap-[6px] sm:gap-[8px] items-center z-10">
                  <div className="backdrop-blur-[4px] bg-[rgba(246,246,246,0.7)] px-[10px] sm:px-[12px] py-[4px] sm:py-[6px] rounded-[24px]">
                    <span className="font-['Satoshi',sans-serif] font-medium text-[11px] sm:text-[12px] text-[#4f4f4f]">
                      {course.lessons}
                    </span>
                  </div>
                  <div className="backdrop-blur-[4px] bg-[rgba(246,246,246,0.7)] px-[10px] sm:px-[12px] py-[4px] sm:py-[6px] rounded-[24px]">
                    <span className="font-['Satoshi',sans-serif] font-medium text-[11px] sm:text-[12px] text-[#4f4f4f]">
                      {course.duration}
                    </span>
                  </div>
                  <div className="backdrop-blur-[4px] bg-[rgba(246,246,246,0.7)] px-[10px] sm:px-[12px] py-[4px] sm:py-[6px] rounded-[24px]">
                    <span className="font-['Satoshi',sans-serif] font-medium text-[11px] sm:text-[12px] text-[#4f4f4f]">
                      {course.comments}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Block */}
              <div className="flex flex-col gap-[14px] flex-1 justify-between">
                {/* Title & Author & Rating */}
                <div className="flex items-start justify-between gap-[12px]">
                  <div className="flex flex-col gap-[4px] flex-1">
                    <h3 className="font-['Poppins',var(--font-poppins)] font-semibold text-[19px] sm:text-[20px] text-dark tracking-[-0.2px] leading-[1.2] group-hover:text-primary-blue transition-colors line-clamp-1">
                      {course.title}
                    </h3>
                    <p className="font-['Satoshi',sans-serif] text-[13px] text-[#4f4f4f]">
                      <span>by </span>
                      <span className="text-[#003be2] font-medium">
                        {course.author}
                      </span>
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-[4px] shrink-0 pt-0.5">
                    <span className="font-['Satoshi',sans-serif] text-[16px] sm:text-[18px] text-[#4f4f4f] leading-none">
                      {course.rating}
                    </span>
                    <div className="w-[20px] h-[20px] relative">
                      <Image
                        src="/icons/creator-profile/star-outline.svg"
                        alt="Rating"
                        width={20}
                        height={20}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Level Badge & Students Avatar Stack */}
                <div className="flex items-center gap-[12px] pt-1">
                  {/* Level Badge */}
                  <div className="bg-[#f5f5f6] px-[12px] py-[6px] rounded-[24px] flex items-center gap-[4px] shrink-0">
                    <div className="w-[18px] h-[18px] relative">
                      <Image
                        src="/icons/creator-profile/signal.svg"
                        alt="Level"
                        width={18}
                        height={18}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="font-['Satoshi',sans-serif] font-medium text-[12px] text-[#4b4c53]">
                      {course.level}
                    </span>
                  </div>

                  {/* Student Avatars Stack */}
                  <div className="flex items-center">
                    {creatorProfileData.studentAvatars.map((av, idx) => (
                      <div
                        key={idx}
                        className="relative w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] rounded-full overflow-hidden border-2 border-white -mr-[8px]"
                      >
                        <Image
                          src={av}
                          alt="Student"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                    {/* More Students Count */}
                    <div className="relative w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] rounded-full bg-[#f5f5f6] border-2 border-white flex items-center justify-center">
                      <span className="font-['Satoshi',sans-serif] font-medium text-[11px] sm:text-[12px] text-[#242528]">
                        {creatorProfileData.moreStudentsCount}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Pricing Row */}
                <div className="flex items-baseline gap-1 pt-1">
                  <span className="font-['Poppins',var(--font-poppins)] font-semibold text-[20px] text-[#003be2] tracking-[-0.2px] leading-[1.2]">
                    {course.price}
                  </span>
                  <span className="font-['Satoshi',sans-serif] text-[13px] text-[#4f4f4f] leading-[1.6]">
                    {course.period}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. REUSABLE FOOTER */}
      <Footer />
    </div>
  );
}
