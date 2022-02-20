import { createStyles } from '@mantine/core'

import bgImage from '@/assets/football.jpg'

export const useStyles = createStyles((theme) => ({
  container: {
    height: '100vh',
  },
  leftCol: {
    backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.25)
    ),
    url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      display: 'none',
    },
  },
  rightCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.sm,
  },
}))
