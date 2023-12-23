import Image from 'next/image'
import { FaUserLarge } from 'react-icons/fa6'

interface FriendCardProps {
	type: string
	link: string
	username: string
}
export const FriendCard = ({ type, link, username }: FriendCardProps) => {
	return (
		<div
			className={`flex items-center  md:ml-12 md:w-fit  md:border md:bg-slate-50  md:shadow-md ${
				type === 'suggestions'
					? 'gap-4 md:ml-12 md:flex-col md:gap-16 md:gap-8 md:px-4 md:py-2'
					: type === 'list'
						? 'justify-center gap-0 md:p-4'
						: type === 'request'
							? 'gap-4 md:gap-10 md:gap-8 md:pl-4 md:pr-10'
							: ''
			}`}
		>
			<div className='md:flex md:flex-col md:items-center'>
				{link === '' ? (
					<div
						className={`flex items-center justify-center rounded-full bg-gray text-2xl ${
							type === 'suggestions'
								? 'h-24 w-24 md:h-32 md:w-32 '
								: type === 'list'
									? 'h-16 w-16 md:h-20 md:w-20'
									: type === 'request'
										? 'h-24 w-24 md:h-20 md:w-20'
										: ''
						}`}
					>
						<FaUserLarge />
					</div>
				) : (
					<div>
						<Image
							src={link}
							alt={`${username} profile`}
							width={32}
							height={32}
						/>
					</div>
				)}
				<p className='hidden text-lg font-semibold text-black md:block'>
					{username}
				</p>
			</div>
			<div className='flex flex-col gap-3'>
				<p className='text-lg font-semibold text-black md:hidden'>{username}</p>
				{type === 'list' ? null : (
					<div className='flex gap-3 text-base font-semibold text-white md:flex-col md:gap-5'>
						<button className='rounded-lg bg-teal-600 px-6 py-1 shadow-md active:shadow-none'>
							{type === 'request' ? 'Confirm' : 'Add Friend'}
						</button>
						<button
							className={`rounded-lg ${
								type === 'request' ? 'bg-red-600' : 'bg-gray text-gray-darker'
							} px-7 py-1 shadow-md active:shadow-none`}
						>
							{type === 'request' ? 'Delete' : 'Remove'}
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default FriendCard
