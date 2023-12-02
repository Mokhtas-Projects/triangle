import { Meta, Story } from '@storybook/react'

import { Navbutton } from './nav-button'

const meta: Meta = {
	title: 'Components/Navbutton',
	component: Navbutton,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

const Template: Story = (props) => <Navbutton {...props}>Navbutton</Navbutton>

export const Default = Template.bind({})
Default.args = {}
