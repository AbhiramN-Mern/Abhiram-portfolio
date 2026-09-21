import { useEffect, useRef } from 'react';

const principles = [
  'Write maintainable code',
  'Separate business logic from infrastructure',
  'Build reusable components',
  'Design APIs carefully',
  'Think about scalability',
  'Test real user flows',
  'Keep learning',
];

export default function Principles() {
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
      className="fade-in-section py-16 bg-terminal-card/30"
      aria-label="Engineering principles"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          {/* Terminal Chrome */}
          <div className="terminal-chrome">
            <div className="terminal-dot bg-red-500/70" />
            <div className="terminal-dot bg-yellow-500/70" />
            <div className="terminal-dot bg-green-500/70" />
            <span className="ml-2 font-mono text-xs text-terminal-muted">principles.sh</span>
          </div>

          {/* Terminal Body */}
          <div className="bg-[#0d1520] border border-terminal-border border-t-0 rounded-b-lg p-5 font-mono text-sm">
            {/* Command */}
            <div className="flex items-center gap-1 mb-3">
              <span className="text-terminal-green">abhiram@dev</span>
              <span className="text-terminal-muted">:~$</span>
              <span className="text-terminal-text ml-1">principles</span>
            </div>
            <div className="h-px bg-terminal-border mb-3" />

            {/* Output */}
            <div className="space-y-2">
              {principles.map((p, i) => (
                <div key={i} className="flex items-start gap-2 text-terminal-muted">
                  <span className="text-terminal-green flex-shrink-0">&gt;</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>

            {/* Prompt */}
            <div className="flex items-center gap-1 mt-4">
              <span className="text-terminal-green">abhiram@dev</span>
              <span className="text-terminal-muted">:~$</span>
              <span className="cursor-blink ml-1" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
