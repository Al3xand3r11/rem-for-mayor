"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { subscribe } from "@/app/actions/subscribe";

export default function SignupForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    try {
      const result = await subscribe(formData);
      if (result.success) {
        setStatus("success");
        setMessage(result.message);
      } else {
        setStatus("error");
        setMessage(result.message);
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="signup" className="relative z-30 py-24 bg-[#c8d6d1] overflow-hidden">
      <div className="absolute bottom-0 left-0 h-full w-3/4 bg-linear-to-tr from-[#0D7377]/8 via-[#0D7377]/3 via-35% to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          Stay Informed
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground mb-10 text-lg"
        >
          Sign up to receive updates on the campaign, upcoming events, and ways
          to get involved.
        </motion.p>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-accent/10 border border-accent/20 rounded-2xl p-8"
          >
            <p className="text-accent font-semibold text-lg">{message}</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            action={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="flex-1 px-5 py-3.5 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="flex-1 px-5 py-3.5 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-8 py-3.5 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition-colors disabled:opacity-60 cursor-pointer"
            >
              {status === "loading" ? "Sending..." : "Sign Up"}
            </button>
          </motion.form>
        )}

        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-red-600 text-sm"
          >
            {message}
          </motion.p>
        )}
      </div>
    </section>
  );
}
