import { IoSearch } from 'react-icons/io5'
export const SearchBar = () => {
	return (
		<div className='flex h-10 items-center justify-center rounded-2xl bg-stone-300 px-2'>
			<input
				type='text'
				placeholder='Search'
				className='border-transparent bg-transparent text-gray-500  focus:border-transparent focus:outline-none'
			/>
			<div className='text-2xl text-zinc-500'>
				<IoSearch />
			</div>
		</div>
	)
}

export default SearchBar
