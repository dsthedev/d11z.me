import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import moment from 'moment'
import ClewsTable from 'src/components/Admin/ClewsTable'

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
      id: 'columnId_00.37521469417997544',
      Header: 'For',
      Footer: '',
      accessor: 'for',
    },
    {
      id: 'columnId_00.8619334584612908',
      Header: 'Hints',
      Footer: '',
      accessor: 'hint',
    },
    {
      id: 'columnId_00.31456457645738234',
      Header: 'Symbols',
      Footer: '',
      accessor: 'symbols',
    },
    {
      id: 'columnId_00.21166297516750898',
      Header: 'Show',
      Footer: '',
      accessor: 'id',
      Cell: ({ value }) => {
        return (
          <Link
            to={routes.editClew({ id: value })}
            title={'Edit Clew'}
            className="block px-3 py-2 text-white bg-blue-600 hover:bg-blue-800"
          >
            Edit
          </Link>
        )
      },
    },
  ]

  return (
    <div className="text-left">
      <ClewsTable columns={columns} data={clews} />
    </div>
  )
}

export default ClewsList
