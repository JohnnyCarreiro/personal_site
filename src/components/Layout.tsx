import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import { Footer } from './Footer'

type Props = {
  children?: ReactNode
  title?: string
}

export const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar/>
    <main>
      {children}
    </main>
    <Footer/>
  </>
)


