"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Instagram, Youtube } from "lucide-react";

// ─── Footer CTA Section ────────────────────────────────────────────────────────
export default function FooterCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const footerLinks = {
    movement: ["About Urban Miles", "The Formula", "Sunday Run", "Register Now"],
    community: ["Join WhatsApp", "Follow Instagram", "Strava Club", "Share Your Story"],
    venue: ["Mana Katha Cafe", "LB Nagar, Hyderabad", "Google Maps", "Contact Us"],
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-bg-primary"
    >
      {/* ── CTA Hero Block ── */}
      <div className="relative min-h-[70vh] flex flex-col items-center justify-center text-center py-32 overflow-hidden">
        {/* Background image with parallax */}
        <motion.div
          style={{ scale: bgScale }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1518619745898-93e765966dcd?q=80&w=2070&auto=format&fit=crop')",
              filter: "brightness(0.9) saturate(0.2) grayscale(0.5)",
              opacity: 0.04,
            }}
          />
        </motion.div>

        {/* Atmospheric overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(86,124,78,0.06) 0%, var(--color-bg-primary) 100%)",
          }}
        />

        {/* Top gradient */}
        <div
          className="absolute top-0 left-0 right-0 h-32 z-[2]"
          style={{ background: "linear-gradient(to bottom, var(--color-bg-primary), transparent)" }}
        />

        {/* Bottom gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 z-[2]"
          style={{ background: "linear-gradient(to top, var(--color-bg-primary), transparent)" }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-10 h-[2px] bg-[#567C4E]" />
            <span className="text-[#567C4E] text-xs font-bold tracking-[0.35em] uppercase">Join the Movement</span>
            <div className="w-10 h-[2px] bg-[#567C4E]" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-[10vw] font-black uppercase tracking-tighter leading-[0.85] mb-6"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Your Story<br />
            <span className="text-[#567C4E]">Starts Sunday.</span>
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-text-primary font-medium mb-14 max-w-xl mx-auto leading-relaxed"
          >
            Join 100+ runners writing their stories across the streets of Hyderabad every Sunday at 6AM.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLScF_604KwPfEc_NqLnXRXtgOx7A7Bb_PpD8Aj_815DctPJm6g/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group relative overflow-hidden flex items-center gap-3 px-10 py-4 rounded-full text-bg-primary font-bold text-base uppercase tracking-widest"
              style={{
                background: "#567C4E",
                boxShadow: "0 0 40px rgba(86,124,78,0.4), 0 20px 40px rgba(234, 234, 234, 0.4)",
              }}
            >
              <span className="absolute inset-0 bg-primary/30 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 skew-x-12" />
              <span className="relative">Register Now</span>
              <ArrowRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#community"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-3 px-10 py-4 rounded-full font-bold text-base uppercase tracking-widest text-text-primary border transition-all duration-300 hover:bg-primary/10"
              style={{ borderColor: "rgba(86, 124, 78, 0.2)" }}
            >
              Join Community
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="relative border-t z-10" style={{ borderColor: "rgba(86, 124, 78, 0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

            {/* Brand column */}
            <div className="lg:col-span-2">
              <div
                className="text-3xl font-black uppercase tracking-tighter mb-4"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                URBAN<span className="text-[#567C4E]">MILES</span>
              </div>
              <p className="text-text-muted font-light leading-relaxed text-sm mb-6 max-w-xs">
                A premium urban running movement. Every Sunday. Every mile, a new story.
              </p>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[#567C4E] text-xs font-bold tracking-[0.3em] uppercase">Hyderabad</span>
                <span className="text-[#333333]">·</span>
                <span className="text-text-muted text-xs tracking-wider">Est. 2026</span>
              </div>
              {/* Social icons */}
              <div className="flex items-center gap-5">
                {[
                  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/urbanmiles.hyd?igsh=Mm9qdWdiMXQxdGc5" },
                  { Icon: Youtube, label: "YouTube", href: "#" },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href !== "#" ? "_blank" : undefined}
                    rel={href !== "#" ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-text-muted hover:text-[#567C4E] transition-colors duration-300"
                    style={{ background: "rgba(86, 124, 78, 0.04)", border: "1px solid rgba(86, 124, 78, 0.06)" }}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-[#333333] mb-6">
                  {heading}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-text-muted hover:text-text-primary transition-colors duration-300 font-light"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t"
            style={{ borderColor: "rgba(86, 124, 78, 0.05)" }}
          >
            <p className="text-[#333333] text-xs font-medium tracking-wider">
              © {new Date().getFullYear()} Urban Miles · All rights reserved · Hyderabad, India
            </p>
            <p className="text-[#333333] text-xs font-medium tracking-wider italic">
              Every Mile Tells A Story.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
