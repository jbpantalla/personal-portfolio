"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navItems, profile } from "@/content/site";

export function Header() {
  const [active, setActive] = useState<string | null>(null);
  // The <details> element owns its open state (no React mirror), so a menu opened before
  // hydration still closes on Escape, link click and resize.
  const menu = useRef<HTMLDetailsElement>(null);

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const details = menu.current;
      if (e.key !== "Escape" || !details?.open) return;
      details.open = false;
      details.querySelector("summary")?.focus();
    };
    // The panel is hidden from md up; close it there so it doesn't reappear open when the window narrows.
    const desktop = matchMedia("(min-width: 48rem)");
    const onBreakpoint = () => {
      if (desktop.matches && menu.current) menu.current.open = false;
    };
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/#top"
          className="group flex items-center gap-2.5 font-mono text-sm text-fg"
          aria-label={`${profile.name}, back to top`}
        >
          <span className="grid size-8 place-items-center rounded border border-line-strong text-[0.7rem] font-medium tracking-wider transition-colors group-hover:border-signal group-hover:text-signal">
            {profile.initials}
          </span>
          <span className="hidden text-muted sm:inline">Pantalla</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/#${item.id}`}
                  aria-current={active === item.id ? "location" : undefined}
                  className="relative rounded px-3 py-2 text-sm text-muted transition-colors hover:text-fg aria-[current=location]:text-fg"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-px h-px bg-signal transition-opacity ${
                      active === item.id ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Native <details> so the menu still opens without JavaScript.
            <summary> exposes its expanded state to assistive tech on its own. */}
        <details
          ref={menu}
          className="group md:hidden"
          onBlur={(e) => {
            // Close when focus moves to an element outside the menu, so it is never hidden behind the panel.
            // A null target is ignored: browsers that don't focus clicked links report it, and closing
            // then would cancel the click.
            const next = e.relatedTarget;
            if (next && !e.currentTarget.contains(next)) e.currentTarget.open = false;
          }}
        >
          <summary
            className="grid size-10 cursor-pointer list-none place-items-center rounded text-muted hover:text-fg [&::-webkit-details-marker]:hidden"
            aria-label="Menu"
          >
            <Menu className="size-5 group-open:hidden" aria-hidden="true" />
            <X className="hidden size-5 group-open:block" aria-hidden="true" />
          </summary>
          {/* Scrolls within the space below the 4rem header, so every link stays reachable in landscape. */}
          <nav
            aria-label="Primary"
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-y border-line bg-bg"
          >
            <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
              {navItems.map((item, i) => (
                <li key={item.id} className="border-line/60 not-last:border-b">
                  <Link
                    href={`/#${item.id}`}
                    onClick={() => {
                      if (menu.current) menu.current.open = false;
                    }}
                    className="flex items-baseline gap-4 py-3.5 text-base text-fg"
                  >
                    <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
