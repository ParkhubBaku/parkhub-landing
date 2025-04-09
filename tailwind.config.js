// tailwind.config.js
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: 'class',
	theme: {
	  extend: {
		colors: {
		  primary: '#7e22ce',
		  'primary-hover': '#9b59d6',
		},
		fontFamily: {
		  ubuntu: ['Ubuntu', 'sans-serif'],
		},
	  },
	},
	plugins: [],
  };