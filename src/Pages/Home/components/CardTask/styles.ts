import styled from 'styled-components';

interface CardContainerProps {
    completed: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 320px;
  height: 150px;
  border-radius: 5px;
  margin-left: 26px;
  margin-top: -16px;
  z-index: 1;
  background-color: ${(props) => (props.completed ? 'green' : 'red')};
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5); 
  color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        opacity: 0.8;
    }
`;

export const AlignTextCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-left: 20px;
  margin-top: 18px;
`;

export const TextTitle = styled.div`
  display: flex;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
`;

export const TaskParagraph = styled.div`
  display: flex;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
  margin-right: 18px;
`;