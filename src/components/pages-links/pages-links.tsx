// your imports here
import Link from 'next/link'
import {
	FaBookmark,
	FaFlag,
	FaGear,
	FaListUl,
	FaPeopleGroup,
	FaRegCirclePlay,
	FaUserGroup,
	FaVideo
} from 'react-icons/fa6'

export const PagesLinks = () => {
	const linkWrapperClasses =
		'flex flex-row items-center justify-start rounded w-full hover:bg-gray-lighter mt-1'

	const iconWrapperClasses =
		'flex items-center justify-center h-7 w-7 ms-4 me-2.5'

	const iconClasses = 'text-center'

	const linkSpanWrapperClasses = 'font-semibold capitalize text-black'
	return (
		<div className='mt-4'>
			<Link href='/find-friends'>
				<div className={linkWrapperClasses}>
					<div className={iconWrapperClasses}>
						<FaUserGroup className={`${iconClasses} text-2xl text-blue-dark`} />
					</div>
					<div className='m-2'>
						<span className={linkSpanWrapperClasses}>find friends</span>
					</div>
				</div>
			</Link>

			<Link href='/groups'>
				<div className={linkWrapperClasses}>
					<div className={`${iconWrapperClasses} rounded-full bg-blue-dark`}>
						<FaPeopleGroup className={`${iconClasses}  text-xl text-white`} />
					</div>
					<div className='m-2'>
						<span className={linkSpanWrapperClasses}>groups</span>
					</div>
				</div>
			</Link>

			<Link href='/saved'>
				<div className={linkWrapperClasses}>
					<div className={iconWrapperClasses}>
						<FaBookmark className={`${iconClasses} text-xl text-emerald-700`} />
						{/* text-teal-400 */}
					</div>
					<div className='m-2'>
						<span className={linkSpanWrapperClasses}>saved</span>
					</div>
				</div>
			</Link>

			<Link href='/pages'>
				<div className={linkWrapperClasses}>
					<div className={iconWrapperClasses}>
						<FaFlag className={`${iconClasses} text-xl text-orange-600`} />
						{/* text-pink-400 */}
					</div>
					<div className='m-2'>
						<span className={linkSpanWrapperClasses}>pages</span>
					</div>
				</div>
			</Link>

			<Link href='/watch'>
				<div className={linkWrapperClasses}>
					<div className={iconWrapperClasses}>
						<FaVideo className={`${iconClasses} text-xl text-purple-500`} />
						{/* text-violet-400 */}
					</div>
					<div className='m-2'>
						<span className={linkSpanWrapperClasses}>videos</span>
					</div>
				</div>
			</Link>

			<Link href='/reel'>
				<div className={linkWrapperClasses}>
					<div className={iconWrapperClasses}>
						<FaRegCirclePlay
							className={`${iconClasses} text-2xl text-pink-400`}
						/>
						{/* text-violet-400 */}
					</div>
					<div className='m-2'>
						<span className={linkSpanWrapperClasses}>reels</span>
					</div>
				</div>
			</Link>

			<Link href='/favorites'>
				<div className={linkWrapperClasses}>
					<div className={`${iconWrapperClasses} ms-2`}>
						<FaListUl className={`${iconClasses} text-xl text-gray-darker`} />
						{/* text-amber-300 */}
					</div>
					<div className='m-2'>
						<span className={linkSpanWrapperClasses}>activities log</span>
					</div>
				</div>
			</Link>

			<Link href='/settings'>
				<div className={linkWrapperClasses}>
					<div className={iconWrapperClasses}>
						<FaGear className={`${iconClasses} text-xl text-gray-darker`} />
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
