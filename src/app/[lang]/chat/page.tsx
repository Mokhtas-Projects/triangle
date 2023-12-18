import ChatSection from '@/components/chat-section/chat-section'
import ChatSidePage from '@/components/chat-side-page/chat-side-page'
import Footer from '@/components/footer/footer'
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
			<Footer />
		</>
	)
}
