import { render } from '@testing-library/react'

import { LoginPage } from '@/login/components'

describe('LoginPage component', () => {
  test('renders LoginPage correctly', () => {
    const { asFragment } = render(<LoginPage />)

    expect(asFragment()).toMatchSnapshot()
  })
})
