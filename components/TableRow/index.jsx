import React from 'react'

const TableRow = ({ clicks, created, customName, hashID, originalURL }) => {
  return (
      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
          {created}
        </td>
        <td className="py-4 w-2 px-6 text-sm font-medium text-gray-500  dark:text-white text-center max-w-10 overflow-hidden whitespace-nowrap text-ellipsis">
          <a href={originalURL} target={'_blank'} className="text-blue-600 dark:text-blue-500 hover:underline " rel="noreferrer">
            {originalURL}
          </a>
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
          {hashID || '-'}
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
          {customName || '-'}
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
          {clicks}
        </td>
      </tr>
  )
}

export default TableRow
