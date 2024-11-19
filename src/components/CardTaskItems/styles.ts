import styled from 'styled-components';

export const CardTaskItemsContainer = styled.div`
  width: 98%;
  height: 732px;
  position: absolute;
  bottom: 32px;
  margin-left: 18px;
  border-radius: 6px;
  z-index: 1;
  background: ${(props) => props.theme.colors['base-input-background']};
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3); 
`
