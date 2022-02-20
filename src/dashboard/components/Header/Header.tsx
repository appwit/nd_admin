import { Burger, Header as MantineHeader, MediaQuery, Text } from '@mantine/core'

import { useStyles } from './Header.styles'

const Header: React.FC<HeaderProps> = ({ opened, setOpened }) => {
  const { classes, theme } = useStyles()

  return (
    <MantineHeader fixed className={classes.header} height={theme.other.headerHeight}>
      <div className={classes.container}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Text>Application header</Text>
      </div>
    </MantineHeader>
  )
}

interface HeaderProps {
  opened: boolean
  setOpened: React.Dispatch<React.SetStateAction<boolean>>
}

export default Header
