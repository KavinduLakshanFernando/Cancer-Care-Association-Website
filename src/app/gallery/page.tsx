"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Maximize2,
  X,
  Heart,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building,
  Home as HomeIcon,
  Activity,
  Users,
} from "lucide-react";
import InnerPageHero from "@/components/shared/InnerPageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CallToAction from "@/components/shared/CallToAction";

interface GalleryItem {
  id: string;
  title: string;
  category: "All" | "Hospices" | "Home Care" | "Community" | "Medical Team";
  location: string;
  imageSrc: string;
  description: string;
  tag: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "anuradhapura-sanctuary",
    title: "Anuradhapura Inpatient Hospice & Sacred Bodhi Sanctuary",
    category: "Hospices",
    location: "Kurundankulama, Anuradhapura",
    imageSrc: "/images/hero-sanctuary.jpg",
    description:
      "Serene natural inpatient sanctuary where terminally ill cancer patients receive 100% free dignified holistic palliative care and spiritual solace beneath our sacred Bodhi tree sapling.",
    tag: "45-Bed Sanctuary",
  },
  {
    id: "inpatient-palliative-ward",
    title: "WHO-Recognized Clinical Palliative Ward",
    category: "Hospices",
    location: "Cancer Care Hospice, Anuradhapura",
    imageSrc: "/images/hero-ward.jpg",
    description:
      "Fully equipped hospice ward featuring 22 specialized hospital beds donated by the World Health Organization (WHO), providing hygienic, comfortable, and pain-free end-of-life care.",
    tag: "Clinical Ward",
  },
  {
    id: "compassionate-bedside-nursing",
    title: "Gentle Bedside Nursing & Symptom Alleviation",
    category: "Home Care",
    location: "Rural & Suburban Home Outreach",
    imageSrc: "/images/hero-care.jpg",
    description:
      "Our dedicated palliative nurses and mobile clinical teams provide compassionate bedside dressing, pain relief, and family counseling directly in patients' homes across Sri Lanka.",
    tag: "Home Care",
  },
  {
    id: "doctor-patient-bond",
    title: "Compassionate Touch & Emotional Reassurance",
    category: "Medical Team",
    location: "CCA Care Center",
    imageSrc: "/images/hero-doctor-hands.jpg",
    description:
      "Dr. Samadhi Rajapaksa and our palliative medical team believe in holistic healing—treating not just physical symptoms, but providing warmth, dignity, and unwavering emotional presence.",
    tag: "Compassionate Care",
  },
  {
    id: "community-awareness-walk",
    title: "National Cancer & Palliative Awareness Walk",
    category: "Community",
    location: "Colombo & Nationwide",
    imageSrc: "/images/hero-community.jpg",
    description:
      "Healthcare workers, cancer survivors, volunteers, and public supporters united in community solidarity to advocate for free palliative care as a fundamental human right.",
    tag: "Public Movement",
  },
  {
    id: "saku-nikethana-shelter",
    title: "Saku Nikethana Karapitiya Outpatient Transit Refuge",
    category: "Hospices",
    location: "Karapitiya, Galle",
    imageSrc: "/images/hero-cancer-care-bg.png",
    description:
      "Safe, free overnight rest shelter and hot meal center for impoverished cancer patients and families travelling long distances for chemotherapy at Teaching Hospital Karapitiya.",
    tag: "Galle Refuge",
  },
  {
    id: "rural-screening-mission",
    title: "Rural Early Detection & Preventive Health Camps",
    category: "Community",
    location: "North Central Province",
    imageSrc: "/images/hero-doctor-ribbon.png",
    description:
      "Free medical screening camps and educational seminars educating rural farming families on early oral and breast cancer symptoms and healthy lifestyle habits.",
    tag: "Prevention",
  },
  {
    id: "volunteer-solidarity-gathering",
    title: "Caregiver Companionship & Volunteer Care Circles",
    category: "Medical Team",
    location: "CCA Resource Center, Homagama",
    imageSrc: "/images/hero-community.jpg",
    description:
      "Hands-on workshop training compassionate voluntary caregivers and family members in gentle bedside repositioning, pressure sore management, and emotional support.",
    tag: "Caregiver Training",
  },
];

const filterCategories = [
  { label: "All Photos", value: "All" },
  { label: "Hospices & Sanctuaries", value: "Hospices" },
  { label: "Home Palliative Care", value: "Home Care" },
  { label: "Community & Awareness", value: "Community" },
  { label: "Medical & Nursing Team", value: "Medical Team" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredPhotos =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner */}
      <InnerPageHero
        title="Photo Gallery & Moments of Hope"
        subtitle="Witness the compassionate journey of Cancer Care Association Sri Lanka—from our peaceful hospice sanctuaries in Anuradhapura to bedside home palliative visits."
        badgeText="Visual Journey • Since 2003"
        breadcrumbItems={[{ label: "Gallery" }]}
        imageSrc="/images/hero-sanctuary.jpg"
        imageAlt="Cancer Care Association Hospice Sanctuaries and Community Outreach"
      />

      {/* Main Gallery Section */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Moments of Dignity"
            title="Our Care in Pictures"
            subtitle="Explore real moments of healing, comfort, and human connection across our hospice sanctuaries, home visits, and public health awareness drives."
          />

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat.value
                    ? "bg-[#0B63CE] text-white shadow-[0_4px_12px_rgba(11,99,206,0.25)]"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative bg-white rounded-3xl overflow-hidden border border-[#E2EEF9] shadow-xs hover:shadow-xl hover:border-[#93C5FD] transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={photo.imageSrc}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0B63CE] shadow-xs border border-white/60">
                      {photo.tag}
                    </span>
                  </div>

                  {/* Expand Icon Button */}
                  <div className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Location Chip on Image Bottom */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 z-10 flex items-center gap-1.5 text-xs text-white/95 font-medium drop-shadow-sm">
                    <MapPin className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                    <span className="truncate">{photo.location}</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0A2540] group-hover:text-[#0B63CE] transition-colors leading-snug">
                      {photo.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {photo.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0B63CE]">
                    <span>Click to Enlarge</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Community Involvement Callout */}
          <div className="mt-16 bg-white rounded-3xl border border-[#DCEAF8] p-8 sm:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B63CE] bg-[#EBF5FF] px-3 py-1 rounded-full">
                <Camera className="w-3.5 h-3.5" />
                Share Your Care Story
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540]">
                Have Photos from a Cancer Care Association Event or Visit?
              </h3>
              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                If you have participated in our hospice volunteering, medical seminars, or cancer
                solidarity walks, we welcome your photos to feature in our community archives.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-[#0B63CE] bg-[#EBF5FF] border border-[#BCE1FD] hover:bg-[#DDF0FE] transition-all"
              >
                <span>Contact Media Desk</span>
              </Link>

              <Link
                href="/donate"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white bg-[#0B63CE] hover:bg-[#0952AC] transition-all shadow-md"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Support Our Care</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image View */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-900">
              <Image
                src={selectedPhoto.imageSrc}
                alt={selectedPhoto.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Details Footer */}
            <div className="p-6 sm:p-8 bg-white border-t border-slate-100">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-[#0B63CE] bg-[#EBF5FF] px-3 py-1 rounded-full border border-[#CDE3F7]">
                  {selectedPhoto.tag}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#0B63CE]" />
                  <span>{selectedPhoto.location}</span>
                </div>
              </div>

              <h3 className="mt-3 text-xl sm:text-2xl font-bold text-[#0A2540]">
                {selectedPhoto.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Call to Action */}
      <CallToAction />
    </div>
  );
}

