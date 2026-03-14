"use client";

import { motion } from "framer-motion";
import { events, CANDIDATE_NAME } from "@/lib/mock-data";
import EventCard from "@/components/EventCard";

export default function EventsPage() {
  const pastEvents = events.filter((e) => new Date(e.date + "T23:59:59") < new Date());
  const upcomingEvents = events.filter((e) => new Date(e.date + "T23:59:59") >= new Date());

  return (
    <section className="relative pt-28 pb-24 bg-accent-dark min-h-screen overflow-hidden">

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Events
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

        {pastEvents.length > 0 && (
          <>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-semibold text-white/80 mb-6"
            >
              Past Events
            </motion.h2>
            <div className="grid grid-cols-1 gap-6 mb-12">
              {pastEvents.map((event, i) => (
                <div key={event.id}>
                  <EventCard event={event} index={i} />
                </div>
              ))}
            </div>
          </>
        )}

        {upcomingEvents.length > 0 && (
          <>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-semibold text-white/80 mb-6"
            >
              Upcoming Events
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, i) => (
                <div key={event.id}>
                  <EventCard event={event} index={i} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
