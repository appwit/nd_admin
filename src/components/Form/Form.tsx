import type { ContainerProps } from '@mantine/core'
import { Container } from '@mantine/core'
import { useEffect } from 'react'
import type { FieldValues, SubmitHandler } from 'react-hook-form'
import { FormProvider, useForm } from 'react-hook-form'

const Form = <T extends FieldValues>({
  onSubmit,
  children,
  resetAfterSubmit,
  defaultValues,
  size = 'xl',
  padding = 0,
  fluid = true,
  ...contianerProps
}: FormProps<T>) => {
  const methods = useForm()
  const { handleSubmit, formState, reset } = methods

  useEffect(() => {
    if (resetAfterSubmit && formState.isSubmitSuccessful) {
      reset(defaultValues)
    }
  }, [resetAfterSubmit, formState.isSubmitSuccessful, defaultValues, reset])

  return (
    <Container size={size} padding={padding} fluid={fluid} {...contianerProps}>
      <FormProvider {...methods}>
        <form noValidate onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
          {children}
        </form>
      </FormProvider>
    </Container>
  )
}

export type FormProps<T> = {
  /**
   * Submit function handler. Can be a normal void function or an async function.
   * First argument is the form data and second argument is the event.
   */
  onSubmit: SubmitHandler<T>
} & ResetProps<T> &
  Omit<ContainerProps, 'onSubmit'>

type ResetProps<T> =
  | { resetAfterSubmit: boolean | true; defaultValues: T }
  | { resetAfterSubmit?: false; defaultValues?: T }

export default Form
