import { fireEvent, render, waitFor } from '@testing-library/react'
import { FieldError, FormProvider, useForm } from 'react-hook-form'

import FormControl from '@/components/FormControl'

type WrapperProps = { children: React.ReactNode }

let submitted = false
const mockOnSubmit = jest.fn(() => (submitted = true))

const Wrapper = ({ children }: WrapperProps) => {
  const methods = useForm()

  return <FormProvider {...methods}>{children}</FormProvider>
}

const Form = ({ children }: WrapperProps) => {
  const methods = useForm()

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(mockOnSubmit)} noValidate>
        {children}
      </form>
    </FormProvider>
  )
}

describe('FormControl component', () => {
  afterEach(() => {
    jest.restoreAllMocks()
    submitted = false
  })

  test('renders correctly', () => {
    const { container, getByTestId } = render(
      <Wrapper>
        <FormControl
          name="test"
          defaultValue=""
          render={({ field }) => <input {...field} data-testid="testInput" />}
        />
      </Wrapper>
    )

    const inputEl = getByTestId('testInput') as HTMLInputElement

    expect(container).toMatchSnapshot()
    expect(inputEl).toBeInTheDocument()
  })

  test('sets default value', async () => {
    const defaultValue = 'test default value'

    const { getByTestId } = render(
      <Wrapper>
        <FormControl
          name="test"
          defaultValue={defaultValue}
          render={({ field }) => <input {...field} data-testid="testInput" />}
        />
      </Wrapper>
    )

    const inputEl = getByTestId('testInput') as HTMLInputElement

    await waitFor(() => expect(inputEl.value).toBe(defaultValue))
  })

  test('updates input value', async () => {
    const { getByTestId } = render(
      <Form>
        <FormControl
          name="test"
          defaultValue=""
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

    expect(inputEl.value).toBe('')

    fireEvent.input(inputEl, { target: { value: mockInputValue } })
    await waitFor(() => expect(inputEl.value).toBe(mockInputValue))

    fireEvent.submit(submitEl)
    await waitFor(() => expect(mockOnSubmit).toHaveBeenCalledTimes(1))
  })

  test('applies validation rules before submitting', async () => {
    let inputError: FieldError | undefined
    const { getByTestId } = render(
      <Form>
        <FormControl
          name="test"
          defaultValue=""
          rules={{ required: 'required' }}
          render={({ field, fieldState: { error } }) => {
            inputError = error
            return <input {...field} data-testid="testInput" />
          }}
        />

        <button type="submit" data-testid="testSubmit">
          Test Submit
        </button>
      </Form>
    )

    const inputEl = getByTestId('testInput') as HTMLInputElement
    const submitEl = getByTestId('testSubmit')
    const mockInputValue = 'some input'

    expect(submitted).toBe(false)

    fireEvent.submit(submitEl)

    await waitFor(() => expect(inputError?.message).toBe('required'))
    expect(submitted).toBe(false)

    fireEvent.input(inputEl, { target: { value: mockInputValue } })
    fireEvent.submit(submitEl)

    await waitFor(() => expect(mockOnSubmit).toHaveBeenCalledTimes(1))
    expect(submitted).toBe(true)
    expect(inputEl.value).toBe(mockInputValue)
    expect(inputError).toBeUndefined()
  })
})
