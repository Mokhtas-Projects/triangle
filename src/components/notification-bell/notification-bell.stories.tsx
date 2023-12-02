import { Meta, Story } from '@storybook/react'

import { NotificationBell } from './notification-bell'

const meta: Meta = {
	title: 'Components/NotificationBell',
	component: NotificationBell,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

const Template: Story = (props) => (
	<NotificationBell {...props}>NotificationBell</NotificationBell>
)

export const Default = Template.bind({})
Default.args = {}
