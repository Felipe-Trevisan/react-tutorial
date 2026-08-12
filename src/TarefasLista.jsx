import TarefasItem from "./TarefasItem";

const TarefasLista = ({tarefas}) =>{
    return(
        <ul>
            {tarefas.map((tarefa)=>{
                return <TarefasItem key={tarefa.id} tarefa={tarefa}/>
            })}
        </ul>
    );
}

export default TarefasLista;