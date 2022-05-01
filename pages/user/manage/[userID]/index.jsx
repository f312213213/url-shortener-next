import React from 'react'
import { useRouter } from 'next/router'

import TableRow from '@/components/TableRow'
import { AuthContext } from '@/context/useAuth'
import { SnackbarContext } from '@/context/useSnackbar'
import Meta from '@/components/Meta'

const ManagePage = () => {
  const [urlDatas, setUrlDatas] = React.useState([])
  const { authStatus } = React.useContext(AuthContext)
  const { openSnackbar } = React.useContext(SnackbarContext)
  const router = useRouter()

  const getUrlDatas = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/record/${authStatus.uid}`)
      const urlData = await response.json()
      setUrlDatas(JSON.parse(urlData.urlData))
    } catch (e) {
      openSnackbar('error', '壞掉啦！')
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
        <div className="flex flex-col w-2/3 mt-4">
          <table className="divide-y divide-gray-200 table-fixed dark:divide-gray-700 w-full h-full rounded-xl overflow-hidden">
            <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-center">
                Created time
              </th>
              <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-center">
                original url
              </th>
              <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-center">
                hash id
              </th>
              <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-center">
                custom name
              </th>
              <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-center">
                clicked time
              </th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            {
              urlDatas.map((urlData, i) => (
                  <TableRow
                      key={i}
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
