import styled from 'styled-components';

export const NewTaskContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Define uma coluna central */
  justify-items: center; /* Centraliza os itens na coluna */
  align-items: start; /* Alinha os itens ao topo */

  width: 100%;
  height: 100vh;
  padding-top: 64px;
  background: ${(props) => props.theme.colors['base-background-screen']};

  grid-template-columns: 1fr; /* Define uma coluna que ocupa todo o espaço */
  justify-items: center; /* Centraliza os itens horizontalmente */
  align-items: start; /* Alinha os itens ao topo da coluna */
  
`;