import Link from 'next/link'

export default function Settings() {
	return (
		<>
			<h1>Settings Page</h1>
			<p className='text-center text-2xl leading-tight'>
				<Link href='/'>&larr; Go Back</Link>
			</p>
		</>
	)
}
