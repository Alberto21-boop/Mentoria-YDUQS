import { CardIconButton, IconButtonContainer } from './styles';
import { Pencil, Trash, ArrowsClockwise } from 'phosphor-react';

export function IconButton() {
    //navigate no botão
    return (
        <IconButtonContainer>
            <CardIconButton>
                <Pencil size={20} color="#007bff" weight="duotone" />
            </CardIconButton>
            <CardIconButton>
                <Trash size={20} color="#ff0000" weight="bold" />
            </CardIconButton>
            <CardIconButton>
                <ArrowsClockwise size={20} color="#333" weight="bold" />
            </CardIconButton>
        </IconButtonContainer>
    );
}