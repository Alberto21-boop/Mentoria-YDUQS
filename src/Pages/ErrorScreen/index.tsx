import { useState } from 'react';
import { ErrorScreenContainer } from './styles';

export function ErrorScreen() {
    const [iten, setItem] = useState('ola mundo')

    let a = 35
    let b = 50

    let c = a + b

    return (
        <ErrorScreenContainer>
            <h1>Tela de Erro{c}</h1>
        </ErrorScreenContainer>
    );
}