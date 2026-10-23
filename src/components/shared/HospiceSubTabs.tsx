"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building, Home as HomeIcon, Activity, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    name: "Hospices Overview",
    href: "/hospices",
    icon: Building,
    badge: "2 Sanctuaries",
  },
  {
    name: "Anuradhapura Inpatient Hospice",
    href: "/hospices/anuradhapura",
    icon: HomeIcon,
    badge: "45 Beds • WHO Recognized",
  },
  {
    name: "Saku Nikethana Karapitiya",
    href: "/hospices/saku-nikethana-karapitiya",
    icon: Activity,
    badge: "Galle Outpatient Shelter",
  },
];

export default function HospiceSubTabs() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Hospice Facilities Navigation"
      className="bg-white/95 backdrop-blur-md border-b border-[#E2EEF9] sticky top-[69px] z-30 shadow-[0_4px_16px_-4px_rgba(11,99,206,0.06),inset_0_1px_0_rgba(255,255,255,1)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 py-2.5 overflow-x-auto no-scrollbar scroll-smooth">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D3862] hidden md:inline-flex items-center gap-1 shrink-0 mr-1 select-none">
            <span>Hospice Facilities:</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#0B63CE]" />
          </span>

          <div className="flex items-center gap-1.5 p-1 bg-[#F1F6FB] border border-[#DCEAF8] rounded-full shadow-[inset_0_1.5px_3px_rgba(11,99,206,0.05),0_1px_0_rgba(255,255,255,0.9)] shrink-0">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = pathname === tab.href;

              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={cn(
                    "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all shrink-0 select-none",
                    isActive
                      ? "bg-white text-[#0B63CE] border border-[#CDE3F7] shadow-[0_2px_8px_rgba(11,99,206,0.12),0_1px_2px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,1)]"
                      : "text-[#1E3A5F] hover:text-[#0B63CE] hover:bg-white/70"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-4 h-4 shrink-0 transition-colors",
                      isActive ? "text-[#0B63CE]" : "text-slate-400"
                    )}
                  />
                  <span>{tab.name}</span>
                  <span
                    className={cn(
                      "text-[10px] px-1.5 py-0.5 rounded-full font-semibold hidden sm:inline-block transition-colors",
                      isActive
                        ? "bg-[#E1F0FD] text-[#0B63CE] border border-[#BCE1FD]"
                        : "bg-slate-200/60 text-slate-600"
                    )}
                  >
                    {tab.badge}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
