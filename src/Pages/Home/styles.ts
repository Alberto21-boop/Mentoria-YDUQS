import styled from 'styled-components';

export const HomeBackground = styled.div`
  display: flex;
  width: 100%;
  padding-top: 64px;
  background: ${(props) => props.theme.colors['base-background-screen']};
`;

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
`