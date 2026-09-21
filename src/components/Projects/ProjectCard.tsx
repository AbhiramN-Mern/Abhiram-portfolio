import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-[#111726] border border-[#1e293b] rounded-lg overflow-hidden flex flex-col h-full hover:border-[#334155] transition-colors group shadow-sm">
      {/* Project Image */}
      <Link
        to={`/projects/${project.id}`}
        className="block relative aspect-video w-full overflow-hidden bg-[#0c101a] border-b border-[#1e293b]"
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
      <div className="p-6 flex flex-col flex-1">
        {/* Project Name & Subtitle */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
            <Link to={`/projects/${project.id}`} className="hover:text-emerald-400 transition-colors">
              {project.title}
            </Link>
          </h3>
          <p className="text-xs font-medium text-emerald-400 mt-0.5">
            {project.subtitle}
          </p>
        </div>

        {/* Short Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies Used */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium text-slate-300 bg-[#162032] border border-[#222f44] px-2.5 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-xs font-medium text-slate-400 bg-[#162032] px-2 py-0.5 rounded">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* View Project Link */}
        <div className="pt-2">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 text-sm font-medium text-slate-200 bg-slate-800/80 hover:bg-emerald-600 hover:text-white border border-slate-700 hover:border-emerald-600 rounded-md transition-colors"
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
