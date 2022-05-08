import { render } from '@redwoodjs/testing/web'

import Chapter2Page from './Chapter2Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('Chapter2Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Chapter2Page />)
    }).not.toThrow()
  })
})
