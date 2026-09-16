import useSWR from "swr";
import { fetcher } from "../fetcher";

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
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Usuarios;