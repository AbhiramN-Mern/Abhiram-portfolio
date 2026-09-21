import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { personal, systemInfo } from '../../data/personal';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('is-visible');
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="fade-in-section py-20 lg:py-28"
      aria-label="About Abhiram N"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: Text */}
          <div className="space-y-6">
            <div className="section-label">01 // About</div>
            <div className="section-divider" />

            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Building practical software from frontend to backend.
            </h2>

            <div className="space-y-4 text-terminal-muted leading-relaxed">
              <p>{personal.bio}</p>
              <p>{personal.bio2}</p>
            </div>
          </div>

          {/* Right: Info card — clean, no terminal chrome */}
          <div className="w-full">
            <div className="card p-5">
              <div className="section-label mb-4">// profile</div>
              <div className="space-y-3">
                {systemInfo.map(({ key, value }) => (
                  <div
                    key={key}
                    className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 py-2 border-b border-terminal-border/50 last:border-0"
                  >
                    <span className="font-mono text-xs text-terminal-green min-w-[130px] font-semibold">
                      {key}
                    </span>
                    <span className="text-sm text-terminal-muted">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-terminal-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
                  <span className="text-sm text-terminal-green font-medium">Open to opportunities</span>
                </div>
                <Link
                  to="/resume"
                  className="font-mono text-xs text-terminal-muted hover:text-terminal-green transition-colors inline-flex items-center gap-1"
                >
                  View Resume →
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
