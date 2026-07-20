# Lawrence Ijele Personal Portfolio

## Client

Lawrence (self). Founder \& operator, Abuja, Nigeria.

## One-liner

A personal site that reads as an operator's ledger: four live ventures, ranked by where they actually stand, backing a technical founder who builds product, brand, and growth himself.

## Audience \& goal

Collaborators, clients, and anyone evaluating Lawrence as an operator, not a jobseeker. The page's job is to establish credibility across breadth (four ventures) and depth (the technical stack behind all of them), and to route people toward the right venture or a direct conversation.

## Tone \& voice

Plain, direct, confident. No em dashes, no exclamation marks, short paragraphs, plain punctuation only (same house rule as Capital Reporters). Describe what things do, not how impressive they are.

## Brand tokens (carried from the reference build)

**Color**

* `--bg` #12151F (ink navy, not pure black)
* `--surface` #191D2B
* `--surface-2` #20253A
* `--text` #EDEAE2 (warm off-white)
* `--text-muted` #8B92AC
* `--accent` #C8883A (brass/amber, ties to LOVAN's gold identity)
* `--rule` #2A3050
* `--live` #6FBE8F / `--building` #C8883A / `--early` #8892B0 (status stamp colors)

**Type**

* Display: Space Grotesk
* Body: Inter
* Data/labels/stamps: Space Mono (continuity with NestMatch's Trust Ledger typography)

## Signature element

"The Ledger" — the four ventures presented as numbered, dated ledger rows (numbering is real: it's priority/chronology order, not decoration), each with a rotated dashed-border status stamp (Live / Building / Early) and a monospace stack tag line. This is the one bold move; everything else stays quiet.

## Sections \& copy

**Hero**

* Eyebrow: Abuja, Nigeria — Founder \& Operator
* H1: I build the infrastructure Nigeria's informal economy is missing.
* Sub: Four ventures, one operator. NestMatch fixes rental trust. LOVAN Digital builds the web presence. Capital Reporters tracks the policy. Need Engine is next: matching Nigeria's workforce to its next job.
* Status ticker cycling: NESTMATCH / LOVAN DIGITAL / CAPITAL REPORTERS / NEED ENGINE

**The Ledger** (4 entries, in this order)

1. **NestMatch** — Building. Rental marketplace closing the trust gap between Nigerian landlords and tenants, one escrow-backed lease at a time. NestMatch NG Limited, RC 9520928. Escrow payments, digital leases, tenant screening, Rental Passport. Stack: React, Node, PostgreSQL, Paystack.
2. **LOVAN Digital** — Live. Web design and digital marketing agency, the fastest revenue lever in the portfolio. LOVAN Digital Marketing Agency Limited, RC 8901869. Reusable client pipeline (lovan-foundry). Stack: WordPress, Vite, Tailwind, GSAP.
3. **Capital Reporters** — Live. Business and policy intelligence for Nigerians who need to know what a policy costs them. Editorial pillars: Policy Decoder, Sector Watch, Abuja Watch, Weekly Digest. Stack: WordPress, Rank Math, Elementor.
4. **Need Engine** — Early. Matching Nigeria's gig workers and artisans with the next job, before luck has to. Concept stage, deciding which side of the marketplace to build first.

**The Toolkit**
Grouped pills: Frontend (React, Vite, Tailwind), Backend \& Infra (Node, Express, Prisma, PostgreSQL, Railway, Vercel), Payments \& Services (Paystack, Cloudinary, Resend, Socket.io), AI \& Automation (ComfyUI, FLUX.1, Ollama, n8n).

**How I Work**
Two short blocks: (1) product, brand, and growth all built solo, referencing NestMatch's zero-to-outreach go-to-market as proof; (2) AI as leverage instead of headcount, referencing the local ComfyUI/FLUX.1/Ollama/n8n workstation, same logic Need Engine is built on.

**Footer / contact**
CTA line, links out to lovandigital.com, nestmatch.ng, capitalreporters.com. No fabricated contact details, Lawrence to add his own preferred email/social before shipping.

## Imagery

Generated with Higgsfield (model: nano\_banana\_pro), on-brand line art in brass-gold on ink-navy, no text or logos baked into the images so headings stay real HTML. Pull these into the repo as static assets rather than hotlinking:

* **Hero graphic** (16:9, left-third negative space for the H1 to sit over): ledger-grid and network-node abstract, job `1db18c56-781d-45d9-8526-ea76610e5719`
* **NestMatch icon** (1:1): key + shield, job `541bd677-1e26-4f26-8f55-8254007a05ec`
* **LOVAN Digital icon** (1:1): browser window into a paintbrush stroke, job `c1b5de66-14b3-4dee-ae7d-ebf4a3a99d47`
* **Capital Reporters icon** (1:1): newspaper with a trend line, job `c4da5d11-958e-43e6-a31b-803dcf0c53ee`
* **Need Engine icon** (1:1): two interlocking nodes, job `a5117f10-32bd-4a9f-8dd7-c79d6fa50ad1`

If any of these need a different crop, a color tweak, or a second variation once they're in layout, regenerate through Higgsfield rather than editing the PNGs by hand, same prompts, tweak only what needs to change.

## Animation \& motion

This needs to read as professionally built, not template-with-fade-ins. Layer it, don't scatter it:

* **Page load**: hero H1 and sub-line stagger in on load (short delay, no bounce), ticker starts cycling once the stagger finishes.
* **Ledger reveal**: each row animates in on scroll (the reference build's IntersectionObserver fade/slide is the right idea, rebuild it in GSAP with ScrollTrigger so it can be sequenced tighter, index number settling in a beat before the row content).
* **Status stamps**: a small "stamp press" micro-interaction on hover, slight scale + rotation settle, like a physical stamp landing. This is the one place motion can have personality.
* **Toolkit pills**: subtle stagger-in on scroll, no hover effects needed, they're reference material, not buttons.
* **Nav**: background blur/solidify on scroll past the hero, no other nav motion.
* Respect `prefers-reduced-motion` throughout, same as the reference build. Nothing should loop indefinitely except the status ticker text, and even that should pause on hover.

## Reference build

A static HTML/CSS reference implementing this brief already exists (single-file, no framework) — use it for the token values, copy, and layout logic, but rebuild properly in the pipeline's real stack (Vite, Tailwind, GSAP for the ledger reveal and stamp interactions) rather than porting the static file as-is.

## Notes for Claude Code

* Follow the usual frontend-design process: this brief is the plan, don't default back to the cream-serif or near-black-neon templates.
* gsap-skills: use for the ledger row reveal and status stamp hover/press, kept subtle, respect `prefers-reduced-motion`.
* ui-ux-pro-max: run the usual audit pass before calling it done (contrast, keyboard focus, mobile breakpoints).
* No em dashes in any copy, including code comments and commit messages if that's the existing convention.



