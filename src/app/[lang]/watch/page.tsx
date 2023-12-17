import Link from 'next/link'

export default function Watch() {
	return (
		<>
			<h1>Videos Page</h1>
			<p className='text-center text-2xl leading-tight'>
				<Link href='/'>&larr; Go Back</Link>
			</p>
		</>
	)
}
