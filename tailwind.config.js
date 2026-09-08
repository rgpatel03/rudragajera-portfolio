/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050505',
          900: '#0a0a0b',
          850: '#0e0e10',
          800: '#131316',
          700: '#1a1a1f',
          600: '#232329',
          500: '#2e2e36',
        },
        lime: {
          DEFAULT: '#d4ff3a',
          50: '#f7ffd9',
          100: '#eeffb3',
          200: '#e2ff8a',
          300: '#d4ff3a',
          400: '#bdf01f',
          500: '#9fd400',
          600: '#7da600',
        },
        purple: {
          glow: '#7c5cff',
        },
        blue: {
          glow: '#3a7dff',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        wide2: '0.08em',
        widest2: '0.2em',
      },
      boxShadow: {
        glow: '0 0 40px rgba(212,255,58,0.18)',
        'glow-lg': '0 0 80px rgba(212,255,58,0.22)',
        purple: '0 0 60px rgba(124,92,255,0.25)',
        card: '0 20px 60px rgba(0,0,0,0.5)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 24s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
