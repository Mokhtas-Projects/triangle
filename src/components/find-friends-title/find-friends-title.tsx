export type FindFriendsTitleProps = {
	title: string
}

export const FindFriendsTitle = ({ title }: FindFriendsTitleProps) => {
	return (
		<div>
			<p className='hidden py-5 text-3xl font-semibold text-black md:block'>
				{title}
			</p>
		</div>
	)
}

export default FindFriendsTitle
