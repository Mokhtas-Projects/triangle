export type FindFriendsSubTitleProps = {
	title: string
}

export const FindFriendsSubTitle = ({ title }: FindFriendsSubTitleProps) => {
	return (
		<div>
			<p className='py-8 text-xl font-semibold text-black'>{title}</p>
		</div>
	)
}

export default FindFriendsSubTitle
