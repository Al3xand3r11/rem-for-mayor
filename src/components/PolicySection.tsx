"use client";

import { motion } from "framer-motion";
import { policies } from "@/lib/mock-data";
import PolicyItem from "./PolicyItem";

export default function PolicySection() {
  return (
    <section className="relative z-30 py-24 bg-[#c8d6d1] overflow-hidden">
      <div className="absolute top-0 right-0 h-full w-2/3 bg-linear-to-bl from-[#0D7377]/10 via-[#0D7377]/4 via-30% to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center"
        >
          The Platform
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground mb-12 text-lg text-center"
        >
          Real solutions for the issues that matter most to our community.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="border-t border-border"
        >
          {policies.map((policy) => (
            <PolicyItem key={policy.title} policy={policy} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
