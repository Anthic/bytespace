"use client";

import React, { useState, useMemo, useRef } from "react";
import Image from "next/image";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { CourseCard } from "@/src/components/ui/CourseCard";
import { coursesListData, CourseItem } from "@/src/data/courses";
import { SEARCH_CATEGORIES } from "@/src/data/search";
import { gsap, useGSAP } from "@/src/lib/gsap";

export function SearchPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("featured");
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState("Most relevant");
  const [currentPage, setCurrentPage] = useState(1);

  const [showLevelDropdown, setShowLevelDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showCourseTypeDropdown, setShowCourseTypeDropdown] = useState(false);

  const allCourses: CourseItem[] = useMemo(() => {
    return [
      ...coursesListData.map((c, i) => ({ ...c, id: `p1-${c.id}-${i}` })),
      ...coursesListData.map((c, i) => ({
        ...c,
        id: `p2-${c.id}-${i}`,
        rating: (4.6 + (i % 3) * 0.1).toFixed(1),
      })),
      ...coursesListData.map((c, i) => ({
        ...c,
        id: `p3-${c.id}-${i}`,
        rating: (4.4 + (i % 4) * 0.1).toFixed(1),
      })),
    ];
  }, []);

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      const matchesLevel =
        !selectedLevel ||
        selectedLevel === "All Levels" ||
        course.level.toLowerCase() === selectedLevel.toLowerCase();

      return matchesSearch && matchesLevel;
    });
  }, [allCourses, searchQuery, selectedLevel]);

  const itemsPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / itemsPerPage));
  const currentCourses = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredCourses.slice(start, start + itemsPerPage);
  }, [filteredCourses, currentPage]);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        heroContentRef.current,
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out" }
      );

      if (cardsGridRef.current) {
        gsap.fromTo(
          cardsGridRef.current.children,
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          }
        );
      }
    },
    { scope: containerRef, dependencies: [currentPage, selectedCategory] }
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full bg-white flex flex-col overflow-x-hidden"
      data-node-id="55:117"
      data-name="Search Page"
    >

      <section
        className="w-full bg-[#003be2] bg-grid-lines relative flex flex-col overflow-visible"
        data-node-id="55:844"
        data-name="Frame"
      >

        <Navbar />

        <div
          ref={heroContentRef}
          className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-[28px] sm:pt-[44px] pb-[60px] sm:pb-[80px] flex flex-col items-center text-center z-10"
        >

          <h1
            className="font-['Poppins',var(--font-poppins)] font-semibold text-[30px] sm:text-[36px] lg:text-[40px] text-light-gray leading-[1.2] tracking-[-0.36px] max-w-[624px]"
            data-node-id="55:858"
          >
            Find Your Next Course
          </h1>

          <div
            className="mt-[32px] w-full max-w-[624px] flex flex-col sm:flex-row items-center gap-[12px] sm:gap-[16px]"
            data-node-id="55:859"
          >

            <div
              className="w-full sm:flex-1 h-[52px] bg-white rounded-full sm:rounded-[24px] px-[20px] sm:px-[24px] flex items-center gap-[10px] shadow-sm transition-all focus-within:ring-2 focus-within:ring-electric-lime"
              data-node-id="55:860"
            >
              <div className="w-[24px] h-[24px] shrink-0 flex items-center justify-center">
                <Image
                  src="/icons/search.svg"
                  alt="Search"
                  width={24}
                  height={24}
                  className="w-[20px] h-[20px] object-contain"
                />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search"
                className="w-full bg-transparent font-['Satoshi',sans-serif] text-[16px] sm:text-[18px] text-dark placeholder:text-[#82868e] outline-none"
                data-node-id="55:862"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-muted-gray hover:text-dark text-sm px-1"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="relative w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setShowCourseTypeDropdown(!showCourseTypeDropdown)}
                className="w-full sm:w-auto h-[48px] sm:h-[52px] bg-electric-lime hover:brightness-105 active:scale-95 text-dark font-['Satoshi',sans-serif] font-medium text-[16px] sm:text-[18px] px-[24px] py-[12px] rounded-full sm:rounded-[24px] flex items-center justify-center gap-[8px] transition-all shadow-sm cursor-pointer whitespace-nowrap"
                data-node-id="55:863"
              >
                <span>Courses</span>
                <Image
                  src="/icons/chevron-down.svg"
                  alt="Chevron"
                  width={20}
                  height={20}
                  className={`w-[18px] h-[18px] transition-transform duration-200 ${
                    showCourseTypeDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showCourseTypeDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-card-border/50 py-2 z-50 text-left">
                  {["All Courses", "Bootcamps", "Workshops", "Tutorials"].map(
                    (type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setShowCourseTypeDropdown(false)}
                        className="w-full px-4 py-2 text-[14px] text-dark hover:bg-light-gray text-left transition-colors"
                      >
                        {type}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-[40px] sm:py-[56px] flex flex-col items-center">
        <div className="w-full max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-6 flex flex-col">

          <div
            className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-[16px]"
            data-node-id="55:168"
          >

            <div className="flex flex-wrap items-center gap-[12px] sm:gap-[16px]">

              <button
                type="button"
                onClick={() => {
                  setSelectedLevel(null);
                  setSelectedCategory("featured");
                  setSearchQuery("");
                }}
                className="h-[48px] bg-white border border-[#ced0d3] hover:border-dark px-[16px] py-[12px] rounded-[24px] flex items-center justify-center gap-[8px] transition-colors cursor-pointer select-none group"
                data-node-id="55:170"
              >
                <Image
                  src="/icons/filter.svg"
                  alt="Filter"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px]"
                />
                <span className="font-['Satoshi',sans-serif] font-medium text-[16px] text-pill-text group-hover:text-dark">
                  Filter
                </span>
              </button>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowLevelDropdown(!showLevelDropdown)}
                  className={`h-[48px] bg-white border px-[16px] py-[12px] rounded-[24px] flex items-center justify-center gap-[8px] transition-colors cursor-pointer select-none group ${
                    selectedLevel
                      ? "border-primary-blue bg-blue-50/50"
                      : "border-[#ced0d3] hover:border-dark"
                  }`}
                  data-node-id="55:173"
                >
                  <Image
                    src="/icons/cellular.svg"
                    alt="Level"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="font-['Satoshi',sans-serif] font-medium text-[16px] text-pill-text group-hover:text-dark">
                    {selectedLevel || "Level"}
                  </span>
                </button>

                {showLevelDropdown && (
                  <div className="absolute left-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-card-border/60 py-2 z-40 text-left">
                    {["All Levels", "Beginner", "Intermediate", "Advanced"].map(
                      (lvl) => (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => {
                            setSelectedLevel(lvl === "All Levels" ? null : lvl);
                            setShowLevelDropdown(false);
                            setCurrentPage(1);
                          }}
                          className={`w-full px-4 py-2 text-[14px] text-left transition-colors ${
                            selectedLevel === lvl ||
                            (!selectedLevel && lvl === "All Levels")
                              ? "bg-electric-lime/30 font-medium text-dark"
                              : "text-dark hover:bg-light-gray"
                          }`}
                        >
                          {lvl}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                  className="h-[48px] bg-white border border-[#ced0d3] hover:border-dark px-[16px] py-[12px] rounded-[24px] flex items-center justify-center gap-[8px] transition-colors cursor-pointer select-none group"
                  data-node-id="55:176"
                >
                  <Image
                    src="/icons/category.svg"
                    alt="Category"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="font-['Satoshi',sans-serif] font-medium text-[16px] text-pill-text group-hover:text-dark">
                    Category
                  </span>
                </button>

                {showCategoryDropdown && (
                  <div className="absolute left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-card-border/60 py-2 z-40 text-left max-h-60 overflow-y-auto">
                    {SEARCH_CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setShowCategoryDropdown(false);
                          setCurrentPage(1);
                        }}
                        className={`w-full px-4 py-2 text-[14px] text-left transition-colors ${
                          selectedCategory === cat.id
                            ? "bg-electric-lime/30 font-medium text-dark"
                            : "text-dark hover:bg-light-gray"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="relative self-end sm:self-auto">
              <button
                type="button"
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="h-[48px] bg-white border border-[#ced0d3] hover:border-dark px-[16px] py-[12px] rounded-[24px] flex items-center justify-center gap-[8px] transition-colors cursor-pointer select-none group"
                data-node-id="55:179"
              >
                <Image
                  src="/icons/sort.svg"
                  alt="Sort"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px]"
                />
                <span className="font-['Satoshi',sans-serif] font-medium text-[16px] text-pill-text group-hover:text-dark">
                  {sortOption}
                </span>
              </button>

              {showSortDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-card-border/60 py-2 z-40 text-left">
                  {["Most relevant", "Highest rated", "Newest", "Price: Low to High"].map(
                    (opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setSortOption(opt);
                          setShowSortDropdown(false);
                        }}
                        className={`w-full px-4 py-2 text-[14px] text-left transition-colors ${
                          sortOption === opt
                            ? "bg-electric-lime/30 font-medium text-dark"
                            : "text-dark hover:bg-light-gray"
                        }`}
                      >
                        {opt}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>

          <div
            className="mt-[28px] sm:mt-[32px] w-full flex items-center justify-start xl:justify-between gap-[8px] xl:gap-0 overflow-x-auto no-scrollbar py-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            data-node-id="55:1819"
            data-name="Tab_Categories"
          >
            {SEARCH_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setCurrentPage(1);
                  }}
                  className={`h-[43px] px-[14px] xl:px-[16px] py-[12px] rounded-[24px] text-[14px] xl:text-[16px] font-['Satoshi',sans-serif] leading-[1.2] transition-all whitespace-nowrap cursor-pointer select-none shrink-0 ${
                    isActive
                      ? "bg-electric-lime text-dark font-medium shadow-xs"
                      : "bg-light-gray text-pill-text hover:bg-[#eaebee] hover:text-dark font-normal"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div
            ref={cardsGridRef}
            className="mt-[40px] sm:mt-[48px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[32px] sm:gap-x-[40px] gap-y-[32px] sm:gap-y-[40px] justify-items-center"
            data-node-id="55:1843"
          >
            {currentCourses.length > 0 ? (
              currentCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  className="w-full max-w-[373px]"
                />
              ))
            ) : (
              <div className="col-span-full py-16 text-center text-muted-gray text-lg">
                No courses found matching your criteria. Try adjusting your search or filters.
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <div
              className="mt-[56px] sm:mt-[64px] flex items-center justify-center gap-[12px] sm:gap-[16px]"
              data-node-id="55:834"
              data-name="Pagination"
            >

              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                aria-label="Previous Page"
                className={`w-[48px] h-[48px] rounded-full border border-card-border flex items-center justify-center transition-all ${
                  currentPage === 1
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:border-dark hover:bg-light-gray cursor-pointer"
                }`}
                data-node-id="55:835"
              >
                <Image
                  src="/icons/chevron-left.svg"
                  alt="Previous"
                  width={20}
                  height={20}
                  className="w-[18px] h-[18px]"
                />
              </button>

              {[1, 2, 3, 4, 5].map((pageNum) => {
                const isSelected = currentPage === pageNum;
                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-[36px] h-[36px] rounded-full flex items-center justify-center font-['Satoshi',sans-serif] text-[18px] leading-[1.2] transition-colors cursor-pointer select-none ${
                      isSelected
                        ? "text-dark font-bold"
                        : "text-[#82868e] hover:text-dark font-normal"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                aria-label="Next Page"
                className={`w-[48px] h-[48px] rounded-full border border-card-border flex items-center justify-center transition-all ${
                  currentPage === totalPages
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:border-dark hover:bg-light-gray cursor-pointer"
                }`}
                data-node-id="55:842"
              >
                <Image
                  src="/icons/chevron-right.svg"
                  alt="Next"
                  width={20}
                  height={20}
                  className="w-[18px] h-[18px]"
                />
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
