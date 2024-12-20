import { useEffect, useState } from 'react';
import { CardTask } from './components/CardTask';
import { HomeContainerCards, HomeContainerCardsPosition } from './styles';


export interface Task {
    id: string | number;
    title: string;
    description?: string;
    status: boolean;
}

export function Home() {
    const [tasks, setTasks] = useState<Task[]>([]); // Estado para armazenar as tarefas


    const fetchTasks = async () => {
        const response = await fetch(`http://localhost:3000/tasks`)
        return await response.json()
    }

    useEffect(() => {
        fetchTasks().then(response => setTasks(response))
    }, []);

    const onUpdateStatus = (id: string | number, newStatus: boolean) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, status: newStatus } : task
            )
        );
    };

    const onDeleteTask = (id: string | number) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };


    // if (loading) {
    //     return <div>Carregando tarefas...</div>;
    // }

    // if (error) {
    //     return <div>Erro: {error}</div>;
    // }

    // if (tasks.length === 0) {
    //     return <div>Nenhuma tarefa encontrada.</div>;
    // }

    return (
        <HomeContainerCards>
            <HomeContainerCardsPosition>
                {tasks.map((task) => (
                    <CardTask key={task.id} task={task} onUpdateStatus={onUpdateStatus} onDeleteTask={onDeleteTask} />
                ))}
            </HomeContainerCardsPosition>
        </HomeContainerCards>
    );
}
