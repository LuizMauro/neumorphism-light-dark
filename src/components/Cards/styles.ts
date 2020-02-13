import  styled from 'styled-components';

export const Container = styled.div`
  width:200px;
  margin:0 auto;
  margin-top:100px;
  margin-bottom:25px;
  height:200px;
  background:${ props => props.theme.colors.cardColor };
  color:${ props => props.theme.colors.text };
  font-weight:600;
  display:flex;
  padding:0px 50px;
  justify-content:space-between;
  align-items:center;
  box-shadow: -6px -6px 6px 0px ${ props => props.theme.colors.sombraBranca },
    6px 6px 6px 0px ${ props => props.theme.colors.sombraEscura };
    border-radius: 10px;
`;
