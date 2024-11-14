import styled from 'styled-components';

export const ErrorScreenContainer = styled.div`
  width: 98%;
  height: 810px;
  margin-left: 18px;
  margin-top: 90px;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['base-input-background']};
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3); 

  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-top: 180px; */
`