/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tg-bg': '#17212b',
        'tg-secondary': '#242f3d',
        'tg-text': '#ffffff',
        'tg-hint': '#708499',
        'tg-button': '#5288c1',
        'tg-button-text': '#ffffff',
        'tg-accent': '#64b5ef',
      },
      animation: {
        'bounce-subtle': 'bounce-subtle 0.3s ease-in-out',
        'fade-in': 'fade-in 0.3s ease-out',
      },
      keyframes: {
        'bounce-subtle': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
