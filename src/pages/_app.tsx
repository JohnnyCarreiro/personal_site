import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyle from 'styles/GlobalStyle'

interface customAppProps extends AppProps {}

const customApp: React.FC<customAppProps> = ({ Component, pageProps }) => {
    return(
        <ThemeProvider theme={theme} >
            <Component { ...pageProps }/>
            <GlobalStyle />
        </ThemeProvider>
    )
}
export default customApp