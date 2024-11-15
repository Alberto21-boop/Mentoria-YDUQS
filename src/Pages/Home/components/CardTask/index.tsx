import { AlignTextCard, CardContainer, TaskParagraph, TextTitle } from './styles';

interface CardTaskProps {
    taskTitle: string;
    task: string;
    completed: boolean;
    onToggle: () => void;
}

export function CardTask({ taskTitle, task, completed, onToggle }: CardTaskProps) {
    return (
        <CardContainer completed={completed} onClick={onToggle}>
            <AlignTextCard>
                <TextTitle>
                    {taskTitle}
                </TextTitle>
                <TaskParagraph>
                    {task}
                </TaskParagraph>
            </AlignTextCard>
        </CardContainer>
    );
}