import { TaskForms } from './components/TaskForms';
import { NewTaskContainer } from './styles';

export function Task() {
    return (
        <NewTaskContainer>
            <TaskForms />
        </NewTaskContainer>
        // fazer logica se houver id ele carrega a task e se não houver id carrega para preencher
    );
}