import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 sm:py-28 border-b border-border"
      aria-label="Projects"
    >
      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="pb-8 border-b border-border mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-secondary font-medium">
            Projects
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium text-primary mt-2 tracking-tight">
            Featured Applications
          </h2>
          <p className="text-secondary mt-3 text-base max-w-2xl leading-relaxed">
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
