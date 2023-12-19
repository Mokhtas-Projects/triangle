import SearchBar from '@/components/search-bar/search-bar'
import UserAvatar from '@/components/user-avatar/user-avatar'
export const UserSearch = () => {
	return (
		<div className='sticky top-0 flex justify-between bg-white px-4 py-2 shadow-md'>
			<SearchBar />
			<UserAvatar />
		</div>
	)
}

export default UserSearch
