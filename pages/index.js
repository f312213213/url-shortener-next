import React from 'react'

import { SnackbarContext } from '@/context/useSnackbar'

const Home = () => {
  const { openSnackbar } = React.useContext(SnackbarContext)
  const urlRef = React.useRef()
  const customNameRef = React.useRef()

  const sendData = () => {
    if (customNameRef.current.value.length > 0) {
      return {
        url: urlRef.current.value,
        customName: customNameRef.current.value
      }
    }
    return {
      url: urlRef.current.value
    }
  }

  const shortUrl = async (e) => {
    e.preventDefault()
    if (!urlRef.current.value) return openSnackbar('error', '不要鬧啦！')
    try {
      const url = new URL(urlRef.current.value)
    } catch (_) {
      return openSnackbar('error', '不是一個網址！')
    }
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/short`, {
        method: 'POST',
        body: JSON.stringify(sendData()),
        headers: {
          'user-agent': 'Mozilla/4.0 MDN Example',
          'content-type': 'application/json'
        }
      })
      const res = await response.json()
      urlRef.current.value = ''
      customNameRef.current.value = ''
      openSnackbar('success', '成功！以複製到剪貼簿！')
      await navigator.clipboard.writeText(document.URL + res.shorted)
    } catch (err) {
      openSnackbar('error', '請稍後再試看看！')
    }
  }

  return (
      <div className={'flex justify-center items-center flex-col bg-indigo-200 space-y-3 w-2/3 h-4/6'}>
        <h1 className={'text-4xl'}>縮網址！</h1>
        <form className={'flex justify-center items-center flex-col w-full space-y-3'}>
          <input type="text" className={'p-2 rounded-lg w-2/3'} placeholder={'輸入要縮的網址！'} required ref={urlRef}/>
          <input type="text" className={'p-2 rounded-lg w-2/3'} placeholder={'輸入客製化短網址！（選填）'} ref={customNameRef}/>
          <button className={'p-4 bg-amber-600 rounded'} type={'button'} onClick={shortUrl}>縮！</button>
        </form>
      </div>
  )
}

export default Home
