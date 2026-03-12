"use client";

import { motion } from "framer-motion";
import { events, CANDIDATE_NAME } from "@/lib/mock-data";
import EventCard from "@/components/EventCard";

export default function EventsPage() {
  return (
    <section className="pt-28 pb-24 bg-muted min-h-screen">
      <div className="mx-auto max-w-5xl px-6">
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
