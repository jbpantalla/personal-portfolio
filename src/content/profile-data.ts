export const skillGroups = [
  { label: "Languages", items: ["C++", "Python", "Java", "JavaScript", "HTML", "SQL"] },
  {
    label: "Frameworks & Libraries",
    items: ["React", "Next.js", "Node.js", "Express.js", "Vite", "PyTorch", "YOLOv8"],
  },
  { label: "Tools", items: ["Git", "Figma", "Blender", "MySQL", "PostgreSQL", "AutoCAD"] },
  {
    label: "Hardware",
    items: ["Raspberry Pi", "Arduino", "ESP", "PCB & CAD Design", "3D Modeling"],
  },
];

export type Role = { title: string; period: string; details?: string[] };
export type ExperienceEntry = { org: string; roles: Role[] };

export const experience: ExperienceEntry[] = [
  {
    org: "Flouw Robotics",
    roles: [
      {
        title: "Official (Volunteer)",
        period: "September 2026",
        details: [
          "Supported on-site execution of a Sumobot competition.",
          "Officiated matches involving 16 teams.",
          "Enforced competition mechanics and safety rules.",
        ],
      },
    ],
  },
  {
    org: "Computer Engineering Organization — FEU Institute of Technology",
    roles: [
      {
        title: "Vice President – Internal",
        period: "August 2025 – July 2026",
        details: [
          "Led internal coordination for Create and Conquer 2026, involving 107 participants across 22 teams.",
          "Led internal coordination for RoboRumble 2026, involving 206 participants across 58 teams.",
          "Improved event management and tracking systems.",
        ],
      },
      {
        title: "Auditor",
        period: "August 2024 – July 2025",
        details: [
          "Served as Finance Head for Create and Conquer 2025.",
          "Audited financial records and liquidation reports.",
          "Implemented financial tracking and documentation systems.",
        ],
      },
    ],
  },
];

export const awards = [
  {
    title: "1st Runner-up",
    event: "IoT Development Competition",
    detail: "8th M&E Skills Philippines · MRSP Nationals 2025",
  },
  { title: "Top 8", event: "Alertong Arduino Hackathon", detail: "Arduino Day Philippines 2025" },
  {
    title: "Active Student Leader",
    event: "FEU Institute of Technology",
    detail: "2025–2026",
  },
];

export const certifications = ["Cisco CCST Networking", "IT Specialist: Python, Java, AI", "AutoCAD"];

export const training = [
  "Cisco CCNA coursework: ITN, SRWE, ENSA",
  "AWS Academy Cloud Foundations",
  "Docker (KodeKloud)",
];
