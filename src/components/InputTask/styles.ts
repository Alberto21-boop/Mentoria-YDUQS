import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 98%;
  margin-left: 18px;
  background: ${(props) => props.theme.colors['base-input-background']};
  border-radius: 10px;
  margin-top: 25px;
  padding-left: 10px;
`;

export const InputField = styled.input`
  width: 100%;
  height: 55px;
  padding-right: 50px; /* Espaço para o botão */
  border-radius: 10px;
  border: none;
  background: ${(props) => props.theme.colors['base-input-background']};
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 10px; /* Alinhamento à direita do input */
  top: 50%;
  transform: translateY(-50%);
  z-index: 1; /* Garante que o botão fique sobre o input */
`;
