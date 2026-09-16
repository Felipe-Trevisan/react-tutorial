import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContex";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Usuarios from "./pages/Usuarios";

import AppTarefas from "./pages/Tarefas/AppTarefas";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/tarefas">Tarefas</Link></li>
              <li><Link to="/usuarios">Usuarios</Link></li>
            </ul>
          </nav>
          <ThemeToggleButton />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/tarefas" element={<AppTarefas />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
