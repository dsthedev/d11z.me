import {
  useTable,
  usePagination,
  useGlobalFilter,
  useAsyncDebounce,
} from 'react-table'
import 'regenerator-runtime'

// Function for global search
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined)
  }, 150)

  return (
    <div className="mx-auto my-2 w-full max-w-prose">
      <span className="visually-hidden">Search: </span>
      <input
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
        className="p-2 mb-2 border-2 border-slate-300 hover:border-slate-500 w-full rounded"
        placeholder={`Search for a Clew ... (${count})`}
      />
    </div>
  )
}
// Global search function ended

// Table function. It creates UI.
const ClewsTable = ({ columns, data }) => {
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
    state: { pageIndex, pageSize, globalFilter },
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  )

  // Render the UI for your table
  return (
    <>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />

      <div className="pagination flex flex-row w-full justify-center">
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span className="visually-hidden">
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            className="p-2 mb-2 border-2 border-slate-300 hover:border-slate-500 w-20"
          />
        </span>
        <br />
        <select
          className="visually-hidden"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 50, 100, 999].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>

      <div className="my-2 flex flex-row w-full justify-evenly">
        <button
          className="px-4 py-1 bg-slate-300 hover:bg-slate-400 rounded-l"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          <i className="fa fa-arrow-alt-circle-left transition-all hover:scale-110"></i>
        </button>{' '}
        <button
          className="px-4 py-1 bg-slate-300 hover:bg-slate-400 rounded-l"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <i className="fa fa-arrow-left transition-all hover:scale-110"></i>
        </button>{' '}
        <button
          className="px-4 py-1 bg-slate-300 hover:bg-slate-400 rounded-l"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          <i className="fa fa-arrow-right transition-all hover:scale-110"></i>
        </button>{' '}
        <button
          className="px-4 py-1 bg-slate-300 hover:bg-slate-400 rounded-l"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          <i className="fa fa-arrow-alt-circle-right transition-all hover:scale-110"></i>
        </button>
      </div>

      <table
        {...getTableProps()}
        border={1}
        style={{
          borderCollapse: 'collapse',
          width: '100%',
          margin: 'auto',
        }}
      >
        <thead>
          {headerGroups.map((group) => (
            <tr {...group.getHeaderGroupProps()}>
              {group.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr
                {...row.getRowProps()}
                className="border-t-2 border-t-slate-300"
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="py-2">
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
// Table function component end
export default ClewsTable
