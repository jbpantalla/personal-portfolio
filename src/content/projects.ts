export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  stack: string[];
  role?: string;
  context: string;
  links: ProjectLink[];
  /** Real project images go in /public/projects/<slug>/. Until then a labeled placeholder is shown. */
  image?: { src: string; alt: string };
  featured?: boolean;
  metrics?: { value: string; label: string }[];
  metricsNote?: string;
};

// Every claim below comes from the project's own documentation or repository.
export const projects: Project[] = [
  {
    slug: "verde",
    title: "VERDE",
    subtitle:
      "IoT-Based Hydroponics System with Sensor–Vision Fusion for Plant Health Monitoring and Nutrient Management",
    category: "Thesis · AI / IoT",
    summary:
      "A hydroponic monitoring and control system for prototype-scale lettuce cultivation. A Random Forest classifier assesses water quality from pH, EC, temperature and turbidity, a YOLOv8 model detects plant condition and pests, and a sensor–vision fusion engine combines both into a single confidence level. It includes a locally hosted web dashboard, a companion mobile app, GSM SMS alerts, and Full and Semi-Automation modes.",
    stack: ["Python", "YOLOv8", "PyTorch", "Random Forest", "Raspberry Pi", "Sensors", "GSM"],
    role: "Collected, annotated and augmented 2,000 images and trained the YOLOv8 model",
    context: "Undergraduate thesis · team of 4",
    links: [],
    featured: true,
    metrics: [
      { value: "96.67%", label: "Plant-condition mAP@0.5" },
      { value: "100%", label: "Water-quality classifier accuracy" },
      { value: "4.9 s", label: "Maximum response latency" },
    ],
    metricsNote:
      "Thesis-reported results from prototype-scale testing with Butterhead and Looseleaf lettuce: mAP@0.5 across the Healthy, Yellowing and Wilting classes, classifier accuracy on 30 test instances, and the slowest of 30 timed response trials. These are not production or externally validated figures.",
  },
  {
    slug: "campus-lost-and-found",
    title: "Campus Lost and Found",
    subtitle: "Management System",
    category: "Full-Stack Web",
    summary:
      "A centralized web platform where students, staff and Campus Security report, search, match and recover lost items. A versioned REST API handles JWT authentication and role-based access, suggests matches between reports, and routes every claim through administrator verification.",
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL"],
    role: "Designed the 5-table PostgreSQL schema and built the 25+ endpoint REST API and admin dashboard",
    context: "Software Design course project · team of 7",
    links: [{ label: "GitHub", href: "https://github.com/jbpantalla/campus-lost-and-found" }],
  },
  {
    slug: "water-quality-control",
    title: "Closed-Loop Water Quality Control System",
    subtitle: "Embedded pH and TDS control for domestic RO units",
    category: "Embedded Systems",
    summary:
      "An Arduino Uno reads pH and TDS sensors, compares them against target ranges (pH 6.5–8.5, TDS 150–300 ppm), and drives relay-controlled RO and alkaline pumps. Treated water recirculates to the monitoring chamber until readings return to range, with LED indicators and an I2C LCD showing live status.",
    stack: ["Arduino Uno", "pH Sensor", "TDS Sensor", "Relay Control", "I2C LCD"],
    role: "Designed the block diagram and circuit schematic, then wired and tested the sensor-to-pump control loop",
    context: "Laboratory-scale prototype · group project",
    links: [],
  },
  {
    slug: "heras-shield",
    title: "Hera's Shield",
    subtitle: "Smart-straw IoT safety concept",
    category: "IoT · Concept",
    summary:
      "A smart-straw concept designed to flag unusual changes in drink chemistry that may indicate tampering. In the lo-fi MVP, pH and TDS sensors feed an ESP32 that triggers discreet vibration and LED alerts, and a companion app concept adds GPS SOS, live location sharing and emergency-contact alerts. It detects chemical anomalies, not specific substances.",
    stack: ["ESP32", "pH Sensor", "TDS Sensor", "3D Modeling", "Mobile App Concept"],
    role: "Hardware and sensor engineer: sensor design, documentation and the full 3D model of the straw",
    context: "Top 8 · Alertong Arduino Hackathon 2025",
    links: [],
  },
  {
    slug: "ethically-me",
    title: "Ethically Me",
    subtitle: "Digital Ethics Journal",
    category: "Web · Interactive",
    summary:
      "A digital ethics journal built as one self-contained web page shaped like a leather-bound book. Readers turn pages with buttons, arrow keys or swipes, search the full text, and deep-link to any page. It uses no external files or libraries and supports screen readers and reduced motion.",
    stack: ["HTML", "CSS", "JavaScript"],
    role: "Sole author and developer",
    context: "Individual project",
    links: [
      { label: "Live site", href: "https://digital-ethics-journal.vercel.app/" },
      { label: "GitHub", href: "https://github.com/jbpantalla/digital-ethics-journal" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
