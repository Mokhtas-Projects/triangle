export default function SuggestedFriends(): JSX.Element {
	return (
		<div className='h-80 w-72'>
			{/* Suggested Friends */}
			<h1 className='mb-0 p-2 pb-0 text-base font-semibold text-black'>
				Suggested Friends
			</h1>
			{/* Single user */}
			<div className='m-3 flex h-12 content-center items-center pt-0 '>
				<div className='m-1 h-12 w-12 rounded-full'>
					{/* User Picture place */}
				</div>
				<div className='m-2'>
					<h5 className='text-black'>username</h5>
				</div>
			</div>
			<div className='m-3 flex h-12 content-center items-center '>
				<div className=' m-1 h-12 w-12 rounded-full'>
					{/* User Picture place */}
				</div>
				<div className='m-2'>
					<h5 className='text-black'>username</h5>
				</div>
			</div>
			<div className='m-3 flex h-12 content-center items-center '>
				<div className=' m-1 h-12 w-12 rounded-full'>
					{/* User Picture place */}
				</div>
				<div className='m-2'>
					<h5 className='text-black'>username</h5>
				</div>
			</div>
			<div className='m-3 flex h-12 content-center items-center '>
				<div className=' m-1 h-12 w-12 rounded-full'>
					{/* User Picture place */}
				</div>
				<div className='m-2'>
					<h5 className='text-black'>username</h5>
				</div>
			</div>
		</div>
	)
}
