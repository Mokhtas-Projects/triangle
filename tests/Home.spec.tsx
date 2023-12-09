import { render, screen, within } from '@testing-library/react'

import Home from '@/app/page'

describe('Home', () => {
	it('should have Docs text', () => {
		// arrange
		render(<Home />)

		// act
		const myElement = screen.getByText('Docs')

		// assert
		expect(myElement).toBeInTheDocument()
	})

	it('should contain the text "information"', () => {
		// arrange
		render(<Home />)

		// act
		const myElement = screen.getByText(/information/i)

		// assert
		expect(myElement).toBeInTheDocument()
	})

	it('should have an alternative text attribute on the image', () => {
		// arrange
		render(<Home />)

		// act
		const imageLink = screen.getByRole('link', { name: /By Vercel Logo/ })
		const image = within(imageLink).getByRole('img')

		// assert
		expect(image).toHaveAttribute('alt', 'Vercel Logo')
	})

	it('should open the links in a new tab', () => {
		// arrange
		render(<Home />)

		// act
		const links = screen.getAllByRole('link')

		// assert
		links.forEach((link) => {
			// expect(link).toHaveAttribute('target', '_blank')
			expect(link).toHaveAttribute('rel', 'noopener noreferrer')
		})
	})
})
