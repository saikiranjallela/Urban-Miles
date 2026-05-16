"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

// ─── Testimonials Section ──────────────────────────────────────────────────────
const testimonials = [
  {
    id: 0,
    name: "Arjun Reddy",
    role: "Software Engineer",
    location: "Hyderabad",
    quote:
      "I came for the run. I stayed for the people. Urban Miles didn't just improve my fitness — it completely changed my Sunday mornings and gave me a tribe I never knew I needed.",
    avatar: "https://i.pravatar.cc/150?img=3",
    distance: "10K Runner",
  },
  {
    id: 1,
    name: "Priya Sharma",
    role: "Designer",
    location: "Hyderabad",
    quote:
      "The atmosphere is electric. You're surrounded by people from all walks of life — doctors, students, entrepreneurs — all united by the same sunrise and the same hustle. It's addictive.",
    avatar: "https://i.pravatar.cc/150?img=5",
    distance: "5K Runner",
  },
  {
    id: 2,
    name: "Karthik Nair",
    role: "Entrepreneur",
    location: "Hyderabad",
    quote:
      "Urban Miles is the best decision I made in 2026. Post-run coffee at Mana Katha, conversations with amazing people, and the energy of 100+ runners? Nothing else compares.",
    avatar: "https://i.pravatar.cc/150?img=8",
    distance: "3K → 10K",
  },
  {
    id: 3,
    name: "Sneha Iyer",
    role: "Medical Professional",
    location: "Hyderabad",
    quote:
      "As a doctor, I prescribe movement. As a runner, I prescribe Urban Miles. The community here is unlike anything else in the city — warm, welcoming, and full of energy.",
    avatar: "https://i.pravatar.cc/150?img=9",
    distance: "5K Runner",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section
      className="relative py-32 md:py-48 bg-[#161616] overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #567C4E 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-10 h-[2px] bg-[#567C4E]" />
            <span className="text-[#567C4E] text-xs font-bold tracking-[0.35em] uppercase">Their Stories</span>
            <div className="w-10 h-[2px] bg-[#567C4E]" />
          </div>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            What Runners<br />
            <span className="text-[#567C4E]">Are Saying.</span>
          </h2>
        </motion.div>

        {/* ── Main Testimonial Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div
            className="relative rounded-3xl p-8 md:p-14"
            style={{
              background: "rgba(23,23,23,0.8)",
              border: "1px solid rgba(255,255,255,0.06)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Top orange line */}
            <div
              className="absolute top-0 left-0 right-0 h-px rounded-t-3xl"
              style={{ background: "linear-gradient(90deg, transparent, rgba(86,124,78,0.4), transparent)" }}
            />

            {/* Quote icon */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-8"
              style={{ background: "rgba(86,124,78,0.1)", border: "1px solid rgba(86,124,78,0.2)" }}
            >
              <Quote size={20} className="text-[#567C4E]" />
            </div>

            {/* Quote text with transition */}
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed mb-10"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                &ldquo;{current.quote}&rdquo;
              </motion.blockquote>
            </AnimatePresence>

            {/* Author */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`author-${active}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-4"
              >
                <div
                  className="w-14 h-14 rounded-full overflow-hidden border-2"
                  style={{ borderColor: "rgba(86,124,78,0.3)" }}
                >
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-bold text-lg" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {current.name}
                  </div>
                  <div className="text-[#B8B8B8] text-sm">{current.role} · {current.location}</div>
                </div>
                <div
                  className="ml-auto px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
                  style={{
                    background: "rgba(86,124,78,0.1)",
                    border: "1px solid rgba(86,124,78,0.2)",
                    color: "#567C4E",
                  }}
                >
                  {current.distance}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── Selector Buttons ── */}
        <div className="flex justify-center gap-4 flex-wrap">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 border"
              style={{
                background: active === i ? "rgba(86,124,78,0.1)" : "rgba(255,255,255,0.02)",
                borderColor: active === i ? "rgba(86,124,78,0.4)" : "rgba(255,255,255,0.06)",
                color: active === i ? "#567C4E" : "#B8B8B8",
              }}
            >
              <div
                className="w-7 h-7 rounded-full overflow-hidden border"
                style={{ borderColor: active === i ? "rgba(86,124,78,0.5)" : "rgba(255,255,255,0.1)" }}
              >
                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
              </div>
              {t.name.split(" ")[0]}
            </motion.button>
          ))}
        </div>

      </div>
    </section>
  );
}
