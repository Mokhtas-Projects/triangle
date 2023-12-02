import { ReactNode } from 'react'
export type NavbuttonProps = { children: ReactNode }

export const Navbutton = ({ children }: NavbuttonProps) => {
	return <li className='text-3xl text-teal-600'>{children}</li>
}

export default Navbutton
