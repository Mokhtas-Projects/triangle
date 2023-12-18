import { Meta, StoryObj } from '@storybook/react'

import { Footer } from './footer'

const meta: Meta = {
	title: 'Components/Footer',
	component: Footer,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

export const Default: StoryObj = {
	render: (props) => <Footer {...props}>Footer</Footer>
}
