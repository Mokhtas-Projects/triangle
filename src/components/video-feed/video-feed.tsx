export const VideoFeed = () => {
	const videos = [
		{
			id: 1,
			title: 'Video 1',
			thumbnail: 'thumbnail1.jpg',
			description: 'This is video 1'
		},
		{
			id: 2,
			title: 'Video 2',
			thumbnail: 'thumbnail2.jpg',
			description: 'This is video 2'
		}
		// Add more videos as needed
	]

	return (
		<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{videos.map((video) => (
				<div
					key={video.id}
					className='video-item rounded-lg border border-gray-200 p-4'
				>
					<img
						src={video.thumbnail}
						alt={video.title}
						className='h-64 w-full rounded-lg object-cover'
					/>
					<h2 className='mt-2 text-lg font-semibold'>{video.title}</h2>
					<p className='mt-1 text-sm text-gray-500'>{video.description}</p>
				</div>
			))}
		</div>
	)
}

export default VideoFeed
