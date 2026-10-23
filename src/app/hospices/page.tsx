import type { Metadata } from "next";
import Link from "next/link";
import {
  Building,
  Home as HomeIcon,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Users,
  Sparkles,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  HeartHandshake,
} from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionHeading from "@/components/shared/SectionHeading";
import CallToAction from "@/components/shared/CallToAction";
import { siteConfig } from "@/config/site";

import InnerPageHero from "@/components/shared/InnerPageHero";
import HospiceSubTabs from "@/components/shared/HospiceSubTabs";

export const metadata: Metadata = {
  title: "Cancer Care Hospices | Free Inpatient & Community Sanctuaries",
  description:
    "Explore Cancer Care Association's free residential hospice facilities in Anuradhapura and Saku Nikethana community refuge in Karapitiya, Galle.",
};

export default function HospicesOverviewPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Hero Banner with Real Sanctuary Photo */}
      <InnerPageHero
        title="Our Cancer Care Hospices"
        subtitle="Providing free, compassionate inpatient end-of-life care and patient community shelters where dignity, skilled symptom control, and peace surround every patient."
        badgeText="Sanctuaries of Comfort & Dignity"
        breadcrumbItems={[{ label: "Cancer Care Hospices" }]}
        imageSrc="/images/hero-sanctuary.jpg"
        imageAlt="Cancer Care Hospice Sanctuary grounds and facilities"
      />

      {/* Hospice Facility Sub-tabs */}
      <HospiceSubTabs />

      {/* Philosophy of Hospice Care */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1261A0]">
                What is Hospice Care?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092B4C] tracking-tight">
                Adding Quality and Comfort to Every Remaining Day
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                Hospice care is specialized medical and emotional support designed for
                individuals in the advanced or terminal stages of cancer, when curative treatments
                are no longer effective or tolerable. Rather than focusing on aggressive, painful
                interventions, hospice care concentrates entirely on{" "}
                <strong>pain relief, physical comfort, mental tranquility, and human warmth</strong>.
              </p>
              <p className="text-base text-[#64748B] leading-relaxed">
                At Cancer Care Association, our hospice services are provided{" "}
                <strong>100% free of charge</strong>. We believe that financial hardship must
                never prevent a human being from departing this world in dignity, comfort, and peace.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5 text-[#092B4C]">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>24/7 Professional Palliative Nursing</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#092B4C]">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Free Nutritious Meals for Inpatients</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#092B4C]">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Family Accompaniment & Counseling</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#092B4C]">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Serene Spiritual & Meditation Spaces</span>
                </div>
              </div>
            </div>

            {/* Quick Stats Sidebar */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-gradient-to-br from-[#092B4C] to-[#1261A0] p-8 text-white shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                    Hospice Highlights
                  </span>
                  <ShieldCheck className="w-5 h-5 text-teal-400" />
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-3xl font-extrabold text-white">45 Beds</span>
                    <p className="text-xs text-blue-200 mt-0.5">
                      Anuradhapura Hospice capacity (Phase I & II)
                    </p>
                  </div>

                  <div>
                    <span className="text-3xl font-extrabold text-white">WHO Recognized</span>
                    <p className="text-xs text-blue-200 mt-0.5">
                      World Health Organization donated 22 specialized beds
                    </p>
                  </div>

                  <div>
                    <span className="text-3xl font-extrabold text-white">APHN Member</span>
                    <p className="text-xs text-blue-200 mt-0.5">
                      Member of Asia Pacific Hospice Palliative Care Network
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-blue-100">
                  Care Helpline for Hospice Admissions:{" "}
                  <strong className="text-white block mt-1">
                    {siteConfig.contact.hospiceAnuradhapura.phone} / {siteConfig.contact.headOffice.mobile}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Featured Location Cards */}
      <section className="py-16 sm:py-24 bg-[#F5FAFE] border-t border-blue-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Locations & Facilities"
            title="Our Two Dedicated Hospice & Care Centres"
            subtitle="Explore our specialized residential palliative hospice in Anuradhapura and community patient refuge in Karapitiya, Galle."
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Anuradhapura */}
            <div className="bg-white rounded-3xl p-8 border border-blue-100/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#EAF5FC] text-[#1261A0] flex items-center justify-center group-hover:bg-[#1261A0] group-hover:text-white transition-colors duration-200">
                    <HomeIcon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/50">
                    45 Inpatient Beds
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#092B4C] group-hover:text-[#1261A0] transition-colors">
                    Cancer Care Hospice — Anuradhapura
                  </h3>
                  <p className="text-xs font-semibold text-[#1261A0] flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Kurundankulama, Anuradhapura, North Central Province</span>
                  </p>
                </div>

                <p className="text-sm text-[#64748B] leading-relaxed">
                  Nestled in a tranquil natural environment, this 45-bed sanctuary provides
                  comprehensive palliative medical management, counseling, and spiritual peace.
                  Patients worship a sapling from the sacred Jaya Sri Maha Bodhi planted on the
                  grounds, offering profound psychological comfort to terminally ill individuals.
                </p>

                <div className="bg-[#F5FAFE] p-4 rounded-2xl space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Established:</span>
                    <span className="font-semibold text-[#092B4C]">June 2011 (Phase I), 2014 (Phase II)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Facility Type:</span>
                    <span className="font-semibold text-[#092B4C]">WHO-Recognized Free Inpatient Hospice</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Phone:</span>
                    <span className="font-semibold text-[#1261A0]">{siteConfig.contact.hospiceAnuradhapura.phone}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/hospices/anuradhapura"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-[#1261A0] hover:bg-[#092B4C] transition-colors shadow-md"
                >
                  <span>View Anuradhapura Hospice</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/donate"
                  className="text-xs font-bold text-[#1261A0] hover:underline"
                >
                  Sponsor a Bed
                </Link>
              </div>
            </div>

            {/* Card 2: Saku Nikethana Karapitiya */}
            <div className="bg-white rounded-3xl p-8 border border-blue-100/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#EAF5FC] text-[#1261A0] flex items-center justify-center group-hover:bg-[#1261A0] group-hover:text-white transition-colors duration-200">
                    <Building className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/50">
                    Community Shelter & Day Refuge
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#092B4C] group-hover:text-[#1261A0] transition-colors">
                    Saku Nikethana — Karapitiya, Galle
                  </h3>
                  <p className="text-xs font-semibold text-[#1261A0] flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Near Teaching Hospital Karapitiya, Galle, Southern Province</span>
                  </p>
                </div>

                <p className="text-sm text-[#64748B] leading-relaxed">
                  A lifeline for out-of-town outpatient clinic patients who travel from across
                  the Southern Province to Karapitiya Hospital. Provides temporary overnight
                  shelter, clean sanitary facilities, wholesome hot meals, and bus fare assistance
                  for underprivileged families who cannot afford paid lodging.
                </p>

                <div className="bg-[#F5FAFE] p-4 rounded-2xl space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Established:</span>
                    <span className="font-semibold text-[#092B4C]">August 18, 2011</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Facility Type:</span>
                    <span className="font-semibold text-[#092B4C]">Patient Refuge & Community Care Center</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Contact:</span>
                    <span className="font-semibold text-[#1261A0]">{siteConfig.contact.galleBranch.phone}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/hospices/saku-nikethana-karapitiya"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-[#1261A0] hover:bg-[#092B4C] transition-colors shadow-md"
                >
                  <span>View Saku Nikethana</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/donate"
                  className="text-xs font-bold text-[#1261A0] hover:underline"
                >
                  Support This Refuge
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Help Us Keep Hospice Care 100% Free for Everyone"
        subtitle="Cancer Care Hospices operate entirely through voluntary charitable contributions. Your generosity directly sustains beds, nursing, medicines, and warm meals."
      />
    </div>
  );
}
