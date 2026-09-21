import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { personal } from '../../data/personal';

export default function Footer() {
  return (
    <footer className="border-t border-[#1e293b] bg-[#0a0d14]" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Branding & Attribution */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-semibold text-slate-100 text-sm">Abhiram N</span>
            <p className="text-xs text-slate-400">
              Full-Stack Developer &bull; Built with React, TypeScript &amp; Tailwind CSS
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              &copy; {new Date().getFullYear()} Abhiram N. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="GitHub profile (opens in new tab)"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label={`Send email to ${personal.email}`}
            >
              <Mail size={18} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
