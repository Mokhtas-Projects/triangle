import { Meta, StoryObj } from '@storybook/react'

import { ExampleComponent } from './example-component'

const meta: Meta = {
	title: 'Components/ExampleComponent',
	component: ExampleComponent,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

export const Default: StoryObj = {
	render: () => <ExampleComponent />
}
