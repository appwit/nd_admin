import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  opened: {
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      display: 'block',
      width: '100%',
      right: 0,
    },
  },
}))
