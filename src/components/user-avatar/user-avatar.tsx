import { FaUser } from 'react-icons/fa6'

export const UserAvatar = () => {
	return (
		<div className='mx-1.5 flex h-10 w-10 items-center justify-center rounded-full border border-gray-dark bg-gray'>
			<FaUser className='text-center text-2xl text-gray-lighter' />
		</div>
	)
}

export default UserAvatar
