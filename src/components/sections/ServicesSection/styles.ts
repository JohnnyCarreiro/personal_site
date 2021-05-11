import styled from 'styled-components'

export const Container = styled.div`
    background: ${({theme})=>theme.color.gray_500};
    padding: 4rem 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;

  .title{
    margin-bottom:2rem;
    > h3 {
      padding-top:2rem;
      line-height:2rem;
    }
  }

  .wrapper{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    max-width:1140px;
    width:100%;
    margin: 0 auto;
  }

  @media screen and (max-width:1024px){
    .title{
      > h3 {
        line-height:2rem;
        padding: 2rem .5rem;
      }
    }
    .wrapper{
      flex-direction:column;
      flex-wrap: nowrap;
    }
  }
`
