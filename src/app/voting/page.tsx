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
    <section className="relative pt-28 pb-24 min-h-screen bg-[#c8d6d1] overflow-hidden">
      <div className="absolute top-0 right-0 h-2/3 w-2/3 bg-linear-to-bl from-[#0D7377]/8 via-[#0D7377]/3 via-30% to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-1/2 w-1/2 bg-linear-to-tr from-[#0D7377]/6 via-[#0D7377]/2 via-35% to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-6">
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
