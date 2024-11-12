import styled from 'styled-components';

export const CardTaskItemsContainer = styled.div`
  width: 98%;
  height: 715px;
  margin-left: 18px;
  margin-top: 18px;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['base-input-background']};
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3); 
  z-index: 1;
`
