const {nextui} = require("@nextui-org/react");
const {default: flattenColorPalette} = require("tailwindcss/lib/util/flattenColorPalette");
const svgToDataUri = require("mini-svg-data-uri");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				"pp-primary": "#00d4ff",
				"pp-secondary": "#e54194",
				"pp-accent-1": "#A968B0",
				"pp-accent-2": "#4060a2",
				"pp-accent-3": "#4060a2",
				"pp-primary-dark": "#4060a2",
				"pp-secondary-dark": "#4060a2",
				"pp-accent-dark-1": "#4060a2",
				"pp-accent-dark-2": "#4060a2",
				"pp-accent-dark-3": "#4060a2"
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
				"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"pp-primary-gradient": "radial-gradient(circle, rgba(229,65,148,1) 0%, rgba(0,212,255,1) 100%)",
				"pp-primary-gradient-dark": "radial-gradient(circle, rgba(229,65,148,1) 0%, rgba(0,212,255,1) 100%)",
				"pp-secondary-gradient": "radial-gradient(circle, rgba(229,65,148,1) 0%, rgba(0,212,255,1) 100%)",
				"pp-secondary-gradient-dark": "radial-gradient(circle, rgba(229,65,148,1) 0%, rgba(0,212,255,1) 100%)",
			},
			boxShadow: {
				input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
			},
			animation: {
				"meteor-effect": "meteor 5s linear infinite",
				aurora: "aurora 60s linear infinite",
				first: "moveVertical 30s ease infinite",
				second: "moveInCircle 20s reverse infinite",
				third: "moveInCircle 40s linear infinite",
				fourth: "moveHorizontal 40s ease infinite",
				fifth: "moveInCircle 20s ease infinite",
			},
			keyframes: {
				meteor: {
					"0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
					"70%": { opacity: "1" },
					"100%": {
						transform: "rotate(215deg) translateX(-500px)",
						opacity: "0",
					},
				},
				aurora: {
					from: {
						backgroundPosition: "50% 50%, 50% 50%",
					},
					to: {
						backgroundPosition: "350% 50%, 350% 50%",
					},
				},
				moveHorizontal: {
					"0%": {
						transform: "translateX(-50%) translateY(-10%)",
					},
					"50%": {
						transform: "translateX(50%) translateY(10%)",
					},
					"100%": {
						transform: "translateX(-50%) translateY(-10%)",
					},
				},
				moveInCircle: {
					"0%": {
						transform: "rotate(0deg)",
					},
					"50%": {
						transform: "rotate(180deg)",
					},
					"100%": {
						transform: "rotate(360deg)",
					},
				},
				moveVertical: {
					"0%": {
						transform: "translateY(-50%)",
					},
					"50%": {
						transform: "translateY(50%)",
					},
					"100%": {
						transform: "translateY(-50%)",
					},
				},
			},
		},
	},
	darkMode: "selector",
	plugins: [
		nextui(),
		addVariablesForColors,
		function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"bg-dot-thick": (value) => ({
						backgroundImage: `url("${svgToDataUri(
						`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
						)}")`,
					}),
				},
				{ values: flattenColorPalette(theme("backgroundColor")), type: "color" }
			);
		},
	],
};

function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  	Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  	":root": newVars,
	});
}
