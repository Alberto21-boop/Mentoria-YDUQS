import { ButtonTask } from '../ButtonTask';
import { ButtonWrapper, TaskContainer } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';

// interface Task {
//     text: string;
//     completed: boolean;
// }

export function SubHeaderGoToTask() {
    // const [task, setTask] = useState<string>(''); // Define `task` como string
    // const [tasks, setTasks] = useState<Task[]>([]); // Define `tasks` como lista de strings
    const navigate = useNavigate();
    const location = useLocation();
    const isOnTasksPage = location.pathname === '/task';

    const HandlegoToTasksPage = () => {
        navigate('/task'); // Rota para a página de tarefas
    };

    const HandlegoToTasksPageHome = () => {
        navigate('/'); // Rota para a página de tarefas
    };

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setTask(e.target.value);
    // };

    // const addTask = () => {
    //     if (task.trim() !== '') {
    //         setTasks([...tasks, { text: task, completed: false }]); // Adiciona uma nova tarefa com `text` e `completed`
    //         setTask('');
    //     }
    // };

    // const toggleTaskCompletion = (index: number) => {
    //     setTasks((prevTasks) =>
    //         prevTasks.map((t, i) => i === index ? { ...t, completed: !t.completed } : t)
    //     );
    // };

    return (
        <>
            {(location.pathname === '/' || location.pathname.includes('/task')) &&
                <TaskContainer>
                    <ButtonWrapper>
                        {!isOnTasksPage ? (
                            <>
                                <ButtonTask onClick={HandlegoToTasksPage}>Adicionar Tarefa</ButtonTask>
                            </>
                        ) : (
                            <>
                                <ButtonTask onClick={HandlegoToTasksPageHome}>Ver Tarefas</ButtonTask>
                            </>
                        )}

                    </ButtonWrapper>
                </TaskContainer>
            }


        </>
    );
}
