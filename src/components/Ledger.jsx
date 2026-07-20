import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../../foundry/src/motion/scrollReveal";
import { ledger } from "../content/site";
import StatusStamp from "./StatusStamp";
import { prefersReducedMotion } from "../lib/reducedMotion";

export default function Ledger() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".ledger-row").forEach((row) => {
        const index = row.querySelector(".ledger-index");
        const content = row.querySelector(".ledger-content");
        gsap
          .timeline({ scrollTrigger: { trigger: row, start: "top 85%", once: true } })
          .from(index, { opacity: 0, y: 8, duration: 0.35, ease: "power2.out" })
          .from(content, { opacity: 0, y: 18, duration: 0.55, ease: "power2.out" }, "-=0.15");
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="ledger" ref={sectionRef} className="border-b border-rule py-[88px]">
      <div className="mx-auto max-w-[1040px] px-7">
        <p className="mb-3.5 font-mono text-xs uppercase tracking-[0.12em] text-accent">
          The Ledger
        </p>
        <h2 className="mb-12 max-w-[640px] text-[1.5rem] font-semibold text-text-primary md:text-[2rem]">
          Four ventures, ordered by where they stand today.
        </h2>

        <div>
          {ledger.map((item) => (
            <article
              key={item.index}
              id={item.slug}
              className="ledger-row grid grid-cols-1 gap-6 scroll-mt-20 border-t border-rule py-8 sm:grid-cols-[56px_1fr]"
            >
              <span className="ledger-index pt-1 font-mono text-[13px] text-text-muted">
                {item.index}
              </span>
              <div className="ledger-content">
                <div className="mb-2.5 flex items-center gap-3">
                  <img
                    src={item.icon}
                    alt=""
                    aria-hidden="true"
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-md"
                  />
                  <h3 className="text-2xl font-semibold text-text-primary">{item.name}</h3>
                </div>
                <p className="mb-[18px] max-w-[560px] text-[15px] text-text-muted">
                  {item.pitch}
                </p>
                <div className="mb-4 flex flex-wrap items-center gap-3.5">
                  <StatusStamp status={item.status} label={item.statusLabel} />
                  <span className="font-mono text-xs text-text-muted">{item.tags}</span>
                </div>
                <p className="max-w-[600px] border-t border-rule pt-3.5 text-sm text-text-muted">
                  {item.detail.pre}
                  {item.detail.link && (
                    <a
                      href={item.detail.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-accent text-accent no-underline transition-opacity duration-200 hover:opacity-80"
                    >
                      {item.detail.link.label}
                    </a>
                  )}
                  {item.detail.post}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
