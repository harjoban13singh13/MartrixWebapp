/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#7C3AED',
          pink:   '#EC4899',
          cyan:   '#06B6D4',
          lime:   '#84CC16',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #7C3AED 0%, #EC4899 50%, #06B6D4 100%)',
      },
      animation: {
        blob:          'blob 7s infinite',
        'blob-delay':  'blob 7s infinite 2s',
        'blob-delay2': 'blob 7s infinite 4s',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%':      { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%':      { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
