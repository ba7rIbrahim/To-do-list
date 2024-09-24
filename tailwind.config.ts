import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	daisyui: {
		themes: ["light", "dark"],
	},
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: '#65c3c8',
				hover: '#57a9ae'
			},
			container: {
				center: true,
				padding: '15px'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [
		require('daisyui'),
		require("tailwindcss-animate")
	],
};
export default config;
