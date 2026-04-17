/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Tiscali Station palette — estratta dagli screenshot
        tiscali: {
          50:  '#f0eef9',
          100: '#d9d4f0',
          200: '#b8b0e3',
          300: '#9489d4',
          400: '#7a6dc8',
          500: '#5f52bc',
          600: '#4A3F8E',   // nav bar / logo circle
          700: '#3d3478',
          800: '#2e2660',
          900: '#1e1940',
        },
        // Giallo Station — bottoni CTA
        station: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#F5A623',   // bottone ENTRA giallo
          600: '#d97706',
          700: '#b45309',
        },
      },
      fontFamily: {
        sans:      ['Barlow', 'system-ui', 'sans-serif'],
        condensed: ['Barlow Condensed', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-orange-500', 'bg-blue-500', 'bg-green-500', 'bg-gray-400',
    'bg-orange-50',  'bg-blue-50',  'bg-green-50',
    'border-l-4',
    'border-l-orange-400', 'border-l-blue-400', 'border-l-green-400',
    'hover:bg-orange-50',  'hover:bg-blue-50',  'hover:bg-green-50',
  ],
}
