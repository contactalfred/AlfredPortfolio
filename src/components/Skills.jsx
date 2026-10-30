import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  FileSpreadsheet, Database, Code2, BarChart3, Sparkles,
  FileText, Calculator, Receipt, BookOpen
} from 'lucide-react';

const skills = [
  { name: 'Excel', level: 95, icon: FileSpreadsheet, cert: 'MOS Expert', category: 'Technical' },
  { name: 'SQL', level: 75, icon: Database, cert: null, category: 'Technical' },
  { name: 'Python', level: 65, icon: Code2, cert: null, category: 'Technical' },
  { name: 'Power BI', level: 70, icon: BarChart3, cert: null, category: 'Technical' },
  { name: 'Data Cleaning', level: 85, icon: Sparkles, cert: null, category: 'Analytics' },
  { name: 'Data Entry', level: 90, icon: FileText, cert: null, category: 'Analytics' },
  { name: 'Financial Reporting', level: 80, icon: Calculator, cert: null, category: 'Finance' },
  { name: 'GST Filing', level: 75, icon: Receipt, cert: null, category: 'Finance' },
  { name: 'Bookkeeping', level: 80, icon: BookOpen, cert: null, category: 'Finance' },
];

function SkillBar({ skill, visible, index }) {
  return (
    <div
      className="glass rounded-2xl p-5 hover:bg-white/5 transition-all duration-500 group hover:scale-[1.02] hover:border-sapphire-300/40"
      style={{
        transitionDelay: visible ? `${index * 80}ms` : '0ms',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sapphire-800/30 flex items-center justify-center group-hover:bg-sapphire-500/25 group-hover:shadow-[0_0_12px_rgba(123,164,208,0.25)] transition-all duration-300">
            <skill.icon size={18} className="text-sapphire-300 group-hover:text-sapphire-50 transition-colors" />
          </div>
          <div>
            <h3 className="text-sapphire-50 font-semibold text-sm">{skill.name}</h3>
            {skill.cert && (
              <span className="text-sapphire-50 text-[10px] font-mono font-medium bg-sapphire-900/60 border border-sapphire-500/40 px-2 py-0.5 rounded-full inline-block mt-0.5">
                {skill.cert}
              </span>
            )}
          </div>
        </div>
        <span className="text-sapphire-300 font-mono text-sm font-semibold drop-shadow-[0_0_8px_rgba(123,164,208,0.35)]">
          {skill.level}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-obsidian-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sapphire-800 via-sapphire-500 to-sapphire-300 shadow-[0_0_10px_rgba(123,164,208,0.4)] transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${skill.level}%` : '0%',
            transitionDelay: visible ? `${index * 80 + 300}ms` : '0ms',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });

  const categories = ['Technical', 'Analytics', 'Finance'];

  return (
    <section id="skills" className="relative bg-obsidian-900 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sapphire-500/30 to-transparent" />

      {/* Background accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-sapphire-800/20 rounded-full blur-[110px]" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sapphire-500/10 rounded-full blur-[100px]" />

      <div className="section-padding max-w-6xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-sapphire-300 font-mono text-sm tracking-wider uppercase">
            — Skills & Tools
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sapphire-50 mt-3">
            My Toolkit
          </h2>
          <p className="text-obsidian-300 mt-4 max-w-lg mx-auto">
            A blend of technical, analytical, and financial skills refined through education and hands-on experience.
          </p>
        </div>

        {/* Category groups */}
        <div ref={gridRef} className="space-y-10">
          {categories.map((cat) => (
            <div key={cat}>
              <h3 className="text-obsidian-400 font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-gradient-to-r from-sapphire-700 via-sapphire-500 to-sapphire-300 rounded-full" />
                {cat}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      visible={gridVisible}
                      index={i}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
