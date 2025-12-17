// src/components/Sections/Skills.jsx
import { Code, Globe, Users, BarChart, Map, Layers, Database, Cloud, CheckCircle2 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Full Stack Development",
      icon: <Code className="w-6 h-6" />,
      skills: ["MERN Stack Mastery", "JavaScript/TypeScript", "TailwindCSS & Vite", "REST APIs & GraphQL", "Git & Version Control"],
      techStack: ["MongoDB", "Express", "React", "Node.js", "TypeScript"]
    },
    {
      title: "GIS & Geospatial Tech",
      icon: <Map className="w-6 h-6" />,
      skills: ["QGIS & ArcGIS Pro", "Geospatial Data Analysis", "Spatial DB Management", "Remote Sensing", "Mapbox & Leaflet"],
      techStack: ["QGIS", "ArcGIS Pro", "PostGIS", "Leaflet", "Mapbox"]
    },
    {
      title: "Environmental Management",
      icon: <Globe className="w-6 h-6" />,
      skills: ["Compliance & Monitoring", "Waste Systems Design", "Impact Assessments (EIA)", "Forestry Management", "Climate Adaptation"],
      techStack: ["Modeling", "Remote Sensing", "Reporting"]
    },
    {
      title: "Data Science & Tools",
      icon: <BarChart className="w-6 h-6" />,
      skills: ["Advanced Excel/VBA", "Data Visualization", "Statistical Analysis", "SQL Database Mgmt", "Report Automation"],
      techStack: ["Python", "R", "Tableau", "Power BI", "SQL"]
    }
  ];

  const technologyStack = [
    { name: "QGIS", category: "GIS", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
    { name: "ArcGIS", category: "GIS", style: "bg-blue-50 text-blue-700 border-blue-100" },
    { name: "React", category: "Frontend", style: "bg-cyan-50 text-cyan-700 border-cyan-100" },
    { name: "Node.js", category: "Backend", style: "bg-brand-50 text-brand-700 border-brand-100" },
    { name: "PostgreSQL", category: "Database", style: "bg-indigo-50 text-indigo-700 border-indigo-100" },
    { name: "Python", category: "Data", style: "bg-amber-50 text-amber-700 border-amber-100" },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-500/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Technical <span className="text-gradient from-brand-500 to-brand-700">Expertise</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Integrating geospatial technology and environmental science with modern full-stack engineering to build data-driven sustainability solutions.
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group card-modern p-8 bg-white hover:border-brand-300 transition-all"
            >
              <div className="flex items-center mb-8">
                <div className="p-4 bg-brand-50 text-brand-600 rounded-2xl group-hover:bg-brand-500 group-hover:text-white group-hover:shadow-glow-brand transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="ml-5 text-2xl font-display font-bold text-slate-900">{category.title}</h3>
              </div>

              <ul className="grid grid-cols-1 gap-4 mb-8">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-slate-600">
                    <CheckCircle2 size={18} className="text-brand-500 mr-3 flex-shrink-0" />
                    <span className="text-base font-medium">{skill}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
                {category.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-lg text-xs font-bold uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GIS Specialization Banner */}
        <div className="mt-20 glass border-brand-100 p-8 md:p-12 rounded-3xl shadow-premium relative overflow-hidden group">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-500/10 blur-3xl rounded-full" />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-100 text-brand-700 text-sm font-bold mb-6">
                <Map size={16} className="mr-2" /> GIS Specialization
              </div>
              <h3 className="text-3xl font-display font-bold text-slate-900 mb-6 leading-tight">
                Mapping the Future of Environmental Management
              </h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Expertise in QGIS and ArcGIS to provide spatial solutions for sustainable development, using data to drive ecological decisions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Advanced QGIS', 'Remote Sensing', 'PostGIS', 'Spatial Analysis'].map((item) => (
                  <div key={item} className="flex items-center bg-white/50 p-3 rounded-xl border border-white">
                    <div className="w-2 h-2 rounded-full bg-brand-500 mr-3" />
                    <span className="font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 shadow-2xl relative">
              <h4 className="text-white font-display font-bold mb-6 flex items-center">
                <Layers className="text-brand-400 mr-3" size={20} /> Application Focus
              </h4>
              <div className="space-y-4">
                {[
                  { label: "Environmental Impact Assessment", val: 95 },
                  { label: "Resource Inventory Management", val: 88 },
                  { label: "Waste Management Planning", val: 82 }
                ].map(stat => (
                  <div key={stat.label}>
                    <div className="flex justify-between text-xs text-slate-400 mb-2 uppercase font-bold tracking-widest">
                      <span>{stat.label}</span>
                      <span>{stat.val}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-500 shadow-glow-brand" style={{ width: `${stat.val}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack Grid */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-display font-bold text-slate-900">Tech Stack Directory</h3>
            <div className="w-20 h-1 bg-brand-500 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologyStack.map((tech, index) => (
              <div key={index} className={`border rounded-2xl p-6 text-center transition-all hover:shadow-premium hover:-translate-y-1 ${tech.style} border-transparent`}>
                <div className="text-xs font-bold uppercase tracking-tighter opacity-60 mb-2">{tech.category}</div>
                <div className="text-lg font-bold">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;