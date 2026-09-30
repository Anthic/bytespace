"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { footerData } from "@/src/data/footer";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert(`Thank you for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <footer
      data-node-id="34:1256"
      className="relative w-full bg-white border-t border-card-border overflow-hidden select-none"
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0 pt-[60px] sm:pt-[71px] pb-[40px] sm:pb-[56px] flex flex-col gap-[60px] lg:gap-[130px]">

        <div className="flex flex-col lg:flex-row items-start justify-between gap-[48px] lg:gap-[92px]">

          <div className="flex flex-col gap-[36px] sm:gap-[45px] max-w-[530px] w-full">

            <div className="flex flex-col gap-[16px] items-start">
              <Link
                href="/"
                className="inline-flex items-center gap-[10px] group transition-transform duration-200 hover:scale-[1.02]"
              >
                <div className="relative w-[28.88px] h-[31.5px] shrink-0">
                  <Image
                    src={footerData.brand.logoUrl}
                    alt="ByteSpace Logo"
                    width={29}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-clash font-bold text-[24px] text-dark tracking-normal">
                  {footerData.brand.name}
                </span>
              </Link>
              <p className="font-satoshi font-normal text-[14px] leading-[1.6] text-dark max-w-[528px]">
                {footerData.brand.newsletterText}
              </p>
            </div>

            <div className="flex flex-col gap-[16px] sm:gap-[24px] w-full">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[12px] sm:gap-[24px] w-full"
              >
                <div className="relative flex-1 sm:w-[376px]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={footerData.brand.inputPlaceholder}
                    required
                    className="w-full h-[52px] bg-white border border-card-border rounded-[100px] px-[24px] py-[14px] font-satoshi font-normal text-[16px] text-dark placeholder:text-dark/60 focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-electric-lime text-dark font-satoshi font-medium text-[18px] leading-[1.2] px-[24px] py-[12px] h-[52px] rounded-[24px] shadow-sm hover:brightness-105 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap inline-flex items-center justify-center shrink-0"
                >
                  {footerData.brand.buttonText}
                </button>
              </form>
              <p className="font-satoshi font-normal text-[12px] leading-[1.6] text-dark max-w-[504px]">
                {footerData.brand.disclaimer}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-[32px] sm:gap-[40px] w-full lg:w-[580px] shrink-0 pt-0 sm:pt-[8px]">
            {footerData.columns.map((col, idx) => (
              <div key={idx} className="flex flex-col gap-[16px]">
                {col.links.map((link, lIdx) => (
                  <Link
                    key={lIdx}
                    href={link.href}
                    className="font-satoshi font-normal text-[14px] leading-[1.6] text-dark hover:text-primary-blue transition-colors duration-150 whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[24px] w-full">
          <div className="w-full h-[1px] bg-card-border" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-[16px] text-dark font-satoshi font-normal text-[12px] leading-[1.6]">
            <p className="text-center sm:text-left">{footerData.copyright}</p>
            <div className="flex flex-wrap items-center justify-center gap-[24px]">
              {footerData.legalLinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="hover:text-primary-blue transition-colors duration-150"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
