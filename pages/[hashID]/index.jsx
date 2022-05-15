import React from 'react'

import Meta from '@/components/Meta'
import { SnackbarContext } from '@/context/useSnackbar'

const FindShorten = ({ urlData }) => {
  const { openSnackbar } = React.useContext(SnackbarContext)

  const redirect = () => {
    openSnackbar('success', '即將前往！')
    setTimeout(() => {
      window.location.href = urlData.originURL
    }, 1000)
  }

  React.useEffect(() => {
    if (urlData.originURL) return redirect()
    openSnackbar('error', '沒有這個紀錄！')
    setTimeout(() => {
      window.location.href = '/'
    }, 1000)
  }, [])

  return (
      <>
        <Meta title={urlData.meta?.title ?? '沒有這個紀錄或標題不存在'} description={urlData.meta?.description ?? '沒有這個紀錄或簡介不存在'} />
        <div className={'flex justify-center items-center flex-col bg-indigo-200 space-y-3 w-2/3 h-96'}>
          <h1 className={'text-4xl'}>縮網址！</h1>
        </div>
      </>
  )
}

export const getServerSideProps = async (context) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/${context.params.hashID}`)
  const urlData = await response.json()
  console.log(urlData)
  return {
    props: { urlData }
  }
}

export default FindShorten
