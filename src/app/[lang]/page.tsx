import LeftSidebar from '@/components/left-sidebar/left-sidebar'
import RightSidebar from '@/components/right-sidebar/RightSidebar'

export default function Home() {
	return (
		<div className='grid grid-cols-12 gap-4' data-testid='left-sidebar'>
			{/* Your main content goes here */}
			<LeftSidebar />
			<RightSidebar />
		</div>
	)
}
