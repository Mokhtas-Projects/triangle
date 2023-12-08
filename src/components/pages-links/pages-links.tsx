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
		'flex w-fit flex-row items-center justify-start border'

	const iconWrapperClasses =
		'flex items-center justify-center h-7 w-7 ms-2 border'

	const linkSpanWrapperClasses = 'font-semibold capitalize text-black'
	return (
		<div className='mt-4 w-fit border'>
			<Link href='/find-friends'>
				<div className={linkWrapperClasses}>
					<div className={iconWrapperClasses}>
						<FaUserGroup className='text-center text-2xl text-blue-dark' />
					</div>
					<div className='m-2'>
						<span className={linkSpanWrapperClasses}>find friends</span>
					</div>
				</div>
			</Link>

			<Link href='/groups'>
				<div className={linkWrapperClasses}>
					<div className={`${iconWrapperClasses} rounded-full bg-blue-dark`}>
						<FaPeopleGroup className='text-center text-2xl text-white' />
					</div>
					<div className='m-2'>
						<span className={linkSpanWrapperClasses}>groups</span>
					</div>
				</div>
			</Link>

			<Link href='/pages'>
				<div className={linkWrapperClasses}>
					<div className={iconWrapperClasses}>
						<FaFlag className='text-center text-2xl text-orange-600' />
					</div>
					<div className='m-2'>
						<span className={linkSpanWrapperClasses}>pages</span>
					</div>
				</div>
			</Link>

			<Link href='/watch'>
				<div className={linkWrapperClasses}>
					<div className={iconWrapperClasses}>
						<FaVideo className='text-center text-2xl text-purple-500' />
					</div>
					<div className='m-2'>
						<span className={linkSpanWrapperClasses}>videos</span>
					</div>
				</div>
			</Link>

			<Link href='/favorites'>
				<div className={linkWrapperClasses}>
					<div className={iconWrapperClasses}>
						<FaStar className='text-center text-2xl text-yellow-500' />
					</div>
					<div className='m-2'>
						<span className={linkSpanWrapperClasses}>favorites</span>
					</div>
				</div>
			</Link>

			<Link href='/saved'>
				<div className={linkWrapperClasses}>
					<div className={iconWrapperClasses}>
						<FaBookmark className='text-center text-2xl text-emerald-700' />
					</div>
					<div className='m-2'>
						<span className={linkSpanWrapperClasses}>saved</span>
					</div>
				</div>
			</Link>

			<Link href='/settings'>
				<div className={linkWrapperClasses}>
					<div className={iconWrapperClasses}>
						<FaGear className='text-center text-2xl text-gray-dark' />
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
