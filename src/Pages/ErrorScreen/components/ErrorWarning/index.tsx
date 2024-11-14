import { useNavigate } from 'react-router-dom';

export function ErrorWarning() {
    const navigate = useNavigate();

    const HandleGoToHome = () => {
        navigate('/')
    }
    return (
        <>
            <h1>Opss! Página não encontrada...</h1>
            <h3>Não Conseguimos encontrar a página solicitada!</h3>

            <button onClick={HandleGoToHome}>Voltar para pagina inicial</button>
        </>
    );
}