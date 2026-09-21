import { useEffect, useRef } from 'react';
import { Layers, Server, Zap, Container } from 'lucide-react';

const focuses = [
  {
    icon: Layers,
    title: 'Full Stack Development',
    description:
      'Building complete applications across frontend, backend, databases, and APIs.',
  },
  {
    icon: Server,
    title: 'Backend Architecture',
    description:
      'Designing maintainable backend systems using Clean Architecture, Repository Pattern, MVC, SOLID, and OOP.',
  },
  {
    icon: Zap,
    title: 'Real-Time Applications',
    description:
      'Building real-time functionality using Socket.IO and WebRTC.',
  },
  {
    icon: Container,
    title: 'Deployment',
    description:
      'Containerizing and deploying applications using Docker, Docker Compose, Nginx, AWS, Vercel, and Render.',
  },
];

export default function EngineeringFocus() {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section
      ref={sectionRef}
      className="fade-in-section py-20 lg:py-28"
      aria-label="What I Work With"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="font-mono text-xs text-terminal-green mb-3">// engineering focus</div>
          <div className="section-divider" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-6">What I Work With</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {focuses.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="card p-5 hover:border-terminal-green/20 hover:shadow-green-glow transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded border border-terminal-border bg-terminal-border/30 flex items-center justify-center flex-shrink-0 group-hover:border-terminal-green/30 group-hover:bg-terminal-green/5 transition-all">
                    <Icon size={18} className="text-terminal-green" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1.5 group-hover:text-terminal-green transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-terminal-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
