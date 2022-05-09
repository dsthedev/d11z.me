// Wow, almost entire react table code here generated using this amazing tool:
// https://akashmittal.com/gui-utility-to-generate-react-table-code/

import { Link, routes } from '@redwoodjs/router'
import { useTable, useSortBy, usePagination, useFilters } from 'react-table'

// Function for default filters
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length

  return (
    <input
      value={filterValue || ''}
      onChange={(e) => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}
// Default filters function Ended

// Function for select filter
function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach((row) => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined)
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}
// Select filter function end

// Table function. It creates UI.
function Table({ columns, data }) {
  const filterTypes = React.useMemo(
    () => ({
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
    },
    useFilters,

    useSortBy,
    usePagination
  )

  // Render the UI for your table
  return (
    <>
      <div className="table-wrapper">
        <table
          {...getTableProps()}
          border={1}
          style={{
            borderCollapse: 'collapse',
            width: '100%',
            margin: 'auto',
          }}
          className="table condensed"
        >
          <thead>
            {headerGroups.map((group) => (
              <tr key={group.id} {...group.getHeaderGroupProps()}>
                {group.headers.map((column) => {
                  return column.hideHeader !== false ? null : (
                    <th {...column.getHeaderProps()}>
                      <div {...column.getSortByToggleProps()}>
                        {column.render('Header')}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? ' 🔽'
                              : ' 🔼'
                            : column.canSort
                            ? '⏺'
                            : ''}
                        </span>
                      </div>
                      <div>
                        {column.canFilter ? column.render('Filter') : null}
                      </div>
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[5, 10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}
// Table function component end

// App component start
function PriceSheet({ prices }) {
  const displayAsMoney = (value, curVal) => {
    return (value / 100).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  }
  // Columns array. This array contains your table headings and accessors which maps keys from data array
  const columns = React.useMemo(
    () => [
      {
        id: 'costHead',
        Header: 'Cost',
        hideHeader: false,
        Footer: '',
        accessor: 'value',
        Cell: ({ value }) => displayAsMoney(value),
      },
      {
        id: 'unitHead',
        Header: 'Unit',
        hideHeader: false,
        Footer: '',
        accessor: 'unit',
        filter: 'includes',
      },
      {
        id: 'typeHead',
        Header: 'Type',
        hideHeader: false,
        Footer: '',
        accessor: 'type',
        filter: 'includes',
      },
      {
        id: 'materialHead',
        Header: 'Material',
        hideHeader: false,
        Footer: '',
        accessor: 'material',
        filter: 'includes',
      },
      {
        id: 'modifiersHead',
        Header: 'Modifiers',
        hideHeader: false,
        Footer: '',
        accessor: 'modifiers',
      },
      // {
      //   id: 'editBtn',
      //   Header: ' ',
      //   hideHeader: true,
      //   Footer: '',
      //   accessor: 'id',
      //   Cell: ({ value }) => (
      //     <>
      //       <Link
      //         to={routes.editRate({ id: value })}
      //         title={'Edit ' + value}
      //         className="button small"
      //       >
      //         Edit
      //       </Link>
      //     </>
      //   ),
      // },
    ],
    []
  )

  // Data array. Replace it with your actual data.
  // const data = React.useMemo(() => prices)
  const data = React.useMemo(() => [
    {
      value: 150,
      currency: 'USD',
      type: 'Install',
      material: 'All Lock',
      modifiers: '',
      unit: 'Square Feet',
      description: '',
    },
    {
      value: 800,
      currency: 'USD',
      type: 'Install',
      material: 'Carpet',
      modifiers: '',
      unit: 'Square Yard',
      description: '',
    },
    {
      value: 900,
      currency: 'USD',
      type: 'Install',
      material: 'Carpet',
      modifiers: 'Pattern',
      unit: 'Square Yard',
      description: '',
    },
    {
      value: 950,
      currency: 'USD',
      type: 'Install',
      material: 'Carpet',
      modifiers: 'Softback, Pattern',
      unit: 'Square Yard',
      description: '',
    },
    {
      value: 850,
      currency: 'USD',
      type: 'Install',
      material: 'Carpet',
      modifiers: 'Softback',
      unit: 'Square Yard',
      description: '',
    },
    {
      value: 10000,
      currency: 'USD',
      type: 'Install',
      material: 'Carpet',
      modifiers: 'Stairs',
      unit: 'Flight',
      description: '',
    },
    {
      value: 650,
      currency: 'USD',
      type: 'Install',
      material: 'Carpet',
      modifiers: 'Tiles',
      unit: 'Square Yard',
      description: '',
    },
    {
      value: 1400,
      currency: 'USD',
      type: 'Install',
      material: 'Ceramic',
      modifiers: 'Backsplash',
      unit: 'Square Feet',
      description: '',
    },
    {
      value: 150,
      currency: 'USD',
      type: 'Install',
      material: 'LVT/P',
      modifiers: '',
      unit: 'Square Feet',
      description: '',
    },
    {
      value: 2000,
      currency: 'USD',
      type: 'Reset',
      material: 'Appliance',
      modifiers: '',
      unit: 'Item',
      description: '',
    },
    {
      value: 10000,
      currency: 'USD',
      type: 'Consult',
      material: 'Service Call',
      modifiers: '',
      unit: 'Trip',
      description: '',
    },
    {
      value: 5000,
      currency: 'USD',
      type: 'Prepare',
      material: 'Subfloor',
      modifiers: 'Feather Finish',
      unit: 'Item',
      description: '',
    },
    {
      value: 150,
      currency: 'USD',
      type: 'Remove',
      material: 'Carpet',
      modifiers: '',
      unit: 'Square Yard',
      description: '',
    },
    {
      value: 250,
      currency: 'USD',
      type: 'Remove',
      material: 'Vinyl',
      modifiers: '',
      unit: 'Square Yard',
      description: '',
    },
    {
      value: 300,
      currency: 'USD',
      type: 'Remove',
      material: 'Tile',
      modifiers: '',
      unit: 'Square Feet',
      description: '',
    },
    {
      value: 1000,
      currency: 'USD',
      type: 'Install',
      material: 'Transition',
      modifiers: '',
      unit: 'Item',
      description: '',
    },
    {
      value: 5000,
      currency: 'USD',
      type: 'Drive',
      material: 'Time',
      modifiers: '',
      unit: 'Trip',
      description: 'Any location further than 35 mile radius from store.',
    },
    {
      value: 2000,
      currency: 'USD',
      type: 'Install',
      material: 'Underlayment',
      modifiers: '',
      unit: 'Sheet',
      description: '',
    },
    {
      value: 3000,
      currency: 'USD',
      type: 'Install',
      material: 'Underlayment',
      modifiers: '3/8',
      unit: 'Sheet',
      description: '',
    },
    {
      value: 100,
      currency: 'USD',
      type: 'Install',
      material: 'Cove Base',
      modifiers: '',
      unit: 'Linear Feet',
      description: '',
    },
    {
      value: 100,
      currency: 'USD',
      type: 'Remove',
      material: 'Cove Base',
      modifiers: '',
      unit: 'Linear Feet',
      description: '',
    },
    {
      value: 1000,
      currency: 'USD',
      type: 'Install',
      material: 'Vinyl',
      modifiers: 'Sheet Goods',
      unit: 'Square Yard',
      description: '',
    },
    {
      value: 300,
      currency: 'USD',
      type: 'Install',
      material: 'Trim Base',
      modifiers: '',
      unit: 'Linear Feet',
      description: '',
    },
    {
      value: 100,
      currency: 'USD',
      type: 'Remove',
      material: 'Trim Base',
      modifiers: '',
      unit: 'Linear Feet',
      description: '',
    },
    {
      value: 100,
      currency: 'USD',
      type: 'Install',
      material: 'Shoe Base',
      modifiers: '',
      unit: 'Linear Feet',
      description: '',
    },
    {
      value: 100,
      currency: 'USD',
      type: 'Remove',
      material: 'Shoe Base',
      modifiers: '',
      unit: 'Linear Feet',
      description: '',
    },
    {
      value: 1000,
      currency: 'USD',
      type: 'Install',
      material: 'Corner Trim',
      modifiers: '',
      unit: 'Item',
      description: '',
    },
    {
      value: 200,
      currency: 'USD',
      type: 'Reset',
      material: 'Trim Base',
      modifiers: '',
      unit: 'Linear Feet',
      description: '',
    },
    {
      value: 15000,
      currency: 'USD',
      type: 'Restretch',
      material: 'Carpet',
      modifiers: '',
      unit: 'Area',
      description: '',
    },
    {
      value: 5000,
      currency: 'USD',
      type: 'Reset',
      material: 'Furniture',
      modifiers: '',
      unit: 'Area',
      description: '',
    },
    {
      value: 400,
      currency: 'USD',
      type: 'Install',
      material: 'Ceramic',
      modifiers: '',
      unit: 'Square Feet',
      description: '',
    },
    {
      value: 10000,
      currency: 'USD',
      type: 'Inlay',
      material: 'LVT/P',
      modifiers: '',
      unit: 'Area',
      description: '',
    },
    {
      value: 25000,
      currency: 'USD',
      type: 'Inlay',
      material: 'LVT/P',
      modifiers: 'Large',
      unit: 'Area',
      description: '',
    },
  ])

  return <Table columns={columns} data={data} />
}
// App component end

export default PriceSheet
