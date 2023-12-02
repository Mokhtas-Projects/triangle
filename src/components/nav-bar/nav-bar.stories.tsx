import { Meta, Story } from '@storybook/react'

import { NavBar } from './nav-bar'

const meta: Meta = {
	title: 'Components/NavBar',
	component: NavBar,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

const Template: Story = (props) => <NavBar {...props}>NavBar</NavBar>

export const Default = Template.bind({})
Default.args = {}
