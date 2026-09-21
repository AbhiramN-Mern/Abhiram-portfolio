import { useEffect, useRef } from 'react';
import { skills } from '../../data/skills';

const categoryColors: Record<string, string> = {
  'Programming':            'text-terminal-green border-terminal-green/30 bg-terminal-green/5',
  'Frontend':               'text-blue-400 border-blue-400/30 bg-blue-400/5',
  'Backend':                'text-purple-400 border-purple-400/30 bg-purple-400/5',
  'Architecture & Principles': 'text-amber-400 border-amber-400/30 bg-amber-400/5',
  'Databases':              'text-red-400 border-red-400/30 bg-red-400/5',
  'Cloud & DevOps':         'text-cyan-400 border-cyan-400/30 bg-cyan-400/5',
  'Integrations':           'text-pink-400 border-pink-400/30 bg-pink-400/5',
};

const categoryDot: Record<string, string> = {
  'Programming':            'bg-terminal-green',
  'Frontend':               'bg-blue-400',
  'Backend':                'bg-purple-400',
  'Architecture & Principles': 'bg-amber-400',
  'Databases':              'bg-red-400',
  'Cloud & DevOps':         'bg-cyan-400',
  'Integrations':           'bg-pink-400',
};

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="fade-in-section py-20 lg:py-28 bg-terminal-card/30"
      aria-label="Technical Skills"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <div className="section-label mb-3">02 // Skills</div>
          <div className="section-divider" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-6">Technical Stack</h2>
          <p className="text-terminal-muted mt-2 text-sm">
            Technologies and tools I use across the full stack.
          </p>
        </div>

        {/* Single skills box */}
        <div className="card p-6 sm:p-8">
          <div className="divide-y divide-terminal-border/50">
            {skills.map((category, index) => (
              <div
                key={category.label}
                className={`flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 ${
                  index === 0 ? 'pb-5' : index === skills.length - 1 ? 'pt-5' : 'py-5'
                }`}
              >
                {/* Category label */}
                <div className="flex items-center gap-2 sm:min-w-[180px] sm:pt-0.5 flex-shrink-0">
                  <div
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${categoryDot[category.label] ?? 'bg-terminal-green'}`}
                  />
                  <span className="font-mono text-xs font-semibold text-terminal-muted uppercase tracking-wider whitespace-nowrap">
                    {category.label}
                  </span>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-badge ${categoryColors[category.label] ?? ''}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
