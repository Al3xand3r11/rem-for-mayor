"use client";

import { motion } from "framer-motion";
import { events, CANDIDATE_NAME } from "@/lib/mock-data";
import EventCard from "@/components/EventCard";

export default function EventsPage() {
  return (
    <section className="relative pt-28 pb-24 bg-[#c8d6d1] min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 h-2/3 w-2/3 bg-linear-to-br from-[#0D7377]/8 via-[#0D7377]/3 via-30% to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-1/2 w-1/2 bg-linear-to-tl from-[#0D7377]/6 via-[#0D7377]/2 via-35% to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          Upcoming Events
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground text-lg mb-12 max-w-2xl"
        >
          Come meet {CANDIDATE_NAME}, hear the vision, and make your voice
          heard. All events are free and open to the public.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
