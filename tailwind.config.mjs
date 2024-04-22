/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'cafecarrito': '#eba121', //Custom color for shopping cart icon
				'#f2ca7f': '#f2ca7f',
				'#fa991c': '#fa991c', //Custom colors for GET STARTED button
				'#f9f7f7': '#f9f7f7', //Custom color for about box 2
			},
			backgroundImage: {
				'main-pattern': "url('/image_1.webp')",
			}
		},
	},
	plugins: [],
}
