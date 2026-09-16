import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContex.jsx";

const Sobre = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <h1>Sobre Nós</h1>
      <p>Esta é a página sobre o nosso aplicativo.</p>
    </div>
  );
};

export default Sobre;
