import { Meta, StoryObj } from '@storybook/react'

import { PagesLinks } from './pages-links'

const meta: Meta = {
	title: 'Components/UsernameWithAvatar',
	component: PagesLinks,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

export const Default: StoryObj = {
	render: () => <PagesLinks />
}
