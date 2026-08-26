import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const ThemeToggleButton = () =>{
    const {theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>
            Mudar para {theme === 'light' ? 'Escuro' : 'Claro'}
        </button>
    )
}

export default ThemeToggleButton;