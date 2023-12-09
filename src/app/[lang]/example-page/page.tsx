import { headers } from 'next/headers'
import Link from 'next/link'
import Script from 'next/script'

export default function ExamplePage() {
	const nonce = headers().get('x-nonce') ?? undefined

	return (
		<>
			<h1>ExamplePage Page</h1>
			<p className='text-center text-2xl leading-tight'>
				<Link href='/'>&larr; Go Back</Link>
			</p>
			<Script
				src='https://www.googletagmanager.com/gtag/js'
				strategy='afterInteractive'
				nonce={nonce}
			/>
		</>
	)
}
