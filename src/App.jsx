import './App.css'
import ThemeToggleButton from './components/ThemeToggleButton'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  
  return (
  <ThemeProvider>
    <div>
      <nav>Menu de Navegação</nav>
      <ThemeToggleButton></ThemeToggleButton>
    </div>
  </ThemeProvider>
  )
}

export default App
