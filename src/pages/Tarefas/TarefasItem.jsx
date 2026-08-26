import { useState } from "react";

const TarefasItem = ({ tarefa, onEditTarefa, onDeleteTarefa }) =>{

const [isEditing, setIsEditing] = useState(false);
const [novoTexto, setNovoTexto] = useState(tarefa.texto);

const handleEdit = () =>{
    if(isEditing){
        if(novoTexto.trim()){
            onEditTarefa(tarefa.id, novoTexto);
        }
        setIsEditing(false);
    }else{
        setIsEditing(true);
    }
}

const handleDelete = () =>{
    onDeleteTarefa(tarefa.id);
}



return(
    <li>
        <img src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YTh6Yzl2bDA2aGI4cHQydWc2eDd1eXh4Z241eWMxemJiNGl6enBkciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JuqDes49CeCeQ/giphy.gif" alt="" />
        <br />
        {isEditing ? (<input type="text"
        value={tarefa.novoTexto} onChange={(e) => {setNovoTexto(e.target.value)}} onKeyDown={(e) =>{if (e.key === "Enter"){handleEdit();}}}/>): (<>{tarefa.texto}</>)}
        <button onClick={handleDelete}>🚯</button>
        <button onClick={handleEdit}>🪠</button>
        <br />
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHM4NnprNGtyZ2g4emFlbDNzZ3VpcGZmN2oyOWwzZTVweDRoenlmMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Wghm9HSvpkMSs/giphy.gif" alt="" />
    </li>
);
}

export default TarefasItem