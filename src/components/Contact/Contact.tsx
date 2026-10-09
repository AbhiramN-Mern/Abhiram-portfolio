import { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { personal } from '../../data/personal';
import type { ContactFormData, ContactFormErrors } from '../../types';

function validateForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) {
    errors.name = 'Name is required.';
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.message.trim()) {
    errors.message = 'Message is required.';
  }

  return errors;
}

const contactChannels = [
  {
    icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    target: '_self',
    rel: undefined,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: `+91 ${personal.phone}`,
    href: `tel:+91${personal.phone}`,
    target: '_self',
    rel: undefined,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/abhiram-n-',
    href: personal.linkedinUrl,
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/AbhiramN-Mern',
    href: personal.githubUrl,
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

type SubmissionStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (status === 'error' || status === 'success') {
      setStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '',
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        setStatus('error');
        setErrorMessage(data?.message || 'Failed to send message');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Failed to send message');
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-28"
      aria-label="Contact"
    >
      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="pb-8 border-b border-border mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-secondary font-medium">
            Contact
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium text-primary mt-2 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-secondary mt-3 text-base max-w-2xl leading-relaxed">
            Whether you have an opportunity, a question, or want to discuss a project, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Direct Communication Index (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs uppercase tracking-wider text-secondary block pb-3 border-b border-border">
              Direct Contact
            </span>

            <div className="divide-y divide-border">
              {contactChannels.map(({ icon: Icon, label, value, href, target, rel }) => (
                <a
                  key={label}
                  href={href}
                  target={target}
                  rel={rel}
                  className="py-4 flex items-center justify-between group transition-colors"
                  aria-label={`${label}: ${value}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-sm bg-surface border border-border text-secondary group-hover:border-primary/50 group-hover:text-white transition-colors">
                      <Icon size={16} />
                    </span>
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-secondary block">
                        {label}
                      </span>
                      <span className="text-sm font-medium text-primary group-hover:text-white transition-colors">
                        {value}
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="text-secondary/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Form (7 cols) */}
          <div className="lg:col-span-7 bg-surface border border-border p-6 sm:p-8 rounded-sm">
            <h3 className="font-mono text-xs uppercase tracking-wider text-secondary block pb-3 border-b border-border mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-xs font-medium text-secondary mb-1.5">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  disabled={status === 'sending'}
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  className={`w-full bg-page border rounded-sm px-3.5 py-2.5 text-sm text-primary placeholder-secondary/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors disabled:opacity-50 ${
                    errors.name ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="John Doe"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <div id="name-error" className="flex items-center gap-1.5 mt-1.5 text-xs text-red-400 font-mono">
                    <AlertCircle size={13} aria-hidden="true" />
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-xs font-medium text-secondary mb-1.5">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  disabled={status === 'sending'}
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className={`w-full bg-page border rounded-sm px-3.5 py-2.5 text-sm text-primary placeholder-secondary/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors disabled:opacity-50 ${
                    errors.email ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="john@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <div id="email-error" className="flex items-center gap-1.5 mt-1.5 text-xs text-red-400 font-mono">
                    <AlertCircle size={13} aria-hidden="true" />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-secondary mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  disabled={status === 'sending'}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-page border rounded-sm px-3.5 py-2.5 text-sm text-primary placeholder-secondary/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none disabled:opacity-50 ${
                    errors.message ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="Hello Abhiram, I'd like to discuss..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <div id="message-error" className="flex items-center gap-1.5 mt-1.5 text-xs text-red-400 font-mono">
                    <AlertCircle size={13} aria-hidden="true" />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div
                  role="status"
                  className="flex items-center gap-2 p-3 rounded-sm bg-page border border-border text-primary text-sm font-mono"
                >
                  <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                  <span>Message sent successfully</span>
                </div>
              )}

              {status === 'error' && (
                <div
                  role="alert"
                  className="flex flex-col gap-1 p-3 rounded-sm bg-page border border-red-500/50 text-red-400 text-sm font-mono"
                >
                  <div className="flex items-center gap-2">
                    <AlertCircle size={16} className="flex-shrink-0" />
                    <span>Failed to send message</span>
                  </div>
                  {errorMessage && errorMessage !== 'Failed to send message' && (
                    <p className="text-xs text-secondary pl-6">{errorMessage}</p>
                  )}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-primary hover:bg-white text-page text-sm font-medium rounded-sm transition-colors disabled:opacity-50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-page/40 border-t-page rounded-full animate-spin" aria-hidden="true" />
                    <span className="font-mono text-xs">Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={14} aria-hidden="true" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
