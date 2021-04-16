import styled from 'styled-components'

export const Container = styled.div<{bgImage:string, height:string}>`
  color:${({theme})=>theme.color.gray_1000};
  background-image: linear-gradient(135deg, rgba(112, 41, 225, 0.6), rgba(247, 141, 30, 0.6)),url(${({bgImage})=>bgImage});
  background-size:cover;
  background-position:center;
  background-repeat: no-repeat;
  width:100%;
  max-width:100vw;
  height:100vh;
  padding-top: 3rem;
  .hero{
    background-image:linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3));
    padding-top:3rem;
    height:${({height})=>height || '100%'};
    padding:3rem 0;
    width:100%;
    .mainHero{
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      height:100%;
      text-align:center;
      h1{
        text-transform:uppercase;
      }
      hr{
        width: 150px;
        border-width: 3px;
        border-color: ${({theme})=>theme.color.secondary};
        border-top: 0;
        box-sizing: content-box;
        unicode-bidi: isolate;
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
        margin-inline-start: auto;
        margin-inline-end: auto;
        margin-bottom:1rem;
        margin-top:1rem;
      }
    }
  }
  @media screen and (min-width:1024px){
    .mainHero{
      display:flex;
      align-items:center;
      justify-content:center;
      max-width:64rem;
      margin:0 auto;
    }
  }
  @media screen and (max-width:1024px){
    .mainHero{
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      margin:0 1rem;

      h1{
        font:900 2rem/3.25rem Roboto, sans-serif;
      }
      h2{
        font:700 1.5rem/2.25rem Roboto, sans-serif
      }
    }
  }
`
