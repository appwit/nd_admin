import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  header: {
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      marginLeft: `${theme.other.navbarWidth}px`,
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    padding: `0px ${theme.spacing.md}px`,
  },
}))
