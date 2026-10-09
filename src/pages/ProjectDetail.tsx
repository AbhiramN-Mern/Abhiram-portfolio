import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../components/common/Icons';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  // Scroll to top on mount or id change, set page title
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (project) {
      document.title = `${project.title} — ${project.subtitle} | Abhiram N`;
    }
    return () => {
      document.title = 'Abhiram N | MERN Stack Developer';
    };
  }, [id, project]);

  const handleBackToProjects = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigate('/');
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-primary">Project Not Found</h1>
        <p className="text-secondary text-sm">The project you are looking for does not exist.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-white text-page rounded-sm text-sm font-medium transition-colors mt-2"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 border-b border-border">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Top Navigation */}
        <nav aria-label="Breadcrumb navigation" className="mb-8 pb-4 border-b border-border">
          <Link
            to="/#projects"
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 text-sm font-mono text-secondary hover:text-white transition-colors group"
            aria-label="Back to Projects"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
        </nav>

        {/* Project Header: Title & Actions */}
        <header className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary tracking-tight">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-secondary font-mono mt-1">
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
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary hover:bg-white text-page text-sm font-medium rounded-sm transition-colors shadow-sm"
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
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-border bg-surface hover:border-primary text-primary hover:text-white text-sm font-medium rounded-sm transition-colors"
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
        <div className="rounded-sm overflow-hidden border border-border bg-surface shadow-sm mb-12">
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
            <h2 id="overview-heading" className="text-xl font-medium text-primary mb-4 pb-2 border-b border-border">
              Project Overview
            </h2>
            <p className="text-primary text-base leading-relaxed mb-4">
              {project.overview}
            </p>
            {project.solution && (
              <p className="text-secondary text-base leading-relaxed">
                {project.solution}
              </p>
            )}
          </section>

          {/* Key Features */}
          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="text-xl font-medium text-primary mb-5 pb-2 border-b border-border">
              Key Features
            </h2>
            <div className="bg-surface border border-border rounded-sm p-6">
              <ul className="space-y-4">
                {project.features.map((feature) => (
                  <li key={feature.title} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-primary font-semibold">{feature.title}</strong>
                      <span className="text-secondary"> — {feature.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Technologies Used */}
          <section aria-labelledby="technologies-heading">
            <h2 id="technologies-heading" className="text-xl font-medium text-primary mb-4 pb-2 border-b border-border">
              Technologies Used
            </h2>
            <div className="bg-surface border border-border rounded-sm p-6">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono text-primary bg-page border border-border rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Role & Engineering Contribution */}
          <section aria-labelledby="role-heading">
            <h2 id="role-heading" className="text-xl font-medium text-primary mb-4 pb-2 border-b border-border">
              Engineering Contribution
            </h2>
            <div className="bg-surface border border-border rounded-sm p-6 text-secondary text-sm sm:text-base leading-relaxed">
              {project.role}
            </div>
          </section>
        </div>

        {/* Bottom Navigation */}
        <nav aria-label="Bottom back navigation" className="mt-16 pt-8 border-t border-border">
          <Link
            to="/#projects"
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 text-sm font-mono text-secondary hover:text-white transition-colors group"
            aria-label="Back to Projects"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
        </nav>

      </div>
    </div>
  );
}
