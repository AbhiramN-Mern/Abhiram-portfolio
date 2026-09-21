import { useEffect, useRef } from 'react';
import { GitBranch } from 'lucide-react';
import { personal } from '../../data/personal';

export default function GitHubSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('is-visible'); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="fade-in-section py-20 lg:py-24"
      aria-label="GitHub"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Copy */}
          <div className="space-y-5">
            <div className="font-mono text-xs text-terminal-green">// open source</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Code, Projects &amp; Experiments
            </h2>
            <p className="text-terminal-muted leading-relaxed">
              Most of my development work, experiments, and projects are available on GitHub.
            </p>
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-terminal-border text-terminal-text text-sm font-medium rounded hover:border-terminal-green/40 hover:text-terminal-green hover:bg-terminal-green/5 transition-all"
              aria-label="View GitHub profile — opens in new tab"
            >
              <GitBranch size={16} />
              View GitHub
            </a>
          </div>

          {/* Right: Terminal */}
          <div>
            {/* Chrome */}
            <div className="terminal-chrome">
              <div className="terminal-dot bg-red-500/70" />
              <div className="terminal-dot bg-yellow-500/70" />
              <div className="terminal-dot bg-green-500/70" />
              <span className="ml-2 font-mono text-xs text-terminal-muted">abhiram@github: ~</span>
            </div>

            {/* Body */}
            <div className="bg-[#0d1520] border border-terminal-border border-t-0 rounded-b-lg p-5 font-mono text-sm">
              <div className="flex items-center gap-1 mb-2">
                <span className="text-terminal-green">abhiram@github</span>
                <span className="text-terminal-muted">:~$</span>
                <span className="text-terminal-text ml-1">git status</span>
              </div>
              <div className="h-px bg-terminal-border mb-3" />
              <div className="text-terminal-muted mb-2 text-xs">working on:</div>
              <div className="space-y-1.5 pl-2">
                <div className="flex items-center gap-2">
                  <span className="text-terminal-green text-xs">+</span>
                  <span className="text-terminal-text text-xs">full-stack applications</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-terminal-green text-xs">+</span>
                  <span className="text-terminal-text text-xs">backend architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-terminal-green text-xs">+</span>
                  <span className="text-terminal-text text-xs">real-time systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-terminal-green text-xs">+</span>
                  <span className="text-terminal-text text-xs">deployment</span>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-4">
                <span className="text-terminal-green">abhiram@github</span>
                <span className="text-terminal-muted">:~$</span>
                <span className="cursor-blink ml-1" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
