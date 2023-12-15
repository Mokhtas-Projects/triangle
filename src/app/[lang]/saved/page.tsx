import Link from 'next/link'

export default function Saved() {
	return (
		<>
			<h1>Saved Page</h1>
			<p className='text-center text-2xl leading-tight'>
				<Link href='/'>&larr; Go Back</Link>
			</p>
		</>
	)
}
