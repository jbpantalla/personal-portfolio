import type { Metadata } from "next";
import Link from "next/link";
import { Container, buttonStyles } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <Container className="py-32">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-fg">Page not found</h1>
      <p className="mt-4 max-w-md text-muted">The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.</p>
      <Link href="/" className={`${buttonStyles.secondary} mt-8`}>
        Back to home
      </Link>
    </Container>
  );
}
