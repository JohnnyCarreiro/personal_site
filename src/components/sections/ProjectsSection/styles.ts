import styled from 'styled-components'

export const Container = styled.div`
    background: ${({theme})=>theme.color.gray_800};
    padding: 4rem 0;

    .projects{
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      margin:0 auto;
      max-width:1140px;
      margin-bottom:3rem;
      h1{
        margin-bottom:1rem;
      }
    }

    @media screen and (max-width:1024px) {
      .projects{
        margin:3rem 2rem;
      }
    }
`
