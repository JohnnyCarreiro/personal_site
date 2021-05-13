import styled from 'styled-components';

export const Container = styled.div`
  background: ${({theme})=>theme.color.gray_800};
  padding: 4rem 0;
  .meeting{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:0 auto;
    max-width:1140px;
    margin-bottom:3rem;
    h2{
      margin-bottom:1rem;
    }
  }
  .container{
    display:flex;
    align-items:flex-start;
    margin:0 auto;
    width:100%;
    max-width:1140px;
  }
    .contactContainer {
      flex:1;
      .contact {
        display: flex;
        align-items: center;
        & + div {
          margin-top: .5rem;
        }
        svg {
          font-size:1.5rem;
          margin-right: 1rem;
        }
      }
      .imageContainer{
        flex:1;
        height:100%;
        width:100%;
        padding-right: 2rem;

        img{
          width:100%;
        }
      }
    }
    .mainContent{
      flex:1;
      color: ${({theme})=>theme.color.gray_200};

      div{
        & + div{
          margin-top: 2rem;
        }
      }
    }
    @media screen and (max-width:1024px){
      .meeting{
        display:flex;
        flex-direction: column;
        margin: 0 2rem;
        margin-bottom: 2rem;
      }
      .container{
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:center;
        margin:0 auto;
        width:100%;

        & + div{
          margin-top: 2rem;
        }
        .contactContainer {
          padding: 0 2rem;
          .imageContainer{
            margin-bottom: 2rem;
          }
        }
        .mainContent {
          flex: 1;
          padding:2rem;
          align-items: center;
          width:100%;
        }
      }
    }
`;
