import Header from '@/components/header/Header'
import LeftSidebar from '@/components/left-sidebar/left-sidebar'
import NavBar from '@/components/nav-bar/nav-bar'
import RightSideBar from '@/components/right-sidebar/RightSidebar'
export default function Home() {
	return (
		<div>
			<Header />
			<div className='grid grid-cols-12 gap-4' data-testid='left-sidebar'>
				<LeftSidebar />
				<RightSideBar />
			</div>
			<div className='fixed bottom-0 flex h-14 w-full items-center justify-center bg-teal-600 md:hidden'>
				<NavBar color={'text-white'} />
			</div>
		</div>
	)
}
