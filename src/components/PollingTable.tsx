"use client";

import { motion } from "framer-motion";
import { pollingPlaces } from "@/lib/mock-data";

export default function PollingTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="overflow-x-auto"
    >
      <table className="w-full text-left">
        <thead>
          <tr className="border-b-2 border-foreground/10">
            <th className="py-4 pr-6 text-sm font-semibold text-foreground uppercase tracking-wide">
              Neighborhood
            </th>
            <th className="py-4 pr-6 text-sm font-semibold text-foreground uppercase tracking-wide">
              Polling Location
            </th>
            <th className="py-4 pr-6 text-sm font-semibold text-foreground uppercase tracking-wide hidden sm:table-cell">
              Address
            </th>
            <th className="py-4 text-sm font-semibold text-foreground uppercase tracking-wide hidden md:table-cell">
              Hours
            </th>
          </tr>
        </thead>
        <tbody>
          {pollingPlaces.map((place, i) => (
            <motion.tr
              key={place.neighborhood}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border-b border-border hover:bg-accent/5 transition-colors"
            >
              <td className="py-4 pr-6">
                <div className="flex items-center gap-3">
                  <span
                    className="h-3 w-3 rounded-full shrink-0"
                    style={{ backgroundColor: place.color }}
                  />
                  <span className="font-medium text-foreground">
                    {place.neighborhood}
                  </span>
                </div>
              </td>
              <td className="py-4 pr-6 text-muted-foreground">
                {place.location}
              </td>
              <td className="py-4 pr-6 text-muted-foreground hidden sm:table-cell">
                {place.address}
              </td>
              <td className="py-4 text-muted-foreground hidden md:table-cell">
                {place.hours}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
