import { ArrowRight, FileText, Mail } from 'lucide-react';
import { personal } from '../../data/personal';

const coreSkills = [
  { area: 'Frontend', items: 'React, TypeScript, Tailwind CSS, Redux' },
  { area: 'Backend', items: 'Node.js, Express.js, RESTful APIs, WebSockets' },
  { area: 'Databases', items: 'MongoDB, PostgreSQL, Mongoose' },
  { area: 'Architecture & DevOps', items: 'Clean Architecture, Docker, Nginx, AWS EC2' },
];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center pt-24 pb-16"
      aria-label="Introduction"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Bio & Intro (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{personal.status}</span>
            </div>

            {/* Main headings */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                Abhiram N
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-emerald-400">
                Full-Stack &amp; MERN Developer
              </p>
            </div>

            {/* Summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Software Developer specializing in building clean, scalable, and reliable web applications.
              Experienced across modern frontend interfaces, robust backend APIs, database architecture, and containerized deployment.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm rounded-md transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-700 bg-slate-800/40 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm rounded-md transition-colors"
              >
                <Mail size={16} />
                <span>Contact Me</span>
              </button>

              <a
                href="/Abhiram%20MERN%20STACK%20DEVELOPER.pdf"
                download="Abhiram-N-Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors"
                aria-label="Resume"
              >
                <FileText size={16} />
                <span>Resume</span>
              </a>
            </div>
          </div>

          {/* Right: Technical Summary Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#111726] border border-[#1e293b] rounded-lg p-6 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-5 pb-3 border-b border-[#1e293b]">
                Core Competencies
              </h2>
              
              <div className="space-y-4">
                {coreSkills.map((skill) => (
                  <div key={skill.area} className="space-y-1">
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">
                      {skill.area}
                    </span>
                    <p className="text-sm text-slate-300 font-normal leading-relaxed">
                      {skill.items}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#1e293b] flex items-center justify-between text-xs text-slate-400">
                <span>Location: India</span>
                <span className="text-slate-500">|</span>
                <span>Open to Remote &amp; Onsite</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
