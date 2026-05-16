"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// ─── Experiences / Route Categories ───────────────────────────────────────────
const experiences = [
  {
    id: "3K",
    title: "Fun Run",
    distance: "3 Kilometres",
    desc: "Perfect for beginners. Experience the city lights, fresh morning air, and urban energy at a comfortable, social pace. Join a vibrant community of runners, make new friends, and start your Sunday right with a refreshing, easy-going 3K run!",
    color: "#60A5FA",
    emoji: "🌅",
    for: "Beginners & social runners",
  },
];

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="relative py-32 md:py-40 bg-[#111111] overflow-hidden border-y"
      style={{ borderColor: "rgba(255,255,255,0.04)" }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-[2px] bg-[#FF5A1F]" />
              <span className="text-[#FF5A1F] text-xs font-bold tracking-[0.35em] uppercase">Run Categories</span>
            </div>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Choose Your<br />
              <span
                style={{
                  background: "linear-gradient(135deg, #FFFFFF 0%, rgba(255,255,255,0.3) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Distance.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#B3B3B3] font-light max-w-xs leading-relaxed"
          >
            Every runner is different. Whether you&apos;re here for the vibes or the challenge — we have your distance.
          </motion.p>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 max-w-xl mx-auto gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer hover-lift"
              style={{
                background: "rgba(23,23,23,0.9)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${exp.color}30`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              {/* Top color accent */}
              <div
                className="h-[2px] w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }}
              />

              {/* Background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top left, ${exp.color}08 0%, transparent 60%)`,
                }}
              />

              <div className="p-8 md:p-10 relative">
                {/* Distance badge + emoji */}
                <div className="flex items-start justify-between mb-8">
                  <div
                    className="text-6xl md:text-7xl font-black leading-none tracking-tighter"
                    style={{ fontFamily: 'Outfit, sans-serif', color: exp.color }}
                  >
                    {exp.id}
                  </div>
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{exp.emoji}</span>
                </div>

                {/* Title */}
                <div className="mb-1">
                  <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#555555]">{exp.distance}</span>
                </div>
                <h3
                  className="text-3xl font-black uppercase tracking-tight mb-4 transition-colors duration-300"
                  style={{ fontFamily: 'Outfit, sans-serif', color: "rgba(255,255,255,0.9)" }}
                >
                  {exp.title}
                </h3>

                <p className="text-[#B3B3B3] font-light leading-relaxed text-sm mb-8">
                  {exp.desc}
                </p>

                {/* For tag */}
                <div
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium mb-8"
                  style={{
                    background: `${exp.color}10`,
                    border: `1px solid ${exp.color}20`,
                    color: exp.color,
                  }}
                >
                  {exp.for}
                </div>

                {/* CTA link */}
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLScF_604KwPfEc_NqLnXRXtgOx7A7Bb_PpD8Aj_815DctPJm6g/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#555555] group-hover:text-white transition-colors duration-300"
                >
                  Register for {exp.id}
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
