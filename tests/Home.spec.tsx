import { render, screen } from '@testing-library/react'
import React from 'react'

import Home from '../src/app/[lang]/page'

it('should include LeftSidebar component when Home is called', () => {
	// arrange
	render(<Home />)

	// act
	// Skipped

	// assert
	expect(screen.getByTestId('left-sidebar')).toBeInTheDocument()
})
