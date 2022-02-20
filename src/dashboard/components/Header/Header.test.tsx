import { render } from '@testing-library/react'

import { Header } from '@/dashboard/components'

describe('Header component', () => {
  test('renders Header correctly', () => {
    const { asFragment } = render(<Header opened setOpened={() => false} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
