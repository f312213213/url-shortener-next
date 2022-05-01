import React from 'react'

import Meta from '@/components/Meta'

const Home = () => {
  return (
      <>
        <Meta title={'首頁 | 好用的縮網址'} description={'快來用我！'} />
        <div className={'flex justify-center items-center flex-col bg-indigo-200 dark:bg-gray-600 space-y-3 w-2/3 h-96'}>
          <h1 className={'text-4xl'}>縮網址！</h1>
          <p className={'text-2xl'}>此服務在登入後即可使用！</p>
        </div>
      </>
  )
}

export default Home
