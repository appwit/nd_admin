import type { ColorScheme } from '@mantine/core'
import { ColorSchemeProvider, MantineProvider, TypographyStylesProvider } from '@mantine/core'
import { useColorScheme, useLocalStorageValue } from '@mantine/hooks'

import theme, { overrides } from '@/core/theme'

const ThemeProvider: React.FC = ({ children }) => {
  // hook will return either 'dark' or 'light' on client
  // and always 'light' during ssr as window.matchMedia is not available
  const preferredColorScheme = useColorScheme()
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: 'themeMode',
    defaultValue: preferredColorScheme,
  })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withNormalizeCSS theme={{ ...theme, colorScheme }} styles={overrides}>
        <TypographyStylesProvider>{children}</TypographyStylesProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default ThemeProvider
