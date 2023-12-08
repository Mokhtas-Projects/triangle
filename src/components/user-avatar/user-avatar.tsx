import { FaUser } from 'react-icons/fa6'

// export type UserAvatarProps = {}
// props: UserAvatarProps

export const UserAvatar = () => {
	return (
		<div className='mx-2.5 flex h-7 w-7 items-center justify-center rounded-full border border-gray-dark bg-gray'>
			<FaUser className='text-center text-xl text-gray-lighter' />
		</div>
	)
}

export default UserAvatar
