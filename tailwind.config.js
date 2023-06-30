/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				gilroy: ['Gilroy-Bold'],
				poppins: ['Poppins']
			}
		}
	},
	plugins: []
};
