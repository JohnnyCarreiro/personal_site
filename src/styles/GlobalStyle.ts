import { createGlobalStyle } from 'styled-components'

import { ThemeType } from './theme'

interface Props {
    theme: ThemeType
}
const GlobalStyle = createGlobalStyle<Props>`
    *, *::after, *::before {
        box-sizing:border-box;
        margin: 0;
        outline:none;
        padding:0;
    }
    html{
        @media (max-width: 1080px){
          font-size:93.75%;
        }
        @media (max-width: 720px){
          font-size:87.5%;
        }
    }
    body{
        font-size: 1rem;
        font-family: 'Roboto', 'sans-serif';
        line-height:1.5;
        background: ${({theme})=> theme.color.gray_400};
        color: ${({theme})=>theme.color.gray_200};
        -webkit-font-smoothing:antialiased;
    }
    h1{
      font:${({theme})=> theme.texts.main_title};
    }
    h2{
      font:${({theme})=> theme.texts.title};
    }
    h3{
      font:${({theme})=> theme.texts.sub_title};
    }
    strong{

    }
    small{
      font:${({theme})=>theme.texts.small_text};
    }
    strong{
      font:${({theme})=>theme.texts.main_strong};
    }
    a{
        text-decoration: none;
        color:${({theme})=>theme.color.gray_600};
    }
    ul{
        list-style:none;
    }
    button{
      cursor:pointer;
    }
    [disabled]{
      opacity:0.6;
      cursor:not-allowed;
    }
`
export default GlobalStyle
