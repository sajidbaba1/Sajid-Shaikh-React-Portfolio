/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'jungle': "url('/assets/jungle-bg.jpg')",
      },
      colors: {
        glass: 'rgba(255, 255, 255, 0.1)',
      },
      backdropFilter: {
        none: 'none',
        xs: 'blur(2px)',
      },
    },
  },
  corePlugins: {
    backdropFilter: true, // Enable backdrop-filter utilities
  },
  plugins: [],
};