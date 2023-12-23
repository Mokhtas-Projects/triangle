import { FaUserClock } from 'react-icons/fa'
import { FaUserGroup, FaUserPlus } from 'react-icons/fa6'
import { IoIosList } from 'react-icons/io'

import FindFriendsNavButton from '@/components/find-friends-nav-button/find-friends-nav-button'
import FindFriendsTitle from '@/components/find-friends-title/find-friends-title'
export const FindFriendsNavBar = () => {
	return (
		<div className='left-0 flex w-full justify-center md:fixed md:h-full md:w-72 md:flex-col md:bg-gray-lighter md:px-4 md:shadow-md md:shadow-gray-dark'>
			<FindFriendsTitle title='Friends' />
			<ul className='flex w-fit justify-center gap-7 border-b border-gray-light py-3.5 md:h-full md:flex-col md:justify-start md:gap-9 md:border-0'>
				<li className='hover:cursor-pointer'>
					<FindFriendsNavButton title='Home'>
						<FaUserGroup />
					</FindFriendsNavButton>
				</li>
				<li className='hover:cursor-pointer'>
					<FindFriendsNavButton title='Friend Requests'>
						<FaUserClock />
					</FindFriendsNavButton>
				</li>
				<li className='hover:cursor-pointer'>
					<FindFriendsNavButton title='Add Friend'>
						<FaUserPlus />
					</FindFriendsNavButton>
				</li>
				<li className='hover:cursor-pointer'>
					<FindFriendsNavButton title='Friends List'>
						<IoIosList />
					</FindFriendsNavButton>
				</li>
			</ul>
		</div>
	)
}

export default FindFriendsNavBar
