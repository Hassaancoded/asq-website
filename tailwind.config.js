/** 
 * 
 * 
 * @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float-big': 'floatBig 8s ease-in-out infinite',
      },
      keyframes: {
        floatBig: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-100px)' }, // Go up 100px
        },
      },
    },
  },
  plugins: [],
}
