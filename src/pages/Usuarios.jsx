import useSWR from "swr";
import { fetcher } from "../fetcher";
import { Link } from "react-router-dom";

const Usuarios = () => {
const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);

  return (
    <div>
      <h1>Usuarios</h1>
      <p>Dados dos usuarios</p>
      {error && <p>Erro: {error.message}</p>}
      {isLoading && <p>Carregando...</p>}
      {data && <p>{JSON.data}</p>}

      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            <Link to={`/usuarios/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Usuarios;