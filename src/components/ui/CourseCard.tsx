import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CourseItem } from "@/src/data/courses";

interface CourseCardProps {
  course: CourseItem;
  className?: string;
  href?: string;
}

export function CourseCard({
  course,
  className = "",
  href = "/course-details",
}: CourseCardProps) {
  return (
    <Link
      href={href}
      className={`group block bg-white border border-card-border rounded-[24px] p-[15px] flex flex-col justify-between w-full max-w-[373px] h-[384px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] cursor-pointer text-left ${className}`}
      data-name="Course_Card_1"
    >
      {/* 1. Thumbnail Container */}
      <div className="relative w-full h-[195px] rounded-[12px] overflow-hidden flex-shrink-0 bg-[#443131]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 341px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges on bottom of thumbnail */}
        <div className="absolute left-[12px] bottom-[12px] flex items-center gap-[6px] sm:gap-[8px]">
          <span className="backdrop-blur-[4px] bg-[rgba(246,246,246,0.65)] px-[10px] sm:px-[12px] py-[6px] rounded-[24px] text-[11px] sm:text-[12px] font-medium text-text-body leading-[1.2] whitespace-nowrap">
            {course.badgeLessons}
          </span>
          <span className="backdrop-blur-[4px] bg-[rgba(246,246,246,0.65)] px-[10px] sm:px-[12px] py-[6px] rounded-[24px] text-[11px] sm:text-[12px] font-medium text-text-body leading-[1.2] whitespace-nowrap">
            {course.badgeDuration}
          </span>
          <span className="backdrop-blur-[4px] bg-[rgba(246,246,246,0.65)] px-[10px] sm:px-[12px] py-[6px] rounded-[24px] text-[11px] sm:text-[12px] font-medium text-text-body leading-[1.2] whitespace-nowrap">
            {course.badgeComments}
          </span>
        </div>
      </div>

      {/* 2. Content Body */}
      <div className="flex flex-col justify-between flex-1 pt-[16px]">
        {/* Title, Author & Rating */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col min-w-0 pr-2">
            <h3
              className="font-['Poppins',var(--font-poppins)] font-semibold text-[20px] text-black tracking-[-0.2px] leading-[1.2] truncate"
              title={course.title}
            >
              {course.title}
            </h3>
            <p className="text-[12px] font-normal leading-[1.6] text-text-body mt-0.5">
              <span>{course.instructor.prefix}</span>
              <span className="text-primary-blue font-medium">
                {course.instructor.name}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-1 flex-shrink-0 pt-0.5">
            <span className="text-[18px] leading-[1.6] text-text-body font-normal">
              {course.rating}
            </span>
            <div className="w-[24px] h-[24px] flex items-center justify-center flex-shrink-0">
              <Image
                src="/icons/star-outline.svg"
                alt="Rating star"
                width={24}
                height={24}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Level & Enrolled Avatars */}
        <div className="flex items-center justify-between mt-2">
          {/* Level Pill */}
          <div className="bg-light-gray flex items-center gap-[4px] px-[12px] py-[6px] rounded-[24px]">
            <div className="w-[20px] h-[20px] flex items-center justify-center flex-shrink-0">
              <Image
                src="/icons/cellular.svg"
                alt="Level icon"
                width={20}
                height={20}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-[12px] font-medium text-pill-text leading-[1.2]">
              {course.level}
            </span>
          </div>

          {/* Overlapping Student Avatars */}
          <div className="flex items-center">
            {course.studentAvatars.map((src, idx) => (
              <div
                key={idx}
                className="relative w-[32px] h-[32px] rounded-full overflow-hidden ring-2 ring-white -mr-[8px] flex-shrink-0"
                style={{ zIndex: idx + 1 }}
              >
                <Image
                  src={src}
                  alt={`Student ${idx + 1}`}
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <div
              className="relative w-[32px] h-[32px] rounded-full bg-electric-lime text-dark flex items-center justify-center font-medium text-[12px] ring-2 ring-white flex-shrink-0"
              style={{ zIndex: 10 }}
            >
              {course.studentCountText}
            </div>
          </div>
        </div>

        {/* Price Row */}
        <div className="flex items-baseline mt-2">
          <span className="font-['Poppins',var(--font-poppins)] font-semibold text-[20px] text-primary-blue tracking-[-0.2px] leading-[1.2]">
            {course.price}
          </span>
          <span className="text-[12px] text-text-body leading-[1.6] ml-1">
            {course.pricePeriod}
          </span>
        </div>
      </div>
    </Link>
  );
}
