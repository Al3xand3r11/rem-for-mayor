"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { CANDIDATE_NAME } from "@/lib/mock-data";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, 220]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[70vh] overflow-visible bg-accent"
    >
      {/* Soft radiance patches — full-bleed so no visible edges */}
      <div className="absolute inset-0 bg-linear-to-br from-[#4d8ef0]/10 via-transparent via-50% to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-b from-[#ffd034]/5 via-transparent via-35% to-transparent pointer-events-none" />

      {/* Warm hue behind the portrait */}
      <div className="absolute inset-0 bg-linear-to-l from-[#4d8ef0]/12 via-transparent via-55% to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-tl from-[#ffd034]/6 via-transparent via-40% to-transparent pointer-events-none" />

      {/* Horizontal line at bottom — aligned with text, 75% width */}
      <div className="absolute bottom-0 left-0 right-0 z-20 mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 pointer-events-none">
        <div className="w-[75%] h-px " />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center px-6 md:px-12 lg:px-20">
        {/* Left — text */}
        <div className="flex flex-1 flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tight max-w-2xl"
          >
            Bowie
            <br />
            <span className="text-accent-dark">Forward</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-4 text-base md:text-lg text-white/70 font-medium tracking-wide"
          >
            Remington Tennessee for Mayor
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-8"
          >
            <a
              href="https://www.instagram.com/vote4rem"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-tertiary text-foreground font-semibold px-8 py-4 rounded-full text-lg hover:bg-white hover:text-accent transition-colors duration-300"
            >
              Stay Up to Date
            </a>
          </motion.div>
        </div>

        {/* Right — candidate portrait, extends below hero */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          style={{ y: imageY }}
          className="hidden md:flex items-end justify-end shrink-0 w-[50%] lg:w-[48%] h-full"
        >
          <Image
            src="/images/rembg.png"
            alt={`${CANDIDATE_NAME} — candidate for mayor`}
            width={2000}
            height={1800}
            priority
            className="drop-shadow-2xl h-[85%] w-full object-cover object-top"
          />
        </motion.div>
      </div>
    </section>
  );
}
