"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Heart,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Stethoscope,
  HeartHandshake,
  MessageCircle,
  Building,
} from "lucide-react";
import InnerPageHero from "@/components/shared/InnerPageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CallToAction from "@/components/shared/CallToAction";
import { siteConfig } from "@/config/site";

interface EventItem {
  id: string;
  title: string;
  category: "Community" | "Training" | "Milestones" | "Fundraising";
  date: string;
  time: string;
  location: string;
  status: "Upcoming" | "Ongoing" | "Completed";
  description: string;
  highlights: string[];
  contactAction?: {
    label: string;
    href: string;
  };
}

const eventsData: EventItem[] = [
  {
    id: "world-palliative-care-day-2026",
    title: "National Cancer Care & Palliative Awareness Walk",
    category: "Community",
    date: "October 10, 2026",
    time: "07:30 AM – 11:30 AM",
    location: "Viharamahadevi Park to Independence Square, Colombo",
    status: "Upcoming",
    description:
      "Join patients, medical professionals, volunteers, and well-wishers to advocate for free palliative care as a fundamental human right. Featuring interactive health booths, doctor consultations, and volunteer sign-ups.",
    highlights: [
      "Open to public, schools, and corporate groups",
      "Free medical & pain management guidance booths",
      "Cancer survivor solidarity walk & memorial lamp lighting",
    ],
    contactAction: {
      label: "Register as Volunteer",
      href: "/contact",
    },
  },
  {
    id: "palliative-nursing-training-nov",
    title: "Clinical Palliative Care & Bedside Nursing Workshop",
    category: "Training",
    date: "November 14 – 15, 2026",
    time: "09:00 AM – 04:30 PM",
    location: "CCA Training Hall, Homagama & Online Hybrid",
    status: "Upcoming",
    description:
      "Comprehensive hands-on training for registered nurses, hospice attendants, and home-care aides focusing on gentle bedside repositioning, malignant wound dressings, pain score evaluation, and bereavement counseling.",
    highlights: [
      "Certificate of participation recognized by clinical mentors",
      "Hands-on demonstration with palliative care mannequins",
      "Conducted by Dr. Samadhi Rajapaksa & visiting palliative consultants",
    ],
    contactAction: {
      label: "Inquire via WhatsApp",
      href: `https://wa.me/94773409787?text=Inquiry%20about%20Palliative%20Nursing%20Training%20Workshop`,
    },
  },
  {
    id: "anuradhapura-hospice-milestone",
    title: "Anuradhapura 45-Bed Hospice Facility Milestone & WHO Bed Dedication",
    category: "Milestones",
    date: "August 2026",
    time: "Full-day Commemoration",
    location: "Cancer Care Hospice, Kurundankulama, Anuradhapura",
    status: "Completed",
    description:
      "Celebrating the completion of Phase II with 22 specialized hospital beds donated by the World Health Organization (WHO), bringing residential capacity to 45 free palliative beds nestled around our sacred Bodhi tree.",
    highlights: [
      "Dedication of WHO hospital beds for North Central cancer patients",
      "Multifaith blessing ceremony under the sacred Bodhi tree sapling",
      "Honoring voluntary donors and regional nursing contingent",
    ],
    contactAction: {
      label: "View Hospice Facility",
      href: "/hospices/anuradhapura",
    },
  },
  {
    id: "galle-saku-nikethana-nourishment-drive",
    title: "Karapitiya Transit Shelter Patient Meal & Bedding Drive",
    category: "Fundraising",
    date: "Every Month (Ongoing)",
    time: "Daily 07:00 AM – 07:00 PM",
    location: "Saku Nikethana, Near Teaching Hospital Karapitiya, Galle",
    status: "Ongoing",
    description:
      "Ongoing monthly community food and hygiene supply drive supporting rural cancer patients travelling long distances for chemotherapy and radiation at Teaching Hospital Karapitiya.",
    highlights: [
      "Providing over 300 free nutritious meals every week",
      "Distributing adult diapers, clean bedsheets, and toiletries",
      "Offering resting sanctuary and clean washrooms for poor families",
    ],
    contactAction: {
      label: "Support In-Kind / Donate",
      href: "/donate",
    },
  },
  {
    id: "rural-cancer-screening-clinic",
    title: "Rural Early Detection & Cancer Prevention Health Camp",
    category: "Community",
    date: "December 05, 2026",
    time: "08:30 AM – 03:00 PM",
    location: "District Base Hospital Medawachchiya, North Central Province",
    status: "Upcoming",
    description:
      "Mobile medical team conducting free oral cancer screenings, breast health awareness checks, and public lifestyle seminars in rural farming communities with limited specialist access.",
    highlights: [
      "Free medical screenings by qualified oncology physicians",
      "Direct referral pathways to state oncological treatment units",
      "Sinhala and Tamil health educational booklets distributed",
    ],
    contactAction: {
      label: "Contact Organizer Desk",
      href: "/contact",
    },
  },
  {
    id: "caregiver-support-circle",
    title: "Compassionate Caregiver Grief & Bereavement Circle",
    category: "Training",
    date: "Last Saturday of Every Month",
    time: "03:00 PM – 05:00 PM",
    location: "Homagama CCA Resource Centre & Google Meet",
    status: "Ongoing",
    description:
      "A safe, guided therapeutic sanctuary for family members caring for terminally ill loved ones or mourning the loss of a family member to cancer. Led by senior psychologists and palliative counselors.",
    highlights: [
      "100% free and confidential support circle",
      "Peer-to-peer emotional solidarity and stress alleviation",
      "Meditation, mindfulness, and spiritual comforting",
    ],
    contactAction: {
      label: "Join Next Session",
      href: "/contact",
    },
  },
];

const categories = [
  { label: "All Events", value: "All" },
  { label: "Community & Walks", value: "Community" },
  { label: "Medical Training", value: "Training" },
  { label: "Hospice Milestones", value: "Milestones" },
  { label: "Donation Drives", value: "Fundraising" },
];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredEvents =
    selectedCategory === "All"
      ? eventsData
      : eventsData.filter((e) => e.category === selectedCategory);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner */}
      <InnerPageHero
        title="Events & Community Initiatives"
        subtitle="Stay updated with our free palliative workshops, awareness walks, hospice milestones, and rural healthcare initiatives across Sri Lanka."
        badgeText="CCA Initiatives & Gatherings"
        breadcrumbItems={[{ label: "Events & Updates" }]}
        imageSrc="/images/hero-community.jpg"
        imageAlt="Cancer Care Association healthcare team, doctors and volunteers at community event"
      />

      {/* Main Content Area */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <SectionHeading
            badge="Compassion In Action"
            title="Upcoming Gatherings & Care Milestones"
            subtitle="Explore our calendar of compassionate healthcare gatherings, clinical palliative caregiver sessions, and community support initiatives."
          />

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.value
                    ? "bg-[#0B63CE] text-white shadow-[0_4px_12px_rgba(11,99,206,0.25)]"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl border border-[#E2EEF9] shadow-xs hover:shadow-md hover:border-[#93C5FD] transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6">
                  {/* Status & Category Bar */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        event.status === "Upcoming"
                          ? "bg-blue-100 text-[#0B63CE]"
                          : event.status === "Ongoing"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {event.status}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      {event.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0A2540] group-hover:text-[#0B63CE] transition-colors leading-snug">
                    {event.title}
                  </h3>

                  {/* Date, Time & Location Meta */}
                  <div className="mt-4 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#0B63CE] shrink-0" />
                      <span className="font-semibold text-slate-800">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#0B63CE] shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#0B63CE] shrink-0 mt-0.5" />
                      <span className="leading-tight">{event.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                    {event.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                {event.contactAction && (
                  <div className="p-4 bg-[#F8FAFC] border-t border-slate-100">
                    {event.contactAction.href.startsWith("http") ? (
                      <a
                        href={event.contactAction.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#0B63CE] hover:bg-[#0952AC] transition-all shadow-xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{event.contactAction.label}</span>
                      </a>
                    ) : (
                      <Link
                        href={event.contactAction.href}
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold text-[#0B63CE] bg-[#EBF5FF] hover:bg-[#DDF0FE] border border-[#BCE1FD] transition-all"
                      >
                        <span>{event.contactAction.label}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Host or Co-Organize an Awareness Session Banner */}
          <div className="mt-16 bg-white rounded-3xl border border-[#DCEAF8] p-8 sm:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B63CE] bg-[#EBF5FF] px-3 py-1 rounded-full">
                <HeartHandshake className="w-3.5 h-3.5" />
                Community Partnerships
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540]">
                Want to Host a Cancer Care or Palliative Session with Us?
              </h3>
              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                We frequently collaborate with universities, corporate workplaces, religious
                organizations, and medical societies across Sri Lanka to deliver free cancer awareness,
                early screening clinics, and caregiver education seminars.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={`https://wa.me/94773409787?text=Hello%20CCA,%20we%20would%20like%20to%20collaborate%20on%20an%20awareness%20event`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white bg-[#25D366] hover:bg-[#20ba5a] transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Coordinator</span>
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-[#0B63CE] bg-[#EBF5FF] border border-[#BCE1FD] hover:bg-[#DDF0FE] transition-all"
              >
                <span>General Inquiry</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CallToAction />
    </div>
  );
}

