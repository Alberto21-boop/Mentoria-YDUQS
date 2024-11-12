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
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3); 
  z-index: 1;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 10px; 
`;
