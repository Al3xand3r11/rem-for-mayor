"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PolicyDropdown } from "@/lib/mock-data";

export default function PolicyItem({
  item,
  isLast,
}: {
  item: PolicyDropdown;
  isLast: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={!isLast && !open ? "border-b border-gray-200" : ""}>
      <button
        onClick={() => setOpen(!open)}
        className={`
          w-full flex items-center justify-between gap-4 px-6 py-4 text-left
          cursor-pointer transition-colors duration-200
          ${open ? "bg-accent text-white" : "hover:bg-accent hover:text-white text-foreground"}
        `}
        aria-expanded={open}
      >
        <span className="text-base md:text-lg font-bold leading-snug">
          {item.title}
        </span>
        <span
          className={`
            shrink-0 flex items-center justify-center w-8 h-8 rounded-full border-2 
            text-lg font-medium transition-colors duration-200
            ${open ? "border-white text-white" : "border-accent text-accent group-hover:border-white group-hover:text-white"}
          `}
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="block leading-none"
          >
            +
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-accent"
          >
            <div className="px-6 pb-5 pt-1">
              <p className="text-white/90 text-base leading-relaxed">
                {item.detail}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
