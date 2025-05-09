/** @type {import('tailwindcss').Config} */
import autoprefixer from 'autoprefixer';

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    autoprefixer,
  ],
}
