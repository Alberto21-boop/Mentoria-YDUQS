import { TaskForms } from './components/TaskForms';
import { NewTaskContainer } from './styles';

export function NewTask() {
    return (
        <NewTaskContainer>
            <TaskForms />
        </NewTaskContainer>
    );
}