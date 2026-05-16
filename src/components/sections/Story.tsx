"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Story() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section id="story" className="py-32 relative bg-bg-primary overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
          
          {/* Left: Typography & Story */}
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 font-outfit"
            >
              More Than <br />
              <span className="text-primary">Just Running.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-6 text-xl text-text-secondary font-light"
            >
              <p>
                The city isn&apos;t just concrete and steel. It&apos;s an arena. A canvas for discipline, passion, and transformation.
              </p>
              <p>
                Every early morning start. Every exhausted breath. Every time you push past the pain barrier, you are writing your own story into the streets.
              </p>
              <p className="font-medium text-white border-l-2 border-primary pl-6 py-2">
                We believe movement changes people. And changed people change the world.
              </p>
            </motion.div>
          </div>

          {/* Right: Asymmetrical Images & Atmosphere */}
          <div className="relative h-[600px] w-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: -2 } : { opacity: 0, scale: 0.9, rotate: -2 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute w-3/4 h-[400px] bg-bg-tertiary rounded-3xl overflow-hidden shadow-2xl z-10 top-0 right-0 border border-white/5"
            >
              {/* Image Placeholder */}
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 3 } : { opacity: 0, scale: 0.9, rotate: 3 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute w-2/3 h-[300px] bg-bg-secondary rounded-3xl overflow-hidden shadow-2xl z-20 bottom-0 left-0 border border-white/10"
            >
              {/* Image Placeholder */}
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1502224562085-639556652f33?q=80&w=2064&auto=format&fit=crop')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" />
            </motion.div>

            {/* Glowing Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
