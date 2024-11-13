import styled from 'styled-components';

interface CardContainerProps {
    completed: boolean;
}


export const CardContainer = styled.div<CardContainerProps>`
  width: 320px;
  height: 150px;
  border-radius: 5px;
  background-color: ${(props) => (props.completed ? 'green' : 'red')};
  color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        opacity: 0.8;
    }
`;