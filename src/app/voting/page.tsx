"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import PollingTable from "@/components/PollingTable";

const VotingMap = dynamic(() => import("@/components/VotingMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] md:h-[500px] rounded-2xl bg-border animate-pulse" />
  ),
});

export default function VotingPage() {
  return (
    <section className="pt-28 pb-24 min-h-screen">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          Find Your Polling Place
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground text-lg mb-12 max-w-2xl"
        >
          Locate your neighborhood&apos;s designated polling location. Every
          vote matters — make yours count.
        </motion.p>

        <div className="mb-16">
          <VotingMap />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-foreground mb-6"
        >
          All Polling Locations
        </motion.h2>

        <PollingTable />
      </div>
    </section>
  );
}
