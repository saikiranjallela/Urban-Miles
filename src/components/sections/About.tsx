"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// ─── Cinematic About / Story Section ─────────────────────────────────────────
export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const imageY = useTransform(smoothProgress, [0, 1], [60, -60]);
  const textX = useTransform(smoothProgress, [0, 1], [-40, 0]);

  const pillars = [
    { number: "01", title: "Sweat", desc: "Every Sunday, we assemble at Mana Katha Cafe and take over the streets of Hyderabad at dawn. No ego, just energy." },
    { number: "02", title: "Smile", desc: "Finish lines are just starting points for conversations. Stories get written between every breath." },
    { number: "03", title: "Socialize", desc: "Post-run, we celebrate at Mana Katha Cafe. Coffee, culture, community. The finish line is just the beginning." },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute right-0 top-1/4 w-[40vw] h-[40vw] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(255,90,31,0.4) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="mb-24 md:mb-32"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[2px] bg-[#FF5A1F]" />
            <span className="text-[#FF5A1F] text-xs font-bold tracking-[0.35em] uppercase">About Urban Miles</span>
          </div>
          <h2
            className="text-5xl md:text-7xl lg:text-[8vw] font-black uppercase tracking-tighter leading-[0.85]"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            More Than<br />
            <span style={{
              background: "linear-gradient(135deg, #FFFFFF 0%, rgba(255,255,255,0.3) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Just Running.
            </span>
          </h2>
        </motion.div>

        {/* ── Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-20 items-start">

          {/* Left: Image column with parallax */}
          <motion.div
            style={{ y: imageY }}
            className="lg:col-span-5 relative"
          >
            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop')",
                  filter: "brightness(0.6)",
                }}
              />
              {/* Orange overlay tint */}
              <div
                className="absolute inset-0 opacity-20 mix-blend-multiply"
                style={{ background: "linear-gradient(135deg, #FF5A1F, transparent)" }}
              />
              {/* Bottom gradient */}
              <div
                className="absolute bottom-0 left-0 right-0 h-2/3"
                style={{ background: "linear-gradient(to top, rgba(10,10,10,0.9), transparent)" }}
              />
              {/* Caption on image */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  "We believe movement changes people."
                </p>
                <p className="text-[#FF5A1F] text-sm font-medium mt-1">— Urban Miles Community</p>
              </div>
            </motion.div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
              className="absolute -right-6 md:-right-8 top-16 p-5 rounded-2xl"
              style={{
                background: "rgba(17,17,17,0.9)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,90,31,0.2)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(255,90,31,0.1)",
              }}
            >
              <div className="text-3xl font-black text-[#FF5A1F]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                500+
              </div>
              <div className="text-[#B3B3B3] text-xs font-medium tracking-wider uppercase mt-1">Runners</div>
            </motion.div>
          </motion.div>

          {/* Right: Story & Pillars */}
          <motion.div
            style={{ x: textX }}
            className="lg:col-span-7 lg:pl-8"
          >
            {/* Story paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="space-y-6 mb-16"
            >
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
                The city isn&apos;t just concrete and steel.
                It&apos;s an <em className="not-italic text-[#FF5A1F] font-medium">arena</em>. A canvas for discipline, passion, and transformation.
              </p>
              <p className="text-base md:text-lg text-[#B3B3B3] font-light leading-relaxed">
                Every early morning start. Every exhausted breath. Every time you push past the pain barrier, you&apos;re writing your own story into the streets of Hyderabad.
              </p>
              <div className="border-l-2 border-[#FF5A1F] pl-6 py-2">
                <p className="text-white font-medium text-lg leading-relaxed">
                  Urban Miles is a recurring Sunday running movement — a community-first experience blending fitness, connection, and culture.
                </p>
              </div>
            </motion.div>

            {/* The three pillars */}
            <div className="space-y-0">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: "easeInOut" }}
                  className="group relative flex gap-6 py-8 border-b cursor-default"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  {/* Hover line */}
                  <div className="absolute left-0 bottom-0 h-[1px] w-0 group-hover:w-full bg-[#FF5A1F] transition-all duration-500" />

                  <div className="text-[#FF5A1F] text-sm font-bold tracking-widest opacity-60 pt-1 shrink-0">
                    {pillar.number}
                  </div>
                  <div>
                    <h3
                      className="text-3xl font-black uppercase tracking-tight text-white group-hover:text-[#FF5A1F] transition-colors duration-300 mb-2"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-[#B3B3B3] font-light leading-relaxed max-w-2xl pr-4">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
