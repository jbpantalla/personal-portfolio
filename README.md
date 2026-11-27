# Personal Portfolio

Personal portfolio of **John Benedict C. Pantalla**, Computer Engineering student at
FEU Institute of Technology (expected graduation: October 2027).

The site showcases my work in artificial intelligence and machine learning, the
Internet of Things, embedded systems, full-stack web development, and hardware and
software engineering.

> **Status:** The homepage and the VERDE case study are built. Case studies for the other four
> projects are pending; their pages show an interim overview. The site has not been deployed yet.

## Projects

| # | Project | Summary |
|---|---|---|
| 1 | **VERDE** (featured) | IoT-based hydroponics system with sensor–vision fusion for plant health monitoring and nutrient management. |
| 2 | **Campus Lost and Found** | Full-stack web application for reporting, matching and claiming lost and found items on campus. |
| 3 | **Water Quality Control System** | Embedded closed-loop system that monitors pH and TDS and automatically controls filtration. |
| 4 | **Hera's Shield** | Proposed smart-straw IoT safety design intended to flag possible drink tampering. Concept only; not built or validated. |
| 5 | **Ethically Me** | Digital ethics journal presented as an interactive book. [Live site](https://digital-ethics-journal.vercel.app/) |

## Site structure

- Home, a single page with these sections: Projects, Toolkit, About, Experience,
  Credentials and Contact
- `/projects/[slug]`, one page per project (interim overview; full case studies pending)

## Stack

- Next.js 16 (App Router) and React 19
- TypeScript
- Tailwind CSS 4
- lucide-react for icons
- Scroll reveal animations use the browser's Web Animations API and respect reduced motion

## Setup

```bash
npm install
npm run dev        # development server at http://localhost:3000
```

## Checks

```bash
npm run typecheck  # generate route types, then tsc --noEmit
npm run lint       # ESLint
npm run build      # production build
npm run start      # serve the production build
```
