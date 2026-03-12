"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PolicyCategory } from "@/lib/mock-data";

export default function PolicyItem({ policy }: { policy: PolicyCategory }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 px-2 text-left group cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-lg md:text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
          {policy.title}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-2xl text-accent select-none"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="pb-6 px-2 space-y-3">
              {policy.points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                  <span className="text-base leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
