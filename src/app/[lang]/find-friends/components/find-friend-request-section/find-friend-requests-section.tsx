import FindFriendsSubTitle from '@/app/[lang]/find-friends/components/find-friends-sub-title/find-friends-sub-title'
import FriendCard from '@/app/[lang]/find-friends/components/friend-card/friend-card'
import { pageType } from '@/app/[lang]/find-friends/page'
export const FindFriendRequestsSection = () => {
	return (
		<div className={pageType === 'request' ? ' pb-16 pt-6 md:pb-0' : 'pb-6'}>
			{pageType === 'request' ? null : (
				<FindFriendsSubTitle title='Friend Requests' />
			)}
			<div
				className={`flex flex-col gap-10 md:flex-row
					${
						pageType === 'request'
							? ' md:w-4/5 md:gap-10 md:overflow-x-scroll lg:w-full'
							: ' md:w-full md:flex-wrap md:gap-3'
					}`}
			>
				<FriendCard type='request' link='' username='username' />
				<FriendCard type='request' link='' username='username' />
				<FriendCard type='request' link='' username='username' />
				<FriendCard type='request' link='' username='username' />
			</div>
		</div>
	)
}

export default FindFriendRequestsSection
