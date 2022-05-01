import React from 'react'
import Link from 'next/link'

import { AuthContext } from '@/context/useAuth'

const Navbar = () => {
  const { authStatus, logout, login } = React.useContext(AuthContext)
  return (
      <nav className={'w-full p-4 flex justify-around bg-black text-white fixed'}>
        <Link href={'/'}>
          好用的縮網址
        </Link>
        {
          authStatus.uid
            ? <>
                <Link href={'/user/short'}>
                  <a>
                    縮網址
                  </a>
                </Link>
                <Link href={`/user/manage/${authStatus.uid}`}>
                  <a>
                    管理網址
                  </a>
                </Link>
                <button onClick={logout}>
                  登出
                </button>
              </>
            : <button onClick={login}>
                登入
              </button>
        }

      </nav>
  )
}

export default Navbar
