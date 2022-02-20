import { render } from '@testing-library/react'

import { LoginForm } from '@/login/components'

describe('LoginForm component', () => {
  test('renders LoginForm correctly', () => {
    const { asFragment } = render(<LoginForm />)

    expect(asFragment()).toMatchSnapshot()
  })
})
