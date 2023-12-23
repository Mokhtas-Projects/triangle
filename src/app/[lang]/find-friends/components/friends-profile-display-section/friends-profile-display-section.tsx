import { TbUserScan } from 'react-icons/tb'
export const FriendsProfileDisplaySection = () => {
	return (
		<div className='hidden h-screen w-full flex-col items-center justify-center bg-gray-light md:flex'>
			<div className='text-3xl text-teal-600'>
				<TbUserScan />
			</div>
			<p className='text-2xl font-bold text-gray-darker'>
				Select people&apos;s names to preview their profile.
			</p>
		</div>
	)
}

export default FriendsProfileDisplaySection
