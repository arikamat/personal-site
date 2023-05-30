/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				burtons: "burtons",
			},
			screens: {
				xxl: "1400",
			},
		},
		animation: {
			"gradient-x": "gradient-x 5s ease infinite",
			"gradient-y": "gradient-y 5s ease infinite",
			"gradient-xy": "gradient-xy 5s ease infinite",
		},
		keyframes: {
			"gradient-y": {
				"0%, 100%": {
					"background-size": "400% 400%",
					"background-position": "center top",
				},
				"50%": {
					"background-size": "200% 200%",
					"background-position": "center center",
				},
			},
			"gradient-x": {
				"0%, 100%": {
					"background-size": "200% 200%",
					"background-position": "left center",
				},
				"50%": {
					"background-size": "200% 200%",
					"background-position": "right center",
				},
			},
			"gradient-xy": {
				"0%, 100%": {
					"background-size": "400% 400%",
					"background-position": "left center",
				},
				"50%": {
					"background-size": "200% 200%",
					"background-position": "right center",
				},
			},
		},
	},
	plugins: [],
};
