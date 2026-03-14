"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import type { EventData } from "@/lib/mock-data";

const MiniMap = dynamic(() => import("./MiniMap"), {
  ssr: false,
  loading: () => (
    <div className="h-40 w-full rounded-b-2xl bg-border animate-pulse" />
  ),
});

function TvIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <rect x="2" y="7" width="20" height="13" rx="2" />
      <polyline points="17 2 12 7 7 2" />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

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

  const isTv = event.type === "tv";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      {isTv ? (
        <div className="flex flex-col md:flex-row">
          <div className="p-6 flex-1 min-w-0">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center justify-center bg-tertiary/20 rounded-xl px-3 py-2 min-w-[60px]">
                <span className="text-xs font-semibold text-tertiary uppercase">
                  {month}
                </span>
                <span className="text-2xl font-bold text-white leading-none">
                  {day}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-white leading-snug">
                  {event.title}
                </h3>
                <p className="text-sm text-white/60 mt-1">
                  {weekday} &middot; {event.time}
                </p>
              </div>
            </div>

            <p className="mt-4 text-white/60 text-sm leading-relaxed">
              {event.description}
            </p>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-white">
                <TvIcon className="w-4 h-4 text-tertiary shrink-0" />
                <span className="font-medium">Watch on TV</span>
              </div>
              {event.channels && (
                <div className="flex flex-wrap gap-2 ml-6">
                  {event.channels.map((ch) => (
                    <span
                      key={ch.provider}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-tertiary/15 px-3 py-1 text-xs font-medium text-white"
                    >
                      {ch.provider}
                      <span className="text-tertiary font-bold">Ch. {ch.channel}</span>
                    </span>
                  ))}
                </div>
              )}
              {event.airTimes && (
                <p className="ml-6 text-xs text-white/50">
                  Airing at {event.airTimes.join(", ")}
                </p>
              )}
            </div>
          </div>

          <div className="md:w-[400px] shrink-0">
            <iframe
              className="w-full h-56 md:h-full md:rounded-r-2xl"
              src="https://www.youtube.com/embed/MpBZl9bU7Nc?start=1111"
              title="TV Interview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ) : (
        <>
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center justify-center bg-tertiary/20 rounded-xl px-3 py-2 min-w-[60px]">
                <span className="text-xs font-semibold text-tertiary uppercase">
                  {month}
                </span>
                <span className="text-2xl font-bold text-white leading-none">
                  {day}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-white leading-snug">
                  {event.title}
                </h3>
                <p className="text-sm text-white/60 mt-1">
                  {weekday} &middot; {event.time}
                </p>
              </div>
            </div>

            <p className="mt-4 text-white/60 text-sm leading-relaxed">
              {event.description}
            </p>

            <div className="mt-4 flex items-start gap-2 text-sm text-white">
              <LocationIcon className="w-4 h-4 text-tertiary shrink-0 mt-0.5" />
              <div>
                <span className="font-medium">{event.location}</span>
                <span className="text-white/50">
                  {" "}
                  &middot; {event.address}
                </span>
              </div>
            </div>
          </div>

          {event.lat != null && event.lng != null && (
            <MiniMap lat={event.lat} lng={event.lng} />
          )}
        </>
      )}
    </motion.article>
  );
}
