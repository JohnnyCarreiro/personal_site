import React from 'react'
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'
// import icon from '../assets/images/logo/favicon.ico'
import { ServerStyleSheet } from 'styled-components'


export default class MyDocument extends Document {
  static async getInitialProps(ctx:DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render():JSX.Element{
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap" rel="stylesheet"/>
          <link rel="Fav Icon" href="/favicon.png" type="image/png" />
        </Head>
          <body>
            <Main />
            <NextScript />
          </body>
      </Html>
    )
  }
}