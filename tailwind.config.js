/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          base:    '#05080c',
          accent:  '#4f8eff',
          purple:  '#7c5cfc',
          teal:    '#00d4aa',
          card:    'rgba(255,255,255,0.04)',
          border:  'rgba(255,255,255,0.08)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body:    ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      animation: {
        'orb-1':     'orbFloat1 18s ease-in-out infinite',
        'orb-2':     'orbFloat2 22s ease-in-out infinite',
        'orb-3':     'orbFloat3 26s ease-in-out infinite',
        'orb-4':     'orbFloat4 20s ease-in-out infinite',
        'fade-up':   'fadeUp 0.6s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        orbFloat1: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%':      { transform: 'translate(60px, -80px) scale(1.08)' },
          '66%':      { transform: 'translate(-40px, 40px) scale(0.95)' },
        },
        orbFloat2: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '40%':      { transform: 'translate(-70px, 60px) scale(1.1)' },
          '70%':      { transform: 'translate(50px, -30px) scale(0.92)' },
        },
        orbFloat3: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '35%':      { transform: 'translate(40px, 70px) scale(1.05)' },
          '65%':      { transform: 'translate(-60px, -50px) scale(0.97)' },
        },
        orbFloat4: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%':      { transform: 'translate(-50px, -60px) scale(1.12)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
