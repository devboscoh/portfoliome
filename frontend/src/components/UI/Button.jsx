// src/components/UI/Button.jsx
import { forwardRef } from 'react';

const Button = forwardRef(function Button({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  loading = false,
  disabled = false,
  ...props
}, ref) {
  // Base classes with a focus on squircle shapes and high-end micro-interactions
  const baseClasses = 'inline-flex items-center justify-center font-bold tracking-tight transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95';

  const variants = {
    // Brand Gradient - For main CTAs
    vibrant: 'bg-gradient-to-tr from-brand-600 to-brand-400 text-white shadow-glow-brand hover:shadow-glow-brand-lg hover:-translate-y-0.5 focus:ring-brand-500 border-none',

    // Deep Slate - For professional/secondary CTAs
    primary: 'bg-slate-900 text-white hover:bg-slate-800 shadow-premium hover:shadow-premium-lg focus:ring-slate-500',

    // Glassmorphic Outline
    outline: 'bg-white/50 backdrop-blur-sm text-slate-900 border border-slate-200 hover:border-brand-500 hover:text-brand-600 hover:bg-white focus:ring-brand-500',

    // Subtle Ghost
    ghost: 'bg-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:ring-slate-200',

    // Feedback variants
    danger: 'bg-rose-50 text-rose-600 border border-rose-100 hover:bg-rose-600 hover:text-white focus:ring-rose-500',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-100 hover:bg-emerald-600 hover:text-white focus:ring-emerald-500',
  };

  const sizes = {
    small: 'px-4 py-2 text-xs rounded-xl gap-1.5',
    medium: 'px-6 py-3 text-sm rounded-2xl gap-2',
    large: 'px-8 py-4 text-base rounded-[1.25rem] gap-3',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const isDisabled = disabled || loading;

  return (
    <button
      ref={ref}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      disabled={isDisabled}
      {...props}
    >
      {/* Loading Spinner */}
      {loading && (
        <svg
          className={`animate-spin h-4 w-4 text-current ${iconPosition === 'right' ? 'order-last' : 'order-first'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}

      {/* Icon */}
      {icon && !loading && (
        <span className={`flex-shrink-0 transition-transform group-hover:translate-x-0.5 ${iconPosition === 'right' ? 'order-last' : 'order-first'}`}>
          {icon}
        </span>
      )}

      {/* Button Text */}
      <span className="relative">
        {children}
      </span>
    </button>
  );
});

export default Button;