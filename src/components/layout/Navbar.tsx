"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Events", href: "#event" },
    { label: "Join Community", href: "#community" },
    { label: "About", href: "#about" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-bg-primary/80 backdrop-blur-xl border-b border-primary/10 py-3"
          : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative flex items-center group">
            <span className="text-xl md:text-2xl font-black tracking-tighter uppercase flex items-center" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '-0.04em' }}>
              <img
                src="/images/u1.png?v=2"
                alt="U"
                className="w-auto inline-block object-contain"
                style={{
                  height: "0.94em",
                  verticalAlign: "middle",
                  transform: "translateY(0.01em)",
                  marginRight: "-0.08em",
                  marginLeft: "-0.02em",
                  filter: "brightness(0) saturate(100%) invert(45%) sepia(15%) saturate(723%) hue-rotate(61deg) brightness(92%) contrast(88%)"
                }}
              />
              RBAN<span className="text-[#567C4E] group-hover:text-primary transition-all duration-300">MILES</span>
            </span>
            <div className="absolute -bottom-1 left-0 h-[1px] w-0 group-hover:w-full bg-[#567C4E] transition-all duration-500" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="relative text-sm font-medium tracking-wider text-text-secondary hover:text-text-primary transition-colors duration-300 group uppercase"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 group-hover:w-full bg-[#567C4E] transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Right: Social + CTA */}
          <div className="hidden md:flex items-center gap-5">
            <motion.a
              href="https://www.instagram.com/urbanmiles.hyd?igsh=Mm9qdWdiMXQxdGc5"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-text-secondary hover:text-[#567C4E] transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </motion.a>
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLScF_604KwPfEc_NqLnXRXtgOx7A7Bb_PpD8Aj_815DctPJm6g/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="relative overflow-hidden group px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider text-text-primary group-hover:text-bg-primary border border-[#567C4E] hover:border-transparent transition-all duration-300"
              style={{ boxShadow: '0 0 20px rgba(86, 124, 78, 0.15)' }}
            >
              <span className="absolute inset-0 bg-[#567C4E] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Register Now</span>
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-text-primary p-2 relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col justify-center items-center"
            style={{ background: 'rgba(234, 234, 234, 0.97)', backdropFilter: 'blur(30px)' }}
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-black uppercase tracking-tighter text-text-primary hover:text-[#567C4E] transition-colors duration-300"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLScF_604KwPfEc_NqLnXRXtgOx7A7Bb_PpD8Aj_815DctPJm6g/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-8 px-10 py-4 rounded-full text-lg font-bold uppercase tracking-wider text-bg-primary bg-[#567C4E]"
                style={{ boxShadow: '0 0 40px rgba(86,124,78,0.4)' }}
              >
                Register Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
