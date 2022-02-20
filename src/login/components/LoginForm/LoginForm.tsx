import { Button, PasswordInput, TextInput } from '@mantine/core'
import { useMemo, useState } from 'react'
import type { RegisterOptions } from 'react-hook-form'

import Form from '@/components/Form'
import FormControl from '@/components/FormControl'

export const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const passwordRules = useMemo<RegisterOptions>(() => ({ required: 'Campo Requerido' }), [])
  const emailRules = useMemo<RegisterOptions>(
    () => ({
      required: 'Campo Requerido',
      pattern: {
        value: emailRegex,
        message: 'Correo inválido',
      },
    }),
    []
  )

  const onSubmit = (data: FormFields) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert(JSON.stringify(data, null, 2))
    }, 1500)
  }

  return (
    <Form<FormFields> onSubmit={onSubmit} data-testid="loginForm" style={{ width: '100%' }}>
      <FormControl<FormFields>
        name="email"
        defaultValue=""
        rules={emailRules}
        render={({ field: { ref, ...field }, fieldState: { error } }) => (
          <TextInput
            disabled={loading}
            label="Correo Electrónico"
            id="loginEmail"
            ref={ref}
            error={error?.message}
            {...field}
          />
        )}
      />

      <FormControl<FormFields>
        name="password"
        defaultValue=""
        rules={passwordRules}
        render={({ field: { ref, ...field }, fieldState: { error } }) => (
          <PasswordInput
            disabled={loading}
            label="Contraseña"
            id="loginPassword"
            ref={ref}
            error={error?.message}
            {...field}
          />
        )}
      />

      <Button type="submit" loading={loading} fullWidth style={{ marginTop: 20 }}>
        Enviar
      </Button>
    </Form>
  )
}

interface FormFields {
  email: string
  password: string
}

export default LoginForm
