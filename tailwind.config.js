// tailwind.config.js
module.exports = {
  darkMode: 'media',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customLight: '#e0e7ff',
        customIndigo: '#5046e4',
      },
    },
  },
};
