import type { ReactNode } from "react";

/**
 * Marks content for the scroll reveal (see RevealObserver). The markup is plain and always
 * visible: nothing depends on JavaScript to be shown.
 */
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div data-reveal="" className={className}>
      {children}
    </div>
  );
}
