"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ─── Mana Katha Cultural Partnership Section ──────────────────────────────────
export default function ManaKatha() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id="mana-katha"
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden bg-[#111111]"
    >
      {/* Warm golden atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-0 top-0 w-[50vw] h-[50vw] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #FFB347 0%, #FF8C42 30%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute right-0 bottom-0 w-[40vw] h-[40vw] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #FF5A1F 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Top / bottom borders */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,179,71,0.2), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,90,31,0.2), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* ── Left: Imagery ── */}
          <motion.div style={{ y: imageY }} className="relative order-2 lg:order-1">
            {/* Main cafe image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: -1 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "4/5" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop')",
                  filter: "brightness(0.55) saturate(0.8)",
                }}
              />
              {/* Warm gold overlay */}
              <div
                className="absolute inset-0 opacity-25 mix-blend-overlay"
                style={{ background: "linear-gradient(135deg, #FFB347, #FF5A1F)" }}
              />
              {/* Bottom fade */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/2"
                style={{ background: "linear-gradient(to top, rgba(17,17,17,0.95), transparent)" }}
              />
              {/* On-image text */}
              <div className="absolute bottom-8 left-8 right-8">
                <div
                  className="text-[10px] font-bold tracking-[0.3em] uppercase mb-3"
                  style={{ color: "#FFB347" }}
                >
                  Our Home Base
                </div>
                <div className="text-white text-xl font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Mana Katha Cafe
                </div>
                <div className="text-[#B3B3B3] text-sm">Panama, LB Nagar · Hyderabad</div>
              </div>
            </motion.div>

            {/* Floating quote card */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="absolute -right-2 md:-right-6 top-1/3 max-w-[180px] p-5 rounded-2xl z-10"
              style={{
                background: "rgba(10,10,10,0.9)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,179,71,0.2)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(255,179,71,0.05)",
              }}
            >
              <div className="text-3xl mb-3">☕</div>
              <p className="text-white text-xs font-medium leading-relaxed italic">
                &ldquo;Every great story starts with a coffee.&rdquo;
              </p>
            </motion.div>

          </motion.div>

          {/* ── Right: Story Content ── */}
          <motion.div
            style={{ y: textY }}
            className="relative order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              {/* Logo */}
              <div className="mb-6 flex items-center gap-4">
                <img 
                  src="/mana-katha-logo.jpeg" 
                  alt="Mana Katha Cafe" 
                  className="w-16 md:w-20 h-auto rounded-xl border border-[rgba(255,179,71,0.2)]"
                  style={{ filter: "drop-shadow(0 0 20px rgba(255,179,71,0.2))" }}
                />
                <div className="text-xl md:text-2xl font-black text-white tracking-wider" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  MANA KATHA CAFE
                </div>
              </div>

              {/* Partnership label */}
              <div
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-8 text-xs font-bold tracking-widest uppercase"
                style={{
                  background: "rgba(255,179,71,0.08)",
                  border: "1px solid rgba(255,179,71,0.2)",
                  color: "#FFB347",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB347]" />
                Cultural Partnership
              </div>

              {/* Large quote headline */}
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                A Story Begins<br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #FFB347 0%, #FF8C42 50%, #FF5A1F 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  With a Coffee.
                </span>
              </h2>

              {/* Italic pull-quote */}
              <div
                className="relative pl-6 mb-10 py-2"
                style={{ borderLeft: "2px solid rgba(255,179,71,0.4)" }}
              >
                <p className="text-lg md:text-xl text-white font-light leading-relaxed italic">
                  &ldquo;A story begins with a coffee.<br />
                  Another begins with a run.&rdquo;
                </p>
              </div>

              {/* Body copy */}
              <div className="space-y-5 text-[#B3B3B3] font-light leading-relaxed mb-12">
                <p>
                  Mana Katha isn&apos;t just our finish line venue — it&apos;s the heart of the Urban Miles community. Every Sunday, after miles of shared sweat, we gather here for the conversations that matter.
                </p>
                <p>
                  This is not a sponsorship. This is a <span className="text-white font-medium">meaningful cultural partnership</span> — two brands rooted in the same belief: that the best stories happen when people come together.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-12">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=5th+%26+6th+floor,+BNR+Tower,+Panama+Godowns,+H.no:5-581/1A,+Plot+no+38%2639,+above+Mithaiwala,+Vanasthalipuram,+Telangana+500070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <span className="text-lg">📍</span>
                  <span className="text-sm text-[#B3B3B3] font-medium group-hover:text-white transition-colors">Panama, LB Nagar</span>
                </a>
                {[
                  { icon: "🕕", label: "Post-Run Meetup" },
                  { icon: "☕", label: "Community Brews" },
                  { icon: "📖", label: "Story Sharing" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm text-[#B3B3B3] font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="https://www.google.com/maps/search/?api=1&query=5th+%26+6th+floor,+BNR+Tower,+Panama+Godowns,+H.no:5-581/1A,+Plot+no+38%2639,+above+Mithaiwala,+Vanasthalipuram,+Telangana+500070"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest"
                style={{ color: "#FFB347" }}
              >
                <span>Find Mana Katha</span>
                <div className="w-8 h-[1px] bg-current" />
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
