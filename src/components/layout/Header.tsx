"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Heart,
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  ShieldCheck,
  Building,
  Home as HomeIcon,
  Activity,
  Copy,
  Check,
  MapPin,
  HeartHandshake,
  BookOpen,
  Globe,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hospiceDropdownOpen, setHospiceDropdownOpen] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setHospiceDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setHospiceDropdownOpen(false);
    }, 180);
  };

  useEffect(() => {
    return () => {
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setHospiceDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
    setHospiceDropdownOpen(false);
  }, [pathname]);

  const copyBankInfo = () => {
    const info = `Cancer Care Association Sri Lanka
Bank: Commercial Bank of Ceylon - Homagama Branch
Account: 8290025562 / 1290025562
Helpline: +94 77 340 9787`;
    navigator.clipboard.writeText(info);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 3000);
  };

  const isHospiceActive = pathname.startsWith("/hospices");

  return (
    <>
      {/* Slim Info/Notice Bar */}
      <div className="bg-[#F0F7FD] text-[#1E3A5F] text-xs py-1.5 px-4 border-b border-[#E1F0FD] hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-[11px]">
            <div className="flex items-center gap-1.5 font-medium">
              <Phone className="w-3.5 h-3.5 text-[#0B63CE]" />
              <span className="text-slate-600">24/7 Care Helpline:</span>
              <a
                href={`tel:${siteConfig.contact.headOffice.mobile.replace(/\s+/g, "")}`}
                className="text-[#0B63CE] hover:underline font-bold"
              >
                {siteConfig.contact.headOffice.mobile}
              </a>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5 text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-teal-600" />
              <span>Anuradhapura &amp; Galle Hospices, Sri Lanka</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="inline-flex items-center gap-1 text-[#0B63CE] font-bold">
              <Heart className="w-2.5 h-2.5 fill-[#0B63CE]" />
              <span>100% Free Cancer &amp; Palliative Care</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <button
              type="button"
              onClick={copyBankInfo}
              className="inline-flex items-center gap-1 text-slate-600 hover:text-[#0B63CE] transition-colors cursor-pointer font-medium"
            >
              {copiedBank ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Bank Info Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#0B63CE]" />
                  <span>Copy Bank Details</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar - Embossed Capsule & Beveled Lighting (Matching Reference Image) */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 bg-white/92 backdrop-blur-md border-b",
          isScrolled
            ? "py-2.5 shadow-[0_4px_22px_-2px_rgba(11,99,206,0.09),inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(226,238,249,0.9)] border-[#DCEAF8]"
            : "py-3.5 shadow-[0_2px_12px_-2px_rgba(11,99,206,0.05),inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(235,244,251,0.8)] border-[#E2EEF9]"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Logo (Left - exactly like reference image) */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none shrink-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#0B63CE] to-[#1E88E5] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(11,99,206,0.28),inset_0_1px_0_rgba(255,255,255,0.4)] group-hover:scale-105 transition-transform duration-200">
              <Heart className="w-5 h-5 fill-white text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-[#0D3862] leading-none">
                Cancer Care
              </span>
              <span className="text-[11px] font-semibold text-[#0B63CE] tracking-normal mt-0.5">
                Hope for a Brighter Tomorrow
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Center - Embossed Pill Capsule like Dartcodes Reference) */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#F1F6FB] border border-[#DCEAF8] p-1.5 rounded-full shadow-[inset_0_2px_4px_rgba(11,99,206,0.05),0_1px_0_rgba(255,255,255,0.9)]">
            {/* Home */}
            <Link
              href="/"
              className={cn(
                "relative px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 select-none",
                pathname === "/"
                  ? "bg-white text-[#0B63CE] font-bold shadow-[0_2px_8px_rgba(11,99,206,0.12),0_1px_2px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,1)] border border-[#CDE3F7]"
                  : "text-[#1E3A5F] hover:text-[#0B63CE] hover:bg-white/70"
              )}
            >
              Home
            </Link>

            {/* About */}
            <Link
              href="/about"
              className={cn(
                "relative px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 select-none",
                pathname === "/about"
                  ? "bg-white text-[#0B63CE] font-bold shadow-[0_2px_8px_rgba(11,99,206,0.12),0_1px_2px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,1)] border border-[#CDE3F7]"
                  : "text-[#1E3A5F] hover:text-[#0B63CE] hover:bg-white/70"
              )}
            >
              About
            </Link>

            {/* Services */}
            <Link
              href="/what-we-do"
              className={cn(
                "relative px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 select-none",
                pathname === "/what-we-do"
                  ? "bg-white text-[#0B63CE] font-bold shadow-[0_2px_8px_rgba(11,99,206,0.12),0_1px_2px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,1)] border border-[#CDE3F7]"
                  : "text-[#1E3A5F] hover:text-[#0B63CE] hover:bg-white/70"
              )}
            >
              Services
            </Link>

            {/* Hospices Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => {
                  if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
                  setHospiceDropdownOpen((prev) => !prev);
                }}
                className={cn(
                  "relative flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer select-none",
                  isHospiceActive || hospiceDropdownOpen
                    ? "bg-white text-[#0B63CE] font-bold shadow-[0_2px_8px_rgba(11,99,206,0.12),0_1px_2px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,1)] border border-[#CDE3F7]"
                    : "text-[#1E3A5F] hover:text-[#0B63CE] hover:bg-white/70"
                )}
                aria-expanded={hospiceDropdownOpen}
                aria-haspopup="true"
              >
                <span>Hospices</span>
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200",
                    hospiceDropdownOpen ? "rotate-180 text-[#0B63CE]" : "text-slate-400"
                  )}
                />
              </button>

              {hospiceDropdownOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-84 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Invisible hit-box bridge between button and dropdown */}
                  <div className="absolute -top-3 left-0 right-0 h-5 bg-transparent pointer-events-auto" />

                  <div className="rounded-2xl bg-white/98 backdrop-blur-md border border-[#DCEAF8] p-2.5 shadow-[0_12px_36px_-6px_rgba(11,99,206,0.16),0_4px_12px_-2px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,1)] divide-y divide-slate-100">
                    <div className="space-y-1">
                      <Link
                        href="/hospices"
                        onClick={() => setHospiceDropdownOpen(false)}
                        className={cn(
                          "flex items-start gap-3 p-2.5 rounded-xl transition-all group",
                          pathname === "/hospices"
                            ? "bg-[#EBF5FF] text-[#0B63CE] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] border border-[#CDE3F7]"
                            : "hover:bg-[#F0F7FD] text-[#0D3862]"
                        )}
                      >
                        <div
                          className={cn(
                            "p-2 rounded-lg transition-colors shrink-0",
                            pathname === "/hospices"
                              ? "bg-[#0B63CE] text-white shadow-xs"
                              : "bg-[#EBF5FF] text-[#0B63CE] group-hover:bg-[#0B63CE] group-hover:text-white"
                          )}
                        >
                          <Building className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span
                              className={cn(
                                "text-sm font-bold transition-colors",
                                pathname === "/hospices" ? "text-[#0B63CE]" : "group-hover:text-[#0B63CE]"
                              )}
                            >
                              Hospices &amp; Facilities
                            </span>
                            {pathname === "/hospices" && (
                              <span className="text-[10px] font-bold text-[#0B63CE] bg-blue-100 px-1.5 py-0.5 rounded">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Overview of inpatient and transit shelters.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/hospices/anuradhapura"
                        onClick={() => setHospiceDropdownOpen(false)}
                        className={cn(
                          "flex items-start gap-3 p-2.5 rounded-xl transition-all group",
                          pathname === "/hospices/anuradhapura"
                            ? "bg-[#EBF5FF] text-[#0B63CE] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] border border-[#CDE3F7]"
                            : "hover:bg-[#F0F7FD] text-[#0D3862]"
                        )}
                      >
                        <div
                          className={cn(
                            "p-2 rounded-lg transition-colors shrink-0",
                            pathname === "/hospices/anuradhapura"
                              ? "bg-[#0B63CE] text-white shadow-xs"
                              : "bg-[#EBF5FF] text-[#0B63CE] group-hover:bg-[#0B63CE] group-hover:text-white"
                          )}
                        >
                          <HomeIcon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1.5">
                            <span
                              className={cn(
                                "text-sm font-bold transition-colors",
                                pathname === "/hospices/anuradhapura"
                                  ? "text-[#0B63CE]"
                                  : "group-hover:text-[#0B63CE]"
                              )}
                            >
                              Anuradhapura Hospice
                            </span>
                            <span className="text-[10px] bg-[#E1F0FD] text-[#0B63CE] border border-[#BCE1FD] px-1.5 py-0.5 rounded font-bold shrink-0">
                              45 Beds
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">
                            WHO-recognized residential palliative sanctuary.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/hospices/saku-nikethana-karapitiya"
                        onClick={() => setHospiceDropdownOpen(false)}
                        className={cn(
                          "flex items-start gap-3 p-2.5 rounded-xl transition-all group",
                          pathname === "/hospices/saku-nikethana-karapitiya"
                            ? "bg-amber-50 text-amber-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] border border-amber-200"
                            : "hover:bg-[#F0F7FD] text-[#0D3862]"
                        )}
                      >
                        <div
                          className={cn(
                            "p-2 rounded-lg transition-colors shrink-0",
                            pathname === "/hospices/saku-nikethana-karapitiya"
                              ? "bg-amber-500 text-white shadow-xs"
                              : "bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white"
                          )}
                        >
                          <Activity className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1.5">
                            <span
                              className={cn(
                                "text-sm font-bold transition-colors",
                                pathname === "/hospices/saku-nikethana-karapitiya"
                                  ? "text-amber-700"
                                  : "group-hover:text-amber-700"
                              )}
                            >
                              Saku Nikethana Karapitiya
                            </span>
                            <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-bold shrink-0">
                              Galle
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Galle outpatient transit shelter and rest refuge.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Home Care */}
            <Link
              href="/home-based-palliative-care"
              className={cn(
                "relative px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 select-none",
                pathname === "/home-based-palliative-care"
                  ? "bg-white text-[#0B63CE] font-bold shadow-[0_2px_8px_rgba(11,99,206,0.12),0_1px_2px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,1)] border border-[#CDE3F7]"
                  : "text-[#1E3A5F] hover:text-[#0B63CE] hover:bg-white/70"
              )}
            >
              Home Care
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={cn(
                "relative px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 select-none",
                pathname === "/contact"
                  ? "bg-white text-[#0B63CE] font-bold shadow-[0_2px_8px_rgba(11,99,206,0.12),0_1px_2px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,1)] border border-[#CDE3F7]"
                  : "text-[#1E3A5F] hover:text-[#0B63CE] hover:bg-white/70"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Group - Donate pill + Quick Helpline */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Donate Solid Blue Pill Button with Embossed Shadow */}
            <Link
              href="/donate"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-[#0B63CE] to-[#1474E8] hover:from-[#0952AC] hover:to-[#0B63CE] transition-all duration-200 shadow-[0_4px_14px_rgba(11,99,206,0.32),inset_0_1px_0_rgba(255,255,255,0.35)] hover:shadow-[0_6px_20px_rgba(11,99,206,0.45)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Donate</span>
            </Link>

            {/* Helpline Circular Icon Button with Embossed Bevel */}
            <a
              href={`tel:${siteConfig.contact.headOffice.mobile.replace(/\s+/g, "")}`}
              className="w-10 h-10 rounded-full bg-[#F1F6FB] border border-[#DCEAF8] text-[#1E3A5F] hover:text-[#0B63CE] hover:bg-white shadow-[inset_0_1px_1px_rgba(0,0,0,0.04),0_1px_2px_rgba(255,255,255,0.9)] flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
              title={`Call 24/7 Care Helpline: ${siteConfig.contact.headOffice.mobile}`}
              aria-label="24/7 Helpline"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden p-2 rounded-lg text-[#1E3A5F] hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#1E3A5F]" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[72px] bg-white border-b border-slate-200 shadow-xl max-h-[calc(100vh-72px)] overflow-y-auto px-5 py-6 space-y-4">
            <div className="space-y-1">
              <Link
                href="/"
                className={cn(
                  "block px-4 py-2.5 rounded-xl text-base font-bold transition-colors",
                  pathname === "/"
                    ? "bg-[#EBF5FF] text-[#0B63CE]"
                    : "text-[#0D3862] hover:bg-slate-50"
                )}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={cn(
                  "block px-4 py-2.5 rounded-xl text-base font-bold transition-colors",
                  pathname === "/about"
                    ? "bg-[#EBF5FF] text-[#0B63CE]"
                    : "text-[#0D3862] hover:bg-slate-50"
                )}
              >
                About
              </Link>
              <Link
                href="/what-we-do"
                className={cn(
                  "block px-4 py-2.5 rounded-xl text-base font-bold transition-colors",
                  pathname === "/what-we-do"
                    ? "bg-[#EBF5FF] text-[#0B63CE]"
                    : "text-[#0D3862] hover:bg-slate-50"
                )}
              >
                Services
              </Link>
              {/* Hospices & Facilities with sub-tabs */}
              <div className="space-y-1">
                <Link
                  href="/hospices"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-bold transition-colors",
                    pathname === "/hospices"
                      ? "bg-[#EBF5FF] text-[#0B63CE]"
                      : isHospiceActive
                      ? "text-[#0B63CE] bg-blue-50/50"
                      : "text-[#0D3862] hover:bg-slate-50"
                  )}
                >
                  <span>Hospices &amp; Facilities</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </Link>

                <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-blue-100 ml-4">
                  <Link
                    href="/hospices/anuradhapura"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold transition-colors",
                      pathname === "/hospices/anuradhapura"
                        ? "bg-[#EBF5FF] text-[#0B63CE] font-bold"
                        : "text-slate-600 hover:bg-slate-50"
                    )}
                  >
                    <span>Anuradhapura Hospice</span>
                    <span className="text-[10px] bg-blue-100 text-[#0B63CE] px-1.5 py-0.5 rounded font-bold">
                      45 Beds
                    </span>
                  </Link>

                  <Link
                    href="/hospices/saku-nikethana-karapitiya"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold transition-colors",
                      pathname === "/hospices/saku-nikethana-karapitiya"
                        ? "bg-amber-50 text-amber-800 font-bold"
                        : "text-slate-600 hover:bg-slate-50"
                    )}
                  >
                    <span>Saku Nikethana Karapitiya</span>
                    <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-bold">
                      Galle
                    </span>
                  </Link>
                </div>
              </div>
              <Link
                href="/home-based-palliative-care"
                className={cn(
                  "block px-4 py-2.5 rounded-xl text-base font-bold transition-colors",
                  pathname === "/home-based-palliative-care"
                    ? "bg-[#EBF5FF] text-[#0B63CE]"
                    : "text-[#0D3862] hover:bg-slate-50"
                )}
              >
                Home-Based Palliative Care
              </Link>
              <Link
                href="/donate"
                className={cn(
                  "block px-4 py-2.5 rounded-xl text-base font-bold transition-colors",
                  pathname === "/donate"
                    ? "bg-[#EBF5FF] text-[#0B63CE]"
                    : "text-[#0D3862] hover:bg-slate-50"
                )}
              >
                Support Us / Donate
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "block px-4 py-2.5 rounded-xl text-base font-bold transition-colors",
                  pathname === "/contact"
                    ? "bg-[#EBF5FF] text-[#0B63CE]"
                    : "text-[#0D3862] hover:bg-slate-50"
                )}
              >
                Contact Us
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <Link
                href="/donate"
                className="w-full py-3 rounded-full text-center font-bold text-sm bg-[#0B63CE] text-white hover:bg-[#0952AC] flex items-center justify-center gap-2 shadow-sm"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donate &amp; Support Cancer Patients</span>
              </Link>

              <div className="p-3 bg-[#F0F7FD] border border-[#E1F0FD] rounded-xl text-xs text-slate-600 flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0B63CE] shrink-0" />
                <div>
                  <span className="font-bold text-[#0D3862] block">24/7 Hospice Helpline</span>
                  <a
                    href={`tel:${siteConfig.contact.headOffice.mobile.replace(/\s+/g, "")}`}
                    className="text-[#0B63CE] font-bold hover:underline"
                  >
                    {siteConfig.contact.headOffice.mobile}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Sticky Mobile Bottom Navigation Bar - ipm.lk style */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-slate-200 py-2 px-3 shadow-lg flex items-center justify-around text-[10px] font-bold text-slate-600">
        <Link
          href="/"
          className={cn(
            "flex flex-col items-center gap-1",
            pathname === "/" ? "text-[#1261A0]" : "hover:text-[#1261A0]"
          )}
        >
          <HomeIcon className="w-4 h-4" />
          <span>Home</span>
        </Link>

        <Link
          href="/hospices"
          className={cn(
            "flex flex-col items-center gap-1",
            isHospiceActive ? "text-[#1261A0]" : "hover:text-[#1261A0]"
          )}
        >
          <Building className="w-4 h-4" />
          <span>Hospices</span>
        </Link>

        <Link
          href="/what-we-do"
          className={cn(
            "flex flex-col items-center gap-1",
            pathname === "/what-we-do" ? "text-[#1261A0]" : "hover:text-[#1261A0]"
          )}
        >
          <Activity className="w-4 h-4" />
          <span>Services</span>
        </Link>

        <Link
          href="/about"
          className={cn(
            "flex flex-col items-center gap-1",
            pathname === "/about" ? "text-[#1261A0]" : "hover:text-[#1261A0]"
          )}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>About</span>
        </Link>

        <Link
          href="/donate"
          className={cn(
            "flex flex-col items-center gap-1 text-amber-600"
          )}
        >
          <Heart className="w-4 h-4 fill-amber-500" />
          <span>Donate</span>
        </Link>
      </div>
    </>
  );
}
