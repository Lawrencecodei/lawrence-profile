import { useEffect, useRef } from "react";
import gsap from "gsap";
import { staggerReveal } from "../../foundry/src/motion/scrollReveal";
import { toolkit } from "../content/site";
import { prefersReducedMotion } from "../lib/reducedMotion";

export default function Toolkit() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      staggerReveal(".pill", { stagger: 0.03, from: "bottom" });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="toolkit" ref={sectionRef} className="border-b border-rule py-[88px]">
      <div className="mx-auto max-w-[1040px] px-7">
        <p className="mb-3.5 font-mono text-xs uppercase tracking-[0.12em] text-accent">
          The Toolkit
        </p>
        <h2 className="mb-12 max-w-[640px] text-[1.5rem] font-semibold text-text-primary md:text-[2rem]">
          What I build with, across all four ventures.
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-9">
          {toolkit.map((group) => (
            <div key={group.group}>
              <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-text-muted">
                {group.group}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.pills.map((pill) => (
                  <span
                    key={pill}
                    className="pill rounded-md border border-rule bg-surface px-[13px] py-[7px] text-[13px] text-text-primary"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
