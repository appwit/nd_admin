import { render } from '@testing-library/react'

import { Navbar } from '@/dashboard/components'

describe('Navbar component', () => {
  test('renders Navbar correctly', () => {
    const { asFragment } = render(<Navbar opened />)

    expect(asFragment()).toMatchSnapshot()
  })
})
