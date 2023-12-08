// your imports here
import Link from 'next/link'
import {
	FaBookmark,
	FaFlag,
	FaGear,
	FaPeopleGroup,
	FaStar,
	FaUserGroup,
	FaVideo
} from 'react-icons/fa6'

export const PagesLinks = () => {
	const linkWrapperClasses =
		'flex flex-row items-center justify-start rounded w-full hover:bg-gray-lighter'

	const iconWrapperClasses = 'flex items-center justify-center h-7 w-7 mx-2.5'

	const iconClasses = 'text-center text-2xl'

	const linkSpanWrapperClasses = 'font-semibold capitalize text-black'
	return (
		<div className=''>
			<Link href='/find-friends'>
				<div className={linkWrapperClasses}>
					<div className={iconWrapperClasses}>
						<FaUserGroup className={`${iconClasses} text-blue-dark`} />
					</div>
					<div className='m-2'>
						<span className={linkSpanWrapperClasses}>find friends</span>
					</div>
				</div>
			</Link>

			<Link href='/groups'>
				<div className={linkWrapperClasses}>
					<div className={`${iconWrapperClasses} rounded-full bg-blue-dark`}>
						<FaPeopleGroup className={`${iconClasses} text-white`} />
					</div>
					<div className='m-2'>
						<span className={linkSpanWrapperClasses}>groups</span>
					</div>
				</div>
			</Link>

			<Link href='/saved'>
				<div className={linkWrapperClasses}>
					<div className={iconWrapperClasses}>
						<FaBookmark className={`${iconClasses} text-teal-400`} />
						{/* text-emerald-700 */}
					</div>
					<div className='m-2'>
						<span className={linkSpanWrapperClasses}>saved</span>
					</div>
				</div>
			</Link>

			<Link href='/pages'>
				<div className={linkWrapperClasses}>
					<div className={iconWrapperClasses}>
						<FaFlag className={`${iconClasses} text-pink-400`} />
						{/* text-orange-600 */}
					</div>
					<div className='m-2'>
						<span className={linkSpanWrapperClasses}>pages</span>
					</div>
				</div>
			</Link>

			<Link href='/watch'>
				<div className={linkWrapperClasses}>
					<div className={iconWrapperClasses}>
						<FaVideo className={`${iconClasses} text-violet-400`} />
						{/* text-purple-500 */}
					</div>
					<div className='m-2'>
						<span className={linkSpanWrapperClasses}>videos</span>
					</div>
				</div>
			</Link>

			<Link href='/favorites'>
				<div className={linkWrapperClasses}>
					<div className={`${iconWrapperClasses} ms-2`}>
						<FaStar className={`${iconClasses} text-amber-300`} />
						{/* text-yellow-500 */}
					</div>
					<div className='m-2'>
						<span className={linkSpanWrapperClasses}>favorites</span>
					</div>
				</div>
			</Link>

			<Link href='/settings'>
				<div className={linkWrapperClasses}>
					<div className={iconWrapperClasses}>
						<FaGear className={`${iconClasses} text-gray-dark`} />
					</div>
					<div className='m-2'>
						<span className={linkSpanWrapperClasses}>settings</span>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default PagesLinks
