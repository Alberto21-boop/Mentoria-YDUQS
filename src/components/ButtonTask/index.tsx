import { ButtonContainer } from './styles';

interface ButtonTaskProps {
    onClick: () => void;
    children: React.ReactNode;
}

export function ButtonTask({ onClick, children }: ButtonTaskProps) {

    return (
        <ButtonContainer onClick={onClick}>
            {children}
        </ButtonContainer>
    );
}