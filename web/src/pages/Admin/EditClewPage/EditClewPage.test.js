import { render } from '@redwoodjs/testing/web'

import EditClewPage from './EditClewPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EditClewPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditClewPage />)
    }).not.toThrow()
  })
})
