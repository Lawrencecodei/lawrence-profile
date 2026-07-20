import { useEffect, useState } from "react";

const LINKS = [
  { href: "#ledger", label: "Ledger" },
  { href: "#toolkit", label: "Toolkit" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 96);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        solid ? "bg-bg/85 backdrop-blur-md border-rule" : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1040px] items-center justify-between px-7">
        <a
          href="#top"
          className="font-mono text-sm font-bold tracking-[0.08em] text-text-primary"
        >
          LAWRENCE<span className="text-accent">.</span>
        </a>
        <ul className="flex gap-7">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] tracking-[0.03em] text-text-muted transition-colors duration-200 hover:text-accent focus-visible:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
