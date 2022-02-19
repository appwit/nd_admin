import { memo } from 'react'
import type { Control, ControllerProps, FieldValues, FormState, RegisterOptions } from 'react-hook-form'
import { Controller, useFormContext } from 'react-hook-form'

/**
 * Wrapper for `react-hook-form`'s `Controller`.
 * Wrapped with `React.memo` for performance improvements.
 */
const FormControl = memo<FormControlProps>(
  ({ formState: _s, ...props }) => <Controller {...props} />,
  // TODO understand rendering performance to implement improvements
  // See https://react-hook-form.com/advanced-usage#FormProviderPerformance
  (_prev, _next) => false
)
FormControl.displayName = 'FormControl'

/**
 * Wrapper for any form element inside `Form` to pass down form context.
 * @param name
 * @param defaultValue - Needs to be passed so that elements don't change from uncontrolled to controlled
 * @param children
 * @param rules - (optional)
 */
const FormControlContainer = <T extends FieldValues>({
  render,
  name,
  ...props
}: FormControlContainerProps<T>) => {
  const { control, formState } = useFormContext()

  return (
    <FormControl {...props} name={name as string} render={render} control={control} formState={formState} />
  )
}

export default FormControlContainer

export interface FormControlProps extends FormControlContainerProps {
  control: Control<FieldValues, object>
  formState: FormState<FieldValues>
}

type FormControlContainerProps<T = FieldValues> = {
  name: keyof T
  defaultValue: unknown
  render: ControllerProps['render']
  rules?: RegisterOptions
}
