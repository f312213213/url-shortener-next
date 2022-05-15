import React from 'react'
import Head from 'next/head'

const Meta = ({ title = '首頁 | 縮網址', description = '一起把網址變短！' }) => {
  return (
      <Head>
        <title>{title}</title>
        <meta name={'description'} content={description}/>
        <meta name={'version'} content={'0.9.13'}/>
      </Head>
  )
}

export default Meta
