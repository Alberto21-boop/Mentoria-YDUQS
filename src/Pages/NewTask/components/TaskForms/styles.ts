import styled from 'styled-components';

export const TaskFormsContainer = styled.div`
 display: flex;
 width: 100%;
 flex-direction: column;
 position: relative;
 margin-left: 20px;
 margin-bottom: 438px;
`;

export const TaskFormTitle = styled.div`
  color: ${(props) => props.theme.colors['brand-color-button']};
  font-size: ${(props) => props.theme.textSizes['title-title-m']};

  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const TaskTitleText = styled.div`
  color: ${(props) => props.theme.colors['brand-text']};
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const TaskFormTitleJob = styled.input`
  width: 96%;
  height: 40px;
  border-radius: 13px;
  padding-left: 15px;
  margin-bottom: 8px;
  border: 1px solid ${(props) => props.theme.colors['brand-color-button']};

  &::placeholder {
   color: ${(props) => props.theme.colors['brand-placeholder-text']};
   opacity: 0.8;
  }
`;

export const TaskFormJobText = styled.input`
  width: 96%;
  height: 104px;
  border-radius: 13px;
  padding-bottom: 63px;
  padding-left: 15px;
  border: 1px solid ${(props) => props.theme.colors['brand-color-button']};

  &::placeholder {
   color: ${(props) => props.theme.colors['brand-placeholder-text']};
   opacity: 0.8;
  }
`;