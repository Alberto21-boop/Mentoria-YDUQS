import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  width: 121px;
  height: 35px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border: none;

  background: ${(props) => props.theme.colors['brand-color-button']};
  color: ${(props) => props.theme.colors['base-input-background']};

  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
`;