/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				gilroy: ['Gilroy-Bold'],
				poppins: ['Poppins']
			},
			colors: {
				dark: '#1f2028'
			}
		}
	},
	plugins: []
};
