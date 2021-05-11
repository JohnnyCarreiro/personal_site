import styled from 'styled-components'
import { a } from '@react-spring/web'

export const Container = styled(a.div)`
  border-radius:.5rem;
  background:${({theme})=>theme.color.gray_700};
  flex:0 0 33.3333%;
  margin:20px 20px;

  padding:4rem 0;

  max-width:340px;
  width:100%;
  height:auto;

  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  .imageContainer{
    height:9rem;
    width:9rem;

    margin-bottom:2rem;
  }
  .mainContent{
    color: ${({theme})=>theme.color.gray_200};

    div{
      & + div{
        margin-top: 2rem;
      }
    }
  }
  @media screen and (max-width:1024px) {
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:0 auto;
    width:250px;

    .imageContainer {
      height:8rem;
      width:8rem;
    }

    & + div{
      margin-top: 2rem;
    }
  }
`
