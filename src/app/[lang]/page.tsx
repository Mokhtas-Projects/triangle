import Footer from '@/components/footer/footer'
import Header from '@/components/header/Header'
import LeftSidebar from '@/components/left-sidebar/left-sidebar'
import RightSideBar from '@/components/right-sidebar/RightSidebar'
export default function Home() {
	return (
		<div>
			<Header />
			<div className='grid grid-cols-12 gap-4' data-testid='left-sidebar'>
				<LeftSidebar />
				<RightSideBar />
			</div>
			<Footer />
		</div>
	)
}
