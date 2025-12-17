// src/components/Sections/Education.jsx
import { GraduationCap, Calendar, BookOpen, CheckCircle2, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "PLP Africa Academy",
      degree: "Software Engineering (MERN Stack)",
      period: "July 2025 - December 2025",
      status: "Currently Enrolled",
      icon: <BookOpen className="w-6 h-6" />,
      highlights: [
        "Full Stack Web Development Specialization",
        "Modern JavaScript Frameworks (React/Node.js)",
        "Database Design & Management",
        "Agile Development Practices"
      ]
    },
    {
      institution: "Egerton University",
      degree: "B.Sc. Integrated Forest Resources Management",
      period: "2012 - 2015",
      status: "Completed",
      icon: <GraduationCap className="w-6 h-6" />,
      highlights: [
        "Environmental Resource Management",
        "Forestry Conservation Techniques",
        "Sustainable Development Practices",
        "Ecosystem and Watershed Management"
      ]
    },
  ];

  return (
    <section id="education" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-500/5 blur-[100px] rounded-full -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Education & <span className="text-brand-500">Training</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            A unique blend of environmental science foundations and high-level software engineering expertise.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Professional Timeline Line */}
            <div className="absolute left-8 md:left-1/2 h-full w-1 bg-slate-100 transform md:-translate-x-1/2 rounded-full overflow-hidden">
              <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-brand-500 to-transparent" />
            </div>

            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative mb-16 last:mb-0 md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Timeline dot with Pulse for Current */}
                <div className="absolute left-6 md:left-1/2 w-5 h-5 bg-white border-4 border-brand-500 rounded-full z-10 transform md:-translate-x-1/2 shadow-glow-brand">
                  {index === 0 && <span className="absolute inset-0 rounded-full bg-brand-500 animate-ping opacity-75"></span>}
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:pl-0' : 'md:pr-0'}`}>
                  <div className="card-modern group p-8 bg-white hover:border-brand-300 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-brand-50 text-brand-600 rounded-xl group-hover:bg-brand-500 group-hover:text-white transition-all">
                        {edu.icon}
                      </div>
                      <div>
                        <span className="text-brand-600 text-xs font-bold uppercase tracking-widest">{edu.period}</span>
                        <h3 className="text-2xl font-display font-bold text-slate-900 leading-tight mt-1">{edu.institution}</h3>
                      </div>
                    </div>

                    <p className="text-slate-700 font-semibold mb-6 text-lg">{edu.degree}</p>

                    <ul className="space-y-3 mb-6">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-slate-600">
                          <CheckCircle2 size={16} className="text-brand-400 mr-3 shrink-0" />
                          <span className="text-sm font-medium">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {index === 0 && (
                      <div className="inline-flex items-center px-4 py-1.5 bg-slate-950 text-white text-xs font-bold rounded-full shadow-lg">
                        <span className="w-2 h-2 bg-brand-400 rounded-full mr-2 animate-pulse" />
                        Currently Enrolled
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Philosophy Section - Modern Dark Card */}
          <div className="mt-24 relative">
            <div className="absolute inset-0 bg-brand-500/10 blur-3xl -z-10 rounded-full" />
            <div className="bg-slate-950 text-white rounded-3xl p-10 md:p-12 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <Award className="text-brand-400" size={28} />
                <h3 className="text-2xl font-display font-bold">Continuous Learning Philosophy</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: <GraduationCap />, title: "Formal Foundation", desc: "Rigorous academic training in ecosystem monitoring and management." },
                  { icon: <BookOpen />, title: "Technical Specialization", desc: "Focused expertise in MERN stack and modern software architecture." },
                  { icon: <Calendar />, title: "Agile Growth", desc: "Constant skill updates to match the evolving tech-environmental landscape." }
                ].map((item, i) => (
                  <div key={i} className="space-y-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                    <div className="text-brand-400">{item.icon}</div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications - Modern Pill Tags */}
          <div className="mt-20">
            <h3 className="text-xl font-display font-bold text-slate-900 mb-8 flex items-center">
              <span className="w-8 h-1 bg-brand-500 rounded-full mr-3" />
              Additional Certifications
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Environmental Impact Assessment", "QGIS Advanced Training",
                "Remote Sensing", "JavaScript Mastery", "React.js Expert", "Node.js Architecture"
              ].map((cert, index) => (
                <span
                  key={index}
                  className="px-5 py-2.5 bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-100 hover:border-brand-200 hover:bg-white hover:shadow-premium transition-all cursor-default"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;