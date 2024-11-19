import styled from 'styled-components';

export const IconButtonContainer = styled.div`
 display: flex;
 gap: 18px;
`;

export const CardIconButton = styled.div`
 display: flex;
 width: 30px;
 height: 30px;
 border-radius: 5px;
 justify-content: center;
 align-items: center;
 background-color: ${(props) => props.theme.colors['base-input-background']};
`;