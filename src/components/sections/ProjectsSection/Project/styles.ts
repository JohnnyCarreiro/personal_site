import styled from 'styled-components'
interface DisplayProps {
  direction: string
}
const position = {
  Right: 2,
  Left: 1,
}
export const Container = styled.div<DisplayProps>`
  .container{
    display:flex;
    align-items:flex-start;
    margin:2rem auto;
    max-width:1140px;
      .imageContainer{
        order:${(props) =>  props.direction === 'Right' ? position['Right'] : position['Left']};
        flex:1;
        width:100%;
        height:100%;
        img{
          grid-area:image1;
        }
      }
      .mainContent{
        order:${(props) => props.direction === 'Right' ? 1 : 2 };
        flex:2;
        color: ${({theme})=>theme.color.gray_200};
        padding-right: 2rem;

        > p {
          margin-bottom:2rem;
        }

        div{
          & + div{
            margin-top: 2rem;
          }
        }
      }
    }

    @media screen and (max-width:1024px) {
      .container{
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        margin:0 2rem;
        & + div{
          margin-top: 4rem;
        }
        .imageContainer{
          order:1;
          margin-bottom: 2rem;
        }
        .mainContent{
          color: ${({theme})=>theme.color.gray_200};
          display:flex;
          flex-direction:column;
          align-items:center;
          text-align:start;
        }
      }
    }
`
