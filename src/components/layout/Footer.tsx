import Link from "next/link";
import { profile } from "@/content/site";
import { Container } from "@/components/ui/primitives";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-fg">{profile.name}</p>
          <p className="mt-1 font-mono text-xs text-subtle">
            {profile.title} · {profile.school}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in a new tab)"
            className="grid size-10 place-items-center rounded text-muted transition-colors hover:text-fg"
          >
            <GitHubIcon />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
            className="grid size-10 place-items-center rounded text-muted transition-colors hover:text-fg"
          >
            <LinkedInIcon />
          </a>
          <Link
            href="/#top"
            className="ml-3 font-mono text-xs text-subtle transition-colors hover:text-fg"
          >
            Back to top ↑
          </Link>
        </div>
      </Container>
    </footer>
  );
}
