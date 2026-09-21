import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 border-t border-[#1e293b]"
      aria-label="Projects"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <span className="section-subtitle">Projects</span>
          <h2 className="text-3xl font-bold text-white mt-1">
            Featured Applications
          </h2>
          <p className="text-slate-400 mt-2 text-base max-w-2xl">
            Real-world full-stack systems built from scratch, covering frontend architecture, backend services, and deployment.
          </p>
        </div>

        {/* Exactly 2 projects with identical card size and layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
