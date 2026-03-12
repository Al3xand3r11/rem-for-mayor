"use client";

import { motion } from "framer-motion";
import { policies } from "@/lib/mock-data";
import PolicyItem from "./PolicyItem";

export default function PolicySection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          The Platform
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground mb-12 text-lg"
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
