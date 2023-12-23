import FindFriendsSubTitle from '@/app/[lang]/find-friends/components/find-friends-sub-title/find-friends-sub-title'
import FriendCard from '@/app/[lang]/find-friends/components/friend-card/friend-card'
import { pageType } from '@/app/[lang]/find-friends/page'
export const FriendSuggestionSection = () => {
	return (
		<div
			className={`pb-16 md:pb-0 ${pageType === 'suggestions' ? 'pt-6' : ''}`}
		>
			{pageType === 'suggestions' ? null : (
				<FindFriendsSubTitle title='Suggestions' />
			)}
			<div
				className={`flex flex-col gap-10 md:flex-row md:gap-3 ${
					pageType === 'suggestions'
						? 'md:w-4/5  md:overflow-x-scroll lg:w-full'
						: 'md:w-full md:flex-wrap'
				} `}
			>
				<FriendCard type='suggestions' link='' username='username' />
				<FriendCard type='suggestions' link='' username='username' />
				<FriendCard type='suggestions' link='' username='username' />
				<FriendCard type='suggestions' link='' username='username' />
				<FriendCard type='suggestions' link='' username='username' />
			</div>
		</div>
	)
}

export default FriendSuggestionSection
