import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswaldFont = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "URBAN MILES | Every Mile Tells A Story",
  description:
    "Join Hyderabad's premium urban running movement. Every Sunday at 6AM. Run. Connect. Rave. A community-first experience blending fitness, culture, and connection.",
  keywords: ["urban miles", "hyderabad running", "sunday run", "running community", "mana katha", "lb nagar", "marathon hyderabad"],
  openGraph: {
    title: "URBAN MILES | Every Mile Tells A Story",
    description: "Hyderabad's premium urban running movement. Every Sunday 6AM. Run. Connect. Rave.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${oswaldFont.variable} ${inter.variable} antialiased bg-[#0F0F0F] text-white grain-overlay`}
        style={{ fontFamily: "var(--font-oswald), var(--font-inter), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
