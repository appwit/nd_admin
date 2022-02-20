import { fireEvent, render, waitFor } from '@testing-library/react'

import Form from '@/components/Form'
import FormControl from '@/components/FormControl'

type FormFields = { test: string }

let submittedData: FormFields | undefined = undefined
const mockOnSubmit = jest.fn((data: FormFields) => {
  submittedData = data
})

describe('Form component', () => {
  afterEach(() => {
    jest.restoreAllMocks()
    submittedData = undefined
  })

  test('renders Form correctly', () => {
    const formChildren = 'Test children'

    const { container, getByText } = render(<Form onSubmit={mockOnSubmit}>{formChildren}</Form>)

    expect(container).toMatchSnapshot()
    expect(getByText(formChildren)).toBeInTheDocument()
  })

  test('handles submit events correctly', async () => {
    const { getByTestId } = render(
      <Form onSubmit={mockOnSubmit}>
        <FormControl
          name="test"
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => <input {...field} data-testid="testInput" />}
        />

        <button type="submit" data-testid="testSubmit">
          Test Submit
        </button>
      </Form>
    )

    const inputEl = getByTestId('testInput') as HTMLInputElement
    const submitEl = getByTestId('testSubmit')
    const mockInputValue = 'test value'

    fireEvent.submit(submitEl)

    await waitFor(() => expect(mockOnSubmit).toHaveBeenCalledTimes(0))

    fireEvent.input(inputEl, { target: { value: mockInputValue } })
    fireEvent.submit(submitEl)

    await waitFor(() => expect(inputEl.value).toBe(submittedData?.test))
    await waitFor(() => expect(mockOnSubmit).toHaveBeenCalledTimes(1))
  })

  test('resets form after submit', async () => {
    const defaultValue = 'test default value'
    const { getByTestId } = render(
      <Form<FormFields> onSubmit={mockOnSubmit} resetAfterSubmit defaultValues={{ test: defaultValue }}>
        <FormControl
          name="test"
          defaultValue={defaultValue}
          rules={{ required: true }}
          render={({ field }) => <input {...field} data-testid="testInput" />}
        />

        <button type="submit" data-testid="testSubmit">
          Test Submit
        </button>
      </Form>
    )

    const inputEl = getByTestId('testInput') as HTMLInputElement
    const submitEl = getByTestId('testSubmit')
    const mockInputValue = 'some input'

    expect(inputEl.value).toBe(defaultValue)

    fireEvent.input(inputEl, { target: { value: mockInputValue } })
    await waitFor(() => expect(inputEl.value).toBe(mockInputValue))

    fireEvent.submit(submitEl)
    await waitFor(() => expect(mockOnSubmit).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(inputEl.value).toBe(defaultValue))
  })
})
