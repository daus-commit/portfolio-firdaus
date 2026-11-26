"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export interface ScrollTimelineSection {
  id: string;
  label: string;
}

interface ScrollTimelineProps {
  sections: ScrollTimelineSection[];
  /** ms the bar stays visible after scrolling stops */
  hideDelay?: number;
}

/**
 * Horizontal section timeline pinned to the bottom of the viewport.
 * Appears while the user scrolls, highlights the current section and
 * fills the rail with the scroll progress between sections.
 */
export function ScrollTimeline({
  sections,
  hideDelay = 1400,
}: ScrollTimelineProps) {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0); // 0..1 along the rail
  const hovering = useRef(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduceMotion = useReducedMotion();

  const scheduleHide = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      if (!hovering.current) setVisible(false);
    }, hideDelay);
  }, [hideDelay]);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const anchor = window.scrollY + window.innerHeight * 0.4;
      const tops = sections.map((s) => {
        const el = document.getElementById(s.id);
        return el ? el.getBoundingClientRect().top + window.scrollY : Infinity;
      });

      let idx = 0;
      for (let i = 0; i < tops.length; i++) {
        if (tops[i] <= anchor) idx = i;
      }

      // Fractional position between the current section and the next one.
      let frac = 0;
      const next = tops[idx + 1];
      if (next !== undefined && Number.isFinite(next) && next > tops[idx]) {
        frac = Math.min(Math.max((anchor - tops[idx]) / (next - tops[idx]), 0), 1);
      }
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        idx = sections.length - 1;
        frac = 0;
      }

      setActive(idx);
      setProgress(
        sections.length > 1 ? (idx + frac) / (sections.length - 1) : 0
      );
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
      setVisible(true);
      scheduleHide();
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      if (frame) cancelAnimationFrame(frame);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [sections, scheduleHide]);

  const goTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  };

  const pad = (n: number) => String(n + 1).padStart(2, "0");

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          aria-label="Section progress"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onMouseEnter={() => {
            hovering.current = true;
          }}
          onMouseLeave={() => {
            hovering.current = false;
            scheduleHide();
          }}
          onFocus={() => {
            hovering.current = true;
          }}
          onBlur={() => {
            hovering.current = false;
            scheduleHide();
          }}
          className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center"
        >
          <div className="pointer-events-auto relative rounded-full border border-border/60 bg-background/80 px-5 pb-3 pt-3 shadow-lg backdrop-blur-md">
            <ol className="relative flex items-center gap-8 sm:gap-12">
              {/* rail */}
              <span
                aria-hidden
                className="absolute left-2.5 right-2.5 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-muted-foreground/30"
              />
              {/* progress fill */}
              <span
                aria-hidden
                className="absolute left-2.5 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-primary transition-[width] duration-150 ease-out"
                style={{ width: `calc((100% - 1.25rem) * ${progress})` }}
              />

              {sections.map((s, i) => {
                const isActive = i === active;
                const passed = i < active;
                return (
                  <li
                    key={s.id}
                    className="relative flex h-5 w-5 items-center justify-center"
                  >
                    {isActive && (
                      <span
                        className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-md border border-primary/60 bg-background px-2.5 py-1 text-xs font-semibold shadow-md"
                      >
                        {pad(i)} · {s.label}
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => goTo(s.id)}
                      aria-label={`Go to ${s.label}`}
                      aria-current={isActive ? "step" : undefined}
                      className={cn(
                        "relative block rounded-full border-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        isActive
                          ? "h-5 w-5 border-background bg-primary shadow-[0_0_14px_hsl(var(--primary)/0.7)]"
                          : passed
                            ? "h-3 w-3 border-primary bg-primary"
                            : "h-3 w-3 border-muted-foreground/60 bg-background hover:border-primary"
                      )}
                    />
                  </li>
                );
              })}
            </ol>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
