"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ─── The Formula: SWEAT → SMILE → SOCIALIZE ─────────────────────────────────────
export default function Formula() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.2, 0.7], ["0%", "100%"]);

  const steps = [
    {
      id: 0,
      number: "01",
      label: "SWEAT",
      tagline: "Break a sweat",
      description:
        "Every Sunday at 6AM, we assemble at Mana Katha Cafe and take over the streets of Hyderabad. 3K, 5K, or 10K — you choose your distance. The city is your track.",
      accent: "#FF5A1F",
      stats: ["3K / 5K / 10K", "Every Sunday", "6:00 AM Start"],
      icon: "🏃",
    },
    {
      id: 1,
      number: "02",
      label: "SMILE",
      tagline: "Share the joy",
      description:
        "Finish lines are just starting points for conversations. Runners from all walks of life come together, sharing stories, sweat, and laughter. This is where strangers become family.",
      accent: "#FF8C42",
      stats: ["500+ Runners", "Real Stories", "Zero Judgment"],
      icon: "😊",
    },
    {
      id: 2,
      number: "03",
      label: "SOCIALIZE",
      tagline: "Build your tribe",
      description:
        "Post-run, we celebrate at Mana Katha Cafe. Coffee, good conversations, and the endorphin rush of a completed run. This is the culture. This is Urban Miles.",
      accent: "#FFB347",
      stats: ["Mana Katha Cafe", "Community Vibes", "Post-Run Ritual"],
      icon: "☕",
    },
  ];

  return (
    <section
      id="formula"
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-[#111111] overflow-hidden"
    >
      {/* Horizontal scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-20"
          style={{ background: "linear-gradient(90deg, transparent, #FF5A1F, transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-20"
          style={{ background: "linear-gradient(90deg, transparent, #FF5A1F, transparent)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-[2px] bg-[#FF5A1F]" />
              <span className="text-[#FF5A1F] text-xs font-bold tracking-[0.35em] uppercase">The Formula</span>
            </div>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              How it<br />
              <span className="text-[#FF5A1F]">Works.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            className="text-[#B3B3B3] text-lg font-light max-w-sm leading-relaxed"
          >
            Three steps. One experience that&apos;ll change the way you think about running.
          </motion.p>
        </div>

        {/* ── Animated Flow Arrow (Desktop) ── */}
        <div className="hidden md:flex items-center justify-center gap-0 mb-20 px-12">
          {steps.map((step, i) => (
            <div key={step.id} className="flex items-center flex-1">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeInOut" }}
                onClick={() => setActiveStep(activeStep === i ? null : i)}
                className="flex-shrink-0 flex flex-col items-center gap-3 group cursor-pointer"
                style={{ width: "140px" }}
              >
                <div
                  className="relative w-20 h-20 rounded-full flex items-center justify-center text-2xl transition-all duration-500 border-2"
                  style={{
                    background: activeStep === i ? step.accent : "rgba(255,255,255,0.03)",
                    borderColor: activeStep === i ? step.accent : "rgba(255,255,255,0.1)",
                    boxShadow: activeStep === i ? `0 0 40px ${step.accent}50` : "none",
                  }}
                >
                  {step.icon}
                  {/* Pulse ring */}
                  {activeStep === i && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ border: `2px solid ${step.accent}` }}
                      animate={{ scale: [1, 1.6, 1.6], opacity: [0.8, 0, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </div>
                <div
                  className="text-2xl font-black uppercase tracking-tight transition-colors duration-300"
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    color: activeStep === i ? step.accent : "rgba(255,255,255,0.4)",
                  }}
                >
                  {step.label}
                </div>
                <div className="text-xs font-medium tracking-widest uppercase text-[#555555] group-hover:text-[#B3B3B3] transition-colors">
                  {step.tagline}
                </div>
              </motion.button>

              {i < steps.length - 1 && (
                <div className="flex-1 relative h-[2px] mx-4">
                  <div className="absolute inset-0 bg-white/10" />
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(90deg, #FF5A1F, #FF8C42)",
                      width: lineWidth,
                    }}
                  />
                  {/* Arrow head */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.2 }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-[#FF5A1F] text-lg"
                  >
                    ›
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Step Details Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: "easeInOut" }}
              onClick={() => setActiveStep(activeStep === i ? null : i)}
              className="group relative p-8 rounded-2xl cursor-pointer transition-all duration-500 hover-lift border"
              style={{
                background: activeStep === i
                  ? `linear-gradient(135deg, ${step.accent}15, ${step.accent}05)`
                  : "rgba(23,23,23,0.8)",
                borderColor: activeStep === i ? `${step.accent}40` : "rgba(255,255,255,0.06)",
                boxShadow: activeStep === i ? `0 30px 60px rgba(0,0,0,0.4), 0 0 40px ${step.accent}20` : "none",
              }}
            >
              {/* Number */}
              <div className="flex items-start justify-between mb-8">
                <span
                  className="text-[60px] font-black leading-none opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ fontFamily: 'Outfit, sans-serif', color: step.accent }}
                >
                  {step.number}
                </span>
                <span className="text-3xl">{step.icon}</span>
              </div>

              {/* Label */}
              <h3
                className="text-4xl font-black uppercase tracking-tighter mb-3 transition-colors duration-300"
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  color: activeStep === i ? step.accent : "#FFFFFF",
                }}
              >
                {step.label}
              </h3>

              <p className="text-[#B3B3B3] font-light leading-relaxed mb-8 text-sm">
                {step.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-2">
                {step.stats.map((stat) => (
                  <span
                    key={stat}
                    className="px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase"
                    style={{
                      background: `${step.accent}15`,
                      color: step.accent,
                      border: `1px solid ${step.accent}25`,
                    }}
                  >
                    {stat}
                  </span>
                ))}
              </div>

              {/* Accent line on hover */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                style={{ background: `linear-gradient(90deg, ${step.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* ── Bottom Tagline ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeInOut" }}
          className="text-center mt-24"
        >
          <p className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
            This is <span className="text-[#FF5A1F]">NOT</span> just a run.
          </p>
          <p className="text-[#B3B3B3] font-light mt-4 text-lg">
            This is a <span className="text-white font-medium">culture</span>.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
