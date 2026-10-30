import { Award, ExternalLink, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const certifications = [
  {
    title: 'Microsoft Office Specialist: Excel Expert 2019',
    issuer: 'Microsoft',
    badge: 'MOS',
    color: 'from-cyan-400 via-cyan-500 to-amethyst-600',
    description:
      'Advanced Excel certification demonstrating expertise in workbook management, data analysis, formulas, macros, and advanced features.',
    highlights: ['Advanced Formulas', 'PivotTables & Charts', 'Data Validation', 'Macros & VBA'],
  },
  {
    title: 'Project Management Certification',
    issuer: 'Professional Development',
    badge: 'PM',
    color: 'from-amethyst-600 via-amethyst-500 to-cyan-500',
    description:
      'Foundation-level certification covering project planning, execution, risk management, and stakeholder communication.',
    highlights: ['Project Planning', 'Risk Management', 'Stakeholder Communication', 'Agile Basics'],
  },
  {
    title: 'Business Analysis Certification',
    issuer: 'Professional Development',
    badge: 'BA',
    color: 'from-amethyst-700 via-amethyst-600 to-amethyst-900',
    description:
      'Certification in business analysis methodologies, requirements gathering, and process improvement techniques.',
    highlights: ['Requirements Gathering', 'Process Mapping', 'Data-Driven Decisions', 'SWOT Analysis'],
  },
];

export default function Certifications() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="certifications" className="relative bg-jet-900 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amethyst-500/30 to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amethyst-600/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]" />

      <div className="section-padding max-w-6xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">
            — Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Professional Credentials
          </h2>
        </div>

        {/* Certification Cards */}
        <div ref={gridRef} className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={`glass rounded-2xl p-6 sm:p-7 hover:bg-white/5 hover:border-cyan-400/40 transition-all duration-700 group hover:scale-[1.03] ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: gridVisible ? `${index * 150}ms` : '0ms' }}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-jet-950/70 group-hover:scale-110 transition-transform duration-300`}
                >
                  {cert.badge}
                </div>
                <Award size={18} className="text-jet-400 group-hover:text-cyan-400 transition-colors" />
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-base leading-tight mb-1 group-hover:text-cyan-400 transition-colors">
                {cert.title}
              </h3>
              <p className="text-amethyst-400 text-xs font-medium mb-4">{cert.issuer}</p>

              {/* Description */}
              <p className="text-jet-300 text-sm leading-relaxed mb-5">{cert.description}</p>

              {/* Highlights */}
              <div className="space-y-2">
                {cert.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm text-jet-300">
                    <CheckCircle size={13} className="text-cyan-400 flex-shrink-0" />
                    {h}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
