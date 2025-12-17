// src/components/UI/Logo.jsx
const Logo = () => (
    <div className="flex items-center gap-3 group cursor-pointer">
        {/* The Icon: A combination of a Leaf (Environment) and a Data Node (GIS/Dev) */}
        <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-brand-500/20 rounded-lg rotate-6 group-hover:rotate-12 transition-transform" />
            <div className="absolute inset-0 bg-brand-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <circle cx="12" cy="11" r="3" fill="white" />
                </svg>
            </div>
        </div>

        {/* The Signature */}
        <div className="flex flex-col">
            <span className="font-['Dancing_Script'] text-2xl text-slate-900 leading-none">
                Bosc<span className="text-brand-600">Otieno</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mt-1">
                Professional Portfolio
            </span>
        </div>
    </div>
);