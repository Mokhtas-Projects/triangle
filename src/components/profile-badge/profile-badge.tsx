import Image from 'next/image'
export type ProfileBadgeProps = { image: string }

export const ProfileBadge = ({ image }: ProfileBadgeProps) => {
	return (
		<div className='h-14 w-14 rounded-full bg-stone-300'>
			<Image src={image} alt='profile image' width={500} height={300} />
		</div>
	)
}

export default ProfileBadge
