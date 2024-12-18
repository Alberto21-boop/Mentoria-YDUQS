import { ButtonTask } from '../ButtonTask';
import { ButtonWrapper, TaskContainer } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';

export function Menu() {
    const navigate = useNavigate();
    const location = useLocation();
    const isOnTasksPage = location.pathname === '/task';

    const HandlegoToTasksPage = () => {
        navigate('/task'); // Rota para a página de tarefas
    };

    const HandlegoToTasksPageHome = () => {
        navigate('/'); // Rota para a página de tarefas
    };

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
