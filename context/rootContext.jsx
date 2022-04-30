import React from 'react'

import { SnackbarProvider } from '@/context/useSnackbar'
import { BackdropProvider } from '@/context/useBackdrop'

const RootContext = ({ children }) => {
  return (
      <SnackbarProvider>
        <BackdropProvider>
          {children}
        </BackdropProvider>
      </SnackbarProvider>
  )
}

export default RootContext
