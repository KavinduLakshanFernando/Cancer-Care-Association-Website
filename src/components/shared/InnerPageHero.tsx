import React from "react";
import Image from "next/image";
import Breadcrumb, { BreadcrumbItem } from "@/components/shared/Breadcrumb";

interface InnerPageHeroProps {
  title: string;
  subtitle: string;
  badgeText: string;
  badgeIcon?: React.ReactNode;
  breadcrumbItems: BreadcrumbItem[];
  imageSrc: string;
  imageAlt: string;
  highlightText?: string;
  children?: React.ReactNode;
}

function renderHeroTitle(title: string, highlightText?: string) {
  if (highlightText && title.includes(highlightText)) {
    const parts = title.split(highlightText);
    return (
      <>
        <span>{parts[0]}</span>
        <span className="text-[#38BDF8] drop-shadow-sm font-black">{highlightText}</span>
        <span>{parts.slice(1).join(highlightText)}</span>
      </>
    );
  }

  // If title has a dash " — "
  if (title.includes(" — ")) {
    const [before, after] = title.split(" — ");
    return (
      <>
        <span>{before}</span>{" "}
        <span className="text-[#38BDF8] drop-shadow-sm font-black">
          <span className="text-white/60 font-light mx-1.5">—</span>
          {after}
        </span>
      </>
    );
  }

  // If title has a colon ": "
  if (title.includes(": ")) {
    const [before, after] = title.split(": ");
    return (
      <>
        <span>{before}:</span>{" "}
        <span className="text-[#38BDF8] drop-shadow-sm font-black">{after}</span>
      </>
    );
  }

  // Smart dual-tone highlight matching the reference image ("Software & Solutions")
  const words = title.trim().split(" ");
  if (words.length <= 2) {
    return (
      <>
        <span>{words[0]} </span>
        <span className="text-[#38BDF8] drop-shadow-sm font-black">{words.slice(1).join(" ")}</span>
      </>
    );
  }

  const splitIndex = words.length > 4 ? words.length - 2 : words.length - 1;
  const firstPart = words.slice(0, splitIndex).join(" ");
  const accentPart = words.slice(splitIndex).join(" ");

  return (
    <>
      <span>{firstPart} </span>
      <span className="text-[#38BDF8] drop-shadow-sm font-black">{accentPart}</span>
    </>
  );
}

export default function InnerPageHero({
  title,
  subtitle,
  badgeText,
  badgeIcon,
  breadcrumbItems,
  imageSrc,
  imageAlt,
  highlightText,
  children,
}: InnerPageHeroProps) {
  return (
    <section className="relative min-h-[380px] lg:min-h-[440px] flex items-center justify-center overflow-hidden text-white py-16 lg:py-24 border-b border-slate-800">
      {/* Background Image: sharp, clear, with smooth entrance zoom/fade animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center animate-hero-image"
        />
        {/* Transparent dark gradient overlay: high clarity and contrast for centered text */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/65 to-black/85" />
        <div className="absolute inset-0 bg-radial from-transparent via-slate-950/40 to-black/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        {/* Centered Breadcrumb */}
        {breadcrumbItems && breadcrumbItems.length > 0 && (
          <div className="mb-5 flex justify-center animate-hero-eyebrow">
            <Breadcrumb items={breadcrumbItems} inverted />
          </div>
        )}

        <div className="space-y-5 max-w-4xl mx-auto flex flex-col items-center">
          {/* Eyebrow flanked by horizontal line flourishes (Light Blue #38BDF8 reference styling) */}
          <div className="inline-flex items-center justify-center gap-3 sm:gap-4 animate-hero-eyebrow select-none">
            <span className="h-[2px] w-8 sm:w-14 bg-[#38BDF8]/80 rounded-full shrink-0" />
            <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold tracking-widest text-[#38BDF8] uppercase drop-shadow-sm">
              {badgeIcon && <span className="shrink-0">{badgeIcon}</span>}
              <span>{badgeText}</span>
            </div>
            <span className="h-[2px] w-8 sm:w-14 bg-[#38BDF8]/80 rounded-full shrink-0" />
          </div>

          {/* Main Heading (Centered, huge, bold with highlighted light blue accent word) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.18] sm:leading-[1.15] text-center drop-shadow-md animate-hero-heading">
            {renderHeroTitle(title, highlightText)}
          </h1>

          {/* Sub-text Paragraph (Centered, clean typography, max-width) */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-100/90 leading-relaxed font-normal text-center drop-shadow-sm max-w-2xl sm:max-w-3xl mx-auto animate-hero-subtext">
            {subtitle}
          </p>

          {/* Optional Action / Children elements */}
          {children && (
            <div className="pt-2 flex justify-center animate-hero-actions">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
