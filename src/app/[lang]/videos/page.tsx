import { LeftSidebar } from '@/components/left-sidebar'
import { VideoFeed } from '@/components/video-feed'

export default function VideosPage() {
	return (
		<>
			<h1 className='my-4 text-center text-2xl text-blue-800'>Videos Page</h1>

			{/* <Navbar /> */}

			<div className='grid grid-cols-12'>
				<LeftSidebar />
				<div className='col-span-10 h-screen p-4 md:col-span-8 lg:col-span-9'>
					<VideoFeed />
				</div>
			</div>
		</>
	)
}
