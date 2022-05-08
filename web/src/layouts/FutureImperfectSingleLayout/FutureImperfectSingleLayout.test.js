import { render } from '@redwoodjs/testing/web'

import FutureImperfectSingleLayout from './FutureImperfectSingleLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FutureImperfectSingleLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FutureImperfectSingleLayout />)
    }).not.toThrow()
  })
})
