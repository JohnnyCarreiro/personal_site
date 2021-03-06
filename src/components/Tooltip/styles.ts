import styled from 'styled-components';

export const Container = styled.div`
  position:relative;

span{
  width:180px;
  background:${({theme})=>theme.color.secondary};
  padding:8px;
  border-radius:4px;
  font-size:14px;
  font-weight:500;

  opacity:0;
  transition: opacity 0.4s;
  visibility:hidden;

  position:absolute;
  bottom:calc(100% + 12px);
  left:50%;
  transform: translateX(-50%);
  color: #312e38;

  &::before{
    content:'';
    border-style:solid;
    border-color:${({theme})=>theme.color.secondary} transparent;
    border-width: 6px 6px 0 6px;
    position:absolute;
    top:100%;
    left:50%;
    transform: translateX(-50%);

  }
}
&:hover span{
  opacity:1;
  visibility:visible;
}
`;
