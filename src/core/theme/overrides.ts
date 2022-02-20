import type { MantineProviderProps } from '@mantine/core'

type ProviderStyles = MantineProviderProps['styles']

export const overrides: ProviderStyles = {
  Button: (_theme) => ({
    root: { textTransform: 'uppercase' },
  }),
}
