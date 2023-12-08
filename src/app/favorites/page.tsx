import Link from 'next/link'

export default function Favorites() {
	return (
		<>
			<h1>Favorites Page</h1>
			<p className='text-center text-2xl leading-tight'>
				<Link href='/'>&larr; Go Back</Link>
			</p>
		</>
	)
}
