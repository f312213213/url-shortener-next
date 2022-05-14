import React from 'react'
import { useRouter } from 'next/router'

import TableRow from '@/components/TableRow'
import { AuthContext } from '@/context/useAuth'
import { SnackbarContext } from '@/context/useSnackbar'
import Meta from '@/components/Meta'
import { BackdropContext } from '@/context/useBackdrop'

const ManagePage = () => {
  const [urlDatas, setUrlDatas] = React.useState([])
  const { authStatus } = React.useContext(AuthContext)
  const { openBackdrop, closeBackdrop } = React.useContext(BackdropContext)
  const { openSnackbar } = React.useContext(SnackbarContext)
  const router = useRouter()

  const getUrlDatas = async () => {
    try {
      openBackdrop()
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/record/${authStatus.uid}`, {
        method: 'GET',
        headers: {
          uid: authStatus.uid
        }
      })
      const urlData = await response.json()
      setUrlDatas(JSON.parse(urlData.urlData))
      closeBackdrop()
    } catch (e) {
      openSnackbar('error', '壞掉啦！')
      closeBackdrop()
    }
  }
  React.useEffect(() => {
    if (authStatus.uid) {
      getUrlDatas()
    } else {
      router.push('/')
    }
  }, [])
  return (
      <>
        <Meta title={'檢視紀錄 | 好用的縮網址'} description={'快來用我！'} />
        <div className="flex flex-col md:w-11/12 w-full px-2 md:px-0 mt-4 shadow-md">
          <table className="table divide-y divide-gray-200 table-fixed dark:divide-gray-700 w-full h-full rounded-xl overflow-hidden">
            <thead className="bg-gray-200 dark:bg-gray-900 ">
            <tr className={'table-row'}>
              <th scope="col" className="hidden md:table-cell py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-center">
                Created time
              </th>
              <th scope="col" className="table-cell py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-center">
                original url
              </th>
              <th scope="col" className="table-cell py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-center">
                hash id
              </th>
              <th scope="col" className="table-cell py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-center">
                custom name
              </th>
              <th scope="col" className="hidden md:table-cell py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-center">
                clicked time
              </th>
            </tr>
            </thead>
            <tbody className="table-row-group bg-gray-100 divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            {
              urlDatas.map((urlData) => (
                  <TableRow
                      key={urlData.custom_name || urlData.hash_id}
                      clicks={urlData.clicks}
                      created={urlData.created}
                      customName={urlData.custom_name}
                      hashID={urlData.hash_id}
                      originalURL={urlData.original_url}
                  />))
            }
            </tbody>
          </table>
        </div>
      </>
  )
}

export default ManagePage
