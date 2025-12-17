/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Modern tech vibe: Inter for body, Plus Jakarta for headers
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        display: ["Cal Sans", "Poppins", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      colors: {
        // Vibrant Deep Blue & Indigo mix
        brand: {
          50: "#f0f4ff",
          100: "#d9e2ff",
          200: "#bacaff",
          300: "#8ca7ff",
          400: "#5978ff",
          500: "#364df7", // Vibrant Primary
          600: "#212eea",
          700: "#1a23d4",
          800: "#1a1fb1",
          900: "#1b208d",
          950: "#101254",
        },
        // Using "Rose" instead of Scarlet for a cleaner modern look
        accent: {
          50: "#fff1f2",
          500: "#f43f5e",
          600: "#e11d48",
          DEFAULT: "#f43f5e",
        },
        // Deep Slate for professional backgrounds
        slate: {
          950: "#020617",
        },
      },

      boxShadow: {
        // "Soft UI" approach: lower opacity, larger blur
        'premium': '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
        'glow-brand': '0 0 20px -5px rgba(54, 77, 247, 0.4)',
        'glow-accent': '0 0 20px -5px rgba(244, 63, 94, 0.4)',
      },

      backgroundImage: {
        'mesh-gradient': "radial-gradient(at 0% 0%, rgba(54, 77, 247, 0.15) 0, transparent 50%), radial-gradient(at 100% 100%, rgba(244, 63, 94, 0.1) 0, transparent 50%)",
        'glass-gradient': "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))",
      },

      animation: {
        'subtle-float': 'float 6s ease-in-out infinite',
        'reveal': 'reveal 0.8s cubic-bezier(0.2, 1, 0.3, 1) forwards',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addUtilities }) {
      addUtilities({
        '.glass': {
          'background': 'rgba(255, 255, 255, 0.03)',
          'backdrop-filter': 'blur(12px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.text-gradient': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
          'background-image': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        },
      })
    }
  ],
}