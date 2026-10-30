import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const education = [
  {
    degree: 'Bachelor of Commerce (B.Com)',
    institution: 'Marian College Kuttikkanam (Autonomous)',
    period: '2023 – 2026',
    location: 'Kuttikkanam, Kerala',
    highlight: 'Graduated with strong foundation in commerce, accounting, and data analysis',
    icon: GraduationCap,
  },
  {
    degree: 'Higher Secondary (Class XII)',
    institution: 'Higher Secondary School',
    period: 'Completed',
    location: 'Kerala, India',
    highlight: 'Commerce stream with focus on Business Studies and Accountancy',
    icon: Award,
  },
  {
    degree: 'Secondary Education (Class X)',
    institution: 'High School',
    period: 'Completed',
    location: 'Kerala, India',
    highlight: 'Strong academic foundation in mathematics and core subjects',
    icon: Award,
  },
];

export default function Education() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="education" className="relative bg-jet-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amethyst-500/30 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amethyst-600/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]" />

      <div className="section-padding max-w-5xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">
            — Education
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Academic Background
          </h2>
        </div>

        {/* Education Cards */}
        <div ref={gridRef} className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className={`glass rounded-2xl p-6 sm:p-8 hover:bg-white/5 hover:border-cyan-400/40 transition-all duration-700 group hover:scale-[1.01] ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: gridVisible ? `${index * 150}ms` : '0ms' }}
            >
              <div className="flex gap-5 sm:gap-6">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    index === 0
                      ? 'bg-gradient-to-br from-amethyst-600 via-amethyst-500 to-cyan-500 text-white shadow-lg shadow-amethyst-950/60'
                      : 'bg-amethyst-600/20 text-cyan-400 group-hover:bg-cyan-400/20 group-hover:text-cyan-300'
                  }`}
                >
                  <edu.icon
                    size={22}
                    className={index === 0 ? 'text-white' : 'text-cyan-400 group-hover:text-cyan-300'}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-amethyst-400 font-semibold text-sm mt-1">{edu.institution}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-jet-400 mt-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-amethyst-400" /> {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-amethyst-400" /> {edu.location}
                    </span>
                  </div>

                  <p className="text-jet-300 text-sm mt-3 leading-relaxed">{edu.highlight}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
