import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card flex flex-col h-full overflow-hidden hover:border-terminal-border/80 transition-all duration-200 group">

      {/* Featured accent bar */}
      {project.isFeatured && (
        <div className="h-px bg-gradient-to-r from-terminal-green via-terminal-green/50 to-transparent flex-shrink-0" />
      )}

      {/* Project Image */}
      <div className="relative overflow-hidden bg-terminal-border/20 flex-shrink-0" style={{ height: '200px' }}>
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {project.isFeatured && (
          <div className="absolute top-3 left-3">
            <span className="font-mono text-xs text-terminal-bg bg-terminal-green px-2 py-0.5 rounded font-semibold shadow">
              FEATURED
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">

        {/* Title */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-white group-hover:text-terminal-green transition-colors mb-0.5">
            {project.title}
          </h3>
          <p className="text-terminal-muted text-xs font-mono">{project.subtitle}</p>
        </div>

        {/* Description — clamped to 2 lines */}
        <p className="text-terminal-muted text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack — key technologies only */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 6).map(tech => (
            <span key={tech} className="skill-badge">{tech}</span>
          ))}
          {project.technologies.length > 6 && (
            <span className="skill-badge text-terminal-comment">+{project.technologies.length - 6}</span>
          )}
        </div>

        {/* View Project — pinned to bottom */}
        <div className="mt-auto">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-terminal-green border border-terminal-green/30 bg-terminal-green/5 rounded hover:bg-terminal-green hover:text-terminal-bg transition-all duration-200 w-full justify-center sm:w-auto"
            aria-label={`View ${project.title} details`}
          >
            View Project
            <ChevronRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  );
}
