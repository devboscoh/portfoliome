// src/components/Sections/GISProjects.jsx
import { useState } from 'react';
import { Map, Layers, Database, Globe, Download, ExternalLink, Eye, X, Filter } from 'lucide-react';

const GISProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Environmental', 'Urban Planning', 'Web Development', 'Research'];

  const gisProjects = [
    {
      id: 1,
      title: "Community Forest Resource Mapping",
      description: "QGIS-based mapping of community forest resources with detailed species inventory and boundary demarcation.",
      tools: ["QGIS", "PostGIS", "Field Survey"],
      category: "Environmental",
      year: "2023",
      deliverables: ["Interactive web map", "GIS database", "Resource inventory report"],
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Waste Management Zone Planning",
      description: "Spatial analysis for optimal waste collection routes and disposal site planning in urban areas.",
      tools: ["QGIS", "Network Analysis", "Python"],
      category: "Urban Planning",
      year: "2023",
      deliverables: ["Route optimization maps", "Zone planning shapefiles"],
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      title: "Web GIS Application for Resources",
      description: "Interactive application integrating QGIS data with React/Leaflet for real-time monitoring.",
      tools: ["React", "Leaflet", "PostGIS", "Node.js"],
      category: "Web Development",
      year: "2024",
      deliverables: ["Live web application", "Real-time data dashboard"],
      image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800"
    }
    // ... add others as needed
  ];

  const filteredProjects = activeFilter === 'All'
    ? gisProjects
    : gisProjects.filter(p => p.category === activeFilter);

  const gisTools = [
    { name: "QGIS", level: "95%", color: "text-emerald-500", bg: "bg-emerald-500" },
    { name: "PostGIS", level: "80%", color: "text-blue-500", bg: "bg-blue-500" },
    { name: "Leaflet", level: "90%", color: "text-brand-500", bg: "bg-brand-500" },
    { name: "Python", level: "75%", color: "text-yellow-500", bg: "bg-yellow-500" },
  ];

  return (
    <section id="gis-projects" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
              Geospatial <span className="text-brand-500">Intelligence</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Transforming complex spatial data into actionable insights for environmental and urban challenges.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${activeFilter === cat
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-200'
                    : 'bg-white text-slate-500 border border-slate-200 hover:border-brand-500 hover:text-brand-600'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:border-brand-200 transition-all duration-500 hover:shadow-premium"
            >
              {/* Image Preview */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-3 bg-white text-slate-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-500 hover:text-white transition-colors"
                  >
                    <Eye size={18} /> View Case Study
                  </button>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-bold uppercase tracking-widest text-slate-900 shadow-sm">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <span className="text-xs font-black text-slate-300 ml-4">{project.year}</span>
                </div>
                <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tools.slice(0, 3).map((tool, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold rounded-lg border border-slate-100">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-50 flex items-center justify-between text-brand-600 font-bold text-sm">
                  <span className="flex items-center gap-2">
                    <Layers size={16} /> {project.deliverables.length} Deliverables
                  </span>
                  <Download size={18} className="text-slate-300 hover:text-brand-500 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Mastery (Tools Progress) */}
        <div className="mt-24 bg-white rounded-[3rem] p-10 md:p-16 shadow-premium border border-slate-100">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-display font-bold text-slate-900 mb-6">Technical Mastery</h3>
              <p className="text-slate-500 mb-10 leading-relaxed">
                My workflow integrates professional-grade GIS software with modern programming environments to create high-precision spatial solutions.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {gisTools.map((tool, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex justify-between text-sm font-bold text-slate-900 uppercase tracking-widest">
                      <span>{tool.name}</span>
                      <span className={tool.color}>{tool.level}</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${tool.bg} rounded-full transition-all duration-1000`}
                        style={{ width: tool.level }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Callout */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-500 to-emerald-500 rounded-[2rem] opacity-10 blur-2xl group-hover:opacity-20 transition-opacity" />
              <div className="relative bg-slate-950 rounded-[2rem] p-8 text-white overflow-hidden aspect-video flex flex-col justify-center">
                <div className="absolute top-0 right-0 p-8 opacity-20"><Globe size={120} /></div>
                <h4 className="text-2xl font-display font-bold mb-4">Need Spatial Analysis?</h4>
                <p className="text-slate-400 mb-8 max-w-xs text-sm">From resource mapping to web-based dashboards, let's visualize your data geographically.</p>
                <a href="#contact" className="w-fit px-6 py-3 bg-brand-500 text-white font-bold rounded-xl hover:bg-brand-400 transition-colors flex items-center gap-2">
                  Request Consultation <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" onClick={() => setSelectedProject(null)} />
          <div className="relative bg-white w-full max-w-5xl max-h-full rounded-[2.5rem] overflow-hidden shadow-2xl animate-reveal">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-3 bg-slate-100 hover:bg-red-50 hover:text-red-500 rounded-full z-10 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 bg-slate-100">
                <img src={selectedProject.image} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <span className="text-xs font-black uppercase tracking-widest text-brand-500">{selectedProject.category}</span>
                <h3 className="text-3xl font-display font-bold text-slate-900 mt-2 mb-6">{selectedProject.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">{selectedProject.description}</p>

                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Tech Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map(t => <span key={t} className="px-3 py-1 bg-slate-50 border border-slate-100 text-slate-900 text-[10px] font-bold rounded-lg uppercase">{t}</span>)}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Year</h4>
                    <span className="text-slate-900 font-bold">{selectedProject.year}</span>
                  </div>
                </div>

                <div className="mb-10">
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Core Deliverables</h4>
                  <ul className="space-y-3">
                    {selectedProject.deliverables.map((d, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                        <div className="w-1.5 h-1.5 bg-brand-500 rounded-full" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                    <Download size={18} /> Full Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GISProjects;