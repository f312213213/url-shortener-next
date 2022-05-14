import React from 'react'
import { AiFillCopy } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { SnackbarContext } from '@/context/useSnackbar'

const TableRow = ({ clicks, created, customName, hashID, originalURL }) => {
  const { openSnackbar } = React.useContext(SnackbarContext)
  const router = useRouter()

  const copy = (path) => {
    navigator.clipboard.writeText(document.URL.replace(router.asPath, '') + '/' + path)
    return openSnackbar('success', '已複製！')
  }
  return (
      <tr className="table-row hover:bg-gray-300 dark:hover:bg-gray-600 transition">
        <td className="hidden md:table-cell py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
          {created}
        </td>
        <td className="table-cell py-4 w-2 px-6 text-sm font-medium text-gray-500  dark:text-white text-center max-w-10 overflow-hidden whitespace-nowrap text-ellipsis">
          <a href={originalURL} target={'_blank'} className="text-blue-600 dark:text-blue-500 hover:underline " rel="noreferrer">
            {originalURL}
          </a>
        </td>
        <td className="table-cell py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
          {hashID || '-'}
          {
            hashID &&
              <button onClick={() => copy(hashID)}>
                <AiFillCopy />
              </button>
          }
        </td>
        <td className="table-cell py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
          {customName || '-'}
          {
              customName &&
              <button onClick={() => copy(customName)}>
                <AiFillCopy />
              </button>
          }
        </td>
        <td className="hidden md:table-cell py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
          {clicks}
        </td>
      </tr>
  )
}

export default TableRow
