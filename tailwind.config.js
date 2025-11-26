/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#10B981',
          500: '#10B981',
        },
        slate: {
          DEFAULT: '#1E293B',
          900: '#0f172a',
        },
        cream: {
            DEFAULT: '#F9FAFB'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
