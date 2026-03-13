"use client";

import { motion } from "framer-motion";
import { events, CANDIDATE_NAME } from "@/lib/mock-data";
import EventCard from "@/components/EventCard";

export default function EventsPage() {
  return (
    <section className="relative pt-28 pb-24 bg-accent-dark min-h-screen overflow-hidden">

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Upcoming Events
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/70 text-lg mb-12 max-w-2xl"
        >
          Come meet {CANDIDATE_NAME}, hear the vision, and make your voice
          heard. All events are free and open to the public.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, i) => (
            <div
              key={event.id}
              className={event.type === "tv" ? "md:col-span-2" : ""}
            >
              <EventCard event={event} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
