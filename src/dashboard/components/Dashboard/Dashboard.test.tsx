import { render } from '@testing-library/react'

import { Dashboard } from '@/dashboard/components'

describe('Dashboard component', () => {
  test('renders Dashboard correctly', () => {
    const { asFragment } = render(<Dashboard />)

    expect(asFragment()).toMatchSnapshot()
  })
})
