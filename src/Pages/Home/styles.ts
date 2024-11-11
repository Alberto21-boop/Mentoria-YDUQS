import styled from 'styled-components';

export const HomeBackground = styled.div`

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

export const HomeContainer = styled.div`
  width: 100%;
  //max-width: 800px; /* Limita a largura do conteúdo centralizado */
  padding: 20px; 
  align-items: center;
`