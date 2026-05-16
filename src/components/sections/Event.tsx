"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Ticket, ArrowRight, Calendar } from "lucide-react";

// ─── Next Event Section ────────────────────────────────────────────────────────
export default function Event() {
  const categories = [
    { label: "3K", sublabel: "Fun Run", color: "#60A5FA", desc: "For beginners & social runners" },
    { label: "5K", sublabel: "Classic Run", color: "#FF5A1F", desc: "The perfect distance" },
    { label: "10K", sublabel: "Challenge", color: "#A78BFA", desc: "For the relentless" },
  ];

  return (
    <section
      id="event"
      className="relative py-32 md:py-48 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #FF5A1F 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-10 h-[2px] bg-[#FF5A1F]" />
              <span className="text-[#FF5A1F] text-xs font-bold tracking-[0.35em] uppercase">Next Event</span>
              <div className="w-10 h-[2px] bg-[#FF5A1F]" />
            </div>
            <h2
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              The Sunday<br />
              <span className="text-[#FF5A1F]">Ritual.</span>
            </h2>
            <p className="text-[#B3B3B3] text-lg font-light max-w-lg mx-auto leading-relaxed">
              Every Sunday is a new story. Lace up, show up, and let the city be your stage.
            </p>
          </motion.div>
        </div>

        {/* ── Event Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative max-w-5xl mx-auto mb-16"
        >
          {/* Outer glow border */}
          <div
            className="absolute -inset-px rounded-3xl opacity-60"
            style={{
              background: "linear-gradient(135deg, rgba(255,90,31,0.5) 0%, rgba(255,90,31,0.1) 50%, rgba(255,90,31,0.3) 100%)",
            }}
          />

          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "rgba(17,17,17,0.95)",
              backdropFilter: "blur(30px)",
            }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: "linear-gradient(90deg, transparent, #FF5A1F, transparent)" }}
            />

            <div className="p-8 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Left: Event Details */}
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold tracking-widest uppercase"
                    style={{
                      background: "rgba(255,90,31,0.1)",
                      border: "1px solid rgba(255,90,31,0.2)",
                      color: "#FF5A1F",
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
                    Registration Open
                  </div>

                  <h3
                    className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-8 leading-tight"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    Urban Miles<br />
                    <span className="text-[#FF5A1F]">Sunday Run</span>
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: "rgba(255,90,31,0.1)", border: "1px solid rgba(255,90,31,0.2)" }}
                      >
                        <MapPin size={18} className="text-[#FF5A1F]" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-base">Mana Katha Cafe, Panama</div>
                        <div className="text-[#B3B3B3] text-sm font-light mt-1">LB Nagar, Hyderabad, Telangana</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "rgba(255,90,31,0.1)", border: "1px solid rgba(255,90,31,0.2)" }}
                      >
                        <Calendar size={18} className="text-[#FF5A1F]" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-base">Every Sunday</div>
                        <div className="text-[#B3B3B3] text-sm font-light mt-1">Weekly recurring event — 52 Sundays a year</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "rgba(255,90,31,0.1)", border: "1px solid rgba(255,90,31,0.2)" }}
                      >
                        <Clock size={18} className="text-[#FF5A1F]" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-base">6:00 AM Assembly</div>
                        <div className="text-[#B3B3B3] text-sm font-light mt-1">Flag off at 6:15 AM — post-run at Mana Katha</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "rgba(255,90,31,0.1)", border: "1px solid rgba(255,90,31,0.2)" }}
                      >
                        <Ticket size={18} className="text-[#FF5A1F]" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-base">₹500 Entry</div>
                        <div className="text-[#B3B3B3] text-sm font-light mt-1">Includes — T-Shirt, Medal & Post-run experience</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Categories + CTA */}
                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-[#555555] mb-5">Choose Your Distance</h4>
                    <div className="space-y-3">
                      {categories.map((cat, i) => (
                        <motion.div
                          key={cat.label}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                          className="group flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all duration-300 hover-lift"
                          style={{
                            background: "rgba(255,255,255,0.02)",
                            borderColor: "rgba(255,255,255,0.06)",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}40`;
                            (e.currentTarget as HTMLElement).style.background = `${cat.color}08`;
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                          }}
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black"
                              style={{
                                fontFamily: 'Outfit, sans-serif',
                                color: cat.color,
                                background: `${cat.color}15`,
                              }}
                            >
                              {cat.label}
                            </div>
                            <div>
                              <div className="text-white font-bold">{cat.sublabel}</div>
                              <div className="text-[#B3B3B3] text-xs">{cat.desc}</div>
                            </div>
                          </div>
                          <ArrowRight size={16} className="text-[#555555] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-4 space-y-4">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative overflow-hidden flex items-center justify-center gap-3 w-full py-4 rounded-2xl text-white font-bold text-base uppercase tracking-widest transition-all duration-300"
                      style={{
                        background: "#FF5A1F",
                        boxShadow: "0 0 30px rgba(255,90,31,0.3), 0 20px 40px rgba(0,0,0,0.3)",
                      }}
                    >
                      <span className="absolute inset-0 bg-white/20 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 skew-x-12" />
                      <span className="relative">Secure Your Spot</span>
                      <ArrowRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
                    </motion.a>

                    <p className="text-center text-[#555555] text-xs font-medium tracking-wider">
                      Limited spots each Sunday — register early
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
