import Link from 'next/link'

export default function Profile() {
	return (
		<>
			<h1>Profile Page</h1>
			<p className='text-center text-2xl leading-tight'>
				<Link href='/'>&larr; Go Back</Link>
			</p>
		</>
	)
}
