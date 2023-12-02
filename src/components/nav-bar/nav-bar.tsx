import { IoMdHome } from 'react-icons/io'
import { IoChatbubbleSharp, IoGlobeOutline, IoVideocam } from 'react-icons/io5'

import { Navbutton } from '../nav-button/nav-button'
export const NavBar = () => {
	return (
		<ul className='flex gap-24'>
			<Navbutton>
				<IoMdHome />
			</Navbutton>
			<Navbutton>
				<IoGlobeOutline />
			</Navbutton>
			<Navbutton>
				<IoVideocam />
			</Navbutton>
			<Navbutton>
				<IoChatbubbleSharp />
			</Navbutton>
		</ul>
	)
}

export default NavBar
