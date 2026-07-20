import { footer } from "../content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="py-20 pb-14">
      <div className="mx-auto max-w-[1040px] px-7">
        <p className="mb-3.5 font-mono text-xs uppercase tracking-[0.12em] text-accent">
          {footer.label}
        </p>
        <h2 className="mb-7 max-w-[560px] text-[1.7rem] font-semibold text-text-primary md:text-[2.4rem]">
          {footer.title}
        </h2>

        <div className="mb-8 flex flex-wrap gap-3.5">
          {footer.contact.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="rounded-full border border-accent px-5 py-[11px] text-sm text-accent no-underline transition-opacity duration-200 hover:opacity-80"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mb-16 flex flex-wrap gap-3.5">
          {footer.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-rule px-5 py-[11px] text-sm text-text-primary no-underline transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-rule pt-7 font-mono text-xs text-text-muted">
          <span>{footer.bottomLeft}</span>
          <span>{year}</span>
        </div>
      </div>
    </footer>
  );
}
