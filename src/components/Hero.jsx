import { useEffect, useState } from 'react';
import { MapPin, Download, Mail, ChevronDown } from 'lucide-react';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { useTypewriter } from '../hooks/useTypewriter';

const roles = ['Data Analyst', 'Excel Expert', 'SQL Developer', 'BI Developer'];

export default function Hero() {
  const typedText = useTypewriter(roles, 100, 60, 2200);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian-950 pt-24 pb-16"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-35" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sapphire-500/20 rounded-full blur-[110px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sapphire-300/15 rounded-full blur-[110px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-sapphire-800/35 rounded-full blur-[140px]" />

      {/* Floating data particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1.5 h-1.5 rounded-full animate-float ${
              i % 2 === 0
                ? 'bg-sapphire-300/60 shadow-[0_0_8px_#7BA4D0]'
                : 'bg-sapphire-500/60 shadow-[0_0_8px_#2E5E99]'
            }`}
            style={{
              left: `${12 + i * 11}%`,
              top: `${18 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3.2 + i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Profile Avatar with Sapphire Veil Glowing Ring */}
        <div
          className={`relative mx-auto mb-6 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 transition-all duration-700 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          {/* Ambient Glow */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-sapphire-800 via-sapphire-500 to-sapphire-300 opacity-75 blur-lg animate-pulse-glow" />

          {/* Border ring */}
          <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-tr from-sapphire-800 via-sapphire-500 to-sapphire-300 shadow-2xl shadow-obsidian-950/80">
            <div className="w-full h-full rounded-full overflow-hidden bg-obsidian-950 border-2 border-obsidian-850">
              <img
                src="/profile.jpg"
                alt="Alfred Mathew"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Online status indicator */}
          <div className="absolute bottom-1 right-2 w-5 h-5 rounded-full bg-obsidian-950 flex items-center justify-center p-0.5 shadow-lg border border-sapphire-500/50">
            <span className="w-full h-full rounded-full bg-sapphire-300 animate-pulse shadow-[0_0_8px_#7BA4D0]" />
          </div>
        </div>

        {/* Status badge */}
        <div
          className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-light border border-sapphire-500/35 mb-8 transition-all duration-700 delay-100 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-sapphire-300 animate-pulse shadow-[0_0_8px_#7BA4D0]" />
          <span className="text-sapphire-50 text-sm font-medium tracking-wide">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-sapphire-50 mb-4 tracking-tight transition-all duration-700 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Alfred{' '}
          <span className="gradient-text">Mathew</span>
        </h1>

        {/* Typewriter role */}
        <div
          className={`h-12 flex items-center justify-center mb-6 transition-all duration-700 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-2xl sm:text-3xl font-mono text-sapphire-300 font-medium drop-shadow-[0_0_14px_rgba(123,164,208,0.45)]">
            {typedText}
          </span>
          <span className="w-0.5 h-7 bg-sapphire-300 ml-1.5 animate-pulse shadow-[0_0_8px_#7BA4D0]" />
        </div>

        {/* Tagline */}
        <p
          className={`text-obsidian-200 text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed transition-all duration-700 delay-400 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Turning <span className="text-sapphire-50 font-semibold">raw data</span> into{' '}
          <span className="text-sapphire-300 font-semibold">actionable insights</span> using{' '}
          <span className="text-sapphire-50 font-medium">Excel</span>,{' '}
          <span className="text-sapphire-300 font-medium">SQL</span>,{' '}
          <span className="text-sapphire-50 font-medium">Python</span> &{' '}
          <span className="text-sapphire-300 font-medium">Power BI</span>.
        </p>

        {/* Location */}
        <div
          className={`flex items-center justify-center gap-1.5 text-obsidian-400 text-sm mb-10 transition-all duration-700 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <MapPin size={14} className="text-sapphire-400" />
          <span>Idukki, Kerala, India</span>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-600 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="/Alfred_Mathew_Resume.pdf"
            download
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-sapphire-500 via-sapphire-400 to-sapphire-300 hover:from-sapphire-600 hover:to-sapphire-400 text-obsidian-950 font-bold text-sm shadow-lg shadow-sapphire-800/60 hover:shadow-sapphire-500/40 hover:scale-105 transition-all duration-300"
          >
            <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            Download Resume
          </a>
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/alfred-mathew-8137ba34b"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl glass-light border border-sapphire-500/30 flex items-center justify-center text-obsidian-300 hover:text-sapphire-50 hover:border-sapphire-300/60 hover:bg-sapphire-500/15 hover:shadow-[0_0_15px_rgba(123,164,208,0.25)] transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="mailto:contactalfredmathew@gmail.com"
              className="w-12 h-12 rounded-xl glass-light border border-sapphire-500/30 flex items-center justify-center text-obsidian-300 hover:text-sapphire-50 hover:border-sapphire-300/60 hover:bg-sapphire-500/15 hover:shadow-[0_0_15px_rgba(123,164,208,0.25)] transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Tech pills */}
        <div
          className={`flex flex-wrap items-center justify-center gap-3 transition-all duration-700 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {['Excel', 'SQL', 'Python', 'Power BI'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full text-xs font-mono font-medium text-sapphire-50 bg-sapphire-800/40 border border-sapphire-500/35 hover:border-sapphire-300/60 hover:bg-sapphire-500/20 hover:text-white transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-obsidian-400 hover:text-sapphire-300 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
}
