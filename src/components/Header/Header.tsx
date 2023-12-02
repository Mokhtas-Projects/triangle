import Logo from '../Logo/Logo'
import NavBar from '../nav-bar/nav-bar'
import NotificationBell from '../notification-bell/notification-bell'
import ProfileBadge from '../profile-badge/profile-badge'
import SearchBar from '../search-bar/search-bar'
export const Header = () => {
	return (
		<div className='flex items-center justify-around bg-neutral-100 py-2'>
			<div className='flex items-center justify-around gap-16'>
				<Logo />
				<SearchBar />
				<NavBar />
			</div>
			<div className='flex items-center justify-center gap-8'>
				<NotificationBell />
				<ProfileBadge image='/ProfilePic.jpg' />
			</div>
		</div>
	)
}

export default Header
