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
				'#b4d5d1': '#b4d5d1', //Custom color for Ingredients footer
				'#f5b546': '#f5b546', //Custom color for final footer background
			},
			backgroundImage: {
				'main-pattern': "url('/image_1.webp')",
				'info-canela': "url('/bg_02.webp')",
				'ingredient': "url('/canela-bottle.webp')",
				'sm-img1': "url('/image_01.webp')",
				'sm-img2': "url('/image_02.webp')",
				'sm-img3': "url('/image_03.webp')",
				'sm-img4': "url('/image_04.webp')",
			},
			height: {
				'100': '28rem', // Custom height for InfoHead
				'150': '34rem', // Custom height for InfoHead
			},
			fontFamily: {
				'opensans': ['Open Sans', 'sans-serif'],
			},
			keyframes: {
				changebg: {
					'0%': {
						backgroundImage: 'url("/image_01.webp")',
					},
					'25%': {
						backgroundImage: 'url("/image_02.webp")',
					},
					'50%': {
						backgroundImage: 'url("/image_03.webp")',
					},
					'75%': {
						backgroundImage: 'url("/image_04.webp")',
					},
				},
			},
			animation: {
				changebg: 'changebg 10s steps(1) infinite', // Ajusta la duración y repetición según tus necesidades
			},
		},
	},
	plugins: [],
}
