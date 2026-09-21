import { useState, useEffect, useRef } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHome) return;
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Reset active section when navigating away from home
  useEffect(() => {
    if (!isHome) setActiveSection('');
    else setActiveSection('home');
  }, [isHome]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const sectionId = href.replace('#', '');

    if (isHome) {
      // Smooth scroll on home page
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home then scroll to section
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-terminal-bg/95 backdrop-blur-md border-b border-terminal-border shadow-terminal'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terminal-green rounded"
              aria-label="Home — Abhiram N"
            >
              <span className="font-mono text-sm font-semibold text-terminal-green">AN</span>
              <span className="hidden sm:block text-sm font-medium text-terminal-text">
                Abhiram N
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
                    isHome && activeSection === link.href.replace('#', '')
                      ? 'text-terminal-green bg-terminal-green/5'
                      : 'text-terminal-muted hover:text-terminal-text'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Resume + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/resume"
                className="hidden md:flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-terminal-green border border-terminal-green/40 rounded hover:bg-terminal-green/10 hover:border-terminal-green transition-all"
                aria-label="Resume"
              >
                <FileText size={14} />
                Resume
              </Link>
              <button
                className="md:hidden p-2 text-terminal-muted hover:text-terminal-text transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Backdrop */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-terminal-bg/80 backdrop-blur-sm"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-modal="true"
        className={`md:hidden fixed top-14 right-0 bottom-0 z-50 w-64 bg-terminal-card border-l border-terminal-border transform transition-transform duration-300 ease-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex flex-col gap-1 h-full">
          <div className="font-mono text-xs text-terminal-muted mb-4">// navigation</div>
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className={`flex items-center gap-2 px-3 py-2.5 rounded text-sm font-medium transition-colors text-left ${
                isHome && activeSection === link.href.replace('#', '')
                  ? 'text-terminal-green bg-terminal-green/10 border-l-2 border-terminal-green'
                  : 'text-terminal-muted hover:text-terminal-text hover:bg-terminal-border/20'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="mt-auto pb-4">
            <Link
              to="/resume"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-medium text-terminal-green border border-terminal-green/40 rounded hover:bg-terminal-green/10 transition-all"
            >
              <FileText size={14} />
              Resume
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
