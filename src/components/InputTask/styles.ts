import styled from 'styled-components';

export const InputContainer = styled.input`
  display: flex;
  width: 98%;
  height: 55px;
  margin-left: 18px;
  background: ${(props) => props.theme.colors['base-input-background']};
  border: none;
  border-radius: 10px;
  margin-top: 25px;
  padding-left: 10px;
`;