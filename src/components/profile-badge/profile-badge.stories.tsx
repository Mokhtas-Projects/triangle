import { Meta, Story } from '@storybook/react'

import { ProfileBadge } from './profile-badge'

const meta: Meta = {
	title: 'Components/ProfileBadge',
	component: ProfileBadge,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

const Template: Story = (props) => (
	<ProfileBadge {...props}>ProfileBadge</ProfileBadge>
)

export const Default = Template.bind({})
Default.args = {}
