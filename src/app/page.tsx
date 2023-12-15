// import Image from 'next/image'
// import Link from 'next/link'
import { LeftSidebar } from '@/components/left-sidebar'

export default function Home() {
	return (
		<main className='grid grid-cols-12 gap-4'>
			<LeftSidebar />
		</main>
	)
}
