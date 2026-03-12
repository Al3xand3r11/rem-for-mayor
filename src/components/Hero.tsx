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
      className="relative h-[70vh] overflow-visible bg-[#c8d6d1]"
    >
      {/* Teal hue gradient behind the portrait */}
      <div className="absolute top-0 right-0 h-full w-1/2 bg-linear-to-l from-[#0D7377]/25 via-[#0D7377]/10 to-transparent pointer-events-none" />

      {/* 75% divider line at bottom — aligned with text content */}
      <div className="absolute bottom-0 left-0 right-0 z-20 mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 pointer-events-none">
        <div className="w-[75%] h-px bg-foreground/20" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center px-6 md:px-12 lg:px-20">
        {/* Left — text */}
        <div className="flex flex-1 flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-foreground leading-[0.9] tracking-tight max-w-2xl"
          >
            Bowie
            <br />
            Forward
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="mt-10"
          >
            <a
              href="#signup"
              className="inline-block bg-foreground text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-accent transition-colors duration-300"
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
