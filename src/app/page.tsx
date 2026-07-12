import About from "@/components/home/About";
import Certifications from "@/components/home/Certifications";
import Contact from "@/components/home/Contact";
import Experience from "@/components/home/Experience";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}