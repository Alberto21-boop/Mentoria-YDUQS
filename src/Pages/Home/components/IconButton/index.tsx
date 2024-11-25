import { useNavigate } from 'react-router-dom';
import { CardIconButton, IconButtonContainer } from './styles';
import { Pencil, Trash, ArrowsClockwise } from 'phosphor-react';
import { useState } from 'react';

export interface IconButtonProps {
    id: string | number;
    status: boolean;
    onUpdateStatus: (id: string | number, newStatus: boolean) => void; // Callback para atualizar o status
    onDeleteTask: (id: string | number) => void;
}

export function IconButton({ id, status, onUpdateStatus, onDeleteTask }: IconButtonProps) {
    const [currentStatus, setCurrentStatus] = useState(status); // Estado local para refletir alterações
    const navigate = useNavigate()

    //navigate no botão

    //criar três funções , 
    //const atualizarStatus = async => {}

    //Editar => ir para pagina do formulario com o id

    //Excluir = deletarTarefa => async (id) => {}

    //Atualizar = atualizarStatus = async => {}

    const handleGoToTask = () => {
        navigate(`/task/${id}`)
    }

    const handleUpdateStatus = async () => {
        const updatedStatus = !currentStatus; // Inverte o status local
        setCurrentStatus(updatedStatus); // Atualiza localmente de imediato

        const response = await fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: updatedStatus }),
        });

        if (response.ok) {
            onUpdateStatus(id, updatedStatus); // Notifica o componente pai
        } else {
            setCurrentStatus(!updatedStatus); // Reverte o estado em caso de erro
        }
    };

    const handleDeleteTask = async () => {
        const response = await fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            onDeleteTask(id); // Notifica o componente pai sobre a exclusão
        }
    };


    return (
        <IconButtonContainer>
            <CardIconButton>
                <Pencil
                    onClick={handleGoToTask} // Navega para a rota da tarefa
                    size={20}
                    color="#007bff"
                    weight="duotone"
                />
            </CardIconButton>
            <CardIconButton>
                <Trash
                    onClick={handleDeleteTask} // Liga o clique ao evento de exclusão
                    size={20}
                    color="#ff0000"
                    weight="bold" />
            </CardIconButton>
            <CardIconButton>
                <ArrowsClockwise
                    onClick={handleUpdateStatus}
                    size={20}
                    color="#333"
                    weight="bold" />
            </CardIconButton>
        </IconButtonContainer>
    );
}