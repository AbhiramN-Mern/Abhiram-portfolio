import { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
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
    value: 'linkedin.com/in/abhiram-n',
    href: personal.linkedinUrl,
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/Abhiram-N',
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
      className="py-20 border-t border-[#1e293b]"
      aria-label="Contact"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <span className="section-subtitle">Contact</span>
          <h2 className="text-3xl font-bold text-white mt-1">
            Get In Touch
          </h2>
          <p className="text-slate-400 mt-2 text-base max-w-2xl">
            Whether you have an opportunity, a question, or want to discuss a project, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Direct Contact
            </h3>

            <div className="space-y-3">
              {contactChannels.map(({ icon: Icon, label, value, href, target, rel }) => (
                <a
                  key={label}
                  href={href}
                  target={target}
                  rel={rel}
                  className="flex items-center gap-4 p-4 rounded-lg bg-[#111726] border border-[#1e293b] hover:border-[#334155] hover:bg-[#151c2f] transition-all group"
                  aria-label={`${label}: ${value}`}
                >
                  <div className="w-10 h-10 rounded-md bg-[#162032] border border-[#222f44] flex items-center justify-center flex-shrink-0 text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-medium text-slate-400 block">{label}</span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors truncate block">
                      {value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#111726] border border-[#1e293b] rounded-lg p-6 sm:p-8 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1.5">
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
                    className={`w-full bg-[#0a0d14] border rounded-md px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                      errors.name ? 'border-red-500' : 'border-[#1e293b] focus:border-emerald-500'
                    }`}
                    placeholder="John Doe"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <div id="name-error" className="flex items-center gap-1.5 mt-1.5 text-xs text-red-400">
                      <AlertCircle size={13} aria-hidden="true" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1.5">
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
                    className={`w-full bg-[#0a0d14] border rounded-md px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                      errors.email ? 'border-red-500' : 'border-[#1e293b] focus:border-emerald-500'
                    }`}
                    placeholder="john@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <div id="email-error" className="flex items-center gap-1.5 mt-1.5 text-xs text-red-400">
                      <AlertCircle size={13} aria-hidden="true" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    disabled={status === 'sending'}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-[#0a0d14] border rounded-md px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
                      errors.message ? 'border-red-500' : 'border-[#1e293b] focus:border-emerald-500'
                    }`}
                    placeholder="Hello Abhiram, I'd like to discuss..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <div id="message-error" className="flex items-center gap-1.5 mt-1.5 text-xs text-red-400">
                      <AlertCircle size={13} aria-hidden="true" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submission State Notifications */}
                {status === 'success' && (
                  <div
                    role="status"
                    className="flex items-center gap-2.5 p-3.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm"
                  >
                    <CheckCircle2 size={18} className="flex-shrink-0" aria-hidden="true" />
                    <span>Message sent successfully</span>
                  </div>
                )}

                {status === 'error' && (
                  <div
                    role="alert"
                    className="flex flex-col gap-1 p-3.5 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <AlertCircle size={18} className="flex-shrink-0" aria-hidden="true" />
                      <span className="font-medium">Failed to send message</span>
                    </div>
                    {errorMessage && errorMessage !== 'Failed to send message' && (
                      <p className="text-xs text-red-300/80 pl-7">{errorMessage}</p>
                    )}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm cursor-pointer"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" aria-hidden="true" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} className="w-4 h-4 flex-shrink-0" aria-hidden="true" focusable="false" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

