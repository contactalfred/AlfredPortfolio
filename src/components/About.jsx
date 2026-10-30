import { Briefcase, GraduationCap, TrendingUp, Target } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const highlights = [
  { icon: Briefcase, label: 'Intern', value: 'CamerinFolks' },
  { icon: GraduationCap, label: 'Degree', value: 'B.Com' },
  { icon: TrendingUp, label: 'Focus', value: 'Data Analytics' },
  { icon: Target, label: 'Goal', value: 'Insights-Driven' },
];

export default function About() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.15 });
  const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="about" className="relative bg-obsidian-950 overflow-hidden">
      {/* Subtle amber gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      {/* Subtle ambient light */}
      <div className="absolute -top-32 right-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-[90px]" />

      <div className="section-padding max-w-6xl mx-auto">
        {/* Section Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-amber-300 font-mono text-sm tracking-wider uppercase">
            — About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-50 mt-3">
            Get To Know Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Text Content */}
          <div
            ref={contentRef}
            className={`lg:col-span-3 space-y-6 transition-all duration-700 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <p className="text-obsidian-100 text-lg leading-relaxed">
              I'm <span className="text-amber-50 font-semibold">Alfred Mathew</span>, a{' '}
              <span className="text-amber-300 font-semibold">B.Com graduate</span> currently
              working as a <span className="text-amber-50 font-semibold">Data Analyst Intern</span> at{' '}
              <span className="text-amber-300 font-semibold">CamerinFolks Pvt. Ltd.</span> — where I help
              transform complex datasets into clear, actionable insights.
            </p>
            <p className="text-obsidian-300 leading-relaxed">
              My journey into data analytics is backed by a solid foundation in financial audit
              and compliance. Prior to my current role, I gained experience in GST filing,
              bookkeeping, and financial reporting at a chartered accountancy firm, giving me a
              unique perspective on data accuracy and business operations.
            </p>
            <p className="text-obsidian-300 leading-relaxed">
              I'm detail-oriented and constantly growing my skills in{' '}
              <span className="text-amber-300 font-medium">SQL</span>,{' '}
              <span className="text-amber-50 font-medium">Python</span>, and{' '}
              <span className="text-amber-300 font-medium">Power BI</span> — with the goal of building
              interactive dashboards and uncovering trends that drive smarter decisions. I hold
              the <span className="text-amber-50 font-medium">Microsoft Office Specialist Excel Expert</span> certification,
              and I'm passionate about clean data and clear storytelling.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Detail-Oriented', 'Analytical Thinker', 'Team Player', 'Quick Learner', 'Problem Solver'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium text-amber-50 border border-amber-500/25 bg-amber-800/25 hover:border-amber-300/50 hover:bg-amber-500/20 hover:text-amber-100 transition-all duration-300"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Portrait & Highlight Cards */}
          <div
            ref={cardsRef}
            className={`lg:col-span-2 space-y-4 transition-all duration-700 ${
              cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Portrait Card */}
            <div className="relative group rounded-2xl overflow-hidden glass border border-amber-500/30 p-2 shadow-2xl hover:border-amber-300/50 transition-all duration-500">
              <div className="relative rounded-xl overflow-hidden h-64 sm:h-72">
                <img
                  src="/profile.jpg"
                  alt="Alfred Mathew"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent opacity-90" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl glass-light border border-amber-500/30 backdrop-blur-md">
                  <p className="text-amber-50 font-semibold text-sm">Alfred Mathew</p>
                  <p className="text-amber-300 text-xs font-mono">Data Analyst Intern • CamerinFolks</p>
                </div>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <div
                  key={item.label}
                  className="glass rounded-xl p-4 text-center hover:bg-white/5 hover:scale-105 hover:border-amber-300/40 transition-all duration-300 group"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-amber-800/30 flex items-center justify-center group-hover:bg-amber-500/25 group-hover:shadow-[0_0_12px_rgba(235,193,118,0.25)] transition-all duration-300">
                    <item.icon size={18} className="text-amber-300 group-hover:text-amber-50 transition-colors" />
                  </div>
                  <p className="text-obsidian-400 text-[11px] font-medium mb-0.5">{item.label}</p>
                  <p className="text-amber-50 font-semibold text-xs sm:text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
