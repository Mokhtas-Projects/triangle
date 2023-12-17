import Logo from '../Logo/Logo'
import NavBar from '../nav-bar/nav-bar'
import NotificationBell from '../notification-bell/notification-bell'
import ProfileBadge from '../profile-badge/profile-badge'
import SearchBar from '../search-bar/search-bar'
import ToggleMenu from '../toggle-menu/toggle-menu'
export const Header = () => {
	return (
		<div className='bg-neutral-100 p-2 drop-shadow-lg md:flex'>
			<Logo />
			<div className='flex w-full items-center justify-between '>
				<ToggleMenu />
				<SearchBar />
				<NavBar />
				<div className='flex items-center justify-center gap-2'>
					<NotificationBell />
					<ProfileBadge image='/' />
				</div>
			</div>
		</div>
	)
}

export default Header
