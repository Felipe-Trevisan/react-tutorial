import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Paragrafo from './Paragrafo.jsx'
import AppTarefas from './AppTarefas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppTarefas/>
    {/* <App /> */}
  </StrictMode>,
)
