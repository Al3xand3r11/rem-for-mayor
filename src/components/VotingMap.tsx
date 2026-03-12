"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { pollingPlaces } from "@/lib/mock-data";

const neighborhoods: {
  name: string;
  center: [number, number];
  bounds: [number, number][];
  color: string;
}[] = [
  {
    name: "Downtown",
    center: [40.7128, -74.006],
    bounds: [
      [40.707, -74.015],
      [40.707, -73.997],
      [40.718, -73.997],
      [40.718, -74.015],
    ],
    color: pollingPlaces[0].color,
  },
  {
    name: "Westside",
    center: [40.725, -74.01],
    bounds: [
      [40.719, -74.02],
      [40.719, -74.0],
      [40.732, -74.0],
      [40.732, -74.02],
    ],
    color: pollingPlaces[1].color,
  },
  {
    name: "Northgate",
    center: [40.74, -73.995],
    bounds: [
      [40.733, -74.005],
      [40.733, -73.985],
      [40.748, -73.985],
      [40.748, -74.005],
    ],
    color: pollingPlaces[2].color,
  },
  {
    name: "Eastbrook",
    center: [40.725, -73.985],
    bounds: [
      [40.719, -73.997],
      [40.719, -73.975],
      [40.732, -73.975],
      [40.732, -73.997],
    ],
    color: pollingPlaces[3].color,
  },
  {
    name: "Southview",
    center: [40.7, -73.995],
    bounds: [
      [40.693, -74.007],
      [40.693, -73.985],
      [40.706, -73.985],
      [40.706, -74.007],
    ],
    color: pollingPlaces[4].color,
  },
  {
    name: "Midtown",
    center: [40.74, -73.98],
    bounds: [
      [40.733, -73.985],
      [40.733, -73.97],
      [40.748, -73.97],
      [40.748, -73.985],
    ],
    color: pollingPlaces[5].color,
  },
];

export default function VotingMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      scrollWheelZoom: false,
    }).setView([40.725, -73.995], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    neighborhoods.forEach((hood) => {
      const matchingPlace = pollingPlaces.find(
        (p) => p.neighborhood === hood.name
      );

      const polygon = L.polygon(hood.bounds, {
        color: hood.color,
        weight: 2,
        fillColor: hood.color,
        fillOpacity: 0.25,
      }).addTo(map);

      if (matchingPlace) {
        polygon.bindPopup(
          `<div style="font-family:system-ui;line-height:1.5">
            <strong style="font-size:14px">${hood.name}</strong><br/>
            <span style="color:#6b7280">${matchingPlace.location}</span><br/>
            <span style="color:#6b7280;font-size:12px">${matchingPlace.address}</span>
          </div>`
        );
      }
    });

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl overflow-hidden border border-border shadow-sm"
    >
      <div ref={mapRef} className="h-[400px] md:h-[500px] w-full" />

      <div className="bg-white p-4 flex flex-wrap gap-4">
        {neighborhoods.map((hood) => (
          <div key={hood.name} className="flex items-center gap-2 text-sm">
            <span
              className="h-3 w-3 rounded-full shrink-0"
              style={{ backgroundColor: hood.color }}
            />
            <span className="text-muted-foreground">{hood.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
