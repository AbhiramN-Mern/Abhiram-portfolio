import { useEffect, useRef } from 'react';
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('is-visible'); },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="fade-in-section py-20 lg:py-28"
      aria-label="Projects"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <div className="section-label mb-3">03 // Projects</div>
          <div className="section-divider" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-6">Things I've Built</h2>
          <p className="text-terminal-muted mt-2 text-sm">
            Full-stack applications built end-to-end. Click a project to see the full details.
          </p>
        </div>

        {/* 2-column equal grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
