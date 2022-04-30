import React from 'react'
import { useRouter } from 'next/router'

import Meta from '@/components/Meta'

const FindShorten = ({ urlData }) => {
  React.useEffect(() => {
    window.location.href = urlData.originURL ?? '/'
  }, [])

  return (
      <>
        <Meta title={urlData.meta?.title ?? '沒有這個紀錄'} description={urlData.meta?.description ? urlData.meta?.description : '沒有這個紀錄'} />
        <div className={'flex justify-center items-center flex-col bg-indigo-200 space-y-3 w-2/3 h-4/6'}>
          <h1 className={'text-4xl'}>縮網址！</h1>
        </div>
      </>
  )
}

export const getServerSideProps = async (context) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/${context.params.hashID}`)
  const urlData = await response.json()
  return {
    props: { urlData }
  }
}

export default FindShorten
