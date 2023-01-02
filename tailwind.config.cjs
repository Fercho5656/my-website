/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'green-pea': {
					'50': '#f2fbf4',
					'100': '#e0f8e5',
					'200': '#c2f0cd',
					'300': '#92e3a6',
					'400': '#5bcd79',
					'500': '#35b256',
					'600': '#269342',
					'700': '#23793a',
					'800': '#1f5c30',
					'900': '#1b4c2a',
				},

			}
		},
	},
	plugins: [],
}
