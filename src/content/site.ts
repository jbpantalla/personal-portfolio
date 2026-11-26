export const profile = {
  name: "John Benedict C. Pantalla",
  shortName: "John Benedict Pantalla",
  initials: "JBP",
  title: "Computer Engineering Student",
  intro:
    "Building intelligent systems at the intersection of software, hardware, and artificial intelligence.",
  school: "FEU Institute of Technology",
  degree: "BS Computer Engineering",
  graduation: "Expected October 2027",
  email: "jbpantalla05@gmail.com",
  github: "https://github.com/jbpantalla",
  linkedin: "https://linkedin.com/in/jbpantalla",
  // Set to a path such as "/resume.pdf" once a public résumé is ready.
  resume: null as string | null,
  focus: [
    "AI & Machine Learning",
    "Internet of Things",
    "Embedded Systems",
    "Full-Stack Web",
  ],
};

export const navItems = [
  { id: "projects", label: "Projects" },
  { id: "toolkit", label: "Toolkit" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
] as const;
