/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'legno': '#4A3728',
        'abete': '#2D5A3D',
        'crema': '#FAF8F5',
        'mattone': '#8B4513',
        'miele': '#D4A66A',
        'pietra': '#6B6B6B',
        'scuro': '#1a1a1a',
      },
      fontFamily: {
        'serif': ['Merriweather', 'Georgia', 'serif'],
        'sans': ['Nunito', 'Open Sans', 'sans-serif'],
      },
      borderRadius: {
        'card': '1.5rem',
      },
    },
  },
  plugins: [],
}
