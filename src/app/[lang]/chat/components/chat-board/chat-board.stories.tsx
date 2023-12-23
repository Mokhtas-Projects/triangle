import { Meta, StoryObj } from '@storybook/react'

import { ChatBoard } from './chat-board'

const meta: Meta = {
	title: 'Components/ChatBoard',
	component: ChatBoard,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

export const Default: StoryObj = {
	render: () => <ChatBoard />
}
