import styled from 'styled-components';

export const AlignTaskFormsContainers = styled.div`
 display: flex;
  margin:  auto;
  width: 100%;
  height: 100%;
  position: absolute;
  align-items: center;
  margin-left: 28px;
`;

export const TaskFormsContainer = styled.div`
 display: flex;
 width: 100%;
 flex-direction: column;
 position: relative;
 margin-top: 95px;
 margin-left: 20px;
 margin-bottom: 420px;
 position: relative;
 z-index: 1;
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

  font-family: 'Poppins', sans-serif;
  font-weight: 400;

  &::placeholder {
   color: ${(props) => props.theme.colors['brand-placeholder-text']};
   opacity: 0.8;

   font-family: 'Poppins', sans-serif;
   font-weight: 400;
  }
`;

export const TaskFormJobText = styled.input`
  width: 96%;
  height: 104px;
  border-radius: 13px;
  padding-bottom: 63px;
  padding-left: 15px;

  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  border: 1px solid ${(props) => props.theme.colors['brand-color-button']};

  &::placeholder {
   color: ${(props) => props.theme.colors['brand-placeholder-text']};
   opacity: 0.8;

   font-family: 'Poppins', sans-serif;
   font-weight: 400;
  }
`;

export const CharactersPerTask = styled.div`
   display: flex;
   justify-content: flex-end;
   color: ${(props) => props.theme.colors['brand-text']};
   margin-top: 35px;
   margin-right: 84px;

   font-family: 'Poppins', sans-serif;
   font-weight: 400;
`;

export const TaskButton = styled.button`
  display: flex;
  width: 95px;
  height: 45px;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  background: ${(props) => props.theme.colors['brand-color-button']};
  color: ${(props) => props.theme.colors['base-button']};
`;