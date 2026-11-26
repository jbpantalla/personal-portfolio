"use client";

import { useEffect } from "react";

/**
 * Progressive enhancement, mounted once in the root layout. Nothing is ever hidden in the HTML or
 * CSS: content is visible without JavaScript, before hydration, and in full-page captures. After
 * load, [data-reveal] blocks that scroll into view later get a short fade-up via the Web
 * Animations API. Blocks already on screen are left alone; reduced-motion users get no animation.
 */
export function RevealObserver() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => {
      for (const { isIntersecting, target } of entries) {
        if (!isIntersecting) continue;
        observer.unobserve(target);
        target.animate(
          [
            { opacity: 0, transform: "translateY(16px)" },
            { opacity: 1, transform: "none" },
          ],
          { duration: 550, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
        );
      }
    });
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      if (el.getBoundingClientRect().top > innerHeight) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return null;
}
