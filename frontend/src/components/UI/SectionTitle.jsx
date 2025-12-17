// src/components/UI/SectionTitle.jsx
const SectionTitle = ({
  title,
  subtitle,
  align = 'left',
  icon,
  className = '',
  accent = true
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  const accentClasses = {
    left: 'left-0',
    center: 'left-1/2 -translate-x-1/2',
    right: 'right-0',
  };

  return (
    <div className={`flex flex-col mb-12 md:mb-16 ${alignmentClasses[align]} ${className}`}>
      {/* Icon Wrapper with Glass Effect */}
      {icon && (
        <div className="relative mb-6 group">
          <div className="absolute inset-0 bg-brand-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
          <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-premium text-brand-600">
            {icon}
          </div>
        </div>
      )}

      {/* Title with optional Accent Line */}
      <div className="relative pb-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
          {title}
        </h2>
        {accent && (
          <div className={`absolute bottom-0 h-1.5 w-12 bg-brand-500 rounded-full ${accentClasses[align]}`} />
        )}
      </div>

      {/* Subtitle with refined line-height */}
      {subtitle && (
        <p className={`mt-6 text-slate-500 text-lg leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;