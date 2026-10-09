import { personal } from '../../data/personal';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const highlights = [
  'Full-stack MERN development with strong TypeScript foundations',
  'Clean Architecture & Repository Pattern for maintainable codebases',
  'Real-time communication using WebSockets and WebRTC',
  'REST API design, JWT authentication, and role-based access control',
  'Containerized deployments with Docker, Docker Compose, and Nginx',
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-28 border-b border-border"
      aria-label="About Abhiram N"
    >
      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="pb-8 border-b border-border mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-secondary font-medium">
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium text-primary mt-2 tracking-tight">
            Background &amp; Approach
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-primary text-base sm:text-lg leading-relaxed max-w-2xl">
              <p>
                I am a Full Stack Developer with a solid grounding in the MERN stack and modern TypeScript.
                My focus is on engineering web systems that are predictable, maintainable, and built on sound architectural patterns rather than quick patches.
              </p>
              <p className="text-secondary text-base leading-relaxed">
                {personal.bio}
              </p>
              <p className="text-secondary text-base leading-relaxed">
                {personal.bio2}
              </p>
            </div>

            {/* Key Engineering Practices */}
            <div className="pt-8">
              <h3 className="font-mono text-xs uppercase tracking-wider text-secondary mb-4 pb-2 border-b border-border">
                Key Engineering Practices
              </h3>
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-secondary">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Editorial Snapshot Column (5 cols) */}
          <div className="lg:col-span-5 bg-surface border border-border p-6 sm:p-8 rounded-sm">
            <span className="font-mono text-xs uppercase tracking-wider text-secondary font-medium block pb-4 border-b border-border">
              Developer Snapshot
            </span>

            <div className="divide-y divide-border text-sm">
              <div className="py-3 flex justify-between items-baseline gap-4">
                <span className="font-mono text-xs text-secondary uppercase">Role</span>
                <span className="text-primary font-medium text-right">{personal.role}</span>
              </div>
              <div className="py-3 flex justify-between items-baseline gap-4">
                <span className="font-mono text-xs text-secondary uppercase">Specialization</span>
                <span className="text-primary text-right">Full-Stack Web Apps</span>
              </div>
              <div className="py-3 flex justify-between items-baseline gap-4">
                <span className="font-mono text-xs text-secondary uppercase">Architecture</span>
                <span className="text-primary text-right">Clean Architecture / MVC</span>
              </div>
              <div className="py-3 flex justify-between items-baseline gap-4">
                <span className="font-mono text-xs text-secondary uppercase">Location</span>
                <span className="text-primary text-right">Kerala, India</span>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-border flex items-center justify-between">
              <a
                href="/Abhiram%20MERN%20STACK%20DEVELOPER.pdf"
                download="Abhiram MERN STACK DEVELOPER.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary hover:text-white transition-colors font-medium"
                aria-label="Download Full Resume"
              >
                <span>Download Full Resume</span>
                <ArrowUpRight size={14} />
              </a>
              <span className="font-mono text-[11px] text-secondary">PDF Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
