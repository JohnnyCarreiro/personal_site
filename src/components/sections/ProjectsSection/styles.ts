import styled from 'styled-components';

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
  .container1{
    display:flex;
    align-items:flex-start;
    margin:2rem auto;
    max-width:1140px;
      .imageContainer1{
        order:2;
        flex:1;
        width:100%;
        height:100%;
        padding-right: 2rem;
        img{
          grid-area:image1;
        }
      }
      .mainContent1{
        order:1;
        flex:2;
        color: ${({theme})=>theme.color.gray_200};

        div{
          & + div{
            margin-top: 2rem;
          }
        }
      }
    }
  //container2
  .container2{
    display:flex;
    align-items:flex-start;
    margin:2rem auto;
    max-width:1140px;
      .imageContainer2{
        order:1;
        flex:1;
        width:100%;
        height:100%;
        padding-right: 2rem;
        img{
          grid-area:image1;
        }
      }
      .mainContent2{
        order:2;
        flex:2;
        color: ${({theme})=>theme.color.gray_200};

        div{
          & + div{
            margin-top: 2rem;
          }
        }
      }
    }
  //container3
  .container3{
    display:flex;
    align-items:flex-start;
    margin:2rem auto;
    max-width:1140px;
      .imageContainer3{
        order:2;
        flex:1;
        width:100%;
        height:100%;
        padding-right: 2rem;
        img{
          grid-area:image1;
        }
      }
      .mainContent3{
        order:1;
        flex:2;
        color: ${({theme})=>theme.color.gray_200};

        div{
          & + div{
            margin-top: 2rem;
          }
        }
      }
  }
  //container4
  .container4{
    display:flex;
    align-items:flex-start;
    margin:2rem auto;
    max-width:1140px;
      .imageContainer4{
        order:1;
        flex:1;
        width:100%;
        height:100%;
        padding-right: 2rem;
        img{
          grid-area:image1;
        }
      }
      .mainContent4{
        order:2;
        flex:2;
        color: ${({theme})=>theme.color.gray_200};

        div{
          & + div{
            margin-top: 2rem;
          }
        }
      }
    }

  @media screen and (max-width:1024px){
    .projects{
      margin:3rem 2rem;
    }
    .container1{
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      margin:0 2rem;

      & + div{
        margin-top: 4rem;
      }
      .imageContainer1{
        order:1;
        margin-bottom: 2rem;
      }
      .mainContent1{
        color: ${({theme})=>theme.color.gray_200};
        display:flex;
        flex-direction:column;
        align-items:center;
        text-align:start;
      }
    }
    //container 2
    .container2{
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      margin:0 2rem;

      & + div{
        margin-top: 4rem;
      }
      .imageContainer2{
        order:1;
        margin-bottom: 2rem;
      }
      .mainContent2{
        color: ${({theme})=>theme.color.gray_200};
        display:flex;
        flex-direction:column;
        align-items:center;
        text-align:start;
      }
    }
    //container 3
    .container3{
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      margin:0 2rem;

      & + div{
        margin-top: 4rem;
      }
      .imageContainer3{
        order:1;
        margin-bottom: 2rem;
      }
      .mainContent3{
        color: ${({theme})=>theme.color.gray_200};
        display:flex;
        flex-direction:column;
        align-items:center;
        text-align:start;
      }
    }
    //container 4
    .container4{
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      margin:0 2rem;

      & + div{
        margin-top: 4rem;
      }
      .imageContainer4{
        order:1;
        margin-bottom: 2rem;
      }
      .mainContent4{
        color: ${({theme})=>theme.color.gray_200};
        display:flex;
        flex-direction:column;
        align-items:center;
        text-align:start;
      }
    }
  }
`
