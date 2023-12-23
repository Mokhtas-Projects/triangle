import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { FindFriendRequestsSection } from './find-friend-requests-section'
const meta: Meta = {
	title: 'Components/FindFriendSuggestionSection',
	component: FindFriendRequestsSection,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

export const Default: StoryObj = {
	render: () => <FindFriendRequestsSection />
}
