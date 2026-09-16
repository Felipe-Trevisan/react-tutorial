import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContex.jsx";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <h1>Página Inicial</h1>
    </div>
  );
};

export default Home;
