import { AppShell } from '@mantine/core'
import { useState } from 'react'

import { Header, Navbar } from '@/dashboard/components'

import { styles, useStyles } from './Dashboard.styles'

const Dashboard: React.FC = () => {
  const { classes } = useStyles()
  const [opened, setOpened] = useState(false)

  return (
    <AppShell
      padding="md"
      fixed
      className={classes.dashboard}
      styles={styles}
      navbar={<Navbar opened={opened} />}
      header={<Header opened={opened} setOpened={setOpened} />}
    >
      Content goes here
    </AppShell>
  )
}

export default Dashboard
