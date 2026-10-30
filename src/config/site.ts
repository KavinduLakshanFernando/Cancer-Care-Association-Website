export const siteConfig = {
  name: "Cancer Care Association Sri Lanka",
  sinhalaName: "පිළිකා සරණ සංගමය",
  shortName: "CCA Sri Lanka",
  description:
    "Supporting cancer patients and their families across Sri Lanka through free hospice care, home-based palliative care, emotional counseling, and community welfare since 2003.",
  url: "https://cancercaresl.org",
  motto: "Whoever would tend to me, should tend to the sick. — Lord Buddha",
  registration: {
    number: "L147405",
    act: "Voluntary Social Services Organization (Registration & Supervision) Act 31 of 1980 amended by Act No 08 of 1998",
    secretariat: "The National Secretariat for Non-Governmental Organizations, Sri Lanka",
    foundedYear: 2003,
    founder: "Dr. Samadhi W. Rajapaksa",
  },
  contact: {
    headOffice: {
      address: "No. 56, Munasinghe Rd, Galawilawatte, Homagama, Sri Lanka",
      phone: "+94 11 315 5229",
      mobile: "+94 77 340 9787",
      email: "cancercaresl@gmail.com",
      altEmail: "samadhirajapaksa@yahoo.com",
    },
    hospiceAnuradhapura: {
      name: "Cancer Care Hospice — Anuradhapura",
      location: "Kurundankulama, Anuradhapura, North Central Province, Sri Lanka",
      phone: "+94 25 324 3077",
      mobile: "+94 77 340 9787",
      capacity: "45 Beds (WHO Recognized facility)",
      established: "June 2011 (Phase I), December 2014 (Phase II)",
    },
    galleBranch: {
      name: "Saku Nikethana — Karapitiya, Galle",
      location: "Near Teaching Hospital Karapitiya, Galle, Southern Province, Sri Lanka",
      phone: "+94 77 569 6000",
      mobile: "+94 77 340 9787",
      service: "Outpatient Family Shelter, Day Therapy & Community Care Refuge",
      established: "August 18, 2011",
    },
  },
  navLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Cancer Care Hospices",
      href: "/hospices",
      children: [
        {
          name: "All Hospices Overview",
          href: "/hospices",
          description: "Compassionate inpatient sanctuary and holistic end-of-life care.",
        },
        {
          name: "Anuradhapura Hospice",
          href: "/hospices/anuradhapura",
          description: "45-bed WHO recognized hospice nestled in peaceful Kurundankulama.",
        },
        {
          name: "Saku Nikethana — Karapitiya",
          href: "/hospices/saku-nikethana-karapitiya",
          description: "Patient refuge and community transit shelter in Galle.",
        },
        {
          name: "Institute of Palliative Medicine (IPM)",
          href: "https://ipm.lk",
          description: "Academic research and palliative medicine training portal.",
          external: true,
        },
      ],
    },
    { name: "Home-Based Palliative Care", href: "/home-based-palliative-care" },
    { name: "Gallery", href: "/gallery" },
    { name: "What We Do", href: "/services" },
    { name: "How to Donate", href: "/donate" },
    { name: "Contact Us", href: "/contact" },
  ],
  socials: {
    facebook: "https://www.facebook.com/cancercaresl",
    youtube: "https://www.youtube.com",
    twitter: "https://twitter.com",
  },
  donationInfo: {
    statusNote:
      "To ensure full regulatory compliance and direct verification, official bank account numbers are verified directly upon inquiry to prevent fraudulent diversion.",
    contactForBankDetails: {
      phone: "+94 77 340 9787",
      email: "cancercaresl@gmail.com",
      office: "+94 11 315 5229",
      instructions:
        "Please contact our administrative office or Dr. Samadhi Rajapaksa directly before initiating bank transfers. Official tax-exempt donation receipts are issued for all contributions.",
    },
    supportedWays: [
      {
        title: "Direct Bank Transfer (LKR / Foreign Currency)",
        description:
          "Request official bank account details from our treasury for verified one-off or standing order donations.",
        icon: "Building2",
      },
      {
        title: "In-Kind Medical & Nutritional Supplies",
        description:
          "Adult diapers, specialized wound dressings, palliative pain medicines, high-protein supplements, and hospital bed linen.",
        icon: "PackageCheck",
      },
      {
        title: "Sponsor a Hospice Bed / Patient Meal",
        description:
          "Support 3 nutritious daily meals and compassionate nursing for a terminally ill patient at Anuradhapura Hospice.",
        icon: "HeartHandshake",
      },
      {
        title: "Corporate CSR Partnerships",
        description:
          "Collaborate on clinical capacity building, vehicle fuel for home-care visits, and hospice facility maintenance.",
        icon: "Briefcase",
      },
    ],
  },
};
