import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { FriendsList } from './friends-list'

const meta: Meta = {
	title: 'Components/FriendsList',
	component: FriendsList,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

export const Default: StoryObj = {
	render: () => <FriendsList />
}
