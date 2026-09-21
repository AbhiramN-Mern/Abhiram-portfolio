import { useState, useRef, useEffect } from 'react';
import { Mail, Phone, Link2, GitBranch, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personal } from '../../data/personal';
import type { ContactFormData, ContactFormErrors } from '../../types';

function validateForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required.';
  else if (data.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';

  if (!data.email.trim()) errors.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = 'Please enter a valid email address.';

  if (!data.message.trim()) errors.message = 'Message is required.';
  else if (data.message.trim().length < 20)
    errors.message = 'Message must be at least 20 characters.';

  return errors;
}

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personal.phone,
    href: `tel:+91${personal.phone}`,
  },
  {
    icon: Link2,
    label: 'LinkedIn',
    value: 'linkedin.com/in/abhiram-n',
    href: personal.linkedinUrl,
  },
  {
    icon: GitBranch,
    label: 'GitHub',
    value: 'github.com/Abhiram-N',
    href: personal.githubUrl,
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('is-visible'); },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('sending');

    // Simulate form submission (replace with actual endpoint/EmailJS/Formspree)
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('sent');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="fade-in-section py-20 lg:py-28 bg-terminal-card/30"
      aria-label="Contact"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left: Info */}
          <div className="space-y-8">
            <div>
              <div className="section-label mb-3">04 // Contact</div>
              <div className="section-divider" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-6">
                Let's Build Something
              </h2>
              <p className="text-terminal-muted mt-3 leading-relaxed">
                I'm interested in Full Stack and MERN development opportunities, interesting projects,
                and conversations around software development.
              </p>
            </div>

            {/* Contact Links */}
            <div className="space-y-3">
              {contactLinks.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={label === 'Email' || label === 'Phone' ? '_self' : '_blank'}
                  rel={label === 'LinkedIn' || label === 'GitHub' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-3 rounded border border-terminal-border bg-terminal-card/50 hover:border-terminal-green/30 hover:bg-terminal-green/5 transition-all group"
                  aria-label={`${label}: ${value}`}
                >
                  <div className="w-9 h-9 rounded border border-terminal-border bg-terminal-border/30 flex items-center justify-center flex-shrink-0 group-hover:border-terminal-green/30 transition-colors">
                    <Icon size={16} className="text-terminal-green" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-terminal-muted">{label}</div>
                    <div className="text-sm text-terminal-text group-hover:text-white transition-colors">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <div className="card p-6">
              <div className="section-label mb-4">// send a message</div>

              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-10 gap-3 text-center">
                  <CheckCircle size={40} className="text-terminal-green" />
                  <p className="text-white font-semibold">Message sent.</p>
                  <p className="text-terminal-muted text-sm">I'll get back to you soon.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 font-mono text-xs text-terminal-green hover:underline"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block font-mono text-xs text-terminal-muted mb-1.5">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      className={`w-full bg-terminal-bg border rounded px-3 py-2.5 text-sm text-terminal-text placeholder-terminal-comment focus:outline-none focus:border-terminal-green transition-colors ${
                        errors.name ? 'border-red-500' : 'border-terminal-border'
                      }`}
                      placeholder="Your name"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <div id="name-error" className="flex items-center gap-1.5 mt-1 text-xs text-red-400" role="alert">
                        <AlertCircle size={12} />
                        {errors.name}
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block font-mono text-xs text-terminal-muted mb-1.5">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className={`w-full bg-terminal-bg border rounded px-3 py-2.5 text-sm text-terminal-text placeholder-terminal-comment focus:outline-none focus:border-terminal-green transition-colors ${
                        errors.email ? 'border-red-500' : 'border-terminal-border'
                      }`}
                      placeholder="your@email.com"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <div id="email-error" className="flex items-center gap-1.5 mt-1 text-xs text-red-400" role="alert">
                        <AlertCircle size={12} />
                        {errors.email}
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block font-mono text-xs text-terminal-muted mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full bg-terminal-bg border rounded px-3 py-2.5 text-sm text-terminal-text placeholder-terminal-comment focus:outline-none focus:border-terminal-green transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-terminal-border'
                      }`}
                      placeholder="What's on your mind?"
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <div id="message-error" className="flex items-center gap-1.5 mt-1 text-xs text-red-400" role="alert">
                        <AlertCircle size={12} />
                        {errors.message}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-terminal-green text-terminal-bg font-semibold text-sm rounded hover:bg-terminal-green-glow transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-terminal-bg/40 border-t-terminal-bg rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
