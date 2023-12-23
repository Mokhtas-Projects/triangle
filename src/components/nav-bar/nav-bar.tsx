import Link from 'next/link'
import { IoMdHome } from 'react-icons/io'
import { IoChatbubbleSharp, IoGlobeOutline, IoVideocam } from 'react-icons/io5'

import { Navbutton } from '../nav-button/nav-button'

interface NavBarProps {
	color: string
}

export const NavBar = ({ color }: NavBarProps) => {
	return (
		<ul className='flex gap-16 lg:mr-10 lg:gap-28 '>
			<Link href='/'>
				<Navbutton color={color}>
					<IoMdHome />
				</Navbutton>
			</Link>
			<Navbutton color={color}>
				<IoGlobeOutline />
			</Navbutton>
			<Navbutton color={color}>
				<IoVideocam />
			</Navbutton>
			<Link href='/chat'>
				<Navbutton color={color}>
					<IoChatbubbleSharp />
				</Navbutton>
			</Link>
		</ul>
	)
}

export default NavBar
