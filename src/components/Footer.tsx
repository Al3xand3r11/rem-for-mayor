"use client";

import { useState, useRef, useEffect } from "react";
import { CANDIDATE_NAME, SLOGAN, CAMPAIGN_TAGLINE } from "@/lib/mock-data";
import { subscribe } from "@/app/actions/subscribe";
import { ASCII_ART } from "./ascii-art";

export default function Footer() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const artRef = useRef<HTMLPreElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [artScale, setArtScale] = useState(1);

  useEffect(() => {
    function updateScale() {
      if (!artRef.current || !containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const artNaturalWidth = artRef.current.scrollWidth;
      if (artNaturalWidth > containerWidth) {
        setArtScale(containerWidth / artNaturalWidth);
      } else {
        setArtScale(1);
      }
    }
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

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
    <footer className="relative bg-[#c8d6d1] overflow-hidden">
      <div
        ref={containerRef}
        className="absolute inset-0 hidden md:flex items-start justify-end overflow-hidden pointer-events-none"
      >
        <pre
          ref={artRef}
          style={{
            transform: `scale(${artScale})`,
            transformOrigin: "top right",
          }}
          className="text-[5px] lg:text-[6px] xl:text-[7px] leading-[1.1] text-accent/40 font-mono select-none whitespace-pre mt-8 mr-6"
          aria-hidden="true"
        >
          {ASCII_ART}
        </pre>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="max-w-lg">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
            {CANDIDATE_NAME}
            <br />
            for Mayor
          </h2>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 font-medium max-w-md">
            {SLOGAN}
          </p>
          <p className="mt-6 text-sm text-muted-foreground max-w-sm">
            {CAMPAIGN_TAGLINE}
          </p>

          <div className="mt-10">
            {status === "success" ? (
              <div className="bg-accent/10 border border-accent/20 rounded-md p-4 max-w-md">
                <p className="text-accent font-semibold">{message}</p>
              </div>
            ) : (
              <form action={handleSubmit} className="flex max-w-md">
                <input
                  type="email"
                  name="email"
                  placeholder="YOUR EMAIL"
                  required
                  className="flex-1 px-4 py-3 border border-foreground/30 bg-transparent text-foreground placeholder:text-foreground/40 placeholder:text-sm placeholder:tracking-widest focus:outline-none focus:border-foreground/60 transition font-mono"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-6 py-3 bg-accent text-white text-sm font-bold tracking-widest hover:bg-accent-dark transition-colors disabled:opacity-60 cursor-pointer uppercase"
                >
                  {status === "loading" ? "..." : "Sign Up"}
                </button>
              </form>
            )}
            {status === "error" && (
              <p className="mt-3 text-red-600 text-sm">{message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="relative border-t border-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {CANDIDATE_NAME} for Mayor. All
            rights reserved.
          </p>
          <a href="https://www.alexandernance.com" className="text-xs text-muted-foreground">
            <span className="text-xs text-muted-foreground">@brandon</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
