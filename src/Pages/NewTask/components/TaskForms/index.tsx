import { TaskFormJobText, TaskFormsContainer, TaskFormTitle, TaskFormTitleJob, TaskTitleText } from './styles';

export function TaskForms() {
    return (
        <TaskFormsContainer>
            <TaskFormTitle>
                Criar uma nova tarefa
            </TaskFormTitle>

            <TaskTitleText>Titulo</TaskTitleText>
            <TaskFormTitleJob placeholder='Digite o titulo da tarefa ...' />

            <TaskTitleText>Descrição</TaskTitleText>
            <TaskFormJobText placeholder='Digite a descrição da tarefa ....' />

        </TaskFormsContainer>
    );
}