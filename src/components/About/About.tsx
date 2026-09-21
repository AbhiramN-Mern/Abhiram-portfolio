import { Link } from 'react-router-dom';
import { personal } from '../../data/personal';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

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
      className="py-20 border-t border-[#1e293b]"
      aria-label="About Abhiram N"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="section-subtitle">About Me</span>
          <h2 className="text-3xl font-bold text-white mt-1">
            Background &amp; Approach
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio text (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base leading-relaxed">
            <p>
              I am a Full Stack Developer with a solid grounding in the MERN stack and modern TypeScript.
              My focus is on engineering web systems that are predictable, maintainable, and built on sound architectural patterns rather than quick patches.
            </p>
            <p>
              {personal.bio}
            </p>
            <p>
              {personal.bio2}
            </p>

            <div className="pt-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-3">
                Key Engineering Practices
              </h3>
              <ul className="space-y-2.5">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Profile Overview Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#111726] border border-[#1e293b] rounded-lg p-6 space-y-4 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 pb-3 border-b border-[#1e293b]">
                Developer Snapshot
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-1.5 border-b border-[#1e293b]/60">
                  <span className="text-slate-400 font-medium">Role</span>
                  <span className="text-slate-200 font-semibold">{personal.role}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#1e293b]/60">
                  <span className="text-slate-400 font-medium">Specialization</span>
                  <span className="text-slate-200">Full-Stack Web Apps</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#1e293b]/60">
                  <span className="text-slate-400 font-medium">Architecture</span>
                  <span className="text-slate-200">Clean Architecture / MVC</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#1e293b]/60">
                  <span className="text-slate-400 font-medium">Availability</span>
                  <span className="text-emerald-400 font-medium">{personal.status}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#1e293b]/60">
                  <span className="text-slate-400 font-medium">Location</span>
                  <span className="text-slate-200">Kerala, India</span>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between">
                <Link
                  to="/resume"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>View Full Resume</span>
                  <ArrowRight size={14} />
                </Link>
                <span className="text-xs text-slate-500">PDF Available</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
