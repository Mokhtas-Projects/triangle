import { LeftSidebar } from '@/components/left-sidebar'
import RightSidebar from '@/components/right-sidebar/RightSidebar'

export default function Home() {
	return (
		<main className='grid grid-cols-12 gap-4'>
			<LeftSidebar />
			<RightSidebar />
		</main>
	)
}
