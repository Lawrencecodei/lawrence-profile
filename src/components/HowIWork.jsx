import { useEffect, useRef } from "react";
import gsap from "gsap";
import { staggerReveal } from "../../foundry/src/motion/scrollReveal";
import { founder, howIWork } from "../content/site";
import { prefersReducedMotion } from "../lib/reducedMotion";

export default function HowIWork() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      staggerReveal(".work-block", { stagger: 0.1, from: "bottom" });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="how-i-work" ref={sectionRef} className="border-b border-rule py-[88px]">
      <div className="mx-auto max-w-[1040px] px-7">
        <p className="mb-3.5 font-mono text-xs uppercase tracking-[0.12em] text-accent">
          How I Work
        </p>
        <h2 className="mb-12 max-w-[640px] text-[1.5rem] font-semibold text-text-primary md:text-[2rem]">
          Solo founder, four ventures, no headcount.
        </h2>

        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[200px_1fr]">
          <div className="work-block">
            <div className="w-fit overflow-hidden rounded-lg border border-rule bg-surface p-2">
              <img
                src={founder.photo}
                alt={founder.name}
                width={200}
                height={200}
                className="h-[184px] w-[184px] rounded-md object-cover object-[50%_15%]"
              />
            </div>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.08em] text-text-muted">
              {founder.name}
              <br />
              {founder.title}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            {howIWork.map((block) => (
              <div key={block.title} className="work-block">
                <h4 className="mb-3 text-[1.05rem] font-semibold text-text-primary">
                  {block.title}
                </h4>
                <p className="text-[15px] text-text-muted">{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
