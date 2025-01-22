/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}", "./public/index.html"],
	theme: {
		extend: {
			colors: {
				searchGray: "#F0F0F0",
			},
		},
	},
	plugins: [],
};
