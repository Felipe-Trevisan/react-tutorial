import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const UsuarioDetalhe = () => {

    const { id } = useParams();
    const [usuario, setUsuario] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    (true)

    useEffect(() => {
        async function buscarUsuario() {
            try {
                setIsLoading(true);
                const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                const jsonData = await data.json();
                setUsuario(jsonData);
            } catch (erro) {
                console.error("Erro ao buscar usuário:", erro);
            } finally {
                setIsLoading(false);
            }
        
        }
        buscarUsuario();
    }, [id]);

    return(
        <div>
            <h2>Detalhes do Usuário</h2>
            {isLoading ? (
                <p>Carregando...</p>
            ) : usuario ? (
                <div>
                    <p>ID: {usuario.id}</p>
                    <p>Nome: {usuario.name}</p>
                    <p>Email: {usuario.email}</p>
                    <p>Telefone: {usuario.phone}</p>
                    <p>Website: {usuario.website}</p>
                    <p>Empresa: {usuario.company?.name}</p>
                    
                </div>
            ) : (
                <p>Usuário não encontrado.</p>
            )}
        </div>
    )
}

export default UsuarioDetalhe;
