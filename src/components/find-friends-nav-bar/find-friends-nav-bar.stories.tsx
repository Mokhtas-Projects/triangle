import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { FindFriendsNavBar } from './find-friends-nav-bar'

const meta: Meta = {
	title: 'Components/FindFriendsNavBar',
	component: FindFriendsNavBar,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

export const Default: StoryObj = {
	render: () => <FindFriendsNavBar />
}
