/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite/**/*.js",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				anton: ["Anton", "sans-serif"],
			},
			backgroundImage: {
				"box-pattern":
					"url('@/assets/images/loginPattern.svg')",
			},
		},
	},

	plugins: [require("flowbite/plugin")],
};

