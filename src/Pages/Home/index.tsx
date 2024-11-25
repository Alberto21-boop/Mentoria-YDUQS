import { useEffect, useState } from 'react';
import { CardTask } from './components/CardTask';
import { HomeBackground, HomeContainer } from './styles';

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
        <div style={{ display: 'flex', marginTop: '42px' }}>
            <div style={{ display: 'flex', marginTop: '42px' }}>
                {tasks.map((task) => (
                    <CardTask key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
}
