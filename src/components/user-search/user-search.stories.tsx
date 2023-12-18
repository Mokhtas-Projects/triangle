import { Meta, StoryObj } from '@storybook/react'

import { UserSearch } from './user-search'

const meta: Meta = {
	title: 'Components/UserSearch',
	component: UserSearch,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

export const Default: StoryObj = {
	render: () => <UserSearch />
}
