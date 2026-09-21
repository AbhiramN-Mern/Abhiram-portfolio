import { useEffect, useRef } from 'react';
import { journey } from '../../data/journey';

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('is-visible'); },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="fade-in-section py-20 lg:py-28 bg-terminal-card/30"
      aria-label="Development Journey"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="section-label mb-3">04 // Journey</div>
          <div className="section-divider" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-6">Development Journey</h2>
          <p className="text-terminal-muted mt-2 text-sm">
            The technical progression from fundamentals to full-stack systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-2xl">
          {/* Vertical line */}
          <div
            className="absolute left-3.5 top-0 bottom-0 w-px bg-gradient-to-b from-terminal-green via-terminal-border to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-0">
            {journey.map((milestone, index) => (
              <div
                key={milestone.title}
                className="relative flex gap-6 group"
              >
                {/* Node */}
                <div className="relative flex-shrink-0 w-7 flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full border-2 mt-1 transition-all duration-200 ${
                    index === journey.length - 1
                      ? 'border-terminal-green bg-terminal-green shadow-green-glow'
                      : 'border-terminal-border bg-terminal-bg group-hover:border-terminal-green group-hover:bg-terminal-green/20'
                  }`} />
                </div>

                {/* Content */}
                <div className={`pb-8 flex-1 ${index === journey.length - 1 ? 'pb-0' : ''}`}>
                  <div className="card p-4 group-hover:border-terminal-border/80 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-terminal-green">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-sm font-semibold text-white">{milestone.title}</h3>
                      {index === journey.length - 1 && (
                        <span className="ml-auto font-mono text-xs text-terminal-bg bg-terminal-green px-2 py-0.5 rounded">
                          current
                        </span>
                      )}
                    </div>
                    <p className="text-terminal-muted text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
