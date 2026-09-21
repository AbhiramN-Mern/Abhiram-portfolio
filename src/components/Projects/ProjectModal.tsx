import { useEffect, useCallback } from 'react';
import { X, GitBranch, ExternalLink, ChevronRight } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  return (
    <div
      className="fixed inset-0 z-[100] bg-terminal-bg/80 backdrop-blur-sm flex items-start justify-center p-4 py-8 overflow-y-auto"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${project.id}`}
    >
      <div className="card w-full max-w-3xl my-auto">
        {/* Modal Header */}
        <div className="flex items-start justify-between p-5 border-b border-terminal-border">
          <div>
            <div className="font-mono text-xs text-terminal-green mb-1">
              // case study
            </div>
            <h2 id={`modal-title-${project.id}`} className="text-xl font-bold text-white">
              {project.title}
            </h2>
            <p className="text-terminal-muted text-sm mt-0.5">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-terminal-muted hover:text-white hover:bg-terminal-border rounded transition-colors ml-4 flex-shrink-0"
            aria-label="Close case study"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 space-y-6 max-h-[75vh] overflow-y-auto">

          {/* Overview */}
          <section aria-label="Overview">
            <h3 className="font-mono text-xs text-terminal-green uppercase tracking-wider mb-2">Overview</h3>
            <p className="text-terminal-muted text-sm leading-relaxed">{project.overview}</p>
          </section>

          {/* Problem */}
          <section aria-label="Problem">
            <h3 className="font-mono text-xs text-terminal-muted uppercase tracking-wider mb-2">Problem</h3>
            <p className="text-terminal-muted text-sm leading-relaxed">{project.problem}</p>
          </section>

          {/* Solution */}
          <section aria-label="Solution">
            <h3 className="font-mono text-xs text-terminal-muted uppercase tracking-wider mb-2">Solution</h3>
            <p className="text-terminal-muted text-sm leading-relaxed">{project.solution}</p>
          </section>

          {/* Architecture */}
          {project.architecture.length > 0 && (
            <section aria-label="Architecture">
              <h3 className="font-mono text-xs text-terminal-muted uppercase tracking-wider mb-3">Architecture</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.architecture.map((arch) => (
                  <div key={arch.label} className="bg-[#0d1520] rounded border border-terminal-border p-4">
                    <div className="font-mono text-xs text-terminal-green mb-3">{arch.label}</div>
                    <div className="space-y-1">
                      {arch.nodes.map((node, i) => (
                        <div key={node} className="flex flex-col items-center">
                          <div className="font-mono text-xs text-terminal-text bg-terminal-border/40 px-3 py-1 rounded w-full text-center">
                            {node}
                          </div>
                          {i < arch.nodes.length - 1 && (
                            <div className="text-terminal-green text-xs my-0.5">↓</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Key Features */}
          <section aria-label="Key Features">
            <h3 className="font-mono text-xs text-terminal-muted uppercase tracking-wider mb-3">Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feature) => (
                <div key={feature.title} className="flex gap-2 p-2.5 rounded bg-terminal-border/20">
                  <ChevronRight size={14} className="text-terminal-green mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-terminal-text">{feature.title}</div>
                    <div className="text-xs text-terminal-muted mt-0.5 leading-relaxed">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technology */}
          <section aria-label="Technology Stack">
            <h3 className="font-mono text-xs text-terminal-muted uppercase tracking-wider mb-2">Technology</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span key={tech} className="skill-badge">{tech}</span>
              ))}
            </div>
          </section>

          {/* Engineering Challenges */}
          {project.challenges.length > 0 && (
            <section aria-label="Engineering Challenges">
              <h3 className="font-mono text-xs text-terminal-muted uppercase tracking-wider mb-3">Engineering Challenges</h3>
              <ul className="space-y-2">
                {project.challenges.map((ch, i) => (
                  <li key={i} className="flex gap-2 text-sm text-terminal-muted">
                    <span className="font-mono text-terminal-green flex-shrink-0 text-xs mt-0.5">{'>'}</span>
                    <span className="leading-relaxed">{ch}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Links */}
          {(project.githubUrl || project.liveUrl) && (
            <section aria-label="Links">
              <h3 className="font-mono text-xs text-terminal-muted uppercase tracking-wider mb-3">Links</h3>
              <div className="flex flex-wrap gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-terminal-border text-terminal-muted text-sm rounded hover:text-white hover:border-terminal-border/80 transition-all"
                    aria-label={`${project.title} GitHub repository — opens in new tab`}
                  >
                    <GitBranch size={14} />
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-terminal-green text-terminal-bg text-sm font-semibold rounded hover:bg-terminal-green-glow transition-all"
                    aria-label={`${project.title} live demo — opens in new tab`}
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
