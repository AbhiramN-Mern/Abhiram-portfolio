import { useState } from 'react';
import { GitBranch, ExternalLink, ChevronRight, Layers, Zap } from 'lucide-react';
import type { Project } from '../../types';
import ProjectModal from './ProjectModal';

interface FeaturedProjectProps {
  project: Project;
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  const [activeArch, setActiveArch] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="card overflow-hidden">
        {/* Featured badge bar */}
        <div className="h-px bg-gradient-to-r from-terminal-green via-terminal-green/50 to-transparent" />

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-terminal-bg bg-terminal-green px-2 py-0.5 rounded font-semibold">
                  FEATURED
                </span>
                <span className="font-mono text-xs text-terminal-muted">
                  // hospital management system
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h3>
              <p className="text-terminal-muted text-sm mt-1">{project.subtitle}</p>
            </div>
            <div className="font-mono text-xs text-terminal-green border border-terminal-green/30 bg-terminal-green/5 px-3 py-1.5 rounded self-start whitespace-nowrap">
              {project.stack}
            </div>
          </div>

          {/* Description */}
          <p className="text-terminal-muted leading-relaxed mb-8 max-w-3xl">
            {project.description}
          </p>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Left: Feature cards */}
            <div>
              <h4 className="font-mono text-xs text-terminal-muted uppercase tracking-wider mb-4">
                // Key Engineering Work
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="p-3 rounded bg-terminal-border/20 border border-transparent hover:border-terminal-border transition-colors group"
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <ChevronRight size={12} className="text-terminal-green flex-shrink-0" />
                      <span className="text-xs font-semibold text-terminal-text group-hover:text-white transition-colors">
                        {feature.title}
                      </span>
                    </div>
                    <p className="text-xs text-terminal-comment leading-relaxed pl-4">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Architecture tabs */}
            <div>
              <h4 className="font-mono text-xs text-terminal-muted uppercase tracking-wider mb-4">
                // Architecture
              </h4>

              {/* Tab Buttons */}
              <div className="flex gap-2 mb-4">
                {project.architecture.map((arch, i) => (
                  <button
                    key={arch.label}
                    onClick={() => setActiveArch(i)}
                    className={`font-mono text-xs px-3 py-1.5 rounded border transition-all ${
                      activeArch === i
                        ? 'border-terminal-green text-terminal-green bg-terminal-green/10'
                        : 'border-terminal-border text-terminal-muted hover:border-terminal-border/80'
                    }`}
                    aria-pressed={activeArch === i}
                  >
                    {i === 0 ? (
                      <span className="flex items-center gap-1.5"><Layers size={10} />REST Flow</span>
                    ) : (
                      <span className="flex items-center gap-1.5"><Zap size={10} />WebRTC Flow</span>
                    )}
                  </button>
                ))}
              </div>

              {/* Architecture Diagram */}
              <div className="bg-[#0d1520] border border-terminal-border rounded-lg p-4">
                <div className="font-mono text-xs text-terminal-green mb-4">
                  {project.architecture[activeArch].label}
                </div>
                <div className="flex flex-col items-center gap-0">
                  {project.architecture[activeArch].nodes.map((node, i) => (
                    <div key={node} className="flex flex-col items-center w-full">
                      <div className="font-mono text-xs text-terminal-text bg-terminal-border/30 px-4 py-1.5 rounded border border-terminal-border/50 w-full text-center hover:border-terminal-green/30 hover:text-white transition-colors">
                        {node}
                      </div>
                      {i < project.architecture[activeArch].nodes.length - 1 && (
                        <div className="text-terminal-green text-sm my-1 font-mono">↓</div>
                      )}
                    </div>
                  ))}
                </div>

                {activeArch === 0 && (
                  <p className="text-xs text-terminal-comment mt-4 border-t border-terminal-border pt-3 leading-relaxed">
                    The backend is structured using Clean Architecture and the Repository Pattern to separate business logic, infrastructure, and HTTP concerns.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Technology tags */}
          <div className="mt-6 pt-6 border-t border-terminal-border">
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.map((tech) => (
                <span key={tech} className="skill-badge">{tech}</span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-terminal-green text-terminal-bg font-semibold text-sm rounded hover:bg-terminal-green-glow transition-all"
                aria-label="View HealthGate case study"
              >
                View Project
                <ChevronRight size={16} />
              </button>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-terminal-border text-terminal-muted text-sm rounded hover:text-white hover:border-terminal-border/80 transition-all"
                  aria-label="HealthGate GitHub repository — opens in new tab"
                >
                  <GitBranch size={16} />
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-terminal-border text-terminal-muted text-sm rounded hover:text-white transition-all"
                  aria-label="HealthGate live demo — opens in new tab"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <ProjectModal project={project} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
