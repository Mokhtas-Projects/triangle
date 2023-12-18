import Link from 'next/link'
import { IoMdHome } from 'react-icons/io'
import { IoChatbubbleSharp, IoGlobeOutline, IoVideocam } from 'react-icons/io5'

import { Navbutton } from '../nav-button/nav-button'

export const NavBar = () => {
	return (
		<ul className='hidden gap-16 md:flex lg:mr-10 lg:gap-28'>
			<Navbutton>
				<IoMdHome />
			</Navbutton>
			<Navbutton>
				<IoGlobeOutline />
			</Navbutton>
			<Navbutton>
				<IoVideocam />
			</Navbutton>
			<Link href='/chat'>
				<Navbutton>
					<IoChatbubbleSharp />
				</Navbutton>
			</Link>
		</ul>
	)
}

export default NavBar
