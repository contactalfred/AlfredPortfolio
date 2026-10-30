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
    <section id="education" className="relative bg-obsidian-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sapphire-500/30 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-sapphire-800/15 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-sapphire-500/10 rounded-full blur-[100px]" />

      <div className="section-padding max-w-5xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-sapphire-300 font-mono text-sm tracking-wider uppercase">
            — Education
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sapphire-50 mt-3">
            Academic Background
          </h2>
        </div>

        {/* Education Cards */}
        <div ref={gridRef} className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className={`glass rounded-2xl p-6 sm:p-8 hover:bg-white/5 hover:border-sapphire-300/40 transition-all duration-700 group hover:scale-[1.01] ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: gridVisible ? `${index * 150}ms` : '0ms' }}
            >
              <div className="flex gap-5 sm:gap-6">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    index === 0
                      ? 'bg-gradient-to-br from-sapphire-700 via-sapphire-500 to-sapphire-300 text-obsidian-950 font-bold shadow-lg shadow-obsidian-950/70'
                      : 'bg-sapphire-800/30 text-sapphire-300 group-hover:bg-sapphire-500/20 group-hover:text-sapphire-50'
                  }`}
                >
                  <edu.icon
                    size={22}
                    className={index === 0 ? 'text-obsidian-950' : 'text-sapphire-300 group-hover:text-sapphire-50'}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-sapphire-50 group-hover:text-sapphire-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-sapphire-300 font-semibold text-sm mt-1">{edu.institution}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-obsidian-400 mt-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-sapphire-400" /> {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-sapphire-400" /> {edu.location}
                    </span>
                  </div>

                  <p className="text-obsidian-200 text-sm mt-3 leading-relaxed">{edu.highlight}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
