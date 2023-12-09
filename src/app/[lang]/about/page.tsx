import AboutComponent from '@/components/about/about-component'

export default function About() {
	return (
		<div className='flex h-screen min-h-screen flex-col items-center justify-center p-2'>
			<div className='flex flex-1 flex-col items-center justify-center p-20'>
				<AboutComponent />
			</div>
		</div>
	)
}
