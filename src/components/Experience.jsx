import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
  {
    title: 'Data Analyst Intern',
    company: 'CamerinFolks Pvt. Ltd.',
    period: '2026 – Present',
    location: 'Remote',
    type: 'current',
    responsibilities: [
      'Analyzing and visualizing datasets using SQL, Python, and Power BI to uncover actionable insights',
      'Building interactive dashboards with KPI cards, slicers, and dynamic visuals for stakeholders',
      'Performing data cleaning and transformation to ensure accuracy and reliability of reports',
      'Collaborating with cross-functional teams to translate business requirements into data solutions',
    ],
  },
  {
    title: 'Audit & Compliance Intern',
    company: 'Libin Mathew & Associates',
    period: '2025',
    location: 'Idukki, Kerala',
    type: 'past',
    responsibilities: [
      'Assisted in financial audit procedures and compliance verification for client organizations',
      'Managed GST filing, bookkeeping, and financial reporting with accuracy and attention to detail',
      'Prepared financial statements and reconciled accounts to ensure regulatory compliance',
      'Gained hands-on experience in data entry, documentation, and record management',
    ],
  },
];

function TimelineItem({ exp, index, visible }) {
  const isCurrent = exp.type === 'current';

  return (
    <div
      className={`relative flex gap-6 sm:gap-8 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: visible ? `${index * 200}ms` : '0ms' }}
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div
          className={`relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isCurrent
              ? 'bg-gradient-to-br from-amethyst-600 via-amethyst-500 to-cyan-500 shadow-lg shadow-amethyst-950/70 animate-pulse-glow'
              : 'glass border border-amethyst-500/25'
          }`}
        >
          <Briefcase size={18} className={isCurrent ? 'text-white' : 'text-jet-400'} />
        </div>
        {index < experiences.length - 1 && (
          <div className="w-px flex-1 bg-gradient-to-b from-amethyst-500/50 via-cyan-500/40 to-jet-700 mt-3" />
        )}
      </div>

      {/* Content card */}
      <div className="glass rounded-2xl p-6 sm:p-8 mb-8 flex-1 hover:bg-white/5 hover:border-cyan-400/40 transition-all duration-300 group">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              {exp.title}
            </h3>
            <p className="text-amethyst-400 font-semibold text-sm mt-1">{exp.company}</p>
          </div>
          {isCurrent && (
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-400/15 text-cyan-300 border border-cyan-400/30 uppercase tracking-wider shadow-[0_0_8px_rgba(0,240,255,0.2)]">
              Current
            </span>
          )}
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 text-sm text-jet-400 mb-5">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} className="text-amethyst-400" /> {exp.period}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-amethyst-400" /> {exp.location}
          </span>
        </div>

        {/* Responsibilities */}
        <ul className="space-y-2.5">
          {exp.responsibilities.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-jet-300 text-sm leading-relaxed">
              <ArrowRight size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [timelineRef, timelineVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="experience" className="relative bg-jet-900 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amethyst-500/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amethyst-600/12 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]" />

      <div className="section-padding max-w-4xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">
            — Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Work History
          </h2>
        </div>

        {/* Timeline */}
        <div ref={timelineRef}>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.company}
              exp={exp}
              index={index}
              visible={timelineVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
