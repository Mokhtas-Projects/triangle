import { FaXmark } from 'react-icons/fa6'

import { PagesLinks } from '@/components/pages-links'
import { UsernameWithAvatar } from '@/components/username-with-avatar'

// export type LeftSidebarProps = {}
// props: LeftSidebarProps

export const LeftSidebar = () => {
	return (
		<div className='col-span-10 h-screen border-e p-4 md:col-span-8 lg:col-span-3'>
			{/* md:m-4  */}
			<div className='grid grid-cols-12'>
				<div className='col-span-11'>
					<UsernameWithAvatar />
					<PagesLinks />
				</div>

				<div className='col-span-1 mt-3 flex cursor-pointer justify-center lg:hidden'>
					<FaXmark className='text-gray-darker ' />
				</div>
			</div>
		</div>
	)
}

export default LeftSidebar
