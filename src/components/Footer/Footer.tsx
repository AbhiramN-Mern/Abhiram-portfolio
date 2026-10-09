import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { personal } from '../../data/personal';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-page" role="contentinfo">
      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Branding & Attribution */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-medium text-primary text-sm">Abhiram N</span>
            <p className="text-xs text-secondary">
              Full-Stack Developer &bull; Built with React, TypeScript &amp; Tailwind CSS
            </p>
            <p className="text-xs text-secondary/60 mt-0.5 font-mono">
              &copy; {new Date().getFullYear()} Abhiram N. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-sm text-secondary hover:text-white hover:bg-surface border border-transparent hover:border-border transition-colors"
              aria-label="GitHub profile (opens in new tab)"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-sm text-secondary hover:text-white hover:bg-surface border border-transparent hover:border-border transition-colors"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-sm text-secondary hover:text-white hover:bg-surface border border-transparent hover:border-border transition-colors"
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
