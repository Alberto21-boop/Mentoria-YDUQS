import { ButtonTask } from '../ButtonTask';
import { ButtonWrapper, InputContainer, InputField } from './styles';

export function InputTask() {
    return (
        <InputContainer>
            <InputField placeholder=" " />
            <ButtonWrapper>
                <ButtonTask />
            </ButtonWrapper>
        </InputContainer>
    );
}