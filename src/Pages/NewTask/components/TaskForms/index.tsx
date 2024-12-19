import { useNavigate, useParams } from 'react-router-dom';
import {
    AlignTaskFormsContainers,
    CharactersPerTask,
    TaskButton,
    TaskFormJobText,
    TaskFormsContainer,
    TaskFormTitle,
    TaskFormTitleJob,
    TaskTitleText,
} from './styles';
import { useEffect, useState } from 'react';

interface Task {
    id: string;
    title: string;
    description?: string;
    concluido: boolean;
}

export function TaskForms() {
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/tasks')
            .then((response) => response.json())
            .then((data: Task[]) => {
                const task = data.find((task) => task.id === id);
                if (task) {
                    setTitle(task.title || '');
                    setDescription(task.description || '');
                }
            });
    }, [id]);

    const handleTaskSubmit = () => {
        fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'PATCH', // Atualiza campos específicos
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title, // Atualiza o título
                description, // Atualiza a descrição
            }),
        })
            .then((response) => {
                if (response.ok) {
                    navigate('/');
                }
            })
            .catch((error) => {
                console.error('Erro:', error);
            });
    };


    const handleCreateTask = () => {
        fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                description,
                concluido: false,
            }),
        })
            .then((response) => {
                if (response.ok) {

                    navigate('/');
                } else {

                }
            })
            .catch((error) => {
                console.error('Erro ao criar tarefa:', error);

            });
    };


    return (
        <AlignTaskFormsContainers>
            <TaskFormsContainer>
                {id ? (
                    <TaskFormTitle >
                        Altere a tarefa

                    </TaskFormTitle>
                ) : (
                    <TaskFormTitle >
                        Criar uma nova tarefa
                    </TaskFormTitle>
                )}

                <TaskTitleText>Titulo</TaskTitleText>
                <TaskFormTitleJob
                    placeholder="Digite o titulo da tarefa ..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value.slice(0, 30))}
                />

                <TaskTitleText>Descrição</TaskTitleText>
                <TaskFormJobText
                    placeholder="Digite a descrição da tarefa ...."
                    value={description}
                    onChange={(e) => setDescription(e.target.value.slice(0, 50))} // aqui limitamos o tamanho do texto até 50 caracteres
                //para falar a verdade aqui limitamos qualquer texto
                />

                <CharactersPerTask>
                    {description.length} de 50 caracteres
                </CharactersPerTask>

                {id ? (
                    <TaskButton onClick={handleTaskSubmit}>
                        Confirmar alteração
                    </TaskButton>
                ) : (
                    <TaskButton onClick={handleCreateTask}>
                        Criar tarefa
                    </TaskButton>
                )}

            </TaskFormsContainer >
        </AlignTaskFormsContainers>
    );
}
