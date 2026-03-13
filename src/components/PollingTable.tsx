"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { districts } from "@/lib/mock-data";

export default function PollingTable() {
  const [query, setQuery] = useState("");

  const allRows = useMemo(
    () =>
      districts.flatMap((d) =>
        d.neighborhoods.map((n) => ({
          neighborhood: n,
          district: d.id,
          pollingPlace: d.pollingPlace,
          pollingAddress: d.pollingAddress,
          color: d.color,
        }))
      ),
    []
  );

  const filtered = useMemo(() => {
    if (!query.trim()) return allRows;
    const q = query.toLowerCase();
    return allRows.filter((r) => r.neighborhood.toLowerCase().includes(q));
  }, [query, allRows]);

  const grouped = useMemo(() => {
    const map = new Map<number, typeof filtered>();
    filtered.forEach((r) => {
      const arr = map.get(r.district) ?? [];
      arr.push(r);
      map.set(r.district, arr);
    });
    return Array.from(map.entries()).sort(([a], [b]) => a - b);
  }, [filtered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative mb-6">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 pointer-events-none"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search your neighborhood..."
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/15 bg-white/10 backdrop-blur text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-tertiary/30 focus:border-tertiary transition-all"
        />
      </div>

      {grouped.length === 0 && (
        <p className="text-white/50 text-center py-8">
          No neighborhoods found matching &ldquo;{query}&rdquo;
        </p>
      )}

      {grouped.map(([districtId, rows]) => {
        const district = districts.find((d) => d.id === districtId)!;
        return (
          <div key={districtId} className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="h-3.5 w-3.5 rounded-full shrink-0"
                style={{ backgroundColor: district.color }}
              />
              <h3 className="text-lg font-bold text-white">
                District {districtId}
              </h3>
              <span className="text-sm text-white/50">
                — {district.pollingPlace}, {district.pollingAddress}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-white/15">
                    <th className="py-3 pr-6 text-xs font-semibold text-tertiary uppercase tracking-wide">
                      Neighborhood
                    </th>
                    <th className="py-3 pr-6 text-xs font-semibold text-tertiary uppercase tracking-wide hidden sm:table-cell">
                      Polling Location
                    </th>
                    <th className="py-3 text-xs font-semibold text-tertiary uppercase tracking-wide hidden md:table-cell">
                      Address
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <motion.tr
                      key={row.neighborhood}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.02 }}
                      className="border-b border-white/10 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-3 pr-6 font-medium text-white">
                        {row.neighborhood}
                      </td>
                      <td className="py-3 pr-6 text-white/60 hidden sm:table-cell">
                        {row.pollingPlace}
                      </td>
                      <td className="py-3 text-white/60 hidden md:table-cell">
                        {row.pollingAddress}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
