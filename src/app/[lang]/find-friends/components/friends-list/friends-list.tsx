import FindFriendsSubTitle from '@/app/[lang]/find-friends/components/find-friends-sub-title/find-friends-sub-title'
import FriendCard from '@/app/[lang]/find-friends/components/friend-card/friend-card'

export const FriendsList = () => {
	return (
		<div className='pb-20 md:pb-0'>
			<FindFriendsSubTitle title='20 Friends' />
			<div className='flex flex-col gap-5 md:w-4/5 md:flex-row  md:overflow-x-scroll lg:w-full'>
				<FriendCard type='list' link='' username='username' />
				<FriendCard type='list' link='' username='username' />
				<FriendCard type='list' link='' username='username' />
				<FriendCard type='list' link='' username='username' />
				<FriendCard type='list' link='' username='username' />
				<FriendCard type='list' link='' username='username' />
			</div>
		</div>
	)
}

export default FriendsList
