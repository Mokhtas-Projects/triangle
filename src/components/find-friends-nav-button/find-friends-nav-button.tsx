import { ReactNode } from 'react'
interface FindFriendsNavButtonProps {
	children: ReactNode
	title: string
}
export const FindFriendsNavButton = ({
	children,
	title
}: FindFriendsNavButtonProps) => {
	return (
		<div className='flex flex-col items-center gap-3 md:flex-row'>
			<div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray text-xl text-black'>
				{children}
			</div>
			<p className='text-base font-semibold text-black'>{title}</p>
		</div>
	)
}

export default FindFriendsNavButton
