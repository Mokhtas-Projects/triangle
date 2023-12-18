import Logo from '../Logo/Logo'
import NavBar from '../nav-bar/nav-bar'
import NotificationBell from '../notification-bell/notification-bell'
import SearchBar from '../search-bar/search-bar'
import ToggleMenu from '../toggle-menu/toggle-menu'
import UserAvatar from '../user-avatar/user-avatar'
export const Header = () => {
	return (
		<div className='sticky top-0 bg-neutral-100 p-2 drop-shadow-lg md:flex'>
			<Logo />
			<div className='flex w-full items-center justify-between pt-2'>
				<ToggleMenu />
				<SearchBar />
				<NavBar />
				<div className='flex items-center justify-center gap-2'>
					<NotificationBell />
					<UserAvatar />
				</div>
			</div>
		</div>
	)
}

export default Header
