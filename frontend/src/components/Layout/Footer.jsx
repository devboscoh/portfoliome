// src/components/Layout/Footer.jsx
import { Github, Linkedin, Mail, ArrowUp, Globe, Heart } from 'lucide-react';

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

  const socialLinks = [
    { icon: <Mail size={20} />, label: 'Email', href: 'mailto:boscobrilli8@gmail.com' },
    { icon: <Github size={20} />, label: 'GitHub', href: 'https://github.com/Boscoh722' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: '#' }, // Add your LinkedIn
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 overflow-hidden relative">
      {/* Decorative Gradient Flare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">

          {/* Brand/About (Span 5) */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-2xl font-display font-bold text-white tracking-tight">
              Boscoh <span className="text-brand-500">Brilliant</span>
            </h3>
            <p className="max-w-sm leading-relaxed text-slate-400">
              Specializing in the intersection of environmental management and
              software engineering to build tools that visualize and protect our world.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-500 hover:bg-brand-500/10 transition-all duration-300"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (Span 3) */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-black uppercase tracking-widest text-white mb-6">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-brand-500 transition-colors flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-brand-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Span 4) */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-black uppercase tracking-widest text-white mb-6">Location</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-slate-900 rounded-lg text-brand-500"><Globe size={18} /></div>
                <div>
                  <p className="text-white font-semibold">Nairobi, Kenya</p>
                  <p className="text-xs">Available for remote GIS consulting worldwide.</p>
                </div>
              </div>
              <a href="tel:+254715640443" className="block p-4 bg-slate-900 border border-slate-800 rounded-2xl hover:border-brand-500 transition-colors">
                <p className="text-xs font-bold uppercase text-slate-500 mb-1">Direct Line</p>
                <p className="text-white font-mono">+254 715 640 443</p>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-slate-900" />

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm flex items-center gap-1.5">
            © {currentYear} Boscoh Brilliant. Made with <Heart size={14} className="text-red-500 fill-red-500" /> in Nairobi.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white hover:text-brand-500 transition-colors"
          >
            Back to top
            <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <ArrowUp size={18} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;