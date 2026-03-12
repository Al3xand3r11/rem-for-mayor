"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { districts, type District } from "@/lib/mock-data";

const BOWIE_CENTER: [number, number] = [38.945, -76.733];
const DEFAULT_ZOOM = 13;

function createPollingIcon(label: string) {
  return L.divIcon({
    className: "",
    html: `<div style="
      background:#1e293b;color:#fff;font-weight:700;font-size:11px;
      padding:6px 10px;border-radius:8px;white-space:nowrap;
      box-shadow:0 2px 8px rgba(0,0,0,.3);border:2px solid #fff;
      display:flex;align-items:center;gap:5px;
    "><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${label}</div>`,
    iconSize: [0, 0],
    iconAnchor: [12, 24],
  });
}

function buildPopupHTML(district: District) {
  const cols = district.neighborhoods.length > 12 ? 2 : 1;
  const colClass = cols === 2 ? "columns:2;column-gap:12px;" : "";
  const items = district.neighborhoods
    .map((n) => `<li style="margin-bottom:2px;break-inside:avoid">${n}</li>`)
    .join("");

  return `<div style="font-family:system-ui;max-width:380px;line-height:1.45">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
      <span style="width:12px;height:12px;border-radius:50%;background:${district.color};display:inline-block;flex-shrink:0"></span>
      <strong style="font-size:15px">District ${district.id}</strong>
    </div>
    <div style="background:#f8fafc;border-radius:6px;padding:8px 10px;margin-bottom:8px">
      <div style="font-weight:600;font-size:13px">${district.pollingPlace}</div>
      <div style="color:#64748b;font-size:12px">${district.pollingAddress}, Bowie, MD</div>
    </div>
    <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:#94a3b8;margin-bottom:4px">
      Neighborhoods (${district.neighborhoods.length})
    </div>
    <ul style="margin:0;padding-left:16px;font-size:12px;color:#475569;max-height:200px;overflow-y:auto;${colClass}">
      ${items}
    </ul>
  </div>`;
}

export default function VotingMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [activeDistrict, setActiveDistrict] = useState<number | null>(null);
  const polygonsRef = useRef<Map<number, L.Polygon>>(new Map());

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      scrollWheelZoom: false,
      zoomControl: true,
    }).setView(BOWIE_CENTER, DEFAULT_ZOOM);

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        maxZoom: 19,
      }
    ).addTo(map);

    districts.forEach((district) => {
      const polygon = L.polygon(district.bounds, {
        color: district.color,
        weight: 2,
        fillColor: district.color,
        fillOpacity: 0.2,
        dashArray: "6 4",
      }).addTo(map);

      polygonsRef.current.set(district.id, polygon);

      polygon.bindPopup(buildPopupHTML(district), { maxWidth: 400 });

      polygon.bindTooltip(
        `<strong>District ${district.id}</strong><br/><span style="font-size:12px;color:#64748b">${district.pollingPlace}</span>`,
        {
          sticky: true,
          className: "district-tooltip",
          direction: "top",
          offset: [0, -10],
        }
      );

      polygon.on("mouseover", () => {
        polygon.setStyle({ fillOpacity: 0.4, weight: 3, dashArray: "" });
        setActiveDistrict(district.id);
      });

      polygon.on("mouseout", () => {
        polygon.setStyle({ fillOpacity: 0.2, weight: 2, dashArray: "6 4" });
        setActiveDistrict(null);
      });
    });

    const pollingLocations = [
      {
        name: "Kenhill Center",
        address: "2614 Kenhill Drive",
        coords: districts[0].pollingCoords,
        servesDistricts: [1, 2],
      },
      {
        name: "Bowie Gymnasium",
        address: "4100 Northview Drive",
        coords: districts[2].pollingCoords,
        servesDistricts: [3, 4],
      },
    ];

    pollingLocations.forEach((loc) => {
      const marker = L.marker(loc.coords, {
        icon: createPollingIcon(loc.name),
        zIndexOffset: 1000,
      }).addTo(map);

      marker.bindPopup(
        `<div style="font-family:system-ui;line-height:1.5">
          <strong style="font-size:14px">${loc.name}</strong><br/>
          <span style="color:#64748b;font-size:13px">${loc.address}<br/>Bowie, MD</span><br/>
          <span style="font-size:12px;margin-top:4px;display:inline-block;color:#475569">
            Serves Districts ${loc.servesDistricts.join(" & ")}
          </span>
        </div>`
      );
    });

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
      polygonsRef.current.clear();
    };
  }, []);

  function handleLegendClick(districtId: number) {
    const polygon = polygonsRef.current.get(districtId);
    const map = mapInstanceRef.current;
    if (!polygon || !map) return;
    map.fitBounds(polygon.getBounds(), { padding: [40, 40] });
    polygon.openPopup();
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl overflow-hidden border border-border shadow-sm"
    >
      <div ref={mapRef} className="h-[450px] md:h-[550px] w-full" />

      <div className="bg-white p-4 flex flex-wrap gap-x-6 gap-y-3">
        {districts.map((d) => (
          <button
            key={d.id}
            onClick={() => handleLegendClick(d.id)}
            className="flex items-center gap-2 text-sm transition-opacity cursor-pointer"
            style={{ opacity: activeDistrict && activeDistrict !== d.id ? 0.4 : 1 }}
          >
            <span
              className="h-3 w-3 rounded-full shrink-0 transition-shadow"
              style={{
                backgroundColor: d.color,
                boxShadow:
                  activeDistrict === d.id
                    ? `0 0 0 2px white, 0 0 0 4px ${d.color}`
                    : "none",
              }}
            />
            <span className="text-muted-foreground font-medium">
              District {d.id}{" "}
              <span className="text-xs font-normal">— {d.pollingPlace}</span>
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
