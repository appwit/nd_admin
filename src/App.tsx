import { ThemeProvider } from '@/core/theme'
import { Dashboard } from '@/dashboard/components'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  )
}

export default App
