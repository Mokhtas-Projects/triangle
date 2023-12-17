import { Meta, StoryObj } from '@storybook/react'

import { UsernameWithAvatar } from './username-with-avatar'

const meta: Meta = {
	title: 'Components/UsernameWithAvatar',
	component: UsernameWithAvatar,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

export const Default: StoryObj = {
	render: () => <UsernameWithAvatar />
}
