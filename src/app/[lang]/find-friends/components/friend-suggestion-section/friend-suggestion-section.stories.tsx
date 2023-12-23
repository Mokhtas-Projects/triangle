import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { FriendSuggestionSection } from './friend-suggestion-section'

const meta: Meta = {
	title: 'Components/FriendSuggestionSection',
	component: FriendSuggestionSection,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

export const Default: StoryObj = {
	render: () => <FriendSuggestionSection />
}
