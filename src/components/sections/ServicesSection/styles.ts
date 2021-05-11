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
    > h4 {
      padding-top:1rem;
      line-height:1.5rem;
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
      > h4 {
        line-height:2rem;
        padding: 1rem .5rem 2rem;
      }
    }
    .wrapper{
      flex-direction:column;
      flex-wrap: nowrap;
    }
  }
`
