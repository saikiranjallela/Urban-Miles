"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Community Gallery Section ─────────────────────────────────────────────────
const galleryItems = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=2070&auto=format&fit=crop",
    caption: "First light, first steps",
    tag: "Sunday Run",
    size: "tall",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2070&auto=format&fit=crop",
    caption: "Community energy",
    tag: "Together",
    size: "normal",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop",
    caption: "Sunrise runners",
    tag: "6AM Club",
    size: "normal",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1502224562085-639556652f33?q=80&w=2064&auto=format&fit=crop",
    caption: "City as canvas",
    tag: "Urban Miles",
    size: "wide",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?q=80&w=2070&auto=format&fit=crop",
    caption: "Post-run smiles",
    tag: "Community",
    size: "normal",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop",
    caption: "Every finish is a beginning",
    tag: "Stories",
    size: "tall",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    caption: "Coffee after miles",
    tag: "Mana Katha",
    size: "normal",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop",
    caption: "Streets that inspire",
    tag: "Hyderabad",
    size: "normal",
  },
];

function GalleryCard({ item, index }: { item: typeof galleryItems[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  const heightClass =
    item.size === "tall" ? "h-80 md:h-[460px]" :
    item.size === "wide" ? "h-48 md:h-56" :
    "h-52 md:h-64";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.06 }}
      className={`relative overflow-hidden rounded-2xl cursor-pointer group ${heightClass} ${item.size === "wide" ? "col-span-2" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.url})`, filter: "brightness(0.65) saturate(0.8)" }}
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.7 }}
      />

      {/* Orange tint on hover */}
      <motion.div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(86,124,78,0.2), transparent)" }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-2/3"
        style={{ background: "linear-gradient(to top, rgba(15,15,15,0.9) 0%, transparent 100%)" }}
      />

      {/* Tag */}
      <motion.div
        className="absolute top-4 left-4"
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <span
          className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
          style={{
            background: "rgba(86,124,78,0.2)",
            border: "1px solid rgba(86,124,78,0.3)",
            color: "#567C4E",
          }}
        >
          {item.tag}
        </span>
      </motion.div>

      {/* Caption on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-6 left-6 right-6"
          >
            <p className="text-white font-bold text-lg leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
              {item.caption}
            </p>
            <div className="w-8 h-[2px] bg-[#567C4E] mt-2" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Default bottom text */}
      {!hovered && (
        <div className="absolute bottom-4 left-4">
          <p className="text-[#B8B8B8] text-xs font-medium">{item.caption}</p>
        </div>
      )}
    </motion.div>
  );
}

export default function Community() {
  return (
    <section
      id="community"
      className="relative py-32 md:py-48 bg-[#0F0F0F] overflow-hidden"
    >
      {/* Atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[40vw] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(ellipse, #567C4E 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-[2px] bg-[#567C4E]" />
              <span className="text-[#567C4E] text-xs font-bold tracking-[0.35em] uppercase">Community Love</span>
            </div>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Urban Miles<br />
              <span
                style={{
                  background: "linear-gradient(135deg, #FFFFFF 0%, rgba(255,255,255,0.3) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                is a Family.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xs"
          >
            <p className="text-[#B8B8B8] font-light leading-relaxed mb-6">
              Smiling faces, candid moments, and shared stories. This is what Urban Miles really looks like.
            </p>
            {/* Avatar stack */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[11, 12, 13, 14, 15, 16].map((n) => (
                  <div
                    key={n}
                    className="w-9 h-9 rounded-full border-2 overflow-hidden shrink-0"
                    style={{ borderColor: "#0F0F0F" }}
                  >
                    <img
                      src={`https://i.pravatar.cc/72?img=${n}`}
                      alt="Runner"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div
                  className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-[10px] font-bold shrink-0"
                  style={{ borderColor: "#0F0F0F", background: "#567C4E", color: "#fff" }}
                >
                  100+
                </div>
              </div>
              <span className="text-[#555555] text-xs font-medium">runners strong</span>
            </div>
          </motion.div>
        </div>

        {/* ── Masonry Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto">
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-[#B8B8B8] hover:text-white transition-colors duration-300"
          >
            <span>Follow our journey on Instagram</span>
            <div className="w-8 h-px bg-current group-hover:w-16 transition-all duration-300" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
