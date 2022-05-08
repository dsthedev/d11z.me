import { render } from '@redwoodjs/testing/web'

import Chapter1Page from './Chapter1Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('Chapter1Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Chapter1Page />)
    }).not.toThrow()
  })
})
