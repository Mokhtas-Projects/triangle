import { FaUser } from 'react-icons/fa6'

// export type UserAvatarProps = {}
// props: UserAvatarProps

export const UserAvatar = () => {
	return (
		<div className='m-2 flex h-12 w-12 items-center justify-center rounded-full border border-gray-dark bg-gray'>
			{/* User Picture place */}
			<FaUser className='text-center text-2xl text-gray-lighter' />
		</div>
	)
}

export default UserAvatar
