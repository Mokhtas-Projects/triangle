import { Meta, StoryObj } from '@storybook/react'

import { UserAvatar } from './user-avatar'

const meta: Meta = {
	title: 'Components/UserAvatar',
	component: UserAvatar,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

export const Default: StoryObj = {
	render: (props) => <UserAvatar {...props}>UserAvatar</UserAvatar>
}
