import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Formula from "@/components/sections/Formula";
import ManaKatha from "@/components/sections/ManaKatha";
import Experiences from "@/components/sections/Experiences";
import Event from "@/components/sections/Event";
import Community from "@/components/sections/Community";
import FooterCTA from "@/components/sections/FooterCTA";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-[#0F0F0F] text-white"
      style={{ overflowX: "hidden" }}
    >
      <Navbar />

      {/* Hero — full screen cinematic opener */}
      <Hero />

      {/* Breathing gap */}
      <div className="w-full" style={{ height: "2px", background: "linear-gradient(90deg, transparent, rgba(86,124,78,0.15), transparent)" }} />

      {/* About — story section */}
      <About />

      {/* Stats — numbers strip */}
      <Stats />

      {/* Breathing gap */}
      <div className="w-full" style={{ height: "2px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)" }} />

      {/* Formula — Sweat Smile Socialize */}
      <Formula />

      {/* Breathing gap */}
      <div className="w-full" style={{ height: "2px", background: "linear-gradient(90deg, transparent, rgba(109,147,100,0.15), transparent)" }} />

      {/* Mana Katha — cultural partnership */}
      <ManaKatha />

      {/* Breathing gap */}
      <div className="w-full" style={{ height: "2px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)" }} />

      {/* Experiences — 3K 5K 10K */}
      <Experiences />

      {/* Breathing gap */}
      <div className="w-full" style={{ height: "2px", background: "linear-gradient(90deg, transparent, rgba(86,124,78,0.1), transparent)" }} />

      {/* Event — next Sunday run */}
      <Event />

      {/* Community — gallery */}
      <Community />

      {/* Breathing gap */}
      <div className="w-full" style={{ height: "2px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)" }} />

      {/* Footer + CTA */}
      <FooterCTA />
    </main>
  );
}
