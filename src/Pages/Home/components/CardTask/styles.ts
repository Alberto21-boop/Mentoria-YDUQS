import styled from 'styled-components';

interface CardContainerProps {
    completed: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  position: relative;
  display: flex;
  width: 320px;
  height: 150px;
  border-radius: 5px;
  border: 2px solid blue; 
  background-color: yellow;
  position: absolute;
  z-index: 1;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  margin-top: 0px;
  background-color: ${(props) => (props.completed ? 'green' : 'red')};
  color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        opacity: 0.8;
    }
`;