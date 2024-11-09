import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 64px;
  position: fixed;
  justify-content: space-between;
  background: ${(props) => props.theme.colors['base-background-screen']};
  border: 1px solid ${(props) => props.theme.colors['base-screen']};
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  z-index: 1000;
  margin-bottom: 20px;
`;

export const HeaderLeftSpell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding-left: 20px;
  gap: 18px;
`;

export const LettersOnTheLeft = styled.div`
  width: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors['brand-LettersOnTheLeft']};
  font-size: ${(props) => props.theme.textSizes['title-title-m']};
`;

export const LettersInTheCenter = styled.div`
  width: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors['brand-LettersInTheCenter']};
  font-size: ${(props) => props.theme.textSizes['title-title-m']};
`;

export const LettersOnTheRight = styled.div`
  width: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors['brand-LettersOnTheRig']};
  font-size: ${(props) => props.theme.textSizes['title-title-m']};
`;

export const HeaderElementsOnTheRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const HeaderProfile = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background: ${(props) => props.theme.colors['brand-HeaderProfile']};
`;

export const HeaderProfileName = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.textSizes['title-title-m']};
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  padding-right: 20px;
`;