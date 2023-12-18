import { ReactNode } from 'react'
export type NavbuttonProps = { children: ReactNode }

export const Navbutton = ({ children }: NavbuttonProps) => {
	return (
		<li className={`cursor-pointer text-3xl text-teal-600 xl:text-4xl`}>
			{children}
		</li>
	)
}

export default Navbutton
