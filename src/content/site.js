/*
  Copy sourced verbatim from DESIGN.md / the approved reference build.
  Nothing here is invented — if a section needs new copy, that's a flag for
  LOVAN's separate copy pass, not something to fill in here.
*/

import heroImage from "../assets/images/hero-ledger.webp";
import headshot from "../assets/images/lawrence-headshot.webp";
import nestmatchIcon from "../assets/images/nestmatch-icon.webp";
import lovanIcon from "../assets/images/lovan-icon.webp";
import capitalReportersIcon from "../assets/images/capital-reporters-icon.webp";
import needEngineIcon from "../assets/images/need-engine-icon.webp";

export const hero = {
  eyebrow: "Abuja, Nigeria — Founder & Operator",
  title: "I build the infrastructure Nigeria's informal economy is missing.",
  sub: "Four ventures, one operator. NestMatch fixes rental trust. LOVAN Digital builds the web presence. Capital Reporters tracks the policy. Need Engine is next: matching Nigeria's workforce to its next job.",
  tickerItems: [
    { label: "NESTMATCH", slug: "nestmatch" },
    { label: "LOVAN DIGITAL", slug: "lovan-digital" },
    { label: "CAPITAL REPORTERS", slug: "capital-reporters" },
    { label: "NEED ENGINE", slug: "need-engine" },
  ],
  image: heroImage,
};

export const ledger = [
  {
    index: "01",
    slug: "nestmatch",
    name: "NestMatch",
    status: "building",
    statusLabel: "Building",
    pitch: "Rental marketplace closing the trust gap between Nigerian landlords and tenants, one escrow-backed lease at a time.",
    tags: "React · Node · PostgreSQL · Paystack",
    detail: {
      pre: "NestMatch NG Limited · RC 9520928 · ",
      link: { href: "https://nestmatch.ng", label: "nestmatch.ng" },
      post: ". Escrow-backed payments, digital leases, tenant screening, and a Rental Passport product. Trademark filed for NESTMATCH in Classes 36 and 42. Ranked as the highest long-term upside venture in the portfolio, currently mid-way through a full “Trust Ledger” design overhaul.",
    },
    icon: nestmatchIcon,
  },
  {
    index: "02",
    slug: "lovan-digital",
    name: "LOVAN Digital",
    status: "live",
    statusLabel: "Live",
    pitch: "Web design and digital marketing agency, and the fastest revenue lever in the portfolio.",
    tags: "WordPress · Vite · Tailwind · GSAP",
    detail: {
      pre: "LOVAN Digital Marketing Agency Limited · RC 8901869 · ",
      link: { href: "https://lovandigital.com", label: "lovandigital.com" },
      post: ". Dark, gold-accented brand builds for Nigerian businesses, backed by a reusable client-site pipeline called lovan-foundry: shared motion and design tokens, a per-client brief, and a script that spins up a clean repo for every new engagement.",
    },
    icon: lovanIcon,
  },
  {
    index: "03",
    slug: "capital-reporters",
    name: "Capital Reporters",
    status: "live",
    statusLabel: "Live",
    pitch: "Business and policy intelligence for Nigerians who need to know what a policy actually costs them.",
    tags: "WordPress · Rank Math · Elementor",
    detail: {
      pre: "",
      link: { href: "https://capitalreporters.com", label: "capitalreporters.com" },
      post: ". Four editorial pillars: Policy Decoder, Sector Watch, Abuja Watch, and the Weekly Digest, all written to a “policy-to-pocket economics” brief for Nigerian SMEs and landlords.",
    },
    icon: capitalReportersIcon,
  },
  {
    index: "04",
    slug: "need-engine",
    name: "Need Engine",
    status: "early",
    statusLabel: "Early",
    pitch: "Matching Nigeria's gig workers and artisans with the next job, before luck has to.",
    tags: "Concept · Marketplace design",
    detail: {
      pre: "",
      link: null,
      post: "A marketplace for anyone whose income depends on finding their next customer: electricians, welders, photographers, tailors, caterers, movers, painters, generator repair technicians. Core mission: replace luck with matching. Currently defining which side of the marketplace to build first.",
    },
    icon: needEngineIcon,
  },
];

export const toolkit = [
  { group: "Frontend", pills: ["React", "Vite", "Tailwind CSS"] },
  { group: "Backend & Infra", pills: ["Node.js", "Express", "Prisma", "PostgreSQL", "Railway", "Vercel"] },
  { group: "Payments & Services", pills: ["Paystack", "Cloudinary", "Resend", "Socket.io"] },
  { group: "AI & Automation", pills: ["ComfyUI", "FLUX.1", "Ollama", "n8n"] },
];

export const founder = {
  name: "Lawrence Ijele",
  title: "Founder & Operator",
  photo: headshot,
};

export const howIWork = [
  {
    title: "Product, brand, and growth, myself",
    body: "Every venture in the ledger gets built the same way: I ship the product, design the brand, and run the growth motion. NestMatch's go-to-market started from zero landlord acquisitions and worked up through outreach plans, objection handlers, and guerrilla marketing.",
  },
  {
    title: "AI as leverage, not headcount",
    body: "A local workstation runs ComfyUI, FLUX.1, and Ollama alongside n8n automations, standing in for the specialists a four-venture portfolio would otherwise need to hire. It's the same logic Need Engine is built on: replace scarcity with matching.",
  },
];

export const footer = {
  label: "Get In Touch",
  title: "Building something in Nigeria's rental, web, media, or gig-work space? Let's talk.",
  contact: [
    { href: "mailto:lawrence4edu@gmail.com", label: "lawrence4edu@gmail.com" },
    { href: "https://wa.me/2349071346084", label: "0907 134 6084 (WhatsApp)" },
  ],
  links: [
    { href: "https://lovandigital.com", label: "lovandigital.com" },
    { href: "https://nestmatch.ng", label: "nestmatch.ng" },
    { href: "https://capitalreporters.com", label: "capitalreporters.com" },
  ],
  bottomLeft: "LAWRENCE — ABUJA, NG",
};
