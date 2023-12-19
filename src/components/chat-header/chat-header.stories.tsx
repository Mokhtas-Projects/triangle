import { Meta, StoryObj } from '@storybook/react'

import { ChatHeader } from './chat-header'

const meta: Meta = {
	title: 'Components/ChatHeader',
	component: ChatHeader,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

export const Default: StoryObj = {
	render: () => <ChatHeader />
}
