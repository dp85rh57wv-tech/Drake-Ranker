/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        drake: {
          50: '#f0f4ff',
          500: '#3d5afe',
          900: '#0d1b6d',
        },
      },
    },
  },
  plugins: [],
}
