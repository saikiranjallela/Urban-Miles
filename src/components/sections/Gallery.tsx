"use client";

import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502224562085-639556652f33?q=80&w=2064&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1428790067070-0ebce85cdd6a?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551816230-ef5ce3046f40?q=80&w=2070&auto=format&fit=crop"
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-bg-primary">
      <div className="max-w-[100rem] mx-auto px-6">
        
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter font-outfit"
          >
            The City <br className="md:hidden" />
            <span className="text-text-secondary">In Motion.</span>
          </motion.h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.2 }}
              className="relative overflow-hidden rounded-2xl group break-inside-avoid"
            >
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
              <img 
                src={img} 
                alt="Gallery Visual" 
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
