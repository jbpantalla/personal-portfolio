export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  stack: string[];
  /** Idea that was not built: the stack is labelled as proposed technologies. */
  proposed?: boolean;
  role?: string;
  context: string;
  links: ProjectLink[];
  /** Real project images go in /public/projects/<slug>/. Until then a labeled placeholder is shown. */
  /** Shown uncropped (object-contain); `background` fills any space around it and should match the image's edges. */
  image?: { src: string; alt: string; background?: string };
  featured?: boolean;
  metrics?: { value: string; label: string }[];
  metricsNote?: string;
  /** Shorter metrics note for the homepage card; the project page keeps metricsNote. */
  cardMetricsNote?: string;
  /** Full case study rendered on /projects/<slug>. Projects without one show the interim overview. */
  caseStudy?: CaseStudySection[];
};

export type CaseStudyFigure = {
  /** Path under /public. width/height are the file's intrinsic size, so it is never stretched or cropped. */
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  /** Names the figure in its "View full size" link, e.g. "system block diagram". */
  name: string;
  /** Diagram on a light panel that scrolls sideways on narrow screens, with a link to the full-size file. */
  diagram?: boolean;
  /** Dark diagram panel, for diagrams drawn on the site's dark surface colour. */
  dark?: boolean;
  /** Narrower display, for portrait phone screenshots. */
  narrow?: boolean;
};

export type CaseStudySection = {
  id: string;
  title: string;
  paragraphs?: string[];
  figures?: CaseStudyFigure[];
  listTitle?: string;
  list?: string[];
  /** Show the list before the figures. */
  listFirst?: boolean;
  /** Labelled results, shown as a grid of value cards. */
  facts?: { label: string; value: string; detail: string }[];
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
      "A hydroponic monitoring and control system for prototype-scale lettuce cultivation. A Random Forest classifier assesses water quality from pH, EC, temperature and turbidity. YOLOv8 models detect plant condition and pest presence and assess harvest readiness, and a sensor–vision fusion engine combines the water-quality and vision results into a single confidence level. It includes a locally hosted web dashboard, a companion mobile app, GSM SMS alerts, and Full and Semi-Automation modes.",
    stack: ["Python", "YOLOv8", "PyTorch", "Random Forest", "Raspberry Pi", "Sensors", "GSM"],
    role: "Collected, annotated and augmented lettuce images, trained the YOLOv8 model, and built the block diagram and schematic",
    context: "Undergraduate thesis · team of 4",
    links: [],
    featured: true,
    image: {
      src: "/projects/verde/verde-dashboard.png",
      alt: "VERDE web dashboard showing live pH, EC, turbidity, water temperature and humidity readings, each marked Optimal, with Semi-Automation mode active.",
      background: "#f7faf6",
    },
    metrics: [
      { value: "96.67%", label: "Plant-condition mAP@0.5" },
      { value: "100%", label: "Water-quality classifier accuracy" },
      { value: "4.9 s", label: "Maximum response latency" },
    ],
    metricsNote:
      "Thesis-reported results from prototype-scale testing with Butterhead and Looseleaf lettuce. mAP@0.5 covers the Healthy, Yellowing and Wilting classes on 200 test images, some showing plants also present in training data. Water-quality accuracy covers 30 readings labelled by threshold rules. Latency is the slowest of 30 timed trials. These are not production or externally validated figures.",
    cardMetricsNote:
      "Thesis-reported results from controlled prototype tests on small test sets, not production or external validation. See the project page for test conditions.",
    caseStudy: [
      {
        id: "overview",
        title: "Overview",
        paragraphs: [
          "VERDE monitors water quality and plant condition together in a prototype-scale hydroponic setup growing Butterhead and Looseleaf lettuce. It was built and evaluated by a team of four as an undergraduate thesis, and runs in Full Automation or Semi-Automation mode.",
        ],
      },
      {
        id: "problem",
        title: "Problem",
        paragraphs: [
          "Small-scale hydroponic farmers rely on manual water testing and visual inspection. The two can disagree: water readings can look normal while plants show stress, or the reverse.",
        ],
      },
      {
        id: "architecture",
        title: "System architecture",
        paragraphs: [
          "Hardware: a Raspberry Pi 5 with a Camera Module 3; pH, EC, turbidity, water temperature and humidity sensors; an ADS1115 analog-to-digital converter; relay modules driving a circulation pump and pH up, pH down and nutrient dosing actuators; and a SIM800C GSM module.",
          "Software: a Flask backend with SQLite logging, a locally hosted dashboard, a mobile app, and remote access through Tailscale.",
          "A hardware revision added a voltage divider after the EC and turbidity outputs exceeded the ADC input range. It scales both signals by 2/3.",
        ],
        figures: [
          {
            src: "/projects/verde/verde-block-diagram.png",
            width: 1430,
            height: 1019,
            diagram: true,
            name: "system block diagram",
            alt: "VERDE block diagram. Sensors and a camera feed a central microcomputer, which drives three relay modules, a GSM module, and two-way links to a web dashboard, mobile application and detection log.",
            caption: "System block diagram.",
          },
        ],
        listTitle: "Signal flow in the diagram",
        list: [
          "EC and turbidity sensor outputs pass through the voltage divider into the ADS1115 analog-to-digital converter. The pH sensor connects to the converter directly.",
          "The converter, water temperature module, humidity sensor and camera module feed the microcomputer (the Raspberry Pi 5).",
          "The microcomputer uses Relay Module 3 to switch power to the EC sensor module.",
          "Relay Module 1 drives the circulation pump and pH down actuator. Relay Module 2 drives the nutrient and pH up actuators.",
          "The microcomputer sends alerts through the SIM800C GSM module and exchanges data with the web dashboard, mobile application and detection log.",
        ],
      },
      {
        id: "how-it-works",
        title: "How it works",
        listFirst: true,
        list: [
          "Water: a Random Forest model (scikit-learn) classifies the water as Optimal, Suboptimal or Critical from pH, EC, turbidity and water temperature. Humidity is monitored separately.",
          "Plants: a YOLOv8 detector finds Healthy, Yellowing and Wilting plants. A separate YOLOv8 classifier, combined with days since planting, determines Harvest-Ready plants.",
          "Pests: a pest model detects pest presence only, not species.",
          "Fusion: a rule-based matrix combines the sensor and vision results.",
          "Control: the system runs in Full Automation or Semi-Automation mode, with relay-driven pump and dosing actuators.",
          "Alerts: the GSM module sends SMS alerts.",
        ],
        figures: [
          {
            src: "/projects/verde/verde-dashboard.png",
            name: "web dashboard screenshot",
            width: 972,
            height: 790,
            alt: "VERDE web dashboard showing live pH, EC, turbidity, water temperature and humidity readings, each marked Optimal, with Semi-Automation mode active and a Random Forest water-quality result of Optimal.",
            caption:
              "Web dashboard in Semi-Automation mode with a safety override notice active, showing live sensor readings and the Random Forest water-quality result.",
          },
          {
            src: "/projects/verde/verde-app-plant-monitoring.jpg",
            width: 1080,
            height: 1302,
            narrow: true,
            name: "mobile app screenshot",
            alt: "Top-down camera view of eight lettuce positions, P1 to P8, with green detection boxes on most plants and a red box on a wilting plant held up by hand.",
            caption: "Mobile app, Plant Monitoring screen: detection boxes from the latest two-stage YOLO analysis, shown as an experimental overlay.",
          },
        ],
      },
      {
        id: "contribution",
        title: "My contribution",
        paragraphs: ["VERDE was a team project. My part:"],
        list: [
          "Collected, annotated and augmented the lettuce image dataset.",
          "Trained the YOLOv8 model.",
          "Built the system block diagram and the schematic.",
        ],
      },
      {
        id: "results",
        title: "Results",
        paragraphs: [
          "From a controlled prototype evaluation reported in the thesis. These are not production results or external validation.",
        ],
        facts: [
          {
            label: "Plant condition",
            value: "96.67% mAP@0.5",
            detail: "200 test images. AP@0.5: Healthy 92.49%, Yellowing 99.18%, Wilting 98.33%.",
          },
          {
            label: "Harvest-Ready",
            value: "87.53% F1",
            detail: "209 images. Precision 77.83%, recall 100%.",
          },
          {
            label: "Pest presence",
            value: "93.33% accuracy",
            detail: "30 test frames with simulated pests. Recall 86.67%.",
          },
          {
            label: "Water quality",
            value: "100% accuracy",
            detail: "30 readings, 10 per class, labelled by threshold rules.",
          },
          {
            label: "Sensor–vision fusion",
            value: "20 of 20",
            detail: "Combinations matched the defined fusion matrix.",
          },
          {
            label: "Response latency",
            value: "3.99 s average",
            detail: "30 trials. Minimum 2.9 s, maximum 4.9 s.",
          },
        ],
        listTitle: "Mounted camera, 57 frames",
        list: [
          "Healthy: correct in 228 of 228 plant positions.",
          "Wilting: correct in 56 of 57 frames.",
          "Yellowing: could not be fully assessed.",
        ],
      },
      {
        id: "limitations",
        title: "Limitations",
        list: [
          "Some test images show plants that are also present in the training data.",
          "Yellowing was missed in four photos from other growing setups, and a wilting plant without visible curling was also missed.",
          "The top-down camera misses pests hidden inside or beneath foliage.",
          "The Harvest-Ready output is a prompt for the farmer to confirm.",
        ],
      },
      {
        id: "next-steps",
        title: "Next steps",
        paragraphs: ["Recommended improvements, not yet carried out:"],
        list: [
          "A larger, more varied dataset and external validation.",
          "Better camera coverage.",
          "Safer closed-loop dosing.",
          "Alert cooldown and duplicate suppression.",
        ],
      },
    ],
  },
  {
    slug: "campus-lost-and-found",
    title: "Campus Lost and Found",
    subtitle: "Management System",
    category: "Full-Stack Web",
    summary:
      "A web platform where campus users report lost and found items, search reports and file claims. A REST API handles JWT authentication and role-based access, and administrators manually confirm matches and review claims.",
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL"],
    role: "Designed the 5-table PostgreSQL schema, built the 25+ endpoint REST API with JWT and role-based access, and built the admin dashboard",
    context: "Software Design course project · team of 7",
    links: [
      { label: "GitHub", href: "https://github.com/jbpantalla/campus-lost-and-found" },
      { label: "Live app (sign-in required)", href: "https://campus-lost-and-found-frontend-snowy.vercel.app/" },
    ],
    image: {
      src: "/projects/campus-lost-and-found/campus-admin-dashboard.png",
      alt: "Campus Lost and Found admin dashboard with sample demo data: summary cards, a pending claim with Approve and Reject buttons, and a found-item intake table.",
      background: "#f1f5f9",
    },
    caseStudy: [
      {
        id: "overview",
        title: "Overview",
        paragraphs: [
          "Campus Lost and Found is a course project for reporting and recovering lost items on campus. The system has three roles: Student, Staff and Admin.",
        ],
        figures: [
          {
            src: "/projects/campus-lost-and-found/campus-login.png",
            width: 1208,
            height: 600,
            name: "sign-in page screenshot",
            alt: "Campus Lost and Found sign-in page with University ID and password fields and a Continue button.",
            caption: "Sign-in page of the deployed web app.",
          },
        ],
      },
      {
        id: "problem",
        title: "Problem",
        paragraphs: [
          "Lost and found reports need one place where they can be filed, searched, matched and claimed, with ownership checked before an item is released.",
        ],
      },
      {
        id: "architecture",
        title: "System architecture",
        paragraphs: [
          "Frontend: React, Vite and Tailwind CSS, deployed on Vercel.",
          "Backend: a Node.js and Express REST API under /api/v1.",
          "Database: PostgreSQL, hosted on Supabase.",
        ],
        figures: [
          {
            src: "/projects/campus-lost-and-found/campus-architecture.svg",
            width: 770,
            height: 200,
            diagram: true,
            dark: true,
            name: "architecture diagram",
            alt: "Architecture diagram. A React frontend deployed on Vercel sends requests to a Node.js and Express REST API under /api/v1, which applies JWT and role checks and connects to a PostgreSQL database hosted on Supabase.",
            caption: "System architecture.",
          },
          {
            src: "/projects/campus-lost-and-found/campus-entity-relationships.svg",
            width: 770,
            height: 460,
            diagram: true,
            dark: true,
            name: "entity relationship diagram",
            alt: "Entity relationship diagram of five tables: user, lost_item_report, found_item_report, claim_request and notification. lost_item_report, found_item_report and notification each reference user through university_id. claim_request references user twice, through claimant_university_id and reviewed_by_university_id, and references found_item_report through found_report_id. lost_item_report and found_item_report reference each other through matched_found_report_id and matched_lost_report_id.",
            caption: "Database entity relationships, simplified view: keys and status columns only.",
          },
        ],
      },
      {
        id: "how-it-works",
        title: "How it works",
        listFirst: true,
        list: [
          "Users file lost or found reports and search them.",
          "An admin picks an unclaimed found item to match with a lost report.",
          "Users submit claims with proof of ownership.",
          "An admin approves or rejects each claim. Rejection requires remarks, and only one claim per found item can be approved.",
          "Users get in-app notifications.",
        ],
        figures: [
          {
            src: "/projects/campus-lost-and-found/campus-admin-dashboard.png",
            width: 1186,
            height: 635,
            name: "admin dashboard screenshot",
            alt: "Campus Lost and Found admin dashboard with sample demo data: four summary cards; a pending claim showing the claimant's proof of ownership with Approve and Reject buttons; and a found-item intake table listing item, location and status.",
            caption:
              "Admin dashboard showing sample demo data: summary cards, the pending claim queue with approve and reject actions, and found-item intake.",
          },
        ],
      },
      {
        id: "contribution",
        title: "My contribution",
        paragraphs: ["Campus Lost and Found was built by a team of seven. This list covers my part:"],
        list: [
          "Designed a 5-table relational schema with 8 foreign keys, 11 indexes and CHECK constraints.",
          "Built a 25+ endpoint REST API with JWT authentication, bcrypt password hashing, role-based access control and request validation.",
          "Implemented transactional admin match confirmation that updates both linked reports, then notifies the users.",
          "Built the admin dashboard: statistics, report and claim queues, and claim approval and rejection.",
        ],
      },
      {
        id: "limitations",
        title: "Limitations",
        list: [
          "Matching is manual: found items are not ranked or scored against lost reports.",
          "Claims need manual review by an admin.",
          "Notifications are in-app only.",
        ],
      },
    ],
  },
  {
    slug: "water-quality-control",
    title: "Water Quality Control System",
    subtitle: "Embedded pH and TDS control for domestic RO units",
    category: "Embedded Systems",
    summary:
      "A laboratory-scale prototype designed to monitor water pH and TDS with an Arduino Uno and switch filtration pumps through relays when readings pass set thresholds, with LED indicators and an I2C LCD for status.",
    stack: ["Arduino Uno", "pH Sensor", "TDS Sensor", "Relay Control", "I2C LCD"],
    role: "Designed the block diagram and circuit schematic, then wired the prototype",
    context: "Laboratory-scale prototype · team of 4",
    links: [],
    image: {
      src: "/projects/water-quality-control/water-control-flow.svg",
      alt: "Designed control flow in three stages: 01 Sense, pH and TDS sensors; 02 Control, an Arduino Uno, with status on an I2C LCD and LEDs; 03 Actuate, relay-switched RO and alkaline filtration pumps. A return path from stage 03 to stage 01 is designed to recirculate treated water to be rechecked.",
      background: "#0f1418",
    },
    caseStudy: [
      {
        id: "overview",
        title: "Overview",
        paragraphs: [
          "A team-of-4 embedded systems project, built as a laboratory-scale prototype for domestic reverse osmosis (RO) units.",
        ],
      },
      {
        id: "problem",
        title: "Problem",
        paragraphs: [
          "RO filtration can lose effectiveness through filter wear, membrane fouling and changes in source water. Manual testing needs someone to check.",
        ],
      },
      {
        id: "hardware",
        title: "Hardware",
        list: [
          "Arduino Uno",
          "pH sensor module and probe",
          "TDS sensor module and probe",
          "16x2 I2C LCD",
          "Two 2-channel relay modules",
          "Two water pumps",
          "An RO booster pump",
          "An RO membrane with housing",
          "An alkaline mineral filter",
          "Indicator LEDs",
        ],
      },
      {
        id: "control-design",
        title: "Control design",
        paragraphs: ["The system was designed to work as follows:"],
        listFirst: true,
        list: [
          "Read pH and TDS, and show status on the LCD and LEDs.",
          "When pH is below 6.5, run alkaline filtration.",
          "When TDS is above 500 ppm, run RO filtration.",
          "Recirculate treated water to the monitoring chamber so it is rechecked.",
        ],
        figures: [
          {
            src: "/projects/water-quality-control/water-control-flow.svg",
            width: 780,
            height: 280,
            diagram: true,
            dark: true,
            name: "control flow diagram",
            alt: "Designed control flow in three stages: 01 Sense, pH and TDS sensors; 02 Control, an Arduino Uno, with status on an I2C LCD and LEDs; 03 Actuate, relay-switched RO and alkaline filtration pumps. A return path from stage 03 to stage 01 is designed to recirculate treated water to be rechecked.",
            caption: "Designed control flow, showing the intended design.",
          },
        ],
      },
      {
        id: "contribution",
        title: "My contribution",
        paragraphs: ["This was a team of four. My part:"],
        list: ["Designed the block diagram and circuit schematic.", "Wired the prototype."],
      },
      {
        id: "limitations",
        title: "Limitations",
        list: [
          "The design covers only pH and TDS. It does not detect microbial contamination, turbidity, heavy metals or chemical pollutants.",
          "It is a laboratory-scale prototype, not ready for household use.",
        ],
      },
    ],
  },
  {
    slug: "heras-shield",
    title: "Hera's Shield",
    subtitle: "Smart-straw IoT safety concept",
    category: "IoT · Concept",
    summary:
      "A proposed smart-straw design intended to flag unusual changes in drink chemistry that may indicate tampering. The design pairs pH and TDS sensors with an ESP32 that would trigger discreet vibration and LED alerts, and a companion app with GPS SOS, location sharing and emergency-contact alerts. It was not built or validated and cannot identify specific substances.",
    stack: ["ESP32", "pH Sensor", "TDS Sensor", "Mobile App Concept"],
    proposed: true,
    role: "Hardware and sensor design, documentation and 3D modeling of the straw",
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
