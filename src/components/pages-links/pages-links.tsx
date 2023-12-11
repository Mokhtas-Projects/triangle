import classNames from 'classnames'
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
	const linkWrapperClasses = classNames(
		'flex flex-row items-center justify-start rounded w-full hover:bg-gray-lighter mt-1'
	)

	const iconWrapperClasses = classNames(
		'flex items-center justify-center h-7 w-7 ms-4 me-2.5 text-center'
	)

	// const iconClasses = classNames('text-center')

	const linkTextClasses = 'font-semibold capitalize text-black'

	return (
		<div className='mt-4'>
			<Link href='/find-friends'>
				<div className={linkWrapperClasses}>
					<div className={iconWrapperClasses}>
						<FaUserGroup className='text-2xl text-blue-dark' />
					</div>
					<div className='m-2'>
						<span className={linkTextClasses}>find friends</span>
					</div>
				</div>
			</Link>

			<Link href='/groups'>
				<div className={linkWrapperClasses}>
					<div className={`${iconWrapperClasses} rounded-full bg-blue-dark`}>
						<FaPeopleGroup className=' text-xl text-white' />
					</div>
					<div className='m-2'>
						<span className={linkTextClasses}>groups</span>
					</div>
				</div>
			</Link>

			<Link href='/saved'>
				<div className={linkWrapperClasses}>
					<div className={iconWrapperClasses}>
						<FaBookmark className='text-xl text-emerald-700' />
						{/* text-teal-400 */}
					</div>
					<div className='m-2'>
						<span className={linkTextClasses}>saved</span>
					</div>
				</div>
			</Link>

			<Link href='/pages'>
				<div className={linkWrapperClasses}>
					<div className={iconWrapperClasses}>
						<FaFlag className='text-xl text-orange-600' />
						{/* text-pink-400 */}
					</div>
					<div className='m-2'>
						<span className={linkTextClasses}>pages</span>
					</div>
				</div>
			</Link>

			<Link href='/watch'>
				<div className={linkWrapperClasses}>
					<div className={iconWrapperClasses}>
						<FaVideo className='text-xl text-purple-500' />
						{/* text-violet-400 */}
					</div>
					<div className='m-2'>
						<span className={linkTextClasses}>videos</span>
					</div>
				</div>
			</Link>

			<Link href='/reel'>
				<div className={linkWrapperClasses}>
					<div className={iconWrapperClasses}>
						<FaRegCirclePlay className='text-2xl text-pink-400' />
						{/* text-violet-400 */}
					</div>
					<div className='m-2'>
						<span className={linkTextClasses}>reels</span>
					</div>
				</div>
			</Link>

			<Link href='/favorites'>
				<div className={linkWrapperClasses}>
					<div className={`${iconWrapperClasses} ms-2`}>
						<FaListUl className='text-xl text-gray-darker' />
						{/* text-amber-300 */}
					</div>
					<div className='m-2'>
						<span className={linkTextClasses}>activities log</span>
					</div>
				</div>
			</Link>

			<Link href='/settings'>
				<div className={linkWrapperClasses}>
					<div className={iconWrapperClasses}>
						<FaGear className='text-xl text-gray-darker' />
					</div>
					<div className='m-2'>
						<span className={linkTextClasses}>settings</span>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default PagesLinks
