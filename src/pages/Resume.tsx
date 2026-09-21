import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Printer, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { personal } from '../data/personal';

export default function Resume() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="pt-14 pb-20 print:pt-0 print:pb-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 print:px-0 print:py-0">

        {/* Action Bar — Hidden on print */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-terminal-border print:hidden">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm text-terminal-muted hover:text-terminal-green transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to Portfolio
          </button>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-4 py-2 bg-terminal-green text-terminal-bg font-semibold text-sm rounded hover:bg-terminal-green-glow transition-all shadow"
            title="Print or save as PDF"
          >
            <Printer size={15} />
            Print / Save PDF
          </button>
        </div>

        {/* Resume Paper Container */}
        <div className="card p-6 sm:p-10 print:border-none print:p-0 print:bg-transparent print:text-black">

          {/* Header */}
          <header className="border-b border-terminal-border pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight print:text-black">
                  {personal.name}
                </h1>
                <p className="text-lg text-terminal-green font-semibold mt-1 print:text-gray-800">
                  {personal.role}
                </p>
              </div>
              <div className="text-xs sm:text-sm text-terminal-muted space-y-1 sm:text-right font-mono print:text-gray-700">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail size={13} className="text-terminal-green print:hidden" />
                  <a href={`mailto:${personal.email}`} className="hover:text-terminal-green print:no-underline">
                    {personal.email}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone size={13} className="text-terminal-green print:hidden" />
                  <a href={`tel:+91${personal.phone}`} className="hover:text-terminal-green print:no-underline">
                    +91 {personal.phone}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin size={13} className="text-terminal-green print:hidden" />
                  <span>Kerala, India</span>
                </div>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-terminal-border/50 text-xs font-mono text-terminal-muted print:text-gray-700">
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terminal-green transition-colors"
              >
                LinkedIn: linkedin.com/in/abhiram-n
              </a>
              <span>•</span>
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terminal-green transition-colors"
              >
                GitHub: github.com/Abhiram-N
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-6" aria-label="Professional Summary">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-terminal-green mb-2 print:text-gray-900">
              // Professional Summary
            </h2>
            <p className="text-sm sm:text-base text-terminal-muted leading-relaxed print:text-gray-800">
              {personal.bio} {personal.bio2}
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-6" aria-label="Technical Skills">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-terminal-green mb-3 print:text-gray-900">
              // Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-2.5 rounded bg-terminal-border/20 border border-terminal-border/40 print:bg-transparent print:border-gray-300">
                <span className="font-semibold text-white print:text-black">Languages: </span>
                <span className="text-terminal-muted print:text-gray-700">JavaScript (ES6+), TypeScript, HTML5, CSS3</span>
              </div>
              <div className="p-2.5 rounded bg-terminal-border/20 border border-terminal-border/40 print:bg-transparent print:border-gray-300">
                <span className="font-semibold text-white print:text-black">Frontend: </span>
                <span className="text-terminal-muted print:text-gray-700">React.js, Vite, Tailwind CSS, Responsive Design, State Management</span>
              </div>
              <div className="p-2.5 rounded bg-terminal-border/20 border border-terminal-border/40 print:bg-transparent print:border-gray-300">
                <span className="font-semibold text-white print:text-black">Backend: </span>
                <span className="text-terminal-muted print:text-gray-700">Node.js, Express.js, REST APIs, JWT Auth, Clean Architecture, MVC</span>
              </div>
              <div className="p-2.5 rounded bg-terminal-border/20 border border-terminal-border/40 print:bg-transparent print:border-gray-300">
                <span className="font-semibold text-white print:text-black">Databases & DevOps: </span>
                <span className="text-terminal-muted print:text-gray-700">MongoDB (Mongoose), PostgreSQL, Docker, Nginx, AWS EC2, Git</span>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-6" aria-label="Projects">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-terminal-green print:text-gray-900">
                // Projects
              </h2>
              <span className="text-xs font-mono text-terminal-comment print:hidden">
                Click project name for full details
              </span>
            </div>

            <div className="space-y-6">

              {/* Project 1: HealthGate */}
              <div className="p-4 rounded border border-terminal-border/60 bg-terminal-card/60 hover:border-terminal-green/40 transition-colors print:bg-transparent print:border-gray-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <div className="flex items-center gap-2">
                    <Link
                      to="/projects/healthgate"
                      className="text-base sm:text-lg font-bold text-white hover:text-terminal-green transition-colors inline-flex items-center gap-1.5 group print:text-black print:underline"
                      title="View HealthGate project details"
                    >
                      <span>HealthGate</span>
                      <ExternalLink size={14} className="text-terminal-green group-hover:translate-x-0.5 transition-transform print:hidden" />
                    </Link>
                    <span className="text-xs font-mono text-terminal-muted print:text-gray-600">
                      — Hospital Management System
                    </span>
                  </div>
                  <span className="text-xs font-mono text-terminal-green print:text-gray-700">
                    Solo Developer
                  </span>
                </div>

                <div className="text-xs font-mono text-terminal-comment mb-3 print:text-gray-600">
                  Tech Stack: React • TypeScript • Vite • Node.js • Express.js • MongoDB • Socket.IO • WebRTC • Razorpay • Docker
                </div>

                <ul className="space-y-1.5 text-xs sm:text-sm text-terminal-muted print:text-gray-800 list-disc list-inside leading-relaxed">
                  <li>
                    Architected full-stack hospital management platform with role-based access for Patients, Doctors, and Administrators.
                  </li>
                  <li>
                    Engineered peer-to-peer real-time video consultations using WebRTC and Socket.IO with STUN/TURN infrastructure.
                  </li>
                  <li>
                    Implemented doctor schedule management, appointment slot booking with conflict avoidance, and automated status transitions.
                  </li>
                  <li>
                    Integrated Razorpay payment gateway for appointment fees and Nodemailer for automated transactional emails.
                  </li>
                  <li>
                    Containerized application using Docker and Docker Compose, configured Nginx as reverse proxy for production deployment.
                  </li>
                </ul>

                {/* Direct Link to Project Details Page */}
                <div className="mt-3 pt-3 border-t border-terminal-border/40 flex items-center justify-between print:hidden">
                  <span className="text-xs font-mono text-terminal-muted">Dedicated Details Page:</span>
                  <Link
                    to="/projects/healthgate"
                    className="text-xs font-semibold text-terminal-green hover:underline inline-flex items-center gap-1"
                  >
                    /projects/healthgate →
                  </Link>
                </div>
              </div>

              {/* Project 2: UrbenNest */}
              <div className="p-4 rounded border border-terminal-border/60 bg-terminal-card/60 hover:border-terminal-green/40 transition-colors print:bg-transparent print:border-gray-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <div className="flex items-center gap-2">
                    <Link
                      to="/projects/urbennest"
                      className="text-base sm:text-lg font-bold text-white hover:text-terminal-green transition-colors inline-flex items-center gap-1.5 group print:text-black print:underline"
                      title="View UrbenNest project details"
                    >
                      <span>UrbenNest</span>
                      <ExternalLink size={14} className="text-terminal-green group-hover:translate-x-0.5 transition-transform print:hidden" />
                    </Link>
                    <span className="text-xs font-mono text-terminal-muted print:text-gray-600">
                      — E-Commerce Platform
                    </span>
                  </div>
                  <span className="text-xs font-mono text-terminal-green print:text-gray-700">
                    Solo Developer
                  </span>
                </div>

                <div className="text-xs font-mono text-terminal-comment mb-3 print:text-gray-600">
                  Tech Stack: Node.js • Express.js • MongoDB • EJS • Razorpay
                </div>

                <ul className="space-y-1.5 text-xs sm:text-sm text-terminal-muted print:text-gray-800 list-disc list-inside leading-relaxed">
                  <li>
                    Built full-lifecycle e-commerce platform using Node.js, Express, and MongoDB following MVC architecture principles.
                  </li>
                  <li>
                    Implemented multi-role authentication with separate customer and administrative workflows and dashboards.
                  </li>
                  <li>
                    Created persistent shopping cart, product wishlist, search with multi-parameter filtering, and multi-step checkout.
                  </li>
                  <li>
                    Integrated Razorpay payment gateway with server-side webhook signature verification for transaction integrity.
                  </li>
                  <li>
                    Automated PDF invoice generation upon order completion and built administrative sales analytics reporting.
                  </li>
                </ul>

                {/* Direct Link to Project Details Page */}
                <div className="mt-3 pt-3 border-t border-terminal-border/40 flex items-center justify-between print:hidden">
                  <span className="text-xs font-mono text-terminal-muted">Dedicated Details Page:</span>
                  <Link
                    to="/projects/urbennest"
                    className="text-xs font-semibold text-terminal-green hover:underline inline-flex items-center gap-1"
                  >
                    /projects/urbennest →
                  </Link>
                </div>
              </div>

            </div>
          </section>

          {/* Education */}
          <section aria-label="Education">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-terminal-green mb-3 print:text-gray-900">
              // Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
              <div>
                <div className="font-semibold text-white print:text-black">
                  Bachelor of Computer Applications (BCA)
                </div>
                <div className="text-xs text-terminal-muted print:text-gray-600">
                  Computer Science & Software Development
                </div>
              </div>
              <div className="text-xs font-mono text-terminal-muted print:text-gray-600 sm:text-right mt-1 sm:mt-0">
                Calicut University
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
