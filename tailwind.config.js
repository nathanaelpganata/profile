const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', fontFamily.sans],
        secondary: ['Inter', fontFamily.sans],
      },
      colors: {
        ruby: '#fd1f4a',
        coal: {
          100: '#3b3f46',
          200: '#2a2e34',
          300: '#1e2328',
        },
        creme: '#faf5e6',
      },
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
  ],
};
