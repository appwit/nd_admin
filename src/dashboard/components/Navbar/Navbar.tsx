import { Navbar as MantineNavbar, ScrollArea, Transition } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'

import { useStyles } from './Navbar.styles'

const Navbar: React.FC<NavbarProps> = ({ opened }) => {
  const { classes, theme, cx } = useStyles()
  const { width: screenWidth } = useViewportSize()

  return (
    <Transition
      mounted={opened || screenWidth > theme.breakpoints.sm}
      transition="slide-down"
      duration={400}
      timingFunction="ease"
    >
      {(styles) => (
        <MantineNavbar
          className={cx({ [classes.opened]: opened })}
          fixed
          padding={10}
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ base: theme.other.navbarWidth }}
          style={styles}
        >
          <MantineNavbar.Section mt="xs">BRANDING</MantineNavbar.Section>

          <MantineNavbar.Section
            grow
            component={ScrollArea}
            ml={-10}
            mr={-10}
            sx={{ paddingLeft: 10, paddingRight: 10 }}
          >
            {/* scrollable content here */}
            Scrollable content goeas here
          </MantineNavbar.Section>

          <MantineNavbar.Section>NAVBAR FOOTER</MantineNavbar.Section>
        </MantineNavbar>
      )}
    </Transition>
  )
}

interface NavbarProps {
  opened: boolean
}

export default Navbar
