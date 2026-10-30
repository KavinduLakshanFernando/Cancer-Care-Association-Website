"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  Building2,
  Building,
  Home as HomeIcon,
  Activity,
  ShieldCheck,
  Images,
  Phone,
  X,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href?: string;
  icon: typeof Home;
  isHospice?: boolean;
  isActive: (pathname: string) => boolean;
}

const navItems: NavItem[] = [
  {
    name: "Home",
    href: "/",
    icon: Home,
    isActive: (pathname) => pathname === "/",
  },
  {
    name: "Hospices",
    icon: Building2,
    isHospice: true,
    isActive: (pathname) => pathname.startsWith("/hospices"),
  },
  {
    name: "Services",
    href: "/what-we-do",
    icon: Activity,
    isActive: (pathname) =>
      pathname.startsWith("/what-we-do") ||
      pathname.startsWith("/home-based-palliative-care"),
  },
  {
    name: "About",
    href: "/about",
    icon: ShieldCheck,
    isActive: (pathname) => pathname.startsWith("/about"),
  },
  {
    name: "Gallery",
    href: "/gallery",
    icon: Images,
    isActive: (pathname) => pathname.startsWith("/gallery"),
  },
  {
    name: "Contact",
    href: "/contact",
    icon: Phone,
    isActive: (pathname) => pathname.startsWith("/contact"),
  },
];

export default function MobileBottomNav() {
  const [hospiceSheetOpen, setHospiceSheetOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setHospiceSheetOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Backdrop for Hospices Sub-tabs Sheet */}
      {hospiceSheetOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-150 pointer-events-auto"
          onClick={() => setHospiceSheetOpen(false)}
        />
      )}

      {/* Hospices Sub-Tabs Popup Sheet */}
      {hospiceSheetOpen && (
        <div className="lg:hidden fixed bottom-[74px] sm:bottom-[82px] inset-x-3 max-w-md mx-auto z-50 animate-in fade-in slide-in-from-bottom-4 duration-200 pointer-events-auto">
          <div className="bg-white/98 backdrop-blur-md rounded-3xl border border-[#DCEAF8] shadow-[0_16px_40px_-6px_rgba(11,99,206,0.22),0_4px_16px_rgba(0,0,0,0.08)] p-3 divide-y divide-slate-100">
            {/* Header */}
            <div className="flex items-center justify-between px-2 pt-1 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#EBF5FF] text-[#0B63CE] flex items-center justify-center">
                  <Building2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-[#0D3862] tracking-wide">
                  Hospices &amp; Facilities
                </span>
              </div>
              <button
                type="button"
                onClick={() => setHospiceSheetOpen(false)}
                className="w-6 h-6 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close hospices menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Sub-tabs List */}
            <div className="space-y-1.5 pt-2">
              {/* 1. Hospices Overview */}
              <Link
                href="/hospices"
                onClick={() => setHospiceSheetOpen(false)}
                className={cn(
                  "flex items-start gap-3 p-2.5 rounded-2xl transition-all group",
                  pathname === "/hospices"
                    ? "bg-[#EBF5FF] text-[#0B63CE] border border-[#CDE3F7]"
                    : "hover:bg-[#F0F7FD] text-[#0D3862]"
                )}
              >
                <div
                  className={cn(
                    "p-2 rounded-xl shrink-0 transition-colors",
                    pathname === "/hospices"
                      ? "bg-[#0B63CE] text-white shadow-xs"
                      : "bg-[#EBF5FF] text-[#0B63CE]"
                  )}
                >
                  <Building className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">Hospices &amp; Facilities</span>
                    {pathname === "/hospices" && (
                      <span className="text-[10px] font-bold text-[#0B63CE] bg-blue-100 px-1.5 py-0.5 rounded">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Overview of inpatient and transit shelters.
                  </p>
                </div>
              </Link>

              {/* 2. Anuradhapura Hospice */}
              <Link
                href="/hospices/anuradhapura"
                onClick={() => setHospiceSheetOpen(false)}
                className={cn(
                  "flex items-start gap-3 p-2.5 rounded-2xl transition-all group",
                  pathname === "/hospices/anuradhapura"
                    ? "bg-[#EBF5FF] text-[#0B63CE] border border-[#CDE3F7]"
                    : "hover:bg-[#F0F7FD] text-[#0D3862]"
                )}
              >
                <div
                  className={cn(
                    "p-2 rounded-xl shrink-0 transition-colors",
                    pathname === "/hospices/anuradhapura"
                      ? "bg-[#0B63CE] text-white shadow-xs"
                      : "bg-[#EBF5FF] text-[#0B63CE]"
                  )}
                >
                  <HomeIcon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1.5">
                    <span className="text-xs font-bold">Anuradhapura Hospice</span>
                    <span className="text-[10px] bg-[#E1F0FD] text-[#0B63CE] border border-[#BCE1FD] px-1.5 py-0.5 rounded font-bold shrink-0">
                      45 Beds
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    WHO-recognized residential palliative sanctuary.
                  </p>
                </div>
              </Link>

              {/* 3. Saku Nikethana Karapitiya */}
              <Link
                href="/hospices/saku-nikethana-karapitiya"
                onClick={() => setHospiceSheetOpen(false)}
                className={cn(
                  "flex items-start gap-3 p-2.5 rounded-2xl transition-all group",
                  pathname === "/hospices/saku-nikethana-karapitiya"
                    ? "bg-amber-50 text-amber-800 border border-amber-200"
                    : "hover:bg-[#F0F7FD] text-[#0D3862]"
                )}
              >
                <div
                  className={cn(
                    "p-2 rounded-xl shrink-0 transition-colors",
                    pathname === "/hospices/saku-nikethana-karapitiya"
                      ? "bg-amber-500 text-white shadow-xs"
                      : "bg-amber-50 text-amber-600"
                  )}
                >
                  <Activity className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1.5">
                    <span className="text-xs font-bold">Saku Nikethana Karapitiya</span>
                    <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-bold shrink-0">
                      Galle
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Galle outpatient transit shelter and rest refuge.
                  </p>
                </div>
              </Link>

              {/* 4. Institute of Palliative Medicine (IPM) */}
              <a
                href="https://ipm.lk"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setHospiceSheetOpen(false)}
                className="flex items-start gap-3 p-2.5 rounded-2xl transition-all group hover:bg-emerald-50/70 text-[#0D3862] border border-transparent hover:border-emerald-200"
              >
                <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-emerald-700/25 shadow-xs">
                  <Image
                    src="/images/ipm-logo.jpg"
                    alt="Institute of Palliative Medicine"
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1.5">
                    <span className="text-xs font-bold text-[#0D3862] group-hover:text-emerald-700 transition-colors">
                      Institute of Palliative Medicine
                    </span>
                    <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-0.5 rounded font-bold shrink-0 inline-flex items-center gap-1">
                      <span>ipm.lk</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Academic &amp; palliative research portal.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Curved Cutout Mobile & Tablet Bottom Navigation Bar */}
      <nav
        aria-label="Mobile and Tablet Navigation"
        className="lg:hidden fixed bottom-0 inset-x-0 z-50 pointer-events-none pb-safe"
      >
        <div className="max-w-md mx-auto px-2.5 pb-2 sm:pb-3 pointer-events-auto">
          <div className="relative bg-white rounded-t-[26px] sm:rounded-[30px] shadow-[0_-8px_30px_rgba(11,99,206,0.12),0_4px_20px_rgba(0,0,0,0.06)] border-t sm:border border-slate-100 pt-2 pb-2 px-1">
            {/* 6-Column Navigation Grid */}
            <div className="grid grid-cols-6 items-end relative">
              {navItems.map((item) => {
                const active = item.isHospice
                  ? item.isActive(pathname) || hospiceSheetOpen
                  : item.isActive(pathname);
                const Icon = item.icon;

                const content = active ? (
                  <>
                    {/* Smooth Cutout Wave Arch behind the elevated circle */}
                    <svg
                      className="absolute -top-[19px] left-1/2 -translate-x-1/2 w-[74px] h-[20px] pointer-events-none drop-shadow-[0_-3px_4px_rgba(11,99,206,0.06)]"
                      viewBox="0 0 86 22"
                      fill="white"
                    >
                      <path d="M0 22 C18 22 22 0 43 0 C64 0 68 22 86 22 Z" />
                    </svg>

                    {/* Elevated Floating Circular Active Bubble */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                      <div className="w-[46px] h-[46px] rounded-full bg-white p-1 shadow-[0_6px_16px_-2px_rgba(11,99,206,0.28)] transition-transform duration-300 scale-100 active:scale-95">
                        <div className="w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br from-[#0B63CE] to-[#1E88E5] text-white shadow-sm">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Spacer height to keep text perfectly aligned under the elevated bubble */}
                    <div className="h-5" />

                    {/* Active Label */}
                    <span className="text-[10px] font-black tracking-tight mt-1 transition-colors text-[#0D3862] truncate px-0.5 max-w-full">
                      {item.name}
                    </span>
                  </>
                ) : (
                  <>
                    {/* Inactive Icon */}
                    <div className="w-7 h-7 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
                      <Icon className="w-4.5 h-4.5 text-slate-400 group-hover:text-[#0B63CE] transition-colors" />
                    </div>

                    {/* Inactive Label */}
                    <span className="text-[10px] font-semibold text-slate-500 group-hover:text-slate-700 mt-0.5 transition-colors truncate px-0.5 max-w-full">
                      {item.name}
                    </span>
                  </>
                );

                if (item.isHospice) {
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setHospiceSheetOpen((prev) => !prev)}
                      className="relative flex flex-col items-center justify-end group py-1 focus:outline-none select-none transition-all cursor-pointer"
                      aria-expanded={hospiceSheetOpen}
                      aria-label="View Hospices and facilities"
                    >
                      {content}
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className="relative flex flex-col items-center justify-end group py-1 focus:outline-none select-none transition-all"
                  >
                    {content}
                  </Link>
                );
              })}
            </div>

            {/* iOS Style Home Indicator Bar */}
            <div className="w-24 h-1 bg-slate-200/90 rounded-full mx-auto mt-2 mb-0.5" />
          </div>
        </div>
      </nav>
    </>
  );
}
