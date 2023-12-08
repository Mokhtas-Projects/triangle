import { PagesLinks } from '@/components/pages-links'
import { UsernameWithAvatar } from '@/components/username-with-avatar'

// export type LeftSidebarProps = {}
// props: LeftSidebarProps

export const LeftSidebar = () => {
	return (
		<div className='m-4 w-fit border p-4'>
			<UsernameWithAvatar />
			<PagesLinks />
		</div>
	)
}

export default LeftSidebar
