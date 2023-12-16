import Link from 'next/link'

import UserAvatar from '@/components/user-avatar/user-avatar'
import Username from '@/components/username/username'

export const UsernameWithAvatar = () => {
	return (
		<Link href={`/profile`}>
			<div className='flex w-full flex-row items-center justify-start rounded py-1 hover:bg-gray-lighter'>
				<UserAvatar />
				<Username />
			</div>
		</Link>
	)
}

export default UsernameWithAvatar
