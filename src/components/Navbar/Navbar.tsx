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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          scrolled
            ? 'bg-[#0a0d14]/90 backdrop-blur-md border-b border-[#1e293b]'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-2.5 text-left focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md py-1"
              aria-label="Home — Abhiram N"
            >
              <span className="w-8 h-8 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-semibold text-sm">
                AN
              </span>
              <span className="font-semibold text-slate-100 tracking-tight text-base hover:text-emerald-400 transition-colors">
                Abhiram N
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const sectionKey = link.href.replace('#', '');
                const isActive = isHome && activeSection === sectionKey;
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className={`px-3.5 py-1.5 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Actions: Resume + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/resume"
                className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 text-sm font-medium text-slate-200 border border-slate-700 rounded-md hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all"
                aria-label="Resume"
              >
                <FileText size={15} />
                <span>Resume</span>
              </Link>
              <button
                className="md:hidden p-2 text-slate-400 hover:text-white transition-colors rounded-md"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-modal="true"
        className={`md:hidden fixed top-16 right-0 bottom-0 z-50 w-64 bg-[#111726] border-l border-[#1e293b] p-5 flex flex-col justify-between transform transition-transform duration-200 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-1">
          {navLinks.map((link) => {
            const sectionKey = link.href.replace('#', '');
            const isActive = isHome && activeSection === sectionKey;
            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`flex items-center px-3.5 py-2.5 rounded-md text-sm font-medium transition-colors text-left ${
                  isActive
                    ? 'text-emerald-400 bg-emerald-500/10 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        <div className="pt-4 border-t border-[#1e293b]">
          <Link
            to="/resume"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium text-slate-200 border border-slate-700 rounded-md hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all"
          >
            <FileText size={16} />
            <span>View Resume</span>
          </Link>
        </div>
      </div>
    </>
  );
}
