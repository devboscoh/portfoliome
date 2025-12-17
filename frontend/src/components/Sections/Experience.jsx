// src/components/Sections/Experience.jsx
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Ward Environment Officer",
      company: "Nairobi City County",
      period: "September 2023 - Present",
      location: "Nairobi, Kenya",
      responsibilities: [
        "Manage day-to-day environmental activities & waste collection",
        "Conduct environmental monitoring, compliance, and enforcement",
        "Organize cleanups and community sensitization on waste systems",
        "Assist in environmental policy formulation at the ward level"
      ],
      tags: ["Environmental Management", "Policy Implementation", "Compliance"]
    },
    {
      title: "GIS and Forestry Specialist Intern",
      company: "Comply Industries",
      period: "June 2015 - December 2015",
      location: "Nairobi, Kenya",
      responsibilities: [
        "Assisted in geospatial data collection and spatial mapping",
        "Participated in forestry inventory mapping using QGIS",
        "Maintained spatial databases for resource management"
      ],
      tags: ["QGIS", "Geospatial Analysis", "Field Surveys"]
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-brand-500/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="flex items-center">
            <div className="p-4 bg-brand-500 text-white rounded-2xl shadow-glow-brand animate-subtle-float">
              <Briefcase size={32} />
            </div>
            <div className="ml-6">
              <h2 className="text-4xl font-display font-bold text-slate-900 tracking-tight">Work Experience</h2>
              <p className="text-brand-600 font-medium mt-1 uppercase tracking-widest text-xs">
                Professional Journey & Impact
              </p>
            </div>
          </div>
          <p className="text-slate-500 max-w-md text-sm md:text-right leading-relaxed">
            Bridging the gap between environmental stewardship and technological innovation through impactful roles.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Enhanced Vertical timeline line with gradient */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-1 bg-gradient-to-b from-brand-500 via-brand-200 to-transparent rounded-full opacity-30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative md:pl-20 animate-reveal"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot for desktop */}
                <div className="hidden md:block absolute left-6 top-8 w-5 h-5 rounded-full border-4 border-white bg-brand-500 shadow-glow-brand z-10"></div>

                <div className="card-modern bg-white p-8 group hover:border-brand-200">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                          {exp.title}
                        </h3>
                        <span className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full border border-brand-100">
                          {exp.company}
                        </span>
                      </div>

                      {/* Responsibilities */}
                      <ul className="mt-6 space-y-4">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start group/item">
                            <div className="mt-1.5 mr-3 p-1 bg-brand-50 rounded-full group-hover/item:bg-brand-500 transition-colors">
                              <ChevronRight size={12} className="text-brand-600 group-hover/item:text-white" />
                            </div>
                            <span className="text-slate-600 text-base leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-50">
                        {exp.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-slate-50 text-slate-500 rounded-lg text-xs font-bold uppercase tracking-wider group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metadata Box */}
                    <div className="flex flex-row lg:flex-col items-center lg:items-end gap-4 text-slate-500 shrink-0 border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-100">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg">
                        <Calendar className="w-4 h-4 text-brand-500" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg">
                        <MapPin className="w-4 h-4 text-brand-500" />
                        <span className="text-sm font-medium">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Status - Interactive Glow Box */}
        <div className="mt-20 relative group">
          <div className="absolute inset-0 bg-brand-600 rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
          <div className="relative bg-slate-950 text-white rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Briefcase size={120} className="rotate-12" />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-display font-bold mb-4 tracking-tight">The Next Chapter</h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                  I am currently seeking opportunities to merge my <span className="text-brand-400 font-semibold">environmental expertise</span> with
                  <span className="text-white font-semibold"> full-stack engineering</span>. If you're building tech for sustainability,
                  resource management, or GIS, let's talk.
                </p>
              </div>
              <button className="btn-vibrant whitespace-nowrap px-10 py-4 text-lg">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;