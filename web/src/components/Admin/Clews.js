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
        let content = ''

        if (cell.row.original.loginURL.length > 1) {
          content = (
            <a
              href={cell.row.original.loginURL}
              title={'Open ' + cell.row.original.for + ' in new tab'}
              target="_blank"
              className="inline px-3 py-2 md:text-lg font-bold bg-emerald-50 hover:bg-emerald-200"
              rel="noreferrer"
            >
              {cell.row.values.cFor} <small className="text-sm">&#8663;</small>
              {cell.row.values.cFor.length > 1}
            </a>
          )
        } else {
          content = (
            <span className="inline px-3 py-2 md:text-lg font-bold bg-rose-50 hover:bg-rose-200">
              {cell.row.values.cFor} <small className="text-sm">&#10007;</small>
            </span>
          )
        }
        return (
          <>
            <h5>{content}</h5>
          </>
        )
      },
    },
    {
      id: 'cEmail',
      Header: 'As',
      Footer: '',
      accessor: 'email',
      Cell: ({ cell }) => {
        return (
          <div className="bar-group">
            <strong className="barred">
              {cell.row.original.username ? cell.row.original.username : '...'}
            </strong>
            <br />
            <em className="text-xs barred">{cell.row.original.email}</em>
            <br />
            <span
              className={
                cell.row.original.hint.length < 10
                  ? 'text-sm barred px-2 py-0 bg-rose-50 text-rose-900'
                  : 'text-sm barred'
              }
            >
              {cell.row.original.hint}
            </span>
          </div>
        )
      },
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
            className="inline-block p-2 text-white bg-indigo-800 hover:bg-indigo-900"
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
