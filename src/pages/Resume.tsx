import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Printer, ExternalLink, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { personal } from '../data/personal';

export default function Resume() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="pt-20 pb-20 print:pt-0 print:pb-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 print:px-0 print:py-0">

        {/* Action Bar — Hidden on print */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-[#1e293b] print:hidden">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Portfolio</span>
          </button>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm rounded-md transition-colors shadow-sm"
            title="Print or save as PDF"
          >
            <Printer size={15} />
            <span>Print / Save PDF</span>
          </button>
        </div>

        {/* Resume Paper Container */}
        <div className="bg-[#111726] border border-[#1e293b] rounded-lg p-6 sm:p-10 print:border-none print:p-0 print:bg-transparent print:text-black shadow-sm">

          {/* Header */}
          <header className="border-b border-[#1e293b] pb-6 mb-6 print:border-gray-300">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight print:text-black">
                  {personal.name}
                </h1>
                <p className="text-lg text-emerald-400 font-semibold mt-1 print:text-gray-800">
                  {personal.role}
                </p>
              </div>

              <div className="text-xs sm:text-sm text-slate-300 space-y-1.5 sm:text-right print:text-gray-700">
                <div className="flex items-center sm:justify-end gap-2">
                  <Mail size={14} className="text-emerald-400 print:hidden" />
                  <a href={`mailto:${personal.email}`} className="hover:text-emerald-400 print:no-underline">
                    {personal.email}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-2">
                  <Phone size={14} className="text-emerald-400 print:hidden" />
                  <a href={`tel:+91${personal.phone}`} className="hover:text-emerald-400 print:no-underline">
                    +91 {personal.phone}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-2">
                  <MapPin size={14} className="text-emerald-400 print:hidden" />
                  <span>Kerala, India</span>
                </div>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-[#1e293b]/60 text-xs text-slate-400 print:text-gray-700 print:border-gray-200">
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors"
              >
                LinkedIn: linkedin.com/in/abhiram-n
              </a>
              <span>&bull;</span>
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors"
              >
                GitHub: github.com/Abhiram-N
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-8" aria-label="Professional Summary">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-2 print:text-gray-900">
              Professional Summary
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed print:text-gray-800">
              {personal.bio} {personal.bio2}
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-8" aria-label="Technical Skills">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-3 print:text-gray-900">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3 rounded-md bg-[#162032] border border-[#222f44] print:bg-transparent print:border-gray-300">
                <span className="font-semibold text-white print:text-black">Languages: </span>
                <span className="text-slate-300 print:text-gray-700">JavaScript (ES6+), TypeScript, HTML5, CSS3</span>
              </div>
              <div className="p-3 rounded-md bg-[#162032] border border-[#222f44] print:bg-transparent print:border-gray-300">
                <span className="font-semibold text-white print:text-black">Frontend: </span>
                <span className="text-slate-300 print:text-gray-700">React.js, Vite, Tailwind CSS, Redux Toolkit, Responsive Design</span>
              </div>
              <div className="p-3 rounded-md bg-[#162032] border border-[#222f44] print:bg-transparent print:border-gray-300">
                <span className="font-semibold text-white print:text-black">Backend: </span>
                <span className="text-slate-300 print:text-gray-700">Node.js, Express.js, REST APIs, JWT, Clean Architecture, MVC, WebRTC</span>
              </div>
              <div className="p-3 rounded-md bg-[#162032] border border-[#222f44] print:bg-transparent print:border-gray-300">
                <span className="font-semibold text-white print:text-black">Databases &amp; DevOps: </span>
                <span className="text-slate-300 print:text-gray-700">MongoDB, PostgreSQL, Docker, Docker Compose, Nginx, AWS EC2, Git</span>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-8" aria-label="Projects">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-4 print:text-gray-900">
              Featured Projects
            </h2>

            <div className="space-y-6">

              {/* Project 1: HealthGate */}
              <div className="p-5 rounded-lg border border-[#1e293b] bg-[#0d1320] print:bg-transparent print:border-gray-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <div className="flex items-center gap-2">
                    <Link
                      to="/projects/healthgate"
                      className="text-base sm:text-lg font-bold text-white hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 group print:text-black print:underline"
                      title="View HealthGate project details"
                    >
                      <span>HealthGate</span>
                      <ExternalLink size={14} className="text-emerald-400 print:hidden" />
                    </Link>
                    <span className="text-xs text-slate-400 print:text-gray-600">
                      &mdash; Hospital Management System
                    </span>
                  </div>
                  <span className="text-xs font-medium text-emerald-400 print:text-gray-700">
                    Solo Developer
                  </span>
                </div>

                <div className="text-xs text-slate-400 mb-3 print:text-gray-600">
                  React &bull; TypeScript &bull; Node.js &bull; Express.js &bull; MongoDB &bull; Socket.IO &bull; WebRTC &bull; Docker &bull; Nginx
                </div>

                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 print:text-gray-800 list-disc list-inside leading-relaxed">
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

                <div className="mt-4 pt-3 border-t border-[#1e293b]/60 flex items-center justify-between print:hidden">
                  <span className="text-xs text-slate-400">Detailed Documentation:</span>
                  <Link
                    to="/projects/healthgate"
                    className="text-xs font-semibold text-emerald-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Project Details</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* Project 2: UrbenNest */}
              <div className="p-5 rounded-lg border border-[#1e293b] bg-[#0d1320] print:bg-transparent print:border-gray-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <div className="flex items-center gap-2">
                    <Link
                      to="/projects/urbennest"
                      className="text-base sm:text-lg font-bold text-white hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 group print:text-black print:underline"
                      title="View UrbenNest project details"
                    >
                      <span>UrbenNest</span>
                      <ExternalLink size={14} className="text-emerald-400 print:hidden" />
                    </Link>
                    <span className="text-xs text-slate-400 print:text-gray-600">
                      &mdash; E-Commerce Platform
                    </span>
                  </div>
                  <span className="text-xs font-medium text-emerald-400 print:text-gray-700">
                    Solo Developer
                  </span>
                </div>

                <div className="text-xs text-slate-400 mb-3 print:text-gray-600">
                  Node.js &bull; Express.js &bull; MongoDB &bull; EJS &bull; Razorpay
                </div>

                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 print:text-gray-800 list-disc list-inside leading-relaxed">
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

                <div className="mt-4 pt-3 border-t border-[#1e293b]/60 flex items-center justify-between print:hidden">
                  <span className="text-xs text-slate-400">Detailed Documentation:</span>
                  <Link
                    to="/projects/urbennest"
                    className="text-xs font-semibold text-emerald-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Project Details</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

            </div>
          </section>

          {/* Education */}
          <section aria-label="Education">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-3 print:text-gray-900">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
              <div>
                <div className="font-semibold text-white print:text-black">
                  Bachelor of Computer Applications (BCA)
                </div>
                <div className="text-xs text-slate-400 print:text-gray-600">
                  Computer Science &amp; Software Development
                </div>
              </div>
              <div className="text-xs text-slate-400 print:text-gray-600 sm:text-right mt-1 sm:mt-0">
                Calicut University
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
