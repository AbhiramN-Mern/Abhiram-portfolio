import { miniProjects } from '../../data/miniProjects';
import { GithubIcon } from '../common/Icons';

export default function MiniProjects() {
  return (
    <section
      id="mini-projects"
      className="py-20 border-t border-[#1e293b]"
      aria-label="Mini Projects"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <span className="section-subtitle">Other Work</span>
          <h2 className="text-3xl font-bold text-white mt-1">
            Mini Projects
          </h2>
          <p className="text-slate-400 mt-2 text-base max-w-2xl">
            Focused applications and tools built to explore specific architectures, user interfaces, and integrations.
          </p>
        </div>

        {/* 4 Mini Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {miniProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#111726] border border-[#1e293b] rounded-lg p-6 flex flex-col justify-between h-full hover:border-[#334155] transition-colors group shadow-sm"
            >
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-2.5">
                  {project.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-[#1e293b]">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-emerald-400 transition-colors focus-visible:ring-1 focus-visible:ring-emerald-500 rounded py-0.5"
                  aria-label={`View ${project.name} repository on GitHub (opens in a new tab)`}
                >
                  <GithubIcon size={15} className="text-slate-400 group-hover:text-emerald-400 transition-colors" />
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
