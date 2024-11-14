import { useNavigate } from 'react-router-dom';

export function ErrorActionButton() {
    const navigate = useNavigate();

    const HandleGoToHome = () => {
        navigate('/')
    }
    return (
        <>
            <button onClick={HandleGoToHome}>Voltar para pagina inicial</button>
        </>
    );
}