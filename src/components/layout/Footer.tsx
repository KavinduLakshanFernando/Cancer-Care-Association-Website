"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Copy,
  Check,
  HeartHandshake,
  Clock,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = 2026;
  const [copiedBank, setCopiedBank] = useState(false);

  const copyBankInfo = () => {
    const info = `Cancer Care Association Sri Lanka
Bank: Commercial Bank of Ceylon - Homagama Branch
Account: 8290025562
Helpline: +94 77 340 9787`;
    navigator.clipboard.writeText(info);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2500);
  };

  return (
    <footer className="bg-[#F0F7FD] text-slate-700 border-t border-sky-100 relative">
      {/* 1. Top Friendly Banner: Simple & Inviting */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-6 sm:pb-8">
        <div className="bg-white rounded-2xl p-5 sm:p-8 border border-sky-100 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left w-full lg:w-auto">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-sm">
              <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <blockquote className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 leading-snug">
                &ldquo;Whoever would tend to me, should tend to the sick.&rdquo;
              </blockquote>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                — Lord Buddha • Providing 100% free hospice &amp; cancer care in Sri Lanka since 2003.
              </p>
            </div>
          </div>

          {/* Buttons on the SAME LINE across all mobile and tablet viewports */}
          <div className="flex flex-row items-center gap-2 sm:gap-3 w-full lg:w-auto justify-center">
            <Link
              href="/donate"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition shadow-sm whitespace-nowrap active:scale-95"
            >
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white shrink-0" />
              <span>Donate Now</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            </Link>

            <a
              href={`tel:${siteConfig.contact.headOffice.mobile.replace(/\s+/g, "")}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-blue-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition whitespace-nowrap active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0" />
              <span>
                <span className="hidden sm:inline">24/7 </span>Helpline: {siteConfig.contact.headOffice.mobile}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Grid: 2-Column on Mobile, 4-Column on Desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          
          {/* Column 1: About Cancer Care (Centered on mobile, full-width 2-cols) */}
          <div className="col-span-2 lg:col-span-1 text-center lg:text-left flex flex-col items-center lg:items-start space-y-3.5 sm:space-y-4">
            <Link href="/" className="inline-flex items-center justify-center lg:justify-start gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <div className="text-left">
                <span className="font-extrabold text-lg text-slate-900 block leading-tight">
                  Cancer Care
                </span>
                <span className="text-xs font-semibold text-blue-600">
                  පිළිකා සරණ සංගමය
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto lg:mx-0">
              Founded in 2003 by Dr. Samadhi W. Rajapaksa, offering 100% free inpatient hospice sanctuaries, home visits, and compassionate care to cancer patients across Sri Lanka.
            </p>

            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-slate-700">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Govt. Registered Charity: <strong>L147405</strong></span>
            </div>
            <p className="text-xs text-slate-500 text-center lg:text-left">
              APHN Member (Asia Pacific Hospice Palliative Care Network)
            </p>
          </div>

          {/* Column 2: Simple Quick Links (1 col on mobile for 2-column view) */}
          <div className="col-span-1 space-y-3 sm:space-y-4">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-sky-200/60 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <Link href="/" className="text-slate-600 hover:text-blue-600 transition block py-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-600 hover:text-blue-600 transition block py-0.5">
                  About Us &amp; Founder
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-slate-600 hover:text-blue-600 transition block py-0.5">
                  Our Care Services
                </Link>
              </li>
              <li>
                <Link href="/home-based-palliative-care" className="text-slate-600 hover:text-blue-600 transition block py-0.5">
                  Home Care Visits
                </Link>
              </li>
              <li>
                <Link href="/hospices" className="text-slate-600 hover:text-blue-600 transition block py-0.5">
                  Hospice Sanctuaries
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-blue-600 hover:underline font-bold block py-0.5">
                  How to Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-blue-600 transition block py-0.5">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hospice Sanctuaries (1 col on mobile for 2-column view) */}
          <div className="col-span-1 space-y-3 sm:space-y-4">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-sky-200/60 pb-2">
              Our Hospices
            </h4>

            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              {/* Anuradhapura */}
              <div>
                <Link
                  href="/hospices/anuradhapura"
                  className="font-bold text-slate-900 hover:text-blue-600 transition block"
                >
                  Anuradhapura Hospice
                </Link>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">
                  Kurundankulama (45 Beds • WHO)
                </p>
                <a
                  href="tel:+94253243077"
                  className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1.5 mt-1"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span className="whitespace-nowrap">+94 25 324 3077</span>
                </a>
              </div>

              {/* Galle Saku Nikethana */}
              <div className="pt-2 border-t border-sky-100">
                <Link
                  href="/hospices/saku-nikethana-karapitiya"
                  className="font-bold text-slate-900 hover:text-blue-600 transition block"
                >
                  Saku Nikethana (Galle)
                </Link>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">
                  Karapitiya Outpatient Refuge
                </p>
                <a
                  href="tel:+94775696000"
                  className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1.5 mt-1"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span className="whitespace-nowrap">+94 77 569 6000</span>
                </a>
              </div>

              <div className="pt-1.5">
                <Link
                  href="/hospices"
                  className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  <span>View All Hospices</span>
                  <ArrowRight className="w-3 h-3 shrink-0" />
                </Link>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Help (Full-width on mobile, 1 col on desktop) */}
          <div className="col-span-2 lg:col-span-1 space-y-3.5 sm:space-y-4">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-sky-200/60 pb-2">
              Contact &amp; Help
            </h4>

            {/* Helpline highlight */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-blue-50 border border-blue-200">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-700">
                <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>24/7 Patient Helpline</span>
              </div>
              <a
                href={`tel:${siteConfig.contact.headOffice.mobile.replace(/\s+/g, "")}`}
                className="text-base sm:text-lg font-extrabold text-blue-700 hover:underline block mt-1 whitespace-nowrap"
              >
                {siteConfig.contact.headOffice.mobile}
              </a>
              <span className="text-[11px] text-slate-500 block mt-0.5">
                Immediate support for cancer families
              </span>
            </div>

            {/* General Contacts */}
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>No. 56, Munasinghe Rd, Homagama, Sri Lanka</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Office: {siteConfig.contact.headOffice.phone}</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.headOffice.email}`}
                  className="text-blue-600 hover:underline truncate font-medium"
                >
                  {siteConfig.contact.headOffice.email}
                </a>
              </div>
            </div>

            {/* Simple Bank Account Box */}
            <div className="p-3 rounded-xl bg-white border border-sky-200 flex items-center justify-between gap-2 text-xs">
              <div>
                <span className="text-[10px] text-slate-400 block">Commercial Bank Homagama</span>
                <span className="font-bold text-slate-800">Acc: 8290025562</span>
              </div>
              <button
                type="button"
                onClick={copyBankInfo}
                className="px-2.5 py-1 rounded-lg bg-sky-50 hover:bg-sky-100 text-blue-600 text-xs font-bold flex items-center gap-1 transition border border-sky-200 cursor-pointer active:scale-95"
                title="Copy Bank Account"
              >
                {copiedBank ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Legal Bar */}
      <div className="border-t border-sky-200/70 bg-sky-100/50 py-4 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            © {currentYear} Cancer Care Association Sri Lanka (පිළිකා සරණ සංගමය) • Reg: L147405
          </p>
          <div className="flex items-center justify-center gap-5 font-medium text-slate-600">
            <Link href="/about" className="hover:text-blue-600 transition">About</Link>
            <Link href="/hospices" className="hover:text-blue-600 transition">Hospices</Link>
            <Link href="/donate" className="hover:text-blue-600 transition">Donate</Link>
            <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
