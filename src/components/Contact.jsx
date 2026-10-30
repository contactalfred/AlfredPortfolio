import { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { useScrollReveal } from '../hooks/useScrollReveal';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contactalfredmathew@gmail.com',
    href: 'mailto:contactalfredmathew@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9645453131',
    href: 'tel:+919645453131',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Idukki, Kerala, India',
    href: null,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'alfred-mathew-8137ba34b',
    href: 'https://linkedin.com/in/alfred-mathew-8137ba34b',
  },
];

export default function Contact() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.1 });
  const [formStatus, setFormStatus] = useState('idle'); // idle | sending | sent

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    // Open mailto with pre-filled content
    const mailtoLink = `mailto:contactalfredmathew@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.open(mailtoLink, '_blank');

    setFormStatus('sent');
    form.reset();
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="relative bg-obsidian-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sapphire-500/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sapphire-800/15 rounded-full blur-[130px]" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-sapphire-500/10 rounded-full blur-[110px]" />

      <div className="section-padding max-w-6xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-sapphire-300 font-mono text-sm tracking-wider uppercase">
            — Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sapphire-50 mt-3">
            Contact Me
          </h2>
          <p className="text-obsidian-300 mt-4 max-w-lg mx-auto">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`grid lg:grid-cols-5 gap-10 lg:gap-12 transition-all duration-700 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((item) => {
              const content = (
                <div className="glass rounded-2xl p-5 flex items-center gap-4 hover:bg-white/5 hover:border-sapphire-300/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-sapphire-800/30 flex items-center justify-center group-hover:bg-sapphire-500/20 group-hover:shadow-[0_0_12px_rgba(123,164,208,0.25)] transition-all flex-shrink-0">
                    <item.icon size={20} className="text-sapphire-300 group-hover:text-sapphire-50" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-obsidian-400 text-xs font-medium mb-0.5">{item.label}</p>
                    <p className="text-sapphire-50 text-sm font-medium truncate">{item.value}</p>
                  </div>
                  {item.href && (
                    <ArrowUpRight
                      size={14}
                      className="text-obsidian-400 group-hover:text-sapphire-300 transition-colors ml-auto flex-shrink-0"
                    />
                  )}
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-5 border border-sapphire-500/25">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-obsidian-200 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-850/80 border border-sapphire-500/25 text-sapphire-50 placeholder-obsidian-400 text-sm focus:outline-none focus:ring-2 focus:ring-sapphire-400/40 focus:border-sapphire-400/60 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-obsidian-200 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-850/80 border border-sapphire-500/25 text-sapphire-50 placeholder-obsidian-400 text-sm focus:outline-none focus:ring-2 focus:ring-sapphire-400/40 focus:border-sapphire-400/60 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-obsidian-200 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-xl bg-obsidian-850/80 border border-sapphire-500/25 text-sapphire-50 placeholder-obsidian-400 text-sm focus:outline-none focus:ring-2 focus:ring-sapphire-400/40 focus:border-sapphire-400/60 transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-obsidian-200 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-xl bg-obsidian-850/80 border border-sapphire-500/25 text-sapphire-50 placeholder-obsidian-400 text-sm focus:outline-none focus:ring-2 focus:ring-sapphire-400/40 focus:border-sapphire-400/60 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  formStatus === 'sent'
                    ? 'bg-sapphire-700 text-sapphire-50 border border-sapphire-300/40 shadow-lg shadow-obsidian-950/80'
                    : 'bg-gradient-to-r from-sapphire-500 via-sapphire-400 to-sapphire-300 hover:from-sapphire-600 hover:to-sapphire-400 text-obsidian-950 shadow-lg shadow-sapphire-800/60 hover:shadow-sapphire-400/35 hover:scale-105'
                }`}
              >
                {formStatus === 'sent' ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
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
