import { render } from '@redwoodjs/testing/web'

import FutureImperfectHomeLayout from './FutureImperfectHomeLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FutureImperfectHomeLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FutureImperfectHomeLayout />)
    }).not.toThrow()
  })
})
