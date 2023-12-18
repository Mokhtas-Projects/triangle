import { Meta, StoryObj } from '@storybook/react'

import { UsersChatBar } from './users-chat-bar'

const meta: Meta = {
	title: 'Components/UsersChatBar',
	component: UsersChatBar,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

export const Default: StoryObj = {
	render: () => <UsersChatBar />
}
