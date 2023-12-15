import { IoSearch } from 'react-icons/io5'
export const SearchBar = () => {
	return (
		<div className='flex h-8 items-center justify-center rounded-2xl bg-stone-300 px-2 md:h-10 md:rounded-3xl'>
			<input
				type='text'
				placeholder='Search'
				className='w-48 border-transparent bg-transparent text-gray-500  focus:border-transparent focus:outline-none'
			/>
			<div className='text-xl text-zinc-500'>
				<IoSearch />
			</div>
		</div>
	)
}

export default SearchBar
