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
    <section id="about" className="relative bg-jet-950 overflow-hidden">
      {/* Subtle amethyst-cyan gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amethyst-500/30 to-transparent" />

      {/* Subtle ambient light */}
      <div className="absolute -top-32 right-1/4 w-72 h-72 bg-amethyst-600/10 rounded-full blur-[90px]" />

      <div className="section-padding max-w-6xl mx-auto">
        {/* Section Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">
            — About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
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
            <p className="text-jet-200 text-lg leading-relaxed">
              I'm <span className="text-white font-semibold">Alfred Mathew</span>, a{' '}
              <span className="text-amethyst-400 font-semibold">B.Com graduate</span> currently
              working as a <span className="text-cyan-400 font-semibold">Data Analyst Intern</span> at{' '}
              <span className="text-white font-semibold">CamerinFolks Pvt. Ltd.</span> — where I help
              transform complex datasets into clear, actionable insights.
            </p>
            <p className="text-jet-300 leading-relaxed">
              My journey into data analytics is backed by a solid foundation in financial audit
              and compliance. Prior to my current role, I gained experience in GST filing,
              bookkeeping, and financial reporting at a chartered accountancy firm, giving me a
              unique perspective on data accuracy and business operations.
            </p>
            <p className="text-jet-300 leading-relaxed">
              I'm detail-oriented and constantly growing my skills in{' '}
              <span className="text-cyan-300 font-medium">SQL</span>,{' '}
              <span className="text-amethyst-300 font-medium">Python</span>, and{' '}
              <span className="text-cyan-300 font-medium">Power BI</span> — with the goal of building
              interactive dashboards and uncovering trends that drive smarter decisions. I hold
              the <span className="text-cyan-400 font-medium">Microsoft Office Specialist Excel Expert</span> certification,
              and I'm passionate about clean data and clear storytelling.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Detail-Oriented', 'Analytical Thinker', 'Team Player', 'Quick Learner', 'Problem Solver'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium text-cyan-300 border border-cyan-400/20 bg-cyan-400/5 hover:border-amethyst-400/40 hover:bg-amethyst-500/10 hover:text-cyan-200 transition-all duration-300"
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
            <div className="relative group rounded-2xl overflow-hidden glass border border-amethyst-500/30 p-2 shadow-2xl hover:border-cyan-400/40 transition-all duration-500">
              <div className="relative rounded-xl overflow-hidden h-64 sm:h-72">
                <img
                  src="/profile.jpg"
                  alt="Alfred Mathew"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jet-950 via-jet-950/20 to-transparent opacity-90" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl glass-light border border-amethyst-500/30 backdrop-blur-md">
                  <p className="text-white font-semibold text-sm">Alfred Mathew</p>
                  <p className="text-cyan-400 text-xs font-mono">Data Analyst Intern • CamerinFolks</p>
                </div>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <div
                  key={item.label}
                  className="glass rounded-xl p-4 text-center hover:bg-white/5 hover:scale-105 hover:border-cyan-400/35 transition-all duration-300 group"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-amethyst-600/20 flex items-center justify-center group-hover:bg-cyan-400/20 group-hover:shadow-[0_0_12px_rgba(0,240,255,0.25)] transition-all duration-300">
                    <item.icon size={18} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <p className="text-jet-400 text-[11px] font-medium mb-0.5">{item.label}</p>
                  <p className="text-white font-semibold text-xs sm:text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
