import styled from 'styled-components';

export const HomeBackground = styled.div`

  display: grid;
  //width: 100%;
  padding-top: 64px;
  min-height: 100vh;
  background: ${(props) => props.theme.colors['base-background-screen']};

  /* grid-template-columns: 1fr; 
  justify-items: center; 
  align-items: start;  */
`;

export const HomeContainer = styled.div`
  width: 100%;
  padding: 20px; 
  align-items: center;
  position: relative;
`