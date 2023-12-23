import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { FriendsProfileDisplaySection } from './friends-profile-display-section'

const meta: Meta = {
	title: 'Components/FriendsProfileDisplaySection',
	component: FriendsProfileDisplaySection,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

export const Default: StoryObj = {
	render: () => <FriendsProfileDisplaySection />
}
