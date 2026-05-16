"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

// ─── Particle System ───────────────────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    interface Particle {
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; life: number; maxLife: number; hue: number;
    }

    const particles: Particle[] = [];
    const createParticle = () => {
      const isOrange = Math.random() > 0.6;
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -(Math.random() * 1.2 + 0.4),
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        life: 0,
        maxLife: Math.random() * 200 + 100,
        hue: isOrange ? Math.random() * 30 + 15 : 0,
      });
    };

    // Light streaks
    interface Streak {
      x: number; y: number; width: number; speed: number; opacity: number; delay: number;
    }
    const streaks: Streak[] = Array.from({ length: 4 }, () => ({
      x: -300,
      y: Math.random() * (window.innerHeight * 0.6),
      width: Math.random() * 200 + 100,
      speed: Math.random() * 3 + 2,
      opacity: Math.random() * 0.15 + 0.05,
      delay: Math.random() * 300,
    }));

    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      // Draw streaks
      streaks.forEach((streak) => {
        if (frame < streak.delay) return;
        streak.x += streak.speed;
        if (streak.x > canvas.width + 400) {
          streak.x = -300;
          streak.y = Math.random() * (canvas.height * 0.7);
        }
        const grad = ctx.createLinearGradient(streak.x - streak.width, streak.y, streak.x + streak.width, streak.y);
        grad.addColorStop(0, `rgba(255,90,31,0)`);
        grad.addColorStop(0.5, `rgba(255,90,31,${streak.opacity})`);
        grad.addColorStop(1, `rgba(255,90,31,0)`);
        ctx.beginPath();
        ctx.strokeStyle = grad as unknown as string;
        ctx.lineWidth = 1;
        ctx.moveTo(streak.x - streak.width, streak.y);
        ctx.lineTo(streak.x + streak.width, streak.y);
        ctx.stroke();
      });

      // Create particles
      if (frame % 3 === 0 && particles.length < 80) createParticle();

      // Draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        const lifeRatio = p.life / p.maxLife;
        const alpha = p.opacity * (lifeRatio < 0.1 ? lifeRatio * 10 : lifeRatio > 0.8 ? (1 - lifeRatio) * 5 : 1);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        if (p.hue > 0) {
          ctx.fillStyle = `hsla(${p.hue}, 100%, 65%, ${alpha})`;
        } else {
          ctx.fillStyle = `rgba(255,255,255,${alpha * 0.4})`;
        }
        ctx.fill();

        if (p.life >= p.maxLife) particles.splice(i, 1);
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[2] pointer-events-none"
      style={{ opacity: 0.9 }}
    />
  );
}

// ─── Cursor Trail ──────────────────────────────────────────────────────────────
function CursorEffect() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMove);

    let rafId: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const updateRing = () => {
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.1);
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.1);
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      rafId = requestAnimationFrame(updateRing);
    };
    updateRing();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ transform: "translate(-50%, -50%)" }} />
      <div ref={ringRef} className="cursor-ring" style={{ transform: "translate(-50%, -50%)" }} />
    </>
  );
}

// ─── Hero Section ──────────────────────────────────────────────────────────────
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollY } = useScroll();
  const scrollYSmooth = useSpring(scrollY, { stiffness: 80, damping: 30 });

  // Parallax transforms for different layers
  const bgY = useTransform(scrollYSmooth, [0, 800], [0, 200]);
  const midY = useTransform(scrollYSmooth, [0, 800], [0, 120]);
  const fgY = useTransform(scrollYSmooth, [0, 800], [0, 60]);
  const textY = useTransform(scrollYSmooth, [0, 800], [0, 80]);
  const opacity = useTransform(scrollYSmooth, [0, 400], [1, 0]);
  const scale = useTransform(scrollYSmooth, [0, 800], [1, 1.08]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Split text for stagger animation
  const titleChars = "URBAN MILES".split("");

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.8 } },
  };

  const charVariants: Variants = {
    hidden: {
      y: 100,
      opacity: 0,
      rotateX: 90,
      filter: "blur(10px)",
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      <CursorEffect />

      {/* ── Layer 0: Deep Background Atmospheric Gradient ── */}
      <motion.div
        style={{ y: bgY, scale }}
        className="absolute inset-0 z-0"
      >
        {/* Main ambient orb - orange */}
        <div
          className="absolute top-[15%] left-[20%] w-[50vw] h-[50vw] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(255,90,31,0.35) 0%, rgba(255,90,31,0.1) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Secondary ambient - deep red */}
        <div
          className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(200,40,0,0.4) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        {/* Cool atmosphere orb */}
        <div
          className="absolute top-[40%] right-[30%] w-[30vw] h-[30vw] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(255,140,60,0.3) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>

      {/* ── Layer 1: Grid / Urban Texture ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-[1] opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* ── Particle Canvas ── */}
      <ParticleCanvas />

      {/* ── Layer 2: Large Background Text (Luxury Fashion Style) ── */}
      <motion.div
        style={{ y: midY }}
        className="absolute inset-0 z-[3] flex items-center justify-center pointer-events-none overflow-hidden"
      >
        <div className="whitespace-nowrap select-none" style={{ transform: "translateY(10%)" }}>
          <div
            className="text-[22vw] font-black uppercase leading-none opacity-[0.035] tracking-[-0.06em]"
            style={{
              fontFamily: 'Outfit, sans-serif',
              WebkitTextStroke: "1px rgba(255,255,255,0.15)",
              color: "transparent",
            }}
          >
            URBAN
          </div>
          <div
            className="text-[22vw] font-black uppercase leading-none opacity-[0.025] tracking-[-0.06em]"
            style={{
              fontFamily: 'Outfit, sans-serif',
              WebkitTextStroke: "1px rgba(255,90,31,0.2)",
              color: "transparent",
              marginTop: "-4vw",
            }}
          >
            MILES
          </div>
        </div>
      </motion.div>

      {/* ── Layer 3: Cinematic Vignette ── */}
      <div
        className="absolute inset-0 z-[4] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(10,10,10,0.6) 70%, rgba(10,10,10,0.95) 100%)",
        }}
      />

      {/* ── Layer 4: Bottom Fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-[4] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0A0A0A)" }}
      />

      {/* ── Main Hero Content ── */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 flex flex-col items-center text-center"
      >
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="flex items-center gap-6 mb-10"
        >
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#FF5A1F]" />
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <span className="text-[#FF5A1F] text-xs font-bold tracking-[0.35em] uppercase">
              Hyderabad Est. 2026
            </span>
            <span className="hidden sm:block h-[1px] w-4 bg-white/20" />
            <span className="text-[#B3B3B3] text-xs font-medium tracking-[0.25em] uppercase">
              Every Sunday 6AM
            </span>
          </div>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#FF5A1F]" />
        </motion.div>

        {/* MAIN TITLE with character stagger */}
        <div style={{ perspective: "1200px" }} className="mb-4 overflow-hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="flex flex-wrap justify-center"
            aria-label="URBAN MILES"
          >
            {titleChars.map((char, i) => (
              <motion.span
                key={i}
                variants={charVariants}
                className="inline-block text-[16vw] md:text-[14vw] lg:text-[12vw] font-black uppercase leading-[0.85] tracking-[-0.04em]"
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  color: char === " " ? "transparent" : "#FFFFFF",
                  width: char === " " ? "3vw" : "auto",
                  display: "inline-block",
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Subtitle - Run. Connect. Rave. */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex items-center gap-4 md:gap-8 mb-8"
        >
          {["Sweat", "Smile", "Socialize"].map((word, i) => (
            <div key={word} className="flex items-center gap-4 md:gap-8">
              <span
                className="text-2xl md:text-4xl font-bold tracking-wider uppercase"
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  color: i === 1 ? "#FF5A1F" : "#FFFFFF",
                }}
              >
                {word}
              </span>
              {i < 2 && (
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] opacity-60" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Secondary text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-[#B3B3B3] mb-3"
        >
          Sweat &bull; Smile &bull; Socialize
        </motion.p>

        {/* Emotional text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="text-base md:text-lg text-[#555555] font-light italic mb-14 max-w-md leading-relaxed"
        >
          It starts with a run.<br />It becomes an experience.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
          className="flex flex-col sm:flex-row gap-5 items-center"
        >
          {/* Primary CTA */}
          <a
            href="#event"
            className="group relative overflow-hidden rounded-full text-base font-bold uppercase tracking-widest px-10 py-4 text-white transition-all duration-500"
            style={{
              background: "#FF5A1F",
              boxShadow: "0 0 30px rgba(255,90,31,0.4), 0 0 60px rgba(255,90,31,0.1)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px rgba(255,90,31,0.6), 0 0 100px rgba(255,90,31,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(255,90,31,0.4), 0 0 60px rgba(255,90,31,0.1)";
            }}
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 skew-x-12" />
            <span className="relative flex items-center gap-3">
              Register Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#about"
            className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#B3B3B3] hover:text-white transition-colors duration-300"
          >
            <span>Explore the Movement</span>
            <div className="w-8 h-[1px] bg-current group-hover:w-14 transition-all duration-300" />
          </a>
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#555555]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="text-[#FF5A1F] opacity-60"
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>

      {/* ── Horizontal Marquee at Bottom ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 z-[8] overflow-hidden border-t border-white/5 bg-[#0A0A0A]/50 backdrop-blur-sm py-3"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6 text-[10px] font-bold tracking-[0.3em] uppercase text-[#333333]">
              Urban Miles <span className="text-[#FF5A1F]">✦</span> Every Sunday 6AM <span className="text-[#FF5A1F]">✦</span> Mana Katha Cafe <span className="text-[#FF5A1F]">✦</span> LB Nagar Hyderabad <span className="text-[#FF5A1F]">✦</span> Sweat. Smile. Socialize. <span className="text-[#FF5A1F]">✦</span> Est. 2026 <span className="text-[#FF5A1F]">✦</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
