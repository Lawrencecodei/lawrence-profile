import { motion, useReducedMotion } from "framer-motion";

const STYLES = {
  live: "text-live bg-live-soft",
  building: "text-building bg-building-soft",
  early: "text-early bg-early-soft",
};

export default function StatusStamp({ status, label }) {
  const reduced = useReducedMotion();

  return (
    <motion.span
      className={`inline-block select-none rounded font-mono text-[11px] font-bold uppercase tracking-[0.08em] ${STYLES[status]}`}
      style={{ padding: "5px 11px", border: "1px dashed currentColor" }}
      initial={{ rotate: -2 }}
      whileHover={
        reduced
          ? undefined
          : {
              rotate: -3,
              scale: 1.08,
              transition: { type: "spring", stiffness: 320, damping: 9 },
            }
      }
    >
      {label}
    </motion.span>
  );
}
