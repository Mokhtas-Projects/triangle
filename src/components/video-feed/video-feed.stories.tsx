import { Meta, StoryObj } from '@storybook/react'

import { VideoFeed } from './video-feed'

const meta: Meta = {
	title: 'Components/VideoFeed',
	component: VideoFeed,
	parameters: {
		controls: { expanded: true }
	}
}

export default meta

export const Default: StoryObj = {
	render: (props) => <VideoFeed {...props}>VideoFeed</VideoFeed>
}
