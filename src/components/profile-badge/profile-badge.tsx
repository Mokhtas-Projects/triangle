import Image from 'next/image'
export type ProfileBadgeProps = { image: string }

export const ProfileBadge = ({ image }: ProfileBadgeProps) => {
	return (
		<div className='h-8 w-8 rounded-full border border-black bg-stone-300 md:h-14 md:w-14'>
			<Image src={image} alt='profile image' width={500} height={300} />
		</div>
	)
}

export default ProfileBadge
