// src/components/Layout/Navbar.jsx
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'GIS Projects', href: '#gis-projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${scrolled
        ? 'bg-white/80 backdrop-blur-md py-3 shadow-premium border-b border-slate-100'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo Section */}
          <a href="#home" className="group flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white font-black shadow-glow-brand group-hover:scale-110 transition-transform">
              B
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-display font-bold text-slate-900 leading-none">
                Boscoh <span className="text-brand-600">Brilliant</span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                Environment|GIS|Web Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200/50 backdrop-blur-sm">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-5 py-2 text-sm font-bold text-slate-500 hover:text-brand-600 rounded-xl hover:bg-white transition-all duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-brand-600 hover:shadow-glow-brand transition-all flex items-center gap-2"
            >
              Hire Me <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-xl bg-slate-50 text-slate-600 hover:text-brand-600 hover:bg-brand-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`md:hidden absolute left-4 right-4 mt-4 transition-all duration-500 ease-out origin-top ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
            }`}
        >
          <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block p-4 text-slate-600 font-bold hover:text-brand-600 hover:bg-brand-50 rounded-2xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block p-4 bg-brand-600 text-white font-bold rounded-2xl text-center shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;