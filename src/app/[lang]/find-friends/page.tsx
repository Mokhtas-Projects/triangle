import FindFriendRequestsSection from '@/app/[lang]/find-friends/components/find-friend-request-section/find-friend-requests-section'
import FriendSuggestionSection from '@/app/[lang]/find-friends/components/friend-suggestion-section/friend-suggestion-section'
import FriendsList from '@/app/[lang]/find-friends/components/friends-list/friends-list'
import FriendsProfileDisplaySection from '@/app/[lang]/find-friends/components/friends-profile-display-section/friends-profile-display-section'
import FindFriendsNavBar from '@/components/find-friends-nav-bar/find-friends-nav-bar'
import Header from '@/components/header/Header'
import NavBar from '@/components/nav-bar/nav-bar'
interface FindFriendsProp {
	pageType: string
}
export default function FindFriends({ pageType }: FindFriendsProp) {
	return (
		<div>
			<Header />
			<div className='overflow-x-hidden md:flex'>
				<FindFriendsNavBar />
				<div className='mx-5 md:ml-80 md:w-3/4'>
					{pageType === 'Home' ? (
						<div>
							<FindFriendRequestsSection pageType={pageType} />
							<hr />
							<FriendSuggestionSection pageType={pageType} />
						</div>
					) : pageType === 'request' ? (
						<div className='flex flex-col '>
							<FindFriendRequestsSection pageType={pageType} />
							<FriendsProfileDisplaySection />
						</div>
					) : pageType === 'suggestions' ? (
						<div className='flex flex-col'>
							<FriendSuggestionSection pageType={pageType} />
							<FriendsProfileDisplaySection />
						</div>
					) : pageType === 'list' ? (
						<div className='flex flex-col'>
							<FriendsList />
							<FriendsProfileDisplaySection />
						</div>
					) : null}
				</div>
			</div>
			<div className='fixed bottom-0 flex h-14 w-full items-center justify-center bg-teal-600 md:hidden'>
				<NavBar color={'text-white'} />
			</div>
		</div>
	)
}
