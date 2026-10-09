import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-surface border border-border rounded-sm overflow-hidden flex flex-col h-full hover:border-primary/40 transition-colors group">
      {/* Project Image */}
      <Link
        to={`/projects/${project.id}`}
        className="block relative aspect-video w-full overflow-hidden bg-page border-b border-border"
        aria-label={`View ${project.title} details`}
      >
        <img
          src={project.image}
          alt={`${project.title} - ${project.subtitle} interface preview`}
          className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
          loading="lazy"
        />
      </Link>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        {/* Project Name & Subtitle */}
        <div className="mb-3">
          <h3 className="text-xl font-medium text-primary group-hover:text-white transition-colors">
            <Link to={`/projects/${project.id}`} className="hover:text-white transition-colors">
              {project.title}
            </Link>
          </h3>
          <p className="text-xs font-mono text-secondary mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Short Description */}
        <p className="text-secondary text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies Used */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-secondary bg-page border border-border px-2.5 py-0.5 rounded-sm"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-xs font-mono text-secondary/70 bg-page px-2 py-0.5 rounded-sm">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* View Project Link */}
        <div className="pt-2">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 text-sm font-medium text-primary bg-page hover:bg-primary hover:text-page border border-border hover:border-primary rounded-sm transition-colors"
            aria-label={`View ${project.title} details`}
          >
            <span>View Project</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
