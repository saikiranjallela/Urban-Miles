"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

// ─── Stats / Numbers Section ───────────────────────────────────────────────────
const stats = [
  { value: "500+", label: "Runners", sub: "and growing every week" },
  { value: "52", label: "Sundays", sub: "every year, no excuses" },
  { value: "3", label: "Distances", sub: "3K · 5K · 10K" },
  { value: "1", label: "Community", sub: "you'll never want to leave" },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Horizontal rule top */}
      <div className="absolute top-0 left-12 right-12 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }} />

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(255,90,31,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group relative flex flex-col items-center md:items-start text-center md:text-left px-8 py-12 cursor-default"
              style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at center, rgba(255,90,31,0.04) 0%, transparent 70%)" }}
              />

              {/* Number */}
              <div
                className="text-5xl md:text-6xl lg:text-7xl font-black mb-3 tracking-tighter transition-colors duration-300 group-hover:text-[#FF5A1F]"
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  background: "linear-gradient(135deg, #FFFFFF 0%, rgba(255,255,255,0.5) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {stat.label}
              </div>

              {/* Sub */}
              <div className="text-[#555555] text-sm font-light">{stat.sub}</div>

              {/* Bottom accent on hover */}
              <div className="absolute bottom-0 left-8 w-0 group-hover:w-12 h-[2px] bg-[#FF5A1F] transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Horizontal rule bottom */}
      <div className="absolute bottom-0 left-12 right-12 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }} />
    </section>
  );
}
