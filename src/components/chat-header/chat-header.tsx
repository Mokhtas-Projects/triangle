import { FaPhone, FaVideo } from 'react-icons/fa6'

import UserAvatar from '@/components/user-avatar/user-avatar'
export const ChatHeader = () => {
	return (
		<div className='flex w-full items-center justify-between bg-teal-500 p-2'>
			<div className='flex gap-3'>
				<UserAvatar />
				<div className='text-gray-lighter'>
					<p className='text-base'>Username</p>
					<p className='text-xs'>online</p>
				</div>
			</div>
			<div className='flex gap-10 text-xl text-gray-lighter md:gap-8'>
				<div>
					<FaPhone />
				</div>
				<div>
					<FaVideo />
				</div>
			</div>
		</div>
	)
}

export default ChatHeader
