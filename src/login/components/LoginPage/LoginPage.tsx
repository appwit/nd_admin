import { Grid, Paper, Title } from '@mantine/core'

import logo from '@/assets/icon.png'
import { LoginForm } from '@/login/components'
import { useStyles } from '@/login/components/LoginPage/LoginPage.styles'

const LoginPage: React.FC = () => {
  const { classes } = useStyles()

  return (
    <Grid className={classes.container} columns={12}>
      <Grid.Col className={classes.leftCol} xs={4} sm={6} lg={8} />

      <Grid.Col className={classes.rightCol} xs={8} sm={6} lg={4}>
        <Paper className={classes.formContainer}>
          <img src={logo} alt="Logo" width="100px" />
          <Title order={1}>Inicia Sesión</Title>
          <LoginForm />
        </Paper>
      </Grid.Col>
    </Grid>
  )
}

export default LoginPage
