import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Toolkit } from "@/components/sections/Toolkit";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Credentials } from "@/components/sections/Credentials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Toolkit />
      <About />
      <Experience />
      <Credentials />
      <Contact />
    </>
  );
}
