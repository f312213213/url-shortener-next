import React from 'react'

const Page = ({ children }) => {
  return (
      <div className={'w-full min-h-screen flex justify-center items-center pt-14 pb-14 dark:bg-gray-700'}>
        {children}
      </div>
  )
}

export default Page
