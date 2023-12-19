import { ReactNode } from 'react'
export type NavbuttonProps = { children: ReactNode; color: string }

export const Navbutton = ({ children, color }: NavbuttonProps) => {
	return (
		<li className={`cursor-pointer text-3xl ${color} xl:text-4xl`}>
			{children}
		</li>
	)
}

export default Navbutton
