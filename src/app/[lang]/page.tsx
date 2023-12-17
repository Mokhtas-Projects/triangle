import Header from '@/components/header/Header'
import RightSideBar from '@/components/right-sidebar/RightSidebar'

export default function Home() {
	return (
		<div>
			<Header />
			<div data-testid='right-sidebar'>
				<RightSideBar />
			</div>
		</div>
	)
}
