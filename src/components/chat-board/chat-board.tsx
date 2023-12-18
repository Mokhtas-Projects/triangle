import { FaMicrophone } from 'react-icons/fa'
import { GoPaperclip } from 'react-icons/go'
import { IoMdHappy } from 'react-icons/io'
export const ChatBoard = () => {
	return (
		<div className='fixed bottom-0 flex h-16 w-full items-center justify-between px-2 md:w-3/5 md:bg-teal-500'>
			<div className='hidden gap-8 text-3xl text-gray-lighter md:flex'>
				<IoMdHappy />
				<GoPaperclip />
			</div>
			<div className='mr-1 flex w-full items-center justify-between rounded-3xl bg-gray px-4 md:w-fit md:px-0'>
				<div className='text-xl text-gray-darker md:hidden'>
					<IoMdHappy />
				</div>
				<input
					className='h-12 w-4/5 rounded-2xl border-transparent bg-transparent px-8 text-black focus:border-transparent focus:outline-none  md:w-full md:bg-gray-lighter'
					type='text'
					placeholder='Type a message'
				/>
				<div className='text-xl text-gray-darker md:hidden'>
					<GoPaperclip />
				</div>
			</div>
			<div className='rounded-full bg-teal-600 p-4 text-xl text-gray-lighter md:bg-transparent md:text-3xl'>
				<FaMicrophone />
			</div>
		</div>
	)
}

export default ChatBoard
