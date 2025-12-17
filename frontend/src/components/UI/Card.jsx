// src/components/UI/Card.jsx
const Card = ({
  children,
  variant = 'default',
  className = '',
  hoverEffect = true,
  padding = 'medium',
  shadow = 'premium',
  border = true,
  rounded = 'lg',
  ...props
}) => {
  const baseClasses = 'transition-all duration-500 ease-out relative overflow-hidden';

  const variants = {
    // Clean, modern white
    default: 'bg-white',
    // Frosted glass effect
    glass: 'bg-white/70 backdrop-blur-xl border-white/20',
    // Subtle contrast
    filled: 'bg-slate-50 border-slate-100',
    // High-contrast dark
    dark: 'bg-slate-900 text-white border-slate-800',
  };

  const paddings = {
    none: '',
    small: 'p-4',
    medium: 'p-6 md:p-8',
    large: 'p-8 md:p-12',
  };

  const shadows = {
    none: '',
    sm: 'shadow-sm',
    premium: 'shadow-premium', // Custom shadow defined in tailwind.config
    glow: 'shadow-glow-brand',
  };

  const borderRadius = {
    none: 'rounded-none',
    md: 'rounded-2xl',
    lg: 'rounded-[2rem]', // Extra rounded for that modern tech look
    xl: 'rounded-[2.5rem]',
  };

  const borderClasses = border
    ? 'border border-slate-100/80'
    : '';

  const hoverClasses = hoverEffect
    ? 'hover:shadow-premium-lg hover:-translate-y-2 hover:border-brand-200 group'
    : '';

  return (
    <div
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${paddings[padding]}
        ${shadows[shadow]}
        ${borderRadius[rounded]}
        ${borderClasses}
        ${hoverClasses}
        ${className}
      `}
      {...props}
    >
      {/* Subtle top-light reflection for glass/default variants */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '', padding = 'none' }) => (
  <div className={`mb-6 flex flex-col gap-1 ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({
  children,
  className = '',
  as: Component = 'h3',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'text-lg font-bold',
    md: 'text-xl md:text-2xl font-display font-bold',
    lg: 'text-2xl md:text-3xl font-display font-bold',
  };

  return (
    <Component className={`${sizeClasses[size]} tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors ${className}`}>
      {children}
    </Component>
  );
};

export const CardDescription = ({ children, className = '' }) => (
  <p className={`text-slate-500 text-sm md:text-base leading-relaxed ${className}`}>
    {children}
  </p>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={`relative z-10 ${className}`}>
    {children}
  </div>
);

export const CardFooter = ({
  children,
  className = '',
  align = 'left'
}) => {
  const alignClasses = {
    left: 'flex justify-start',
    center: 'flex justify-center',
    right: 'flex justify-end',
    between: 'flex justify-between items-center',
  };

  return (
    <div className={`
      mt-8 pt-6 border-t border-slate-50
      ${alignClasses[align]}
      ${className}
    `}>
      {children}
    </div>
  );
};

export const CardImage = ({
  src,
  alt,
  aspectRatio = 'video',
  overlay = false
}) => {
  const aspect = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[21/9]',
  };

  return (
    <div className={`-mx-8 -mt-8 mb-8 overflow-hidden relative ${aspect[aspectRatio]} group-hover:scale-[1.02] transition-transform duration-700`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </div>
  );
};

export default Card;