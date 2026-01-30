// src/components/Sections/Hero.jsx
import { useState } from "react";
import { ChevronRight, Mail, MapPin, Phone, Download, Map, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const [photoLoaded, setPhotoLoaded] = useState(false);

  const contactInfo = [
    { icon: <Mail size={18} />, text: "dev.boscoh@gmail.com", href: "mailto:dev.boscoh@gmail.com" },
    { icon: <Phone size={18} />, text: "+254 715 640 443", href: "tel:+254715640443" },
    { icon: <MapPin size={18} />, text: "Nairobi, Kenya", href: "#" }
  ];

  const stats = [
    { value: "8+", label: "Years Exp" },
    { value: "10+", label: "GIS Projects" },
    { value: "MERN", label: "Stack" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full translate-y-1/4 -translate-x-1/4" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Column - Content (Span 7) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="space-y-2 mb-6 animate-reveal">
              <span className="inline-block px-4 py-1.5 bg-brand-50 text-brand-600 text-xs font-bold uppercase tracking-[0.2em] rounded-full">
                Available for new opportunities
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1]">
                Boscoh <span className="text-brand-500">Brilliant</span>
                <span className="block text-slate-400 font-light">Otieno Odoyo</span>
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-8 animate-reveal" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl md:text-2xl text-slate-600 font-medium">
                Environmentalist | GIS Specialist | Full Stack Developer
              </p>
            </div>

            <p className="text-slate-500 text-lg max-w-xl mb-10 leading-relaxed animate-reveal" style={{ animationDelay: '0.3s' }}>
              Bridging environmental stewardship with modern technology. Expert in
              <span className="text-slate-900 font-semibold"> QGIS Analysis</span> and
              <span className="text-slate-900 font-semibold"> MERN Stack</span> development.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap gap-4 mb-12 animate-reveal" style={{ animationDelay: '0.4s' }}>
              <a href="#contact" className="btn-vibrant px-8 py-4 flex items-center gap-2 group">
                Work With Me
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#projects" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:border-brand-500 hover:text-brand-600 transition-all flex items-center gap-2 shadow-sm">
                <Map size={20} />
                View GIS Projects
              </a>
              <button className="p-4 text-slate-400 hover:text-brand-600 transition-colors">
                <Download size={24} />
              </button>
            </div>

            {/* Quick Contact & Socials */}
            <div className="flex flex-col md:flex-row md:items-center gap-8 pt-8 border-t border-slate-100 animate-reveal" style={{ animationDelay: '0.5s' }}>
              <div className="flex gap-4">
                {contactInfo.map((info, i) => (
                  <a key={i} href={info.href} title={info.text} className="p-3 bg-slate-50 text-slate-500 rounded-xl hover:bg-brand-50 hover:text-brand-600 transition-all">
                    {info.icon}
                  </a>
                ))}
              </div>
              <div className="h-8 w-[1px] bg-slate-200 hidden md:block" />
              <div className="flex gap-6">
                <a href="#" className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest">
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a href="#" className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest">
                  <Github size={18} /> Github
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Image & Floating Stats (Span 5) */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div className="relative z-10 w-full aspect-square md:aspect-[4/5] max-w-md mx-auto">
              {/* Photo Frame */}
              <div className={`relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02] ${photoLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <img
                  src="/profile-photo.jpg"
                  alt="Boscoh Brilliant"
                  className="w-full h-full object-cover"
                  onLoad={() => setPhotoLoaded(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>

              {/* Skeleton */}
              {!photoLoaded && (
                <div className="absolute inset-0 bg-slate-100 rounded-[2rem] animate-pulse" />
              )}

              {/* Floating Glass Stats */}
              <div className="absolute -right-6 top-1/4 glass p-6 rounded-3xl shadow-glow-brand animate-subtle-float hidden md:block">
                <div className="space-y-6">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-brand-600">{stat.value}</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -left-8 bottom-12 glass p-4 rounded-2xl flex items-center gap-3 animate-reveal shadow-premium" style={{ animationDelay: '0.6s' }}>
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Current Role</p>
                  <p className="text-sm font-bold text-slate-900">Environment Officer</p>
                </div>
              </div>
            </div>

            {/* Background Blob behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-500/5 rounded-full blur-[80px] -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;