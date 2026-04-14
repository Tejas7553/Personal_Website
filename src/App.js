import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillMarquee from "./components/SkillMarquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Writing from "./components/Writing";
import Contact from "./components/Contact";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

export default function App() {
  useScrollAnimation();
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      <Navbar />
      <main>
        <Hero />
        <SkillMarquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Writing />
        <Contact />
      </main>
    </div>
  );
}
