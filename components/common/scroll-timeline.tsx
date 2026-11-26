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
          // Mouse only: touch taps emit enter without a reliable leave.
          onPointerEnter={(e) => {
            if (e.pointerType === "mouse") hovering.current = true;
          }}
          onPointerLeave={(e) => {
            if (e.pointerType !== "mouse") return;
            hovering.current = false;
            scheduleHide();
          }}
          // Keyboard focus only, so a tap on a dot doesn't pin the bar open.
          onFocus={(e) => {
            if (e.target.matches(":focus-visible")) hovering.current = true;
          }}
          onBlur={() => {
            hovering.current = false;
            scheduleHide();
          }}
          className="pointer-events-none fixed inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex justify-center px-4 sm:bottom-5"
        >
          {/* Fluid width: fills small screens (minus padding), capped on larger ones */}
          <div className="pointer-events-auto relative w-full max-w-[22rem] rounded-full border border-border/60 bg-background/80 px-4 py-2.5 shadow-lg backdrop-blur-md sm:max-w-md sm:px-5 sm:py-3 md:max-w-lg">
            <ol className="relative flex items-center justify-between">
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
                // Keep the label inside the viewport at both ends of the rail.
                const labelAlign =
                  i === 0
                    ? "left-0"
                    : i === sections.length - 1
                      ? "right-0"
                      : "left-1/2 -translate-x-1/2";
                return (
                  <li
                    key={s.id}
                    className="relative flex h-5 w-5 items-center justify-center"
                  >
                    {isActive && (
                      <span
                        className={cn(
                          "pointer-events-none absolute bottom-full mb-3 whitespace-nowrap rounded-md border border-primary/60 bg-background px-2 py-0.5 text-[11px] font-semibold shadow-md sm:mb-3.5 sm:px-2.5 sm:py-1 sm:text-xs",
                          labelAlign
                        )}
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
                        // after: enlarges the tap target to ~44px without changing the dot size
                        "relative block rounded-full border-2 transition-all duration-200 after:absolute after:-inset-3 after:content-[''] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
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
