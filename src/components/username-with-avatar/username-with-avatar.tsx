import Link from 'next/link'

import { UserAvatar } from '../user-avatar'
import Username from '../username/username'

export const UsernameWithAvatar = () => {
	return (
		<Link href={`/profile`}>
			<div className='flex w-full flex-row items-center justify-start rounded hover:bg-gray-lighter'>
				<UserAvatar />
				<Username />
			</div>
		</Link>
	)
}

export default UsernameWithAvatar
