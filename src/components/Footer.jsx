import { Heart, Mail } from 'lucide-react';
import { LinkedinIcon } from './icons/LinkedinIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-jet-950 border-t border-amethyst-500/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-amethyst-500 via-cyan-400 to-amethyst-600 shadow-md shadow-amethyst-950/60">
              <img
                src="/profile.jpg"
                alt="Alfred Mathew"
                className="w-full h-full rounded-full object-cover object-top"
              />
            </div>
            <p className="text-jet-400 text-sm">
              © {currentYear} Alfred Mathew. Built with{' '}
              <Heart size={12} className="inline text-cyan-400 fill-cyan-400" /> and React.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/alfred-mathew-8137ba34b"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl glass-light border border-amethyst-500/25 flex items-center justify-center text-jet-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href="mailto:contactalfredmathew@gmail.com"
              className="w-10 h-10 rounded-xl glass-light border border-amethyst-500/25 flex items-center justify-center text-jet-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
