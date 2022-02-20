import { ThemeProvider } from '@/core/theme'
import { LoginPage } from '@/login/components'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LoginPage />
    </ThemeProvider>
  )
}

export default App
