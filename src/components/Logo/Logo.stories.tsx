import { Meta, Story } from '@storybook/react'

import { Logo } from './Logo'

const meta: Meta = {
	title: 'Components/Logo',
	component: Logo,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

const Template: Story = (props) => <Logo {...props}>Logo</Logo>

export const Default = Template.bind({})
Default.args = {}
