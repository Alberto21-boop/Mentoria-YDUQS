import { IconButton } from '../IconButton';
import { AlignTextCard, ButtonContainer, CardContainer, TaskParagraph, TextTitle } from './styles';

export interface Task {
    id: string | number;
    title: string;
    description?: string;
    status: boolean;
}
interface CardTaskProps {
    task: Task;
    onToggle: () => void;
}

export function CardTask({ task, onToggle }: CardTaskProps) {
    return (
        <CardContainer completed={task.status} onClick={onToggle}>
            <AlignTextCard>
                <TextTitle>
                    {task.title}
                </TextTitle>
                <TaskParagraph>
                    {task.description}
                    {/* fazer navegação pegando o id da task */}
                </TaskParagraph>
                <ButtonContainer>
                    <IconButton />
                </ButtonContainer>
            </AlignTextCard>
        </CardContainer>
    );
}