import type { Metadata } from "next";
import Link from "next/link";
import {
  Building,
  Heart,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Sparkles,
  ArrowRight,
  HeartHandshake,
  Users,
} from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionHeading from "@/components/shared/SectionHeading";
import CallToAction from "@/components/shared/CallToAction";
import { siteConfig } from "@/config/site";
import InnerPageHero from "@/components/shared/InnerPageHero";
import HospiceSubTabs from "@/components/shared/HospiceSubTabs";

export const metadata: Metadata = {
  title: "Saku Nikethana Karapitiya | Cancer Care Association Galle",
  description:
    "Saku Nikethana in Karapitiya, Galle provides temporary shelter, clean rest facilities, warm meals, and family support for cancer patients attending Teaching Hospital Karapitiya.",
};

export default function SakuNikethanaKarapitiyaPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Hero Banner with Real Photo Background */}
      <InnerPageHero
        title="Saku Nikethana — Karapitiya, Galle"
        subtitle="A peaceful sanctuary offering free temporary shelter, rest facilities, clean sanitation, and warm meals for outpatient cancer patients and their families visiting Teaching Hospital Karapitiya."
        badgeText="Galle Branch • Outpatient Family Refuge"
        badgeIcon={<Building className="w-4 h-4 text-amber-300" />}
        breadcrumbItems={[
          { label: "Cancer Care Hospices", href: "/hospices" },
          { label: "Saku Nikethana — Karapitiya" },
        ]}
        imageSrc="/images/hero-community.jpg"
        imageAlt="Saku Nikethana transit shelter and patient care facility Galle"
      />

      {/* Hospice Facility Sub-tabs */}
      <HospiceSubTabs />

      {/* Main Narrative & Background */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1261A0]">
                Purpose & Community Mission
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092B4C] tracking-tight">
                A Lifeline for Out-of-Town Cancer Patients in the Southern Province
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                The <strong>Karapitiya Branch of Cancer Care Association</strong> was
                established on <strong>August 18, 2011</strong>, at Teaching Hospital
                Karapitiya in Galle. Recognising the severe distress of patients traveling long
                distances from remote villages across the Southern Province for regular weekly or
                monthly oncology clinics, CCA initiated the <strong>Saku Nikethana</strong> project.
              </p>
              <p className="text-base text-[#64748B] leading-relaxed">
                Many patients arrive at dawn after grueling public transport journeys, weak from
                chemotherapy or radiation. Lacking financial resources for commercial lodging, they
                often have to sit on hospital corridors or benches for hours, sometimes skipping
                essential meals. <strong>Saku Nikethana</strong> provides a dignified, hygienic
                refuge where patients can rest comfortably, shower, eat a nutritious meal, and regain
                their strength before returning home.
              </p>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-xl font-bold text-[#092B4C] mb-4">
                  Verified Services Provided at Saku Nikethana
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2.5 text-[#18334A]">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Free Temporary Overnight Shelter & Rest Beds</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[#18334A]">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Clean Sanitary Amenities & Shower Facilities</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[#18334A]">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Free Warm Meals & Wholesome Refreshments</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[#18334A]">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Financial Aid for Prescribed Medicines & Bus Fares</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[#18334A]">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Shrine Room for Meditation & Buddhist Poojas</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[#18334A]">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Home Care Outreach Team for Galle District</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-[#F5FAFE] border border-blue-100 space-y-3">
                <h4 className="font-bold text-base text-[#092B4C]">
                  Spiritual and Moral Wellbeing
                </h4>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  As part of its holistic ethos, the Karapitiya branch coordinates religious
                  meritorious activities (pinkama) — such as ceremonies connected with the sacred
                  descendant Bo tree at Yatagala Raja Maha Viharaya — providing immense mental
                  fortitude and spiritual peace to patients coping with difficult prognoses.
                </p>
              </div>
            </div>

            {/* Right Card / Location & Contact (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl bg-gradient-to-br from-[#092B4C] to-[#1261A0] p-8 text-white shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                    Location & Information
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2">
                    Saku Nikethana Galle Branch
                  </h3>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3 text-blue-100">
                    <MapPin className="w-5 h-5 text-teal-300 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Location:</strong>
                      <span>Near Teaching Hospital Karapitiya, Galle, Southern Province, Sri Lanka</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-blue-100">
                    <Phone className="w-5 h-5 text-teal-300 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Direct CCA Galle Hotline:</strong>
                      <a href="tel:+94775696000" className="text-teal-300 hover:underline">
                        +94 77 569 6000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-blue-100">
                    <Phone className="w-5 h-5 text-teal-300 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Central Care Helpline:</strong>
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
                      <strong className="text-white block">Email:</strong>
                      <span>{siteConfig.contact.headOffice.email}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-blue-200">
                  <span className="font-bold text-white block mb-1">Services Note:</span>
                  All shelter accommodation, meals, and assistance are offered completely free of
                  charge to cancer patients attending Karapitiya clinics.
                </div>

                <Link
                  href="/contact"
                  className="block w-full py-3.5 rounded-xl text-center text-sm font-bold bg-white text-[#092B4C] hover:bg-teal-50 transition-colors shadow-md"
                >
                  Contact Saku Nikethana Team
                </Link>
              </div>

              {/* In-Kind Needs Callout */}
              <div className="p-6 rounded-3xl bg-[#EAF5FC] border border-blue-200/80 space-y-2 text-xs">
                <span className="font-bold text-[#1261A0] uppercase tracking-wider block">
                  How You Can Help Saku Nikethana
                </span>
                <p className="text-[#18334A] leading-relaxed">
                  We welcome donations of daily rations (rice, dhal, nutritional cereals),
                  cleaning supplies, clean bed sheets, and contributions towards patients&apos;
                  return bus fares.
                </p>
                <Link
                  href="/donate"
                  className="font-bold text-[#1261A0] hover:underline inline-block pt-1"
                >
                  Learn How to Donate →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Support Rural Cancer Families in Galle"
        subtitle="Your gift ensures an impoverished patient who has traveled all day for chemotherapy receives a warm meal, a clean bed, and compassionate support."
        primaryBtnText="Support Saku Nikethana"
        primaryBtnHref="/donate"
      />
    </div>
  );
}
