import { ArrowRight, FileText, Mail } from 'lucide-react';

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
      className="min-h-[85vh] flex items-center pt-28 pb-16 border-b border-border"
      aria-label="Introduction"
    >
      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left: Bio & Intro (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main headings */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-primary tracking-tight">
                Abhiram N
              </h1>
              <p className="text-xl sm:text-2xl font-normal text-secondary font-mono">
                Full-Stack &amp; MERN Developer
              </p>
            </div>

            {/* Summary */}
            <p className="text-secondary text-base sm:text-lg leading-relaxed max-w-xl">
              Software Developer specializing in building clean, scalable, and reliable web applications.
              Experienced across modern frontend interfaces, robust backend APIs, database architecture, and containerized deployment.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-white text-page font-medium text-sm rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span>View Projects</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border hover:border-primary text-primary hover:text-white font-medium text-sm rounded-sm transition-colors"
              >
                <Mail size={15} className="text-secondary" />
                <span>Contact Me</span>
              </button>

              <a
                href="/Abhiram%20MERN%20STACK%20DEVELOPER.pdf"
                download="Abhiram MERN STACK DEVELOPER.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-secondary hover:text-white text-sm font-mono transition-colors"
                aria-label="Download Resume"
              >
                <FileText size={15} />
                <span>Resume</span>
              </a>
            </div>
          </div>

          {/* Right: Technical Summary Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-surface border border-border rounded-sm p-6 sm:p-7 space-y-5">
              <h2 className="font-mono text-xs uppercase tracking-wider text-secondary pb-3 border-b border-border">
                Core Competencies
              </h2>
              
              <div className="space-y-4">
                {coreSkills.map((skill) => (
                  <div key={skill.area} className="space-y-1">
                    <span className="font-mono text-xs text-primary font-medium uppercase tracking-wide">
                      {skill.area}
                    </span>
                    <p className="text-sm text-secondary font-normal leading-relaxed">
                      {skill.items}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-secondary">
                <span>Location: India</span>
                <span className="text-border">|</span>
                <span>Open to Remote &amp; Onsite</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
