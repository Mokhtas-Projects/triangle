import Link from 'next/link'
import { IoMdHome } from 'react-icons/io'
import { IoChatbubbleSharp, IoGlobeOutline, IoVideocam } from 'react-icons/io5'
export const Footer = () => {
	return (
		<div className='fixed bottom-0 flex h-16 w-full items-center justify-center bg-teal-600 md:hidden'>
			<ul className='flex gap-20 text-3xl text-gray-lighter'>
				<IoMdHome />
				<IoGlobeOutline />
				<IoVideocam />
				<Link href='/chat'>
					<IoChatbubbleSharp />
				</Link>
			</ul>
		</div>
	)
}

export default Footer
