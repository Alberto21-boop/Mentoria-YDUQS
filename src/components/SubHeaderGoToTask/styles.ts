import styled from 'styled-components';

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 98%;
  height: 55px;
  margin-left: 18px;
  background: ${(props) => props.theme.colors['base-input-background']};
  border-radius: 10px;
  margin-top: 25px;
  padding-left: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2); 
`;



export const ButtonWrapper = styled.div`
  position: absolute;
  right: 10px; /* Alinhamento à direita do input */
  //top: 50%;
  //transform: translateY(-50%);
  //z-index: 1; /* Garante que o botão fique sobre o input */
`;
