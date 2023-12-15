import LeftSidebar from '@/components/left-sidebar/left-sidebar'
import RightSidebar from '@/components/right-sidebar/RightSidebar'

export default function Home() {
	return (
		<div data-testid='left-sidebar'>
			{/* Your main content goes here */}
			<LeftSidebar />
			<RightSidebar />
		</div>
	)
}
