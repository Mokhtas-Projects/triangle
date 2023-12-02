import { Meta, Story } from '@storybook/react'

import { SearchBar } from './search-bar'

const meta: Meta = {
	title: 'Components/SearchBar',
	component: SearchBar,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

const Template: Story = (props) => <SearchBar {...props}>SearchBar</SearchBar>

export const Default = Template.bind({})
Default.args = {}
