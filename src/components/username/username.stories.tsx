import { Meta, StoryObj } from '@storybook/react'

import { Username } from './username'

const meta: Meta = {
	title: 'Components/Username',
	component: Username,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

export const Default: StoryObj = {
	render: () => <Username />
}
