import ChatBoard from '@/components/chat-board/chat-board'
import ChatHeader from '@/components/chat-header/chat-header'
export const ChatSection = () => {
	return (
		<div className='fixed right-0 h-full w-full bg-gray-lighter md:w-3/5'>
			<ChatHeader />
			<ChatBoard />
		</div>
	)
}

export default ChatSection
