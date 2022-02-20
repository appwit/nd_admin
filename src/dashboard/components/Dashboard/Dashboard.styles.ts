import type { CSSObject, MantineTheme } from '@mantine/core'
import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  dashboard: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
  },
}))

export const styles: AppShellStyles = (theme) => ({
  main: {
    paddingTop: theme.other.headerHeight + theme.spacing.sm,
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      marginLeft: `${theme.other.navbarWidth}px`,
    },
  },
})

type AppShellStyles =
  | Partial<Record<'body' | 'main' | 'root', CSSObject>>
  | ((theme: MantineTheme) => Partial<Record<'body' | 'main' | 'root', CSSObject>>)
  | undefined
