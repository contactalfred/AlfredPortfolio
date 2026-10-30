import { ExternalLink, BarChart3, FileSpreadsheet } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    title: 'Starbucks Nutrition Insights',
    tools: ['Power BI', 'DAX', 'Data Modeling'],
    icon: BarChart3,
    image: '/starbucks_dashboard.jpg',
    accent: 'from-amber-800 via-amber-500 to-amber-300',
    description:
      'Interactive Power BI dashboard analyzing 240+ Starbucks beverages across calories, protein, sugar, fat, and caffeine. Features KPI cards, slicers, treemaps, and scatter plots to uncover nutritional patterns and comparisons across beverage categories.',
  },
  {
    title: 'Logistics & Transportation Management',
    tools: ['Excel', 'PivotTables', 'Charts', 'Slicers'],
    icon: FileSpreadsheet,
    image: '/logistics_dashboard.jpg',
    accent: 'from-amber-600 via-amber-400 to-amber-100',
    description:
      '2022 transportation performance dashboard tracking total trips, weight shipped, transportation costs, and vehicle usage distribution. Built using PivotTables, bar/line/pie charts, and slicers for interactive filtering and analysis.',
  },
];

function ProjectCard({ project, index, visible }) {
  return (
    <div
      className={`group transition-all duration-700 ${
        visible
          ? 'opacity-100 translate-y-0'
          : `opacity-0 translate-y-12`
      }`}
      style={{ transitionDelay: visible ? `${index * 200}ms` : '0ms' }}
    >
      <div className="glass rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-obsidian-950/80 hover:border-amber-300/40 transition-all duration-500">
        {/* Image */}
        <div className="relative overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-25 z-10`} />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 sm:h-64 object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/50 to-transparent z-20" />

          {/* Tool icon */}
          <div className="absolute top-4 right-4 z-30">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.accent} flex items-center justify-center text-obsidian-950 font-bold shadow-lg shadow-obsidian-950/60`}>
              <project.icon size={18} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 -mt-8 relative z-30">
          <h3 className="text-xl sm:text-2xl font-bold text-amber-50 mb-3 group-hover:text-amber-300 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-obsidian-200 text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Tools */}
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 rounded-full text-xs font-mono font-medium text-amber-50 bg-amber-900/50 border border-amber-500/35"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="projects" className="relative bg-obsidian-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-amber-800/15 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px]" />

      <div className="section-padding max-w-6xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-amber-300 font-mono text-sm tracking-wider uppercase">
            — Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-50 mt-3">
            Projects
          </h2>
          <p className="text-obsidian-300 mt-4 max-w-lg mx-auto">
            Real-world dashboards and data solutions that showcase my analytical thinking.
          </p>
        </div>

        {/* Project Cards */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              visible={gridVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
