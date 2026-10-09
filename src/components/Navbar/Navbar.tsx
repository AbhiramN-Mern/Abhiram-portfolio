import { useState, useEffect, useRef } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

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
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

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
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const sectionId = href.replace('#', '');

    if (isHome) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-page/95 backdrop-blur-sm transition-all duration-200 ${
          scrolled ? 'border-b border-border py-3 shadow-[0_1px_3px_rgba(0,0,0,0.5)]' : 'border-b border-transparent py-4'
        }`}
      >
        <nav
          className="max-w-container mx-auto px-6 sm:px-8 lg:px-12"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm py-1"
              aria-label="Home — Abhiram N"
            >
              <span className="w-8 h-8 rounded-sm bg-surface border border-border flex items-center justify-center overflow-hidden">
                <img
                  src="/favicon.png"
                  alt="Abhiram N logo"
                  className="w-5 h-5 object-contain"
                />
              </span>
              <span className="font-medium text-primary tracking-tight text-base hover:text-white transition-colors">
                Abhiram N
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => {
                const sectionKey = link.href.replace('#', '');
                const isActive = isHome && activeSection === sectionKey;
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-sm transition-colors py-1 focus-visible:outline-none ${
                      isActive
                        ? 'text-white font-medium border-b border-white'
                        : 'text-secondary hover:text-white font-normal'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Desktop Resume & Mobile Menu Trigger */}
            <div className="flex items-center gap-3">
              <a
                href="/Abhiram%20MERN%20STACK%20DEVELOPER.pdf"
                download="Abhiram MERN STACK DEVELOPER.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono tracking-wider text-primary border border-border rounded-sm hover:border-primary/60 hover:text-white hover:bg-surface transition-colors"
                aria-label="Download Resume"
              >
                <FileText size={14} className="text-secondary" />
                <span>Resume</span>
              </a>

              <button
                className="md:hidden p-1.5 text-primary hover:text-white transition-colors focus-visible:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Backdrop */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/60 transition-opacity"
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
        className={`md:hidden fixed top-0 right-0 bottom-0 z-50 w-72 bg-surface border-l border-border p-6 flex flex-col justify-between transform transition-transform duration-200 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-border mb-6">
            <span className="font-mono text-xs uppercase tracking-wider text-secondary">
              Menu
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-1 text-secondary hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const sectionKey = link.href.replace('#', '');
              const isActive = isHome && activeSection === sectionKey;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-sm text-sm transition-colors text-left ${
                    isActive
                      ? 'text-white font-medium bg-page'
                      : 'text-secondary hover:text-white hover:bg-page'
                  }`}
                >
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="pt-6 border-t border-border">
          <a
            href="/Abhiram%20MERN%20STACK%20DEVELOPER.pdf"
            download="Abhiram MERN STACK DEVELOPER.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-primary border border-border rounded-sm hover:border-primary hover:text-white transition-colors bg-page"
            aria-label="Download Resume"
          >
            <FileText size={15} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </>
  );
}
