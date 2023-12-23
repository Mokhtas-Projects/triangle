import { Meta, StoryObj } from '@storybook/react'

import { ChatSection } from './chat-section'

const meta: Meta = {
	title: 'Components/ChatSection',
	component: ChatSection,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

export const Default: StoryObj = {
	render: () => <ChatSection />
}
