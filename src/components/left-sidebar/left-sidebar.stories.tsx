import { Meta, StoryObj } from '@storybook/react'

import { LeftSidebar } from './left-sidebar'

const meta: Meta = {
	title: 'Components/UsernameWithAvatar',
	component: LeftSidebar,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

export const Default: StoryObj = {
	render: () => <LeftSidebar />
}
