import { miniProjects } from '../../data/miniProjects';
import { GithubIcon } from '../common/Icons';

export default function MiniProjects() {
  return (
    <section
      id="mini-projects"
      className="py-24 sm:py-28 border-b border-border"
      aria-label="Mini Projects"
    >
      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="pb-8 border-b border-border mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-secondary font-medium">
            Other Work
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium text-primary mt-2 tracking-tight">
            Mini Projects
          </h2>
          <p className="text-secondary mt-3 text-base max-w-2xl leading-relaxed">
            Focused applications and tools built to explore specific architectures, user interfaces, and integrations.
          </p>
        </div>

        {/* 4 Mini Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {miniProjects.map((project) => (
            <div
              key={project.id}
              className="bg-surface border border-border rounded-sm p-6 flex flex-col justify-between h-full hover:border-primary/40 transition-colors group"
            >
              <div>
                <h3 className="text-lg font-medium text-primary group-hover:text-white transition-colors">
                  {project.name}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mt-2.5">
                  {project.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-border">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-secondary hover:text-white transition-colors py-0.5"
                  aria-label={`View ${project.name} repository on GitHub (opens in a new tab)`}
                >
                  <GithubIcon size={14} className="text-secondary group-hover:text-white transition-colors" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
