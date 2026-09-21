import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import MiniProjects from '../components/Projects/MiniProjects';
import Contact from '../components/Contact/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <MiniProjects />
      <Contact />
    </>
  );
}
