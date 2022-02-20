import type { MantineProviderProps, MantineTheme } from '@mantine/core'

type ProviderStyles = MantineProviderProps['styles']

const defaultInputStyles = (theme: MantineTheme) => ({
  input: {
    '&:focus, &:focus-within': {
      outline: 'none',
      borderColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 4] + ' !important',
    },
  },
  invalid: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
  },
  label: { fontWeight: 'bold' },
})

export const overrides: ProviderStyles = {
  Button: () => ({
    root: { textTransform: 'uppercase' },
  }),
  TextInput: defaultInputStyles,
  PasswordInput: defaultInputStyles,
}
