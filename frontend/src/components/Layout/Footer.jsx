import { Github, Linkedin, Mail, ArrowUp, Globe, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'GIS Projects', href: '#gis-projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 pt-24 pb-12 text-slate-400">
      {/* subtle radial glow to add depth */}
      <div className="absolute top-0 left-1/2 -z-10 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 pb-20 md:grid-cols-12 lg:gap-24">
          
          {/* Brand Identity Section */}
          <div className="md:col-span-5 lg:col-span-6">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-[11px] font-medium tracking-wide text-emerald-400 uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Available for new GIS opportunities
            </div>
            
            <h3 className="mb-6 text-3xl font-bold tracking-tight text-white">
              Boscoh <span className="text-brand-500">Brilliant</span>
            </h3>
            <p className="mb-8 max-w-md text-lg leading-relaxed">
              Bridging the gap between <span className="text-slate-200">geospatial data</span> and 
              <span className="text-slate-200"> sustainable software solutions</span>. 
              Engineering tools for a better-mapped world.
            </p>
            
            <div className="flex items-center gap-3">
              {[
                { icon: <Mail size={18} />, href: 'mailto:boscobrilli8@gmail.com', label: 'Email' },
                { icon: <Github size={18} />, href: 'https://github.com/Boscoh722', label: 'GitHub' },
                { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 text-slate-400 ring-brand-500/40 transition-all hover:-translate-y-1 hover:border-brand-500/50 hover:text-white hover:ring-4"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Structured Links */}
          <div className="grid grid-cols-2 gap-8 md:col-span-7 lg:col-span-6">
            <div>
              <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">Sitemap</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="group flex items-center text-sm transition-colors hover:text-brand-500"
                    >
                      <span>{link.name}</span>
                      <ExternalLink size={12} className="ml-1.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">Global Presence</h4>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Nairobi, Kenya</p>
                    <p className="text-[11px] text-slate-500">UTC +3 (EAT)</p>
                  </div>
                </div>
                <a 
                  href="tel:+254715640443" 
                  className="text-sm font-medium text-slate-300 transition-colors hover:text-brand-500"
                >
                  +254 715 640 443
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between border-t border-slate-900 pt-10 md:flex-row">
          <p className="mb-6 text-xs text-slate-500 md:mb-0">
            © {currentYear} Boscoh Brilliant. Built with <span className="text-white">React & Tailwind</span>.
          </p>
          
          <div className="flex items-center gap-8">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-white"
            >
              Back to top
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 transition-all group-hover:-translate-y-1 group-hover:border-brand-500 group-hover:bg-brand-500/10">
                <ArrowUp size={14} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;