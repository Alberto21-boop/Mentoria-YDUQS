import { useNavigate } from 'react-router-dom';
import { CardIconButton, IconButtonContainer } from './styles';
import { Pencil, Trash, ArrowsClockwise } from 'phosphor-react';
import { useEffect, useState } from 'react';

export interface IconButtonProps {
    id: string | number;
    status: boolean;
}

export function IconButton({ id, status }: IconButtonProps) {
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
        const updatedStatus = !status; // Inverte o status atual
        await fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: updatedStatus }),
        });
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
                <Trash size={20} color="#ff0000" weight="bold" />
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