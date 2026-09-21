import { ChevronRight, FileText, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personal } from '../../data/personal';

const techStack = [
  { label: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { label: 'Database', items: ['MongoDB', 'PostgreSQL', 'Firebase'] },
  { label: 'DevOps', items: ['Docker', 'Nginx', 'AWS EC2'] },
];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-14"
      aria-label="Introduction"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Hero Content */}
          <div className="space-y-6">
            {/* Directory label */}
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs text-terminal-green bg-terminal-green/10 border border-terminal-green/20 px-3 py-1 rounded-full">
                ~/developer
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-terminal-text leading-tight">
                Hi, I'm{' '}
                <span className="text-white">Abhiram N</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold green-gradient-text">
                MERN Stack Developer
              </h2>
            </div>

            {/* Description */}
            <p className="text-terminal-muted text-base sm:text-lg leading-relaxed max-w-lg">
              Software Developer focused on building scalable and reliable web applications using modern technologies.
              I work across frontend, backend, databases, real-time systems, and deployment.
            </p>

            {/* Availability */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-terminal-green" />
              </span>
              <span className="text-terminal-green text-sm font-medium">{personal.status}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-terminal-green text-terminal-bg font-semibold text-sm rounded hover:bg-terminal-green-glow transition-all duration-200 focus-visible:ring-2 focus-visible:ring-terminal-green focus-visible:ring-offset-2 focus-visible:ring-offset-terminal-bg"
              >
                View Projects
                <ChevronRight size={16} />
              </button>

              <Link
                to="/resume"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-terminal-border text-terminal-text text-sm font-medium rounded hover:border-terminal-green/40 hover:text-terminal-green hover:bg-terminal-green/5 transition-all duration-200"
                aria-label="View Resume"
              >
                <FileText size={16} />
                View Resume
              </Link>
            </div>
          </div>

          {/* Right: Tech Stack Card */}
          <div className="w-full">
            <div className="card p-6">
              <div className="section-label mb-4">// tech stack</div>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((group) => (
                  <div key={group.label}>
                    <div className="text-xs font-semibold text-terminal-text mb-2 uppercase tracking-wider">
                      {group.label}
                    </div>
                    <div className="space-y-1.5">
                      {group.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-sm text-terminal-muted"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-terminal-green flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="mt-5 pt-4 border-t border-terminal-border">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-2 rounded bg-terminal-border/30">
                    <div className="font-mono text-xs text-terminal-green font-semibold">MERN</div>
                    <div className="text-xs text-terminal-muted mt-0.5">Full Stack</div>
                  </div>
                  <div className="text-center p-2 rounded bg-terminal-border/30">
                    <div className="font-mono text-xs text-terminal-green font-semibold">TypeScript</div>
                    <div className="text-xs text-terminal-muted mt-0.5">Type Safe</div>
                  </div>
                  <div className="text-center p-2 rounded bg-terminal-border/30">
                    <div className="font-mono text-xs text-terminal-green font-semibold">WebRTC</div>
                    <div className="text-xs text-terminal-muted mt-0.5">Real-Time</div>
                  </div>
                  <div className="text-center p-2 rounded bg-terminal-border/30">
                    <div className="font-mono text-xs text-terminal-green font-semibold">Docker</div>
                    <div className="text-xs text-terminal-muted mt-0.5">Deployment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-16 lg:mt-20">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-1 text-terminal-comment hover:text-terminal-muted transition-colors group"
            aria-label="Scroll to About section"
          >
            <span className="font-mono text-xs">scroll</span>
            <ArrowDown size={16} className="animate-bounce group-hover:text-terminal-green transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
}
