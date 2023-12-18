import { IoChatbubbleSharp } from 'react-icons/io5'
export const ChatSidePage = () => {
	return (
		<div className='hidden h-screen w-3/5 items-center justify-center bg-gray-lighter md:flex'>
			<div className='flex flex-col items-center gap-4'>
				<div className='w-fit rounded-full border-4 border-teal-600 p-6 text-8xl text-teal-600'>
					<IoChatbubbleSharp />
				</div>
				<p className='text-2xl font-medium text-teal-600'>
					Send Messages to friends
				</p>
			</div>
		</div>
	)
}

export default ChatSidePage
