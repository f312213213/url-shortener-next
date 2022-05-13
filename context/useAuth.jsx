import React from 'react'
import { useRouter } from 'next/router'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

import { SnackbarContext } from '@/context/useSnackbar'
import { BackdropContext } from '@/context/useBackdrop'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const { openSnackbar } = React.useContext(SnackbarContext)
  const { openBackdrop, closeBackdrop } = React.useContext(BackdropContext)
  const [authStatus, setAuthStatus] = React.useState({})
  const provider = new GoogleAuthProvider()
  const auth = getAuth()
  const router = useRouter()

  const login = () => {
    openBackdrop()
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const user = result.user
        fetch(`${process.env.NEXT_PUBLIC_URL}/create`, {
          method: 'POST',
          body: JSON.stringify({
            uid: user.uid,
            userName: user.displayName
          }),
          headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
          }
        })
          .then((response) => {
            setAuthStatus(user)
            closeBackdrop()
            openSnackbar('success', `Hi ${user.displayName}`)
            return router.push(`/user/manage/${user.uid}`)
          })
          .catch((e) => {
            openSnackbar('error', '故障啦！')
          })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.email
        const credential = GoogleAuthProvider.credentialFromError(error)
        openSnackbar('error', '故障啦！')
      })
  }

  const logout = () => {
    signOut(auth)
      .then(() => {
        setAuthStatus({})
        openSnackbar('success', '88')
        return router.push('/')
      })
      .catch((error) => {
        const errorCode = error.code
        openSnackbar('error', '故障啦！')
      })
  }
  return (
      <AuthContext.Provider value={{ authStatus, login, logout }}>
        { children }
      </AuthContext.Provider>
  )
}
