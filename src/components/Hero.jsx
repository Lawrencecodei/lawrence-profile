import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { hero } from "../content/site";
import { prefersReducedMotion } from "../lib/reducedMotion";

export default function Hero() {
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const tickerRef = useRef(null);
  const [tickerIndex, setTickerIndex] = useState(0);
  const [tickerRunning, setTickerRunning] = useState(false);
  const [tickerHovered, setTickerHovered] = useState(false);

  // Load-in animation. Starts the ticker once it completes (or immediately,
  // unanimated, if the visitor prefers reduced motion).
  useEffect(() => {
    if (prefersReducedMotion()) {
      setTickerRunning(true);
      return;
    }

    const ctx = gsap.context(() => {
      gsap
        .timeline({ onComplete: () => setTickerRunning(true) })
        .from(eyebrowRef.current, { opacity: 0, y: 14, duration: 0.5, ease: "power2.out" })
        .from(titleRef.current, { opacity: 0, y: 20, duration: 0.7, ease: "power2.out" }, "-=0.25")
        .from(subRef.current, { opacity: 0, y: 16, duration: 0.6, ease: "power2.out" }, "-=0.4")
        .from(tickerRef.current, { opacity: 0, y: 10, duration: 0.5, ease: "power2.out" }, "-=0.3");
    });

    return () => ctx.revert();
  }, []);

  // The interval's entire lifecycle lives in this one effect, so React
  // guarantees the previous one is cleared before a new one is created
  // (on hover changes, on Fast Refresh, on unmount) — no orphaned timers.
  useEffect(() => {
    if (!tickerRunning || tickerHovered || prefersReducedMotion()) return;
    const id = setInterval(() => {
      setTickerIndex((i) => (i + 1) % hero.tickerItems.length);
    }, 2400);
    return () => clearInterval(id);
  }, [tickerRunning, tickerHovered]);

  const pauseTicker = () => setTickerHovered(true);
  const resumeTicker = () => setTickerHovered(false);

  return (
    <header id="top" className="relative overflow-hidden border-b border-rule">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden md:block"
      >
        <img
          src={hero.image}
          alt=""
          className="h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-bg)_0%,var(--color-bg)_36%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-[1040px] px-7 py-28 md:py-32">
        <div className="max-w-[560px]">
          <p
            ref={eyebrowRef}
            className="mb-6 font-mono text-xs uppercase tracking-[0.12em] text-accent"
          >
            {hero.eyebrow}
          </p>
          <h1
            ref={titleRef}
            className="max-w-[820px] font-display text-[2.4rem] font-semibold leading-[1.06] text-text-primary sm:text-[3.2rem] lg:text-[4.2rem]"
          >
            {hero.title}
          </h1>
          <p ref={subRef} className="mt-6 max-w-[560px] text-[17px] text-text-muted">
            {hero.sub}
          </p>
          <a
            ref={tickerRef}
            href={`#${hero.tickerItems[tickerIndex].slug}`}
            onMouseEnter={pauseTicker}
            onMouseLeave={resumeTicker}
            className="mt-11 inline-flex items-center gap-2.5 rounded-full border border-rule px-4 py-2.5 font-mono text-[13px] text-text-muted no-underline transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <span>STATUS:</span>
            <span className="font-bold text-text-primary">
              {hero.tickerItems[tickerIndex].label}
              <span className="ml-0.5 inline-block h-[14px] w-[7px] translate-y-[2px] animate-[blink_1s_steps(1)_infinite] bg-accent motion-reduce:animate-none" />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
