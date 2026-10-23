import type { Metadata } from "next";
import Link from "next/link";
import {
  Home as HomeIcon,
  ShieldCheck,
  CheckCircle2,
  Users,
  MapPin,
  Phone,
  Mail,
  Heart,
  Calendar,
  Sparkles,
  ArrowRight,
  HeartHandshake,
} from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionHeading from "@/components/shared/SectionHeading";
import CallToAction from "@/components/shared/CallToAction";
import { siteConfig } from "@/config/site";

import InnerPageHero from "@/components/shared/InnerPageHero";
import HospiceSubTabs from "@/components/shared/HospiceSubTabs";

export const metadata: Metadata = {
  title: "Anuradhapura Cancer Care Hospice | 45-Bed WHO Recognized Facility",
  description:
    "Located in Kurundankulama, Anuradhapura, this 45-bed free residential cancer hospice provides 24/7 palliative care, skilled nursing, and spiritual peace.",
};

export default function AnuradhapuraHospicePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Hero Banner with Real Inpatient Ward Photo */}
      <InnerPageHero
        title="Cancer Care Hospice — Anuradhapura"
        subtitle="Situated in the peaceful surroundings of Kurundankulama, providing free, compassionate palliative inpatient care, pain management, and spiritual comfort for cancer patients and their families."
        badgeText="WHO Recognized • 45-Bed Inpatient Sanctuary"
        badgeIcon={<ShieldCheck className="w-4 h-4 text-emerald-400" />}
        breadcrumbItems={[
          { label: "Cancer Care Hospices", href: "/hospices" },
          { label: "Anuradhapura Hospice" },
        ]}
        imageSrc="/images/hero-ward.jpg"
        imageAlt="Modern comfortable inpatient care suite at Anuradhapura Hospice"
      />

      {/* Hospice Facility Sub-tabs */}
      <HospiceSubTabs />

      {/* Main Overview & Facility Background */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1261A0]">
                Background & Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092B4C] tracking-tight">
                A Dignified Haven in Kurundankulama, Anuradhapura
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                The <strong>Cancer Care Hospice (CCH) in Anuradhapura</strong> was built and is
                maintained by Cancer Care Association Sri Lanka. The primary objective is to
                provide specialized palliative care for cancer patients attached to the oncology
                unit of the <strong>Anuradhapura Teaching Hospital</strong> and to promote the
                spiritual wellbeing of terminally ill patients in preparation for the final event,
                while providing vital counseling and social support to their families.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-[#F5FAFE] border border-blue-100">
                  <span className="text-xs font-bold uppercase text-[#1261A0] tracking-wider">
                    Phase I (Completed June 2011)
                  </span>
                  <h4 className="text-lg font-bold text-[#092B4C] mt-1">20 Beds Inpatient Capacity</h4>
                  <p className="text-xs text-[#64748B] mt-1">
                    First stage opened to serve rural patients traveling from across the North
                    Central and Northern Provinces.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#EAF5FC] border border-teal-200">
                  <span className="text-xs font-bold uppercase text-teal-800 tracking-wider">
                    Phase II (Completed Late 2014)
                  </span>
                  <h4 className="text-lg font-bold text-[#092B4C] mt-1">Expanded to 45 Beds Total</h4>
                  <p className="text-xs text-[#64748B] mt-1">
                    WHO donated 22 specialized hospital beds valued at Rs. 1.6 Million in recognition
                    of the hospice&apos;s exemplary standards.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold text-[#092B4C]">
                  Spiritual Solace: Sacred Bodhi Sapling
                </h3>
                <p className="text-base text-[#64748B] leading-relaxed">
                  In addition to physical pain relief, the hospice grounds feature a revered sapling
                  grown from the historic <strong>Jaya Sri Maha Bodhi</strong> of Anuradhapura.
                  Patients and their families are able to participate in quiet worship, meditation,
                  and Pirith chanting, fostering immense peace of mind and spiritual dignity during
                  their stay.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-xl font-bold text-[#092B4C] mb-4">
                  Verified Facilities & Clinical Care Services
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2.5 text-[#18334A]">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>24-Hour Skilled Palliative Nursing</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[#18334A]">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Pain & Clinical Symptom Management</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[#18334A]">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Free Wholesome Meals (Over 15,000 served)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[#18334A]">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Wound, Stoma & Ulcer Bedside Dressings</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[#18334A]">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Family Psychological & Grief Counseling</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[#18334A]">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Tranquil Garden & Sacred Bodhi Shrine</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card / Location & Helpline (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl bg-gradient-to-br from-[#092B4C] to-[#1261A0] p-8 text-white shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                    Location & Admissions
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2">
                    Anuradhapura Facility Details
                  </h3>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3 text-blue-100">
                    <MapPin className="w-5 h-5 text-teal-300 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Location:</strong>
                      <span>Kurundankulama, Anuradhapura, Sri Lanka</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-blue-100">
                    <Phone className="w-5 h-5 text-teal-300 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Direct Hospice Telephone:</strong>
                      <a href="tel:+94253243077" className="text-teal-300 hover:underline">
                        +94 25 324 3077
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-blue-100">
                    <Phone className="w-5 h-5 text-teal-300 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Central Care Helpline / Mobile:</strong>
                      <a
                        href={`tel:${siteConfig.contact.headOffice.mobile.replace(/\s+/g, "")}`}
                        className="text-teal-300 hover:underline"
                      >
                        {siteConfig.contact.headOffice.mobile}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-blue-100">
                    <Mail className="w-5 h-5 text-teal-300 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Inquiries:</strong>
                      <span>{siteConfig.contact.headOffice.email}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-blue-200">
                  <span className="font-bold text-white block mb-1">Admission Criteria:</span>
                  Open to cancer patients referred from teaching hospitals and oncology clinics
                  requiring terminal palliative symptom control. Admission is 100% free of charge.
                </div>

                <Link
                  href="/contact"
                  className="block w-full py-3.5 rounded-xl text-center text-sm font-bold bg-white text-[#092B4C] hover:bg-teal-50 transition-colors shadow-md"
                >
                  Contact About Patient Admission
                </Link>
              </div>

              {/* WHO & APHN Recognition Box */}
              <div className="p-6 rounded-3xl bg-[#F5FAFE] border border-blue-200/80 space-y-3">
                <div className="flex items-center gap-2 text-teal-700 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5" />
                  <span>International Recognition</span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  The Anuradhapura Hospice is recognized by the World Health Organization (WHO) and
                  holds official membership in the <strong>Asia Pacific Hospice Palliative Care Network (APHN)</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Support Anuradhapura Hospice Patients"
        subtitle="Your donations help us provide 24/7 nursing, pain medication, adult diapers, and nutritious meals to terminally ill cancer patients in Kurundankulama."
        primaryBtnText="Sponsor Hospice Care"
        primaryBtnHref="/donate"
      />
    </div>
  );
}
