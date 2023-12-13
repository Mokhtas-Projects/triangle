import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			colors: {
				black: '#334155',
				gray: {
					lighter: '#f1f5f9',
					light: '#e2e8f0',
					DEFAULT: '#cbd5e1',
					dark: '#94a3b8',
					darker: '#64748b'
				},
				blue: {
					light: '#bae6fd',
					DEFAULT: '#7dd3fc',
					dark: '#38bdf8'
				},
				storyBg: '#FAFAFA',
				storyPic: '#D9D9D9'
			},
			textColor: {
				storiesHeadlineColor: '#706A6A'
			}
		}
	},
	plugins: []
}
export default config
