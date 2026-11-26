import Link from "next/link";
import * as React from "react";

import { siteConfig } from "@/config/site";
import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  id?: string;
  items: any[];
  children?: React.ReactNode;
  onClose: () => void;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileNav({ id, items, children, onClose }: MobileNavProps) {
  useLockBody();
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Move focus into the menu when it opens.
  React.useEffect(() => {
    const first =
      containerRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
    first?.focus();
  }, []);

  // Close on Escape and keep Tab focus inside the menu.
  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    // Ignore keys from portalled children (e.g. the theme dropdown), which
    // bubble through the React tree but handle their own Escape/Tab.
    if (!containerRef.current?.contains(event.target as Node)) return;

    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key !== "Tab" || !containerRef.current) return;

    const focusable = Array.from(
      containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div
      id={id}
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      onKeyDown={handleKeyDown}
      className={cn(
        "fixed inset-0 top-12 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-top-10 md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <Link href="/" className="flex items-center space-x-2" onClick={onClose}>
          <span className="text-2xl font-bold [font-family:Helvetica,Arial,sans-serif]">
            {siteConfig.authorName}
          </span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
              onClick={onClose}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children ? <div className="pt-2">{children}</div> : null}
      </div>
    </div>
  );
}
