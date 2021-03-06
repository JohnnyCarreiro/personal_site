import styled from 'styled-components';

export const Container = styled.div`
  background:${({theme})=>theme.color.gray_200};
  min-height:300px;
  height:100%;

  .container{
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    padding: 3rem 0;
  }
  .logo{
    color:${({theme})=>theme.color.gray_800};
    strong{
      font-size:2rem;
    }
    small{
      font-size:2rem;
    }
  }
  .contact{
    padding: 3rem 0;
    color:${({theme})=>theme.color.gray_800};

    p{
      font-size:1.75rem;
    }
  }
  .nav{
    display:flex;
    .nav-link {
      color: ${({theme})=> theme.color.gray_800};
    }

    div > ul{
      display: flex;
      align-items: center;
      justify-content:center;

      li{
        & + li{
          padding-left:2rem;
        }
      }
    }
  }
`;
