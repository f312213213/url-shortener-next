import React from 'react'

import '../styles/globals.css'

import RootContext from '@/context/rootContext'

import Meta from '@/components/Meta'
import Backdrop from '@/components/Backdrop'
import Snackbar from '@/components/Snackbar'
import Page from '@/components/Page'
import Navbar from '@/components/Navbar'

function App ({ Component, pageProps }) {
  return (
      <RootContext>
        <Meta />
        <Backdrop />
        <Snackbar />
        <Navbar />
        <Page>
          <Component {...pageProps} />
        </Page>
      </RootContext>
  )
}

export default App
