// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#228B22', // Fuller green color
        'primary-dark': '#006400',
        'secondary': '#FBBF24',
        'secondary-dark': '#B45309',
        'text-primary': '#FFFFFF', // Global text colors
        'text-secondary': '#FBBF24',
        'text-dark': '#E5E7EB',
        'text-light': '#D1FAE5', // Additional light text color for better readability on dark backgrounds
      },
    },
  },
  plugins: [],
};
