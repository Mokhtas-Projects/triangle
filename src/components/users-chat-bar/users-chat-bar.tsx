import UserAvatar from '@/components/user-avatar/user-avatar'
export const UsersChatBar = () => {
	return (
		<div className='flex cursor-pointer items-center justify-between border-r border-gray px-3 py-4 hover:bg-slate-100'>
			<div className='flex gap-3'>
				<UserAvatar />
				<div>
					<p className='text-base text-black'>Username</p>
					<p className='text-sm text-gray-dark'>last seen</p>
				</div>
			</div>
		</div>
	)
}
export default UsersChatBar
