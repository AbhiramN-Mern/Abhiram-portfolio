import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, GitBranch, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  const handleBackToProjects = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigate('/');
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <p className="font-mono text-terminal-muted text-sm">Project not found.</p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-sm text-terminal-green hover:underline"
        >
          <ArrowLeft size={14} />
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="pt-16 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Top Back link */}
        <div className="mb-6">
          <button
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 text-sm text-terminal-muted hover:text-terminal-green transition-colors group"
            aria-label="Back to Projects"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </button>
        </div>

        {/* Large Project Image/Preview at the Top */}
        <div className="rounded-xl overflow-hidden border border-terminal-border bg-terminal-card shadow-terminal mb-8">
          <img
            src={project.image}
            alt={`${project.title} Preview`}
            className="w-full h-auto max-h-[460px] object-cover object-top"
            loading="eager"
          />
        </div>
         {/* Action Buttons: Live Demo & GitHub */}
          <section aria-label="Project Links" className="pt-2">
            <div className="flex flex-wrap items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-terminal-green text-terminal-bg font-semibold text-sm rounded hover:bg-terminal-green-glow transition-all duration-200 shadow focus-visible:ring-2 focus-visible:ring-terminal-green"
                  aria-label={`${project.title} Live Demo — opens in new tab`}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-terminal-border text-terminal-text text-sm font-medium rounded hover:border-terminal-green/50 hover:text-terminal-green hover:bg-terminal-green/5 transition-all duration-200"
                  aria-label={`${project.title} GitHub repository — opens in new tab`}
                >
                  <GitBranch size={16} />
                  GitHub
                </a>
              )}
            </div>
          </section>

        {/* Short Description / Overview */}
        <div className="space-y-8">
          <section aria-label="Project Overview">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-terminal-green mb-3">
              // Overview
            </h2>
             
            
            <p className="text-base text-terminal-text leading-relaxed font-normal">
              {project.overview}
            </p>
          </section>

          {/* Key Features */}
          <section aria-label="Key Features">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-terminal-green mb-3">
              // Key Features
            </h2>
            <div className="card p-5 sm:p-6 bg-terminal-card/60">
              <ul className="space-y-3">
                {project.features.map(feature => (
                  <li key={feature.title} className="flex items-start gap-3">
                    <span className="text-terminal-green font-bold text-base mt-0.5 select-none">•</span>
                    <div className="text-sm leading-relaxed">
                      <strong className="text-white font-semibold">{feature.title}</strong>
                      <span className="text-terminal-muted"> — {feature.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Technologies Used */}
          <section aria-label="Technologies Used">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-terminal-green mb-3">
              // Technologies
            </h2>
            <div className="card p-4 sm:p-5 bg-terminal-card/60">
              <div className="text-sm font-mono text-terminal-green mb-3 font-semibold">
                {project.technologies.join(' • ')}
              </div>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-terminal-border/50">
                {project.technologies.map(tech => (
                  <span key={tech} className="skill-badge">{tech}</span>
                ))}
              </div>
            </div>
          </section>

          {/* My Role / Contribution */}
          <section aria-label="My Role and Contribution">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-terminal-green mb-3">
              // My Role & Contribution
            </h2>
            <div className="card p-5 sm:p-6 bg-terminal-card/60">
              <p className="text-sm sm:text-base text-terminal-muted leading-relaxed">
                {project.role}
              </p>
            </div>
          </section>

      

        </div>

        {/* Bottom Back Link */}
        <div className="mt-14 pt-8 border-t border-terminal-border">
          <button
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 text-sm text-terminal-muted hover:text-terminal-green transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            ← Back to Projects
          </button>
        </div>

      </div>
    </div>
  );
}
