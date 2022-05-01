import React from 'react'

import '../styles/globals.css'

import RootContext from '@/context/rootContext'

import Meta from '@/components/Meta'
import Backdrop from '@/components/Backdrop'
import Snackbar from '@/components/Snackbar'
import Page from '@/components/Page'
import Navbar from '@/components/Navbar'

function App ({ Component, pageProps }) {
  React.useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])
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
