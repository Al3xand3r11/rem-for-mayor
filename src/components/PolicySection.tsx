"use client";

import { motion } from "framer-motion";
import { policies } from "@/lib/mock-data";
import PolicyItem from "./PolicyItem";

export default function PolicySection() {
  return (
    <section id="platform" className="relative z-30 py-24 bg-accent overflow-hidden">
      {/* Soft radiance patches */}
      <div className="absolute top-0 right-0 h-2/3 w-2/5 bg-linear-to-bl from-[#4d8ef0]/12 via-[#4d8ef0]/4 via-35% to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-1/2 w-1/3 bg-linear-to-tr from-[#06327e]/14 via-[#06327e]/4 via-40% to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 h-1/3 w-1/3 bg-linear-to-br from-[#ffd034]/5 via-[#ffd034]/1 via-30% to-transparent pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-1/2 w-2/5 bg-linear-to-tl from-[#4d8ef0]/8 via-[#4d8ef0]/2 via-35% to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-sm font-bold tracking-[0.2em] uppercase text-tertiary text-center mb-4"
        >
          The Platform
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-white text-center leading-tight mb-16"
        >
          Respecting Bowie&apos;s legacy
          <br />
          while preparing its future.
        </motion.h2>

        <div className="space-y-8">
          {policies.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg"
            >
              <h3 className="text-xl md:text-2xl font-black text-accent px-6 pt-6 pb-2">
                {category.title}
              </h3>
              <div>
                {category.items.map((item, i) => (
                  <PolicyItem
                    key={i}
                    item={item}
                    isLast={i === category.items.length - 1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
