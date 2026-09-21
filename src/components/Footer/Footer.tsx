import { GitBranch, Link2, Mail } from 'lucide-react';
import { personal } from '../../data/personal';

export default function Footer() {
  return (
    <footer className="border-t border-terminal-border" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Branding */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-mono text-sm font-semibold text-terminal-green">Abhiram N</span>
            <p className="text-xs text-terminal-comment">Built with React + TypeScript</p>
            <p className="text-xs text-terminal-comment">&copy; 2026 Abhiram N. All rights reserved.</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-comment hover:text-terminal-green transition-colors p-1.5 rounded"
              aria-label="GitHub profile — opens in new tab"
            >
              <GitBranch size={16} />
            </a>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-comment hover:text-terminal-green transition-colors p-1.5 rounded"
              aria-label="LinkedIn profile — opens in new tab"
            >
              <Link2 size={16} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-terminal-comment hover:text-terminal-green transition-colors p-1.5 rounded"
              aria-label={`Send email to ${personal.email}`}
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
