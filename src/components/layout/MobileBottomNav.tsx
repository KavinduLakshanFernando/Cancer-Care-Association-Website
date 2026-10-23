"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Building2,
  Activity,
  ShieldCheck,
  Heart,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
  icon: typeof Home;
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
    href: "/hospices",
    icon: Building2,
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
    name: "Donate",
    href: "/donate",
    icon: Heart,
    isActive: (pathname) => pathname.startsWith("/donate"),
  },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile and Tablet Navigation"
      className="lg:hidden fixed bottom-0 inset-x-0 z-50 pointer-events-none pb-safe"
    >
      <div className="max-w-md mx-auto px-3 pb-2 sm:pb-3 pointer-events-auto">
        <div className="relative bg-white rounded-t-[28px] sm:rounded-[32px] shadow-[0_-8px_30px_rgba(11,99,206,0.12),0_4px_20px_rgba(0,0,0,0.06)] border-t sm:border border-slate-100 pt-2 pb-2 px-1">
          {/* 5-Column Navigation Grid */}
          <div className="grid grid-cols-5 items-end relative">
            {navItems.map((item) => {
              const active = item.isActive(pathname);
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative flex flex-col items-center justify-end group py-1.5 focus:outline-none select-none transition-all"
                >
                  {active ? (
                    <>
                      {/* Smooth Cutout Wave Arch behind the elevated circle */}
                      <svg
                        className="absolute -top-[21px] left-1/2 -translate-x-1/2 w-[86px] h-[22px] pointer-events-none drop-shadow-[0_-3px_4px_rgba(11,99,206,0.06)]"
                        viewBox="0 0 86 22"
                        fill="white"
                      >
                        <path d="M0 22 C18 22 22 0 43 0 C64 0 68 22 86 22 Z" />
                      </svg>

                      {/* Elevated Floating Circular Active Bubble */}
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                        <div className="w-[52px] h-[52px] rounded-full bg-white p-1 shadow-[0_8px_20px_-2px_rgba(11,99,206,0.3)] transition-transform duration-300 scale-100 active:scale-95">
                          <div
                            className={cn(
                              "w-full h-full rounded-full flex items-center justify-center transition-all",
                              item.name === "Donate"
                                ? "bg-gradient-to-br from-rose-500 to-rose-600 text-white shadow-sm"
                                : "bg-gradient-to-br from-[#0B63CE] to-[#1E88E5] text-white shadow-sm"
                            )}
                          >
                            <Icon
                              className={cn(
                                "w-6 h-6",
                                item.name === "Donate" ? "fill-white text-white" : "text-white"
                              )}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Spacer height to keep text perfectly aligned under the elevated bubble */}
                      <div className="h-6" />

                      {/* Active Label */}
                      <span
                        className={cn(
                          "text-[11px] font-black tracking-tight mt-1 transition-colors",
                          item.name === "Donate" ? "text-rose-600" : "text-[#0D3862]"
                        )}
                      >
                        {item.name}
                      </span>
                    </>
                  ) : (
                    <>
                      {/* Inactive Icon */}
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
                        <Icon
                          className={cn(
                            "w-5 h-5 transition-colors",
                            item.name === "Donate"
                              ? "text-rose-400 group-hover:text-rose-600"
                              : "text-slate-400 group-hover:text-[#0B63CE]"
                          )}
                        />
                      </div>

                      {/* Inactive Label */}
                      <span className="text-[10px] font-semibold text-slate-500 group-hover:text-slate-700 mt-0.5 transition-colors">
                        {item.name}
                      </span>
                    </>
                  )}
                </Link>
              );
            })}
          </div>

          {/* iOS Style Home Indicator Bar */}
          <div className="w-28 h-1 bg-slate-200/90 rounded-full mx-auto mt-2 mb-0.5" />
        </div>
      </div>
    </nav>
  );
}
