import Stories from '../stories/Stories'
import SuggestedFriends from '../suggested-freinds/SuggestedFriends'

export default function LeftSidebar(): JSX.Element {
	return (
		<div className='divide-y divide-dashed'>
			<Stories />
			<SuggestedFriends />
		</div>
	)
}
