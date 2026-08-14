import { useState } from "react";
import TarefasLista from "./TarefasLista";
import TarefasForm from "./TarefasForm";

const AppTarefas = () => {
const [tarefas, setTarefas] = useState([]);

const addTarefa = (texto) =>{
    const novaTarefa = {
        id: Date.now(),
        texto: texto,
    };
    setTarefas([...tarefas, novaTarefa]);
}

const editTarefa = (id, novoTexto)=>{
    setTarefas(tarefas.map( tarefa => tarefa.id === id ? {...tarefa, texto: novoTexto} : tarefa ));
}

const deleteTarefa = (id) =>{
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
}

    return (
        <div>
            <h1>
                💡 Keepão React
            </h1>
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHM4NnprNGtyZ2g4emFlbDNzZ3VpcGZmN2oyOWwzZTVweDRoenlmMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Wghm9HSvpkMSs/giphy.gif" alt="" />
            <TarefasForm onAddTarefa={addTarefa}/>
            <TarefasLista tarefas={tarefas} onEditTarefa={editTarefa} onDeleteTarefa={deleteTarefa} />
            
        </div>
    );
}

export default AppTarefas