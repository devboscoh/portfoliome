// src/components/Sections/About.jsx
import SectionTitle from '../UI/SectionTitle';
import Card from '../UI/Card';
import { Target, User, Briefcase, Sparkles } from 'lucide-react';

const About = () => {
  const attributes = [
    { title: "Adaptable", description: "Thrives in dynamic environments" },
    { title: "Organized", description: "Systematic project management" },
    { title: "Technical", description: "Full-stack development expertise" },
    { title: "Leader", description: "Team & community management" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-brand-500/10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          subtitle="Bridging technology and environmental stewardship with a unique interdisciplinary approach"
          align="center"
          icon={<User className="text-brand-500" size={28} />}
          className="mb-16 animate-fade-in-up"
        />

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">

          {/* Career Objective - Using the premium card style */}
          <Card className="lg:col-span-2 card-modern p-8 group">
            <div className="flex items-start gap-6">
              <div className="p-3 bg-brand-50 rounded-xl text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                <Target size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Career Objective</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  An organized, motivated, and adaptable individual seeking to enhance my environment
                  while growing alongside all stakeholders. Looking for a dynamic setting that offers
                  opportunities for <span className="text-brand-600 font-semibold">real change</span> and professional advancement.
                </p>
              </div>
            </div>
          </Card>

          {/* Key Attributes - Using Glassmorphism */}
          <Card className="glass p-8 border-brand-100 shadow-premium">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={20} className="text-brand-500" />
              <h3 className="text-xl font-display font-bold text-slate-900">Key Attributes</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {attributes.map((attr, index) => (
                <div key={index} className="p-3 rounded-lg hover:bg-white/50 transition-colors border-b border-slate-100 last:border-0">
                  <h4 className="font-bold text-brand-700 text-sm uppercase tracking-wider mb-1">{attr.title}</h4>
                  <p className="text-slate-600 text-sm">{attr.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Current Focus - High contrast modern dark card */}
          <Card className="lg:col-span-3 bg-slate-950 text-white p-10 relative overflow-hidden group shadow-2xl">
            {/* Ambient glow effect inside card */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-500/20 blur-3xl rounded-full transition-all group-hover:bg-brand-500/40" />

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-glow-brand">
                <Briefcase size={32} className="text-brand-400" />
              </div>
              <div className="flex-1 w-full text-center md:text-left">
                <h3 className="text-2xl font-display font-bold mb-3 tracking-tight">Current Focus</h3>
                <p className="text-slate-400 mb-8 max-w-2xl text-lg">
                  Currently mastering <span className="text-white font-medium">MERN stack development</span> to bridge the gap
                  between complex data and environmental sustainability.
                </p>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-medium mb-1">
                    <span className="text-brand-400">Full-Stack Mastery</span>
                    <span className="text-white">75%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-3 p-0.5 overflow-hidden border border-slate-700">
                    <div
                      className="bg-brand-500 h-full rounded-full shadow-glow-brand transition-all duration-1000 ease-out"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;