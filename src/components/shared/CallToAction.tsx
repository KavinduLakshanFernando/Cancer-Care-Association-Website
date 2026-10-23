import Link from "next/link";
import { Heart, Phone, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";
import { siteConfig } from "@/config/site";

interface CallToActionProps {
  title?: string;
  subtitle?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
}

export default function CallToAction({
  title = "Your Support Brings Dignity & Comfort to Cancer Patients",
  subtitle = "Every donation directly funds free hospice accommodation, essential pain medication, nutritious hot meals, and home-based palliative outreach for Sri Lankan families facing cancer.",
  primaryBtnText = "Donate Now",
  primaryBtnHref = "/donate",
  secondaryBtnText = "Contact Our Helpline",
  secondaryBtnHref = "/contact",
}: CallToActionProps) {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 bg-[#F0F7FD] border-t border-[#E1F0FD]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B63CE] via-[#1173E8] to-[#0284C7] p-8 sm:p-14 text-white shadow-[0_20px_50px_-12px_rgba(11,99,206,0.35),inset_0_1px_0_rgba(255,255,255,0.35)] text-center border border-white/20">
          {/* Subtle radial ambient glows inside card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#38BDF8]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            {/* Trust Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-widest uppercase bg-white/20 text-white border border-white/30 mb-6 backdrop-blur-sm shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              <span>100% Free Patient Support • Voluntary Registered NGO</span>
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white drop-shadow-sm">
              {title}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-blue-100/95 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                href={primaryBtnHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-base text-[#0B63CE] bg-white hover:bg-[#F0F7FD] shadow-[0_8px_25px_rgba(0,0,0,0.18)] hover:scale-105 active:scale-95 transition-all"
              >
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                <span>{primaryBtnText}</span>
                <ArrowRight className="w-4 h-4 text-[#0B63CE]" />
              </Link>

              <Link
                href={secondaryBtnHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base text-white border-2 border-white/40 hover:border-white hover:bg-white/15 active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>{secondaryBtnText}</span>
              </Link>
            </div>

            {/* Footer Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-100/90 font-medium">
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-white" />
                <span>Tax-exempt charitable receipts issued</span>
              </span>
              <span>•</span>
              <span>Member of Asia Pacific Hospice Palliative Care Network</span>
              <span>•</span>
              <span>Direct helpline: {siteConfig.contact.headOffice.mobile}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
