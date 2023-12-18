import { Meta, StoryObj } from '@storybook/react'

import { ChatSidePage } from './chat-side-page'

const meta: Meta = {
	title: 'Components/ChatSidePage',
	component: ChatSidePage,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

export const Default: StoryObj = {
	render: () => <ChatSidePage />
}
