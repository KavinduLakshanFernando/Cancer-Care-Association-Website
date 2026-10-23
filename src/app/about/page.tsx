import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  ShieldCheck,
  Target,
  Compass,
  Users,
  Award,
  Sparkles,
  CheckCircle2,
  Calendar,
  Building,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionHeading from "@/components/shared/SectionHeading";
import CallToAction from "@/components/shared/CallToAction";
import { siteConfig } from "@/config/site";

import InnerPageHero from "@/components/shared/InnerPageHero";

export const metadata: Metadata = {
  title: "About Us | Our Mission, History & Leadership",
  description:
    "Learn about Cancer Care Association Sri Lanka (CCA), founded in 2003 by Dr. Samadhi W. Rajapaksa to ensure physical, mental, social, and spiritual wellbeing for cancer patients.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Hero Banner with Real Photo Background */}
      <InnerPageHero
        title="About Cancer Care Association Sri Lanka"
        subtitle="Dedicated to ensuring the physical, mental, social, and spiritual wellbeing of individuals and families affected by cancer across Sri Lanka since 2003."
        badgeText="Organization Background • Est. 2003"
        breadcrumbItems={[{ label: "About Us" }]}
        imageSrc="/images/hero-community.jpg"
        imageAlt="Cancer Care Association healthcare team and community volunteers"
      />

      {/* Main Narrative & Founder Story */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1261A0]">
                Our Inception & Roots
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092B4C] tracking-tight">
                From a Compassionate Vision in Anuradhapura to a National Movement
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                <strong>Cancer Care Association Sri Lanka (CCA)</strong> was founded by{" "}
                <strong>Dr. Samadhi W. Rajapaksa</strong> with a deeply compassionate motive
                and unwavering dedication to provide physical and mental relief to patients facing
                often fatal and painful diagnoses.
              </p>
              <p className="text-base text-[#64748B] leading-relaxed">
                Starting as a small grassroots initiative in the North Central district of
                Anuradhapura, the organization steadily developed into a National Level
                Non-Governmental Organization registered under the Government of Sri Lanka
                (Registration No: <strong>L147405</strong>). Today, CCA unites over 4,500 dedicated
                members and volunteers who give their time, care, and skills to patient welfare.
              </p>
              <p className="text-base text-[#64748B] leading-relaxed">
                CCA works closely with the National Cancer Institute (Apeksha Hospital) Maharagama,
                the key national institution for oncology treatments and research, while operating
                vital branches and hospices at Anuradhapura and Karapitiya (Galle) Teaching Hospitals.
              </p>

              <div className="p-5 rounded-2xl bg-[#F5FAFE] border border-blue-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1261A0] text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#092B4C]">
                    National Legal Recognition & Transparency
                  </h4>
                  <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                    Registered under the Voluntary Social Services Organizations Act 31 of 1980
                    (amended Act No 08 of 1998) at The National Secretariat for Non-Governmental
                    Organizations, Sri Lanka.
                  </p>
                </div>
              </div>
            </div>

            {/* Founder & Philosophy Highlight */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl bg-gradient-to-br from-[#092B4C] to-[#1261A0] p-8 text-white shadow-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                  Founder & Leadership
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">
                  Dr. Samadhi W. Rajapaksa
                </h3>
                <p className="text-xs text-blue-200 mt-1">
                  Founder & Patron • Cancer Care Association Sri Lanka
                </p>

                <p className="text-sm text-blue-100 mt-4 leading-relaxed">
                  &ldquo;A cancer diagnosis challenges every dimension of human life — the
                  physical body, the family livelihood, the mental tranquility, and the spirit.
                  Our duty is to ensure no human being suffers in solitude or abandonment.&rdquo;
                </p>

                <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-teal-300 font-serif font-bold">
                    &ldquo;
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Lord Buddha&apos;s Inscription</p>
                    <p className="text-xs text-blue-200 italic">
                      &quot;Whoever would tend to me, should tend to the sick.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-20 bg-[#F5FAFE] border-y border-blue-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Our Vision
                </span>
                <h3 className="text-2xl font-bold text-[#092B4C] mt-2">
                  A Society Where No Cancer Patient Suffers in Pain or Isolation
                </h3>
                <p className="text-base text-[#64748B] mt-4 leading-relaxed">
                  To envision a compassionate Sri Lanka where comprehensive palliative care,
                  pain alleviation, emotional solace, and dignified hospice sanctuaries are
                  accessible to every affected citizen regardless of social, economic, or
                  geographical status.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1261A0] flex items-center justify-center mb-4">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1261A0]">
                  Our Mission
                </span>
                <h3 className="text-2xl font-bold text-[#092B4C] mt-2">
                  Uplifting Physical, Mental, Social & Spiritual Wellbeing
                </h3>
                <p className="text-base text-[#64748B] mt-4 leading-relaxed">
                  To provide free, highest-quality inpatient hospice accommodation, expert
                  home-based palliative healthcare, spiritual accompaniment, nutritional
                  sustenance, and public preventive awareness, standing firmly beside cancer
                  patients and their families throughout their journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Milestones Timeline */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-[#F8FAFD] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Two Decades of Impact"
            title="Our History & Key Milestones"
            subtitle="How a compassionate initiative blossomed into Sri Lanka's leading community palliative care association."
          />

          <div className="mt-12 sm:mt-16 max-w-4xl mx-auto relative">
            {/* Timeline Continuous Track Line */}
            <div
              className="absolute top-6 bottom-6 left-6 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#0B63CE] via-[#38BDF8] to-[#0B63CE]/30"
              aria-hidden="true"
            />

            <div className="space-y-8 sm:space-y-12">
              {/* Milestone 1: 2003 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center group">
                {/* Center Node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-5 md:top-1/2 md:-translate-y-1/2 w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0B63CE] to-[#1E88E5] text-white flex items-center justify-center font-black text-xs shadow-md shadow-blue-500/25 border-2 border-white z-10 shrink-0 group-hover:scale-110 transition-transform duration-200">
                  2003
                </div>

                {/* Left Card on Desktop / Right on Mobile */}
                <div className="ml-14 sm:ml-16 md:ml-0 md:mr-auto md:w-[calc(50%-3rem)] w-[calc(100%-3.5rem)] sm:w-[calc(100%-4rem)]">
                  <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#DCEAF8] shadow-xs hover:shadow-md hover:border-[#0B63CE]/40 transition-all md:text-right">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-[#0B63CE] bg-[#F0F7FD] border border-[#BCE1FD]">
                      Foundation
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#0D3862] mt-2">
                      Inception in Anuradhapura
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1.5">
                      Founded by Dr. Samadhi W. Rajapaksa with local volunteers to assist needy oncology patients at the Anuradhapura hospital.
                    </p>
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center md:justify-end text-xs font-semibold text-slate-500">
                      <span>Anuradhapura Oncology Ward</span>
                    </div>
                  </div>
                </div>

                {/* Right Spacer for Desktop */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </div>

              {/* Milestone 2: 2011 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center group">
                {/* Center Node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-5 md:top-1/2 md:-translate-y-1/2 w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0B63CE] to-[#1E88E5] text-white flex items-center justify-center font-black text-xs shadow-md shadow-blue-500/25 border-2 border-white z-10 shrink-0 group-hover:scale-110 transition-transform duration-200">
                  2011
                </div>

                {/* Left Spacer for Desktop */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />

                {/* Right Card */}
                <div className="ml-14 sm:ml-16 md:ml-auto md:w-[calc(50%-3rem)] w-[calc(100%-3.5rem)] sm:w-[calc(100%-4rem)]">
                  <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#DCEAF8] shadow-xs hover:shadow-md hover:border-[#0B63CE]/40 transition-all text-left">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200">
                      Major Facilities
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#0D3862] mt-2">
                      Hospice Phase I &amp; Galle Branch
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1.5">
                      June 2011: Opened the 20-bed Anuradhapura Hospice in Kurundankulama. August 2011: Established Karapitiya branch at Teaching Hospital Karapitiya.
                    </p>
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-500">
                      <span>Kurundankulama &amp; Karapitiya Galle</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Milestone 3: 2014 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center group">
                {/* Center Node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-5 md:top-1/2 md:-translate-y-1/2 w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0B63CE] to-[#1E88E5] text-white flex items-center justify-center font-black text-xs shadow-md shadow-blue-500/25 border-2 border-white z-10 shrink-0 group-hover:scale-110 transition-transform duration-200">
                  2014
                </div>

                {/* Left Card on Desktop / Right on Mobile */}
                <div className="ml-14 sm:ml-16 md:ml-0 md:mr-auto md:w-[calc(50%-3rem)] w-[calc(100%-3.5rem)] sm:w-[calc(100%-4rem)]">
                  <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#DCEAF8] shadow-xs hover:shadow-md hover:border-[#0B63CE]/40 transition-all md:text-right">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-[#0B63CE] bg-[#F0F7FD] border border-[#BCE1FD]">
                      Expansion &amp; Recognition
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#0D3862] mt-2">
                      WHO Recognition &amp; 45-Bed Capacity
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1.5">
                      Completion of Phase II brought hospice capacity to 45 beds. The World Health Organization (WHO) recognized the facility and donated 22 specialized hospital beds.
                    </p>
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center md:justify-end text-xs font-semibold text-slate-500">
                      <span>45 Inpatient Beds • WHO Endorsed</span>
                    </div>
                  </div>
                </div>

                {/* Right Spacer for Desktop */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </div>

              {/* Milestone 4: Today */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center group">
                {/* Center Node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-5 md:top-1/2 md:-translate-y-1/2 w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0B63CE] to-[#1E88E5] text-white flex items-center justify-center font-black text-xs shadow-md shadow-blue-500/25 border-2 border-white z-10 shrink-0 group-hover:scale-110 transition-transform duration-200">
                  Today
                </div>

                {/* Left Spacer for Desktop */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />

                {/* Right Card */}
                <div className="ml-14 sm:ml-16 md:ml-auto md:w-[calc(50%-3rem)] w-[calc(100%-3.5rem)] sm:w-[calc(100%-4rem)]">
                  <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#DCEAF8] shadow-xs hover:shadow-md hover:border-[#0B63CE]/40 transition-all text-left">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200">
                      National Outreach
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#0D3862] mt-2">
                      Home Palliative Care &amp; Saku Nikethana
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1.5">
                      Mobilizing home visits across multiple provinces, operating Saku Nikethana outpatient family shelter in Galle, and driving nationwide awareness campaigns.
                    </p>
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-500">
                      <span>Island-wide Mobile Care &amp; Transit Shelter</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Verified Facts */}
      <section className="py-16 sm:py-20 bg-[#EAF5FC]/50 border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Verified Impact"
            title="Real Care Delivered to Real Lives"
            subtitle="Transparent and accountable healthcare charity at the service of Sri Lankan cancer sufferers."
          />

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#1261A0]">45</span>
              <p className="text-xs sm:text-sm font-semibold text-[#092B4C] mt-2">
                Hospice Beds
              </p>
              <p className="text-[11px] text-[#64748B] mt-0.5">WHO recognized facility</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#1261A0]">15,000+</span>
              <p className="text-xs sm:text-sm font-semibold text-[#092B4C] mt-2">
                Meals Served
              </p>
              <p className="text-[11px] text-[#64748B] mt-0.5">Free hot meals to patients</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#1261A0]">4,500+</span>
              <p className="text-xs sm:text-sm font-semibold text-[#092B4C] mt-2">
                Dedicated Members
              </p>
              <p className="text-[11px] text-[#64748B] mt-0.5">Volunteers nationwide</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#1261A0]">20+</span>
              <p className="text-xs sm:text-sm font-semibold text-[#092B4C] mt-2">
                Years of Service
              </p>
              <p className="text-[11px] text-[#64748B] mt-0.5">Established 2003</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Be Part of Our Mission of Hope & Compassion"
        subtitle="Your tax-exempt contribution directly funds free hospice accommodation, medical nutrition, and community palliative care visits."
      />
    </div>
  );
}
