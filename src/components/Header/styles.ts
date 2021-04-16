import styled from 'styled-components';

export const Container = styled.header`
  position:fixed;
  background: ${({theme})=>theme.color.main};
  height:4rem;
  border-bottom: 1px solid ${({theme})=>theme.color.gray_800};
  width:100%;
.headerContent{
  max-width: 1120px;
  height: 4rem;
  margin: 0 auto;
  padding:0 2rem;

  display:flex;
  align-items:center;
  justify-content:space-between;
  .logo{
    font: ${({theme})=>theme.texts.main_strong};
    font-size: 1.5rem;
    small{
    font-size: 1.5rem;
    }
  }

  nav{
    margin-left: 5rem;
    height: 4rem;

    a{
       display: inline-block;
       position: relative;
       padding: 0 0.5rem;
       height: 4rem;
       line-height: 4rem;
       color: ${({theme})=>theme.color.gray_500};

       transition: color 0.2s;

       & + a{
         margin-left: 2rem;
       }

       &:hover{
         color:var${({theme})=>theme.color.gray_900};
       }
       &.active{
         color: ${({theme})=>theme.color.gray_500};
         font-weight: bold;
       }
       &.active::after{
         content: '';
         height: 3px;
         border-radius:3px 3px 0 0;
         width:100%;
         position: absolute;
         left: 0;
         bottom: 1px;
         background: ${({theme})=>theme.color.gray_500};
       }
    }
  }
}

`
