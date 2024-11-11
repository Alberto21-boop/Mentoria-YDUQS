import { CardContainer } from './styles';

interface CardTaskProps {
    task: string;
    completed: boolean;
    onToggle: () => void;
}

export function CardTask({ task, completed, onToggle }: CardTaskProps) {
    return (
        <CardContainer completed={completed} onClick={onToggle}>
            {task}
        </CardContainer>
    );
}