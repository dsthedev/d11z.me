import { render } from '@redwoodjs/testing/web'

import PriceSheet from './PriceSheet'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PriceSheet', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PriceSheet />)
    }).not.toThrow()
  })
})
