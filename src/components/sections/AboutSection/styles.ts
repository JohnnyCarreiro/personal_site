import styled from 'styled-components';

export const Container = styled.div`
    background: ${({theme})=>theme.color.gray_500};
    padding: 4rem 0;

  .container{
    display:flex;
    align-items:flex-start;
    margin:0 auto;
    max-width:1140px;
    }
    .imageContainer{
      flex:1;
      height:100%;
      width:100%;
      padding-right: 2rem;
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
      .container{
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        margin:0 2rem;
        max-width:1140px;

        & + div{
          margin-top: 2rem;
        }
        .imageContainer{
          margin-bottom: 2rem;
        }
      }
    }
`;
