"use client";

import { motion } from "framer-motion";
import { SLOGAN, CAMPAIGN_TAGLINE } from "@/lib/mock-data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground">
      {/* Placeholder background — swap with candidate image */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-accent-dark to-accent opacity-90" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight"
        >
          {SLOGAN}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          {CAMPAIGN_TAGLINE}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-10"
        >
          <a
            href="#signup"
            className="inline-block bg-white text-foreground font-semibold px-8 py-4 rounded-full text-lg hover:bg-accent hover:text-white transition-colors duration-300"
          >
            Join the Movement
          </a>
        </motion.div>
      </div>
    </section>
  );
}
