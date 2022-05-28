import { Link, routes } from '@redwoodjs/router'
import moment from 'moment'
import ClewsTable from 'src/components/Admin/ClewsTable'

import downloadAsFile from 'src/util/DownloadAsFile'

import '@fortawesome/fontawesome-free/js/all.js'

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
        if (cell.row.original.loginURL.length > 1) {
          return (
            <a
              href={cell.row.original.loginURL}
              title={'Open ' + cell.row.original.for + ' in new tab'}
              target="_blank"
              className="inline p-1 bg-emerald-50 hover:bg-emerald-100"
              rel="noreferrer"
            >
              {cell.row.values.cFor} &#8663;
              {cell.row.values.cFor.length > 1}
            </a>
          )
        } else {
          return (
            <span className="inline px-2 py-1 bg-rose-50 hover:bg-rose-100">
              {cell.row.values.cFor} &#10007;
            </span>
          )
        }
      },
    },
    {
      id: 'cEmail',
      Header: 'As',
      Footer: '',
      accessor: 'email',
      Cell: ({ cell }) => {
        return (
          <>
            <strong>
              {cell.row.original.username ? cell.row.original.username : '...'}
            </strong>
            <br />
            <em className="text-xs">{cell.row.original.email}</em>
          </>
        )
      },
    },
    {
      id: 'cHint',
      Header: 'Hint',
      Footer: '',
      accessor: 'hint',
      Cell: ({ value }) => <em>{value}</em>,
    },
    {
      id: 'cSymbols',
      Header: ' ',
      Footer: '',
      accessor: 'symbols',
    },
    {
      id: 'cId',
      Header: 'Edit',
      Footer: '',
      accessor: 'id',
      Cell: ({ value }) => {
        return (
          <Link
            to={routes.editClew({ id: value })}
            title={'Edit Clew'}
            className="inline-block px-5 py-2 text-white bg-cyan-800 hover:bg-blue-900"
          >
            <i className="fa fa-pencil"></i>
            <span className="visually-hidden">Edit</span>
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
