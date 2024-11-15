import { CardTask } from './components/CardTask';
import { HomeBackground, HomeContainer } from './styles';

export function Home() {
    const task = "Estudar React"; // Uma string com a tarefa
    const completed = false; // Status da tarefa (true ou false)
    const onToggle = () => {
        console.log("Toggle task status"); // Função para alternar o status
    };
    return (
        <HomeBackground>
            <HomeContainer>
                <CardTask task={task} completed={completed} onToggle={onToggle} />
            </HomeContainer>
        </HomeBackground>
    );
}