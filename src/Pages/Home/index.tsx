import { CardTask } from './components/CardTask';
import { HomeBackground, HomeContainer } from './styles';

export function Home() {
    const taskTitle = "Estudar React" //Uma string titulo da tarefa
    const task = "estudar na DIO hoje"; // Uma string com a tarefa
    const completed = true; // Status da tarefa (true ou false)
    const onToggle = () => {
        console.log("Toggle task status"); // Função para alternar o status
    };
    return (
        <HomeBackground>
            <HomeContainer>
                <CardTask
                    taskTitle={taskTitle}
                    task={task}
                    completed={completed}
                    onToggle={onToggle} />
            </HomeContainer>
        </HomeBackground>
    );
}