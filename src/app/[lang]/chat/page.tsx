import ChatSection from '@/components/chat-section/chat-section'
import ChatSidePage from '@/components/chat-side-page/chat-side-page'
import NavBar from '@/components/nav-bar/nav-bar'
import UserSearch from '@/components/user-search/user-search'
import UsersChatBar from '@/components/users-chat-bar/users-chat-bar'
const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
export default function Chat() {
	return (
		<>
			<div className='md:flex md:items-start'>
				<div className='md:w-2/5'>
					<UserSearch />
					{arr.map((index) => (
						<UsersChatBar key={index} />
					))}
				</div>
				<div className='hidden'>
					<ChatSection />
				</div>
				<ChatSidePage />
			</div>
			<div className='fixed bottom-0 flex h-14 w-full items-center justify-center bg-teal-600 md:hidden'>
				<NavBar color={'text-white'} />
			</div>
		</>
	)
}
