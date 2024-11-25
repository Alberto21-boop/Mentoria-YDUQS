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
    // onToggle: (id: string | number) => void; // de onde ele vem e para que ele serve estudar isso ele tem que ser criado dentro do componente
}

export function CardTask({ task }: CardTaskProps) {

    return (
        <div>

            {/* aqui é de atualizar a tarefa e o de deletar a tarefa  */}
            {/* um card rederiza apenas uma tarefa */}
            {/* não faz sentindo isso aqui  */}

            <CardContainer key={task.id} completed={task.status}
            // Aqui o status da tarefa define o estilo do card
            // onClick={() => onToggle(task.id)} // Chama a função `onToggle` com o ID da tarefa
            >
                {/* criar uma função card task ontogle */}
                <AlignTextCard>
                    <TextTitle>{task.title}</TextTitle>
                    <TaskParagraph>
                        {task.description}
                        <p>Status: {task.status ? 'Concluído' : 'Pendente'}</p>
                        {/* Fazer navegação pegando o id da task */}
                    </TaskParagraph>
                    <ButtonContainer>
                        <IconButton
                            id={task.id}
                            status={task.status}
                        />

                    </ButtonContainer>
                </AlignTextCard>
            </CardContainer>

        </div >
    );
}


