// tailwind.config.js
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: 'class', // Must be 'class'
	theme: {
	  extend: {
		colors: {
		  'primary': '#7e22ce',
		  'secondary': '#F7FAFC',
		  'primary-hover': '#9b59d6',
		  'accent': '#38B2AC',
		  'text-dark': '#1A202C',
		},
	  },
	},
	plugins: [],
  };