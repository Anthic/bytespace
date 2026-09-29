"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { heroContent } from "@/src/data/hero";
import { Container } from "@/src/components/ui/Container";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-full z-40 h-[72px] sm:h-[84px] lg:h-[96px] flex items-center">
      <Container className="flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-[10px] group transition-transform duration-200 hover:scale-[1.02]"
        >
          <div className="relative w-[28.88px] h-[31.5px] flex-shrink-0">
            <Image
              src={heroContent.brand.logoUrl}
              alt="ByteSpace Logo"
              width={29}
              height={32}
              priority
              className="object-contain"
            />
          </div>
          <span className="font-['Clash_Display',var(--font-poppins)] font-bold text-[22px] sm:text-[24px] text-light-gray tracking-normal">
            {heroContent.brand.name}
          </span>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-[24px]">
          {heroContent.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-[15px] xl:text-[16px] transition-colors duration-150 ${
                item.active
                  ? "font-medium text-light-gray"
                  : "font-normal text-light-gray/90 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Desktop Actions */}
        <div className="hidden lg:flex items-center gap-[24px]">
          <Link
            href={heroContent.authLinks.signIn.href}
            className="text-[15px] xl:text-[16px] font-normal text-light-gray hover:text-white transition-colors duration-150"
          >
            {heroContent.authLinks.signIn.label}
          </Link>
          <Link
            href={heroContent.authLinks.joinUs.href}
            className="text-[15px] xl:text-[16px] font-normal text-light-gray hover:text-white transition-colors duration-150"
          >
            {heroContent.authLinks.joinUs.label}
          </Link>
          <button
            type="button"
            aria-label="Shopping Cart"
            className="relative w-[24px] h-[24px] flex items-center justify-center transition-transform hover:scale-110"
          >
            <Image
              src="/icons/bag.svg"
              alt="Cart"
              width={24}
              height={24}
              className="w-[24px] h-[24px]"
            />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[72px] sm:top-[84px] left-0 w-full bg-primary-blue/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 shadow-2xl z-50">
          {heroContent.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-light-gray py-2 border-b border-white/5"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-2">
            <Link
              href={heroContent.authLinks.signIn.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-light-gray"
            >
              {heroContent.authLinks.signIn.label}
            </Link>
            <Link
              href={heroContent.authLinks.joinUs.href}
              onClick={() => setMobileMenuOpen(false)}
              className="bg-electric-lime text-dark px-5 py-2 rounded-full font-medium text-sm"
            >
              {heroContent.authLinks.joinUs.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
