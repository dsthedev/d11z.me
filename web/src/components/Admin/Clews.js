import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import moment from 'moment'
import ClewsTable from 'src/components/Admin/ClewsTable'

import downloadAsFile from 'src/util/DownloadAsFile'

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

/**
 * timeTag
 *
 * @param {*} datetime
 * @returns HTML
 *
 * @todo Format to Month / Year OR MM/YY or both
 */
const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {moment(datetime).format('MM/YY')}
      </time>
    )
  )
}

const ClewsList = ({ clews }) => {
  const columns = [
    {
      id: 'cFor',
      Header: 'For',
      Footer: '',
      accessor: 'for',
      Cell: ({ cell }) => {
        return (
          <a
            href={cell.row.original.loginURL}
            title={'Open ' + cell.row.original.for + ' in new tab'}
            target="_blank"
            className="inline p-1 bg-stone-100 hover:bg-stone-200"
            rel="noreferrer"
          >
            {cell.row.values.cFor} &rArr;
          </a>
        )
      },
    },
    {
      id: 'cEmail',
      Header: 'Email',
      Footer: '',
      accessor: 'email',
    },
    {
      id: 'cHint',
      Header: 'Hints',
      Footer: '',
      accessor: 'hint',
      Cell: ({ value }) => <em>{value}</em>,
    },
    {
      id: 'cSymbols',
      Header: 'Symbols',
      Footer: '',
      accessor: 'symbols',
    },
    {
      id: 'cId',
      Header: 'Show',
      Footer: '',
      accessor: 'id',
      Cell: ({ value }) => {
        return (
          <Link
            to={routes.editClew({ id: value })}
            title={'Edit Clew'}
            className="inline-block px-5 py-2 text-white bg-cyan-800 hover:bg-blue-900"
          >
            Edit
          </Link>
        )
      },
    },
  ]

  const exportToJson = (e) => {
    e.preventDefault()
    downloadAsFile({
      data: JSON.stringify(clews),
      fileName: 'clews.json',
      fileType: 'text/json',
    })
  }

  return (
    <>
      <section className="text-left">
        <ClewsTable columns={columns} data={clews} />
      </section>
      <section className="text-center">
        <button
          onClick={exportToJson}
          className="text-sm px-3 py-1 mx-auto my-4 bg-fuchsia-600 hover:bg-fuchsia-900 text-white"
        >
          Download as JSON
        </button>
      </section>
    </>
  )
}

export default ClewsList
