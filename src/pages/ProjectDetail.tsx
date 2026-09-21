import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../components/common/Icons';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  // Scroll to top on mount or id change
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
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 px-4">
        <h1 className="text-2xl font-bold text-white">Project Not Found</h1>
        <p className="text-slate-400 text-sm">The project you are looking for does not exist.</p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md text-sm font-medium transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Navigation */}
        <div className="mb-8">
          <button
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors group"
            aria-label="Back to Projects"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </button>
        </div>

        {/* Project Header: Title & Actions */}
        <header className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                {project.title}
              </h1>
              <p className="text-lg text-emerald-400 font-medium mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Action buttons: Live Demo & GitHub */}
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-md transition-colors shadow-sm"
                  aria-label={`${project.title} Live Demo (opens in new tab)`}
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-slate-200 hover:text-white text-sm font-medium rounded-md transition-colors"
                  aria-label={`${project.title} GitHub repository (opens in new tab)`}
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Large Project Image */}
        <div className="rounded-lg overflow-hidden border border-[#1e293b] bg-[#111726] shadow-sm mb-12">
          <img
            src={project.image}
            alt={`${project.title} interface preview`}
            className="w-full h-auto max-h-[500px] object-cover object-top"
            loading="eager"
          />
        </div>

        <div className="space-y-12">
          {/* Detailed Description / Overview */}
          <section aria-labelledby="overview-heading">
            <h2 id="overview-heading" className="text-xl font-bold text-white mb-4">
              Project Overview
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              {project.overview}
            </p>
            <p className="text-slate-300 text-base leading-relaxed">
              {project.solution}
            </p>
          </section>

          {/* Key Features */}
          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="text-xl font-bold text-white mb-5">
              Key Features
            </h2>
            <div className="bg-[#111726] border border-[#1e293b] rounded-lg p-6">
              <ul className="space-y-4">
                {project.features.map((feature) => (
                  <li key={feature.title} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-white font-semibold">{feature.title}</strong>
                      <span className="text-slate-300"> — {feature.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Technologies Used */}
          <section aria-labelledby="technologies-heading">
            <h2 id="technologies-heading" className="text-xl font-bold text-white mb-4">
              Technologies Used
            </h2>
            <div className="bg-[#111726] border border-[#1e293b] rounded-lg p-6">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium text-slate-200 bg-[#162032] border border-[#222f44] rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Role & Engineering Contribution */}
          <section aria-labelledby="role-heading">
            <h2 id="role-heading" className="text-xl font-bold text-white mb-4">
              Engineering Contribution
            </h2>
            <div className="bg-[#111726] border border-[#1e293b] rounded-lg p-6 text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.role}
            </div>
          </section>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-16 pt-8 border-t border-[#1e293b]">
          <button
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </button>
        </div>

      </div>
    </div>
  );
}
