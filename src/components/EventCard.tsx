"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import type { EventData } from "@/lib/mock-data";

const MiniMap = dynamic(() => import("./MiniMap"), {
  ssr: false,
  loading: () => <div className="h-40 w-full rounded-b-2xl bg-border animate-pulse" />,
});

export default function EventCard({
  event,
  index,
}: {
  event: EventData;
  index: number;
}) {
  const date = new Date(event.date + "T00:00:00");
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const day = date.getDate();
  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center justify-center bg-accent/10 rounded-xl px-3 py-2 min-w-[60px]">
            <span className="text-xs font-semibold text-accent uppercase">
              {month}
            </span>
            <span className="text-2xl font-bold text-accent leading-none">
              {day}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-foreground leading-snug">
              {event.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {weekday} &middot; {event.time}
            </p>
          </div>
        </div>

        <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
          {event.description}
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm text-foreground">
          <svg
            className="w-4 h-4 text-accent shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="font-medium">{event.location}</span>
          <span className="text-muted-foreground">&middot; {event.address}</span>
        </div>
      </div>

      <MiniMap lat={event.lat} lng={event.lng} />
    </motion.article>
  );
}
