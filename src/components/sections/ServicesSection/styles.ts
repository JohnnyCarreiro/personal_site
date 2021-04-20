import styled from 'styled-components';

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

  .container{
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
    }
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
      .container{
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
    }
`;
